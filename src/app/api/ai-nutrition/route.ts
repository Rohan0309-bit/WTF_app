
import {NextRequest, NextResponse} from 'next/server';
import { z } from 'zod';

const nutritionInputSchema = z.object({
  goal: z.string().min(3, 'Goal must be at least 3 characters'),
});

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


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedFields = nutritionInputSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json({error: 'Invalid input'}, {status: 400});
    }
    const {goal} = validatedFields.data;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: `My goal is: "${goal}"` },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
        console.error('Invalid response from AI:', data);
        throw new Error(data.error?.message || 'The AI failed to generate a response.');
    }
    
    const aiText = data.choices?.[0]?.message?.content;

    if (!aiText) {
        throw new Error("AI returned an empty response.");
    }
    
    let nutritionPlan;
    try {
      nutritionPlan = JSON.parse(aiText);
    } catch (error) {
      console.error("Failed to parse AI response as JSON:", aiText);
      return NextResponse.json({error: "AI returned invalid JSON", raw: aiText}, {status: 500});
    }

    return NextResponse.json({ plan: nutritionPlan });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('AI nutrition handler error:', error);
    return NextResponse.json({error: errorMessage}, {status: 500});
  }
}
