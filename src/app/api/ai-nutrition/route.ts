
import {NextRequest, NextResponse} from 'next/server';
import { z } from 'zod';

const nutritionInputSchema = z.object({
  goal: z.string().min(3, 'Goal must be at least 3 characters'),
});

const mealSchema = z.object({
  name: z.string(),
  description: z.string(),
});

const nutritionOutputSchema = z.object({
    planName: z.string(),
    planDescription: z.string(),
    dailyPlan: z.object({
        breakfast: mealSchema,
        lunch: mealSchema,
        dinner: mealSchema,
        snack: mealSchema,
    }),
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validatedFields = nutritionInputSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({error: 'Invalid input'}, {status: 400});
  }

  const {goal} = validatedFields.data;

  const prompt = `
You are an expert AI nutritionist.

Create a clean, structured full-day meal plan for the goal: "${goal}"

IMPORTANT: Respond with ONLY a valid JSON object that matches this exact schema. Do not add any conversational text, markdown, or any other text outside of the JSON structure.

JSON FORMAT:
{
  "planName": "Full-Day Meal Plan for ${goal}",
  "planDescription": "A sample one-day meal plan designed to help with ${goal}, focusing on whole foods and balanced macronutrients.",
  "dailyPlan": {
    "breakfast": {
      "name": "Meal Name (e.g., Protein Oatmeal)",
      "description": "A short description of the meal with key ingredients."
    },
    "lunch": {
      "name": "Meal Name (e.g., Grilled Chicken Salad)",
      "description": "A short description of the meal with key ingredients."
    },
    "dinner": {
      "name": "Meal Name (e.g., Salmon with Quinoa)",
      "description": "A short description of the meal with key ingredients."
    },
    "snack": {
      "name": "Meal Name (e.g., Greek Yogurt with Berries)",
      "description": "A short description of the meal with key ingredients."
    }
  }
}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: prompt }],
        temperature: 0.7,
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Invalid response from AI:', errorData);
        throw new Error(errorData.error?.message || 'The AI failed to generate a response.');
    }
    
    const data = await response.json();
    const aiText = data.choices?.[0]?.message?.content;

    if (!aiText) {
        throw new Error("AI returned an empty response.");
    }
    
    const nutritionJson = JSON.parse(aiText);

    // Validate the output from the AI
    const parsedOutput = nutritionOutputSchema.safeParse(nutritionJson);
    if (!parsedOutput.success) {
      console.error('AI returned malformed JSON object:', parsedOutput.error);
      throw new Error('AI returned a plan with an invalid structure.');
    }

    return NextResponse.json({ plan: parsedOutput.data });

  } catch (error) {
    console.error('AI handler error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({error: errorMessage}, {status: 500});
  }
}
