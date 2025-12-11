"use server";

/**
 * @fileOverview AI-powered meal plan generator using Genkit with Google AI.
 *
 * - generateNutritionPlan: Main function to generate a full-day nutrition plan.
 */

import { ai } from 'genkit';
import { z } from "zod";

// ------------------------------
// 🔹 Input Schema
// ------------------------------
const GenerateNutritionPlanInputSchema = z.object({
  goal: z
    .string()
    .describe(
      "The nutrition goal (e.g., Cutting, Bulking, Lean Muscle, or for a specific sport)."
    ),
});

export type GenerateNutritionPlanInput = z.infer<
  typeof GenerateNutritionPlanInputSchema
>;

// ------------------------------
// 🔹 Meal Schema
// ------------------------------
const MealSchema = z.object({
  name: z
    .string()
    .describe("The name of the meal (e.g., 'Scrambled Eggs with Spinach')."),
  description: z
    .string()
    .describe(
      "A short description of the meal including ingredients and preparation."
    ),
});

// ------------------------------
// 🔹 Output Schema
// ------------------------------
const GenerateNutritionPlanOutputSchema = z.object({
  breakfast: MealSchema.describe("The breakfast meal."),
  lunch: MealSchema.describe("The lunch meal."),
  dinner: MealSchema.describe("The dinner meal."),
  snacks: MealSchema.describe("Snack options for the day."),
});

export type GenerateNutritionPlanOutput = z.infer<
  typeof GenerateNutritionPlanOutputSchema
>;

// ------------------------------
// 🔹 Main Function (Public API)
// ------------------------------
export async function generateNutritionPlan(
  input: GenerateNutritionPlanInput
): Promise<GenerateNutritionPlanOutput> {
  return generateNutritionPlanFlow(input);
}

// ------------------------------
// 🔹 Prompt for the AI Model
// ------------------------------
const prompt = ai.definePrompt({
  name: "generateNutritionPlanPrompt",
  input: { schema: GenerateNutritionPlanInputSchema },
  output: { schema: GenerateNutritionPlanOutputSchema },
  prompt: `You are an expert AI nutritionist.

Create a professional, full-day meal plan for the following goal: **{{{goal}}}**.

Provide:
- A healthy breakfast  
- A balanced lunch  
- A nutritious dinner  
- Snack options  

Each meal must be returned as:
{
  "name": "...",
  "description": "..."
}

Generate the full-day plan now.`,
});

// ------------------------------
// 🔹 Genkit Flow (Google AI model)
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
