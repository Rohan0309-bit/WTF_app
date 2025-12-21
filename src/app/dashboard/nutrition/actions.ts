'use server';

import { z } from 'zod';
import { ai } from '@/ai/genkit';


const formSchema = z.object({
  goal: z.string().min(3, 'Please enter a valid goal.'),
});

export type NutritionPlanState = {
  plan?: any;
  error?: string;
  isSuccess: boolean;
};


const SYSTEM_PROMPT = `
You are an expert AI nutritionist.

Task:
- Create a clean, structured full-day meal plan based on the user's goal.
- The user can provide a goal like "cutting", "bulking", or "lean muscle gain".

Output Requirements:
- Respond with **ONLY** a valid JSON object. Do not add any conversational text, markdown, or any other text outside of the JSON structure.
- The JSON object must match this exact schema:
{
  "planName": "string",
  "planDescription": "string",
  "dailyPlan": {
    "breakfast": { "name": "string", "description": "string" },
    "lunch": { "name": "string", "description": "string" },
    "dinner": { "name": "string", "description": "string" },
    "snack": { "name": "string", "description": "string" }
  }
}

Example for the goal "cutting":
{
  "planName": "Full-Day Meal Plan for Cutting",
  "planDescription": "A sample one-day meal plan designed to help with fat loss, focusing on whole foods and balanced macronutrients.",
  "dailyPlan": {
    "breakfast": {
      "name": "Protein Oatmeal",
      "description": "Oatmeal with whey protein, berries, and a sprinkle of chia seeds."
    },
    "lunch": {
      "name": "Grilled Chicken Salad",
      "description": "Mixed greens with grilled chicken breast, vegetables, and a light vinaigrette."
    },
    "dinner": {
      "name": "Salmon with Quinoa & Asparagus",
      "description": "Baked salmon served with a side of quinoa and roasted asparagus."
    },
    "snack": {
      "name": "Greek Yogurt with Almonds",
      "description": "A serving of plain Greek yogurt topped with a handful of almonds."
    }
  }
}
`;


export async function getNutritionPlan(
  prevState: NutritionPlanState,
  formData: FormData
): Promise<NutritionPlanState> {
  const validatedFields = formSchema.safeParse({
    goal: formData.get('goal'),
  });

  if (!validatedFields.success) {
    return {
      error: 'There was an error with your submission.',
      isSuccess: false,
    };
  }

  if (!process.env.GEMINI_API_KEY) {
    return {
      error: 'The Gemini API key is not configured. Please add it to your environment variables.',
      isSuccess: false,
    };
  }
  
  try {
    const { goal } = validatedFields.data;

    const llmResponse = await ai.generate({
      prompt: `${SYSTEM_PROMPT}\nMy goal is: "${goal}"`,
      config: {
        temperature: 0.7,
      },
    });

    const text = llmResponse.text();
    
    if (!text) {
        throw new Error("AI returned an empty response.");
    }
    
    let nutritionPlan;
    try {
      const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
      nutritionPlan = JSON.parse(cleanedText);
    } catch (error) {
      console.error("Failed to parse AI response as JSON:", text);
      return {error: `AI returned invalid JSON. Raw response: ${text}`, isSuccess: false};
    }

    return {
      plan: nutritionPlan,
      isSuccess: true,
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error("Error in getNutritionPlan:", errorMessage);
    return {
      error: `Failed to generate plan: ${errorMessage}`,
      isSuccess: false,
    };
  }
}
