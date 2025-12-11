"use server";

/**
 * Nutrition Plan Generator (ChatGPT + Genkit)
 */

import { ai } from "@/ai/genkit";      // ✅ Correct AI import
import { z } from "zod";

// ------------------------------
// 🔹 Input Schema
// ------------------------------
const GenerateNutritionPlanInputSchema = z.object({
  goal: z.string().describe(
    "The nutrition goal (e.g., Cutting, Bulking, Lean Muscle, or sport-specific)."
  ),
});

export type GenerateNutritionPlanInput = z.infer<
  typeof GenerateNutritionPlanInputSchema
>;

// ------------------------------
// 🔹 Meal Schema
// ------------------------------
const MealSchema = z.object({
  name: z.string().describe("Meal name"),
  description: z.string().describe("Short description with ingredients."),
});

// ------------------------------
// 🔹 Output Schema
// ------------------------------
const GenerateNutritionPlanOutputSchema = z.object({
  breakfast: MealSchema,
  lunch: MealSchema,
  dinner: MealSchema,
  snacks: MealSchema,
});

export type GenerateNutritionPlanOutput = z.infer<
  typeof GenerateNutritionPlanOutputSchema
>;

// ------------------------------
// 🔹 Main Function
// ------------------------------
export async function generateNutritionPlan(
  input: GenerateNutritionPlanInput
): Promise<GenerateNutritionPlanOutput> {
  return generateNutritionPlanFlow(input);
}

// ------------------------------
// 🔹 Prompt (ChatGPT Model)
// ------------------------------
const prompt = ai.definePrompt({
  name: "generateNutritionPlanPrompt",
  input: { schema: GenerateNutritionPlanInputSchema },
  output: { schema: GenerateNutritionPlanOutputSchema },
  prompt: `
You are an expert AI nutritionist.

Create a clean, structured **full-day meal plan** for: {{{goal}}}

Rules:
- Provide breakfast, lunch, dinner, and snack options.
- Return ONLY JSON-compatible structured objects with:
  {
    "name": "...",
    "description": "..."
  }
- No emojis.
- No markdown headings.
- No extra paragraphs.

Generate the full-day plan now.
`,
});

// ------------------------------
// 🔹 Flow (ChatGPT executes here)
// ------------------------------
const generateNutritionPlanFlow = ai.defineFlow(
  {
    name: "generateNutritionPlanFlow",
    inputSchema: GenerateNutritionPlanInputSchema,
    outputSchema: GenerateNutritionPlanOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
