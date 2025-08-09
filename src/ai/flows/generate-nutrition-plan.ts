'use server';

/**
 * @fileOverview AI-powered meal plan generator.
 *
 * - generateNutritionPlan - A function that generates a tailored full-day meal plan.
 * - GenerateNutritionPlanInput - The input type for the generateNutritionPlan function.
 * - GenerateNutritionPlanOutput - The return type for the generateNutritionPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateNutritionPlanInputSchema = z.object({
  goal: z.string().describe('The nutrition goal (e.g., Cutting, Bulking, Lean Muscle, or for a specific sport).'),
});

export type GenerateNutritionPlanInput = z.infer<typeof GenerateNutritionPlanInputSchema>;

const MealSchema = z.object({
    name: z.string().describe("The name of the meal (e.g., 'Scrambled Eggs with Spinach')."),
    description: z.string().describe("A short description of the meal including ingredients and preparation."),
});

const GenerateNutritionPlanOutputSchema = z.object({
  breakfast: MealSchema.describe("The breakfast meal."),
  lunch: MealSchema.describe("The lunch meal."),
  dinner: MealSchema.describe("The dinner meal."),
  snacks: MealSchema.describe("Snack options for the day."),
});

export type GenerateNutritionPlanOutput = z.infer<typeof GenerateNutritionPlanOutputSchema>;

export async function generateNutritionPlan(input: GenerateNutritionPlanInput): Promise<GenerateNutritionPlanOutput> {
  return generateNutritionPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateNutritionPlanPrompt',
  input: {schema: GenerateNutritionPlanInputSchema},
  output: {schema: GenerateNutritionPlanOutputSchema},
  prompt: `You are an expert AI nutritionist. Create a professional, full-day meal plan for the following goal: {{{goal}}}.

  Provide a healthy and balanced meal for breakfast, lunch, and dinner, plus some snack options. For each meal, provide a name and a short description with key ingredients.
  
  Example for one meal:
  {
    "name": "Grilled Chicken Salad",
    "description": "Grilled chicken breast over a bed of mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette."
  }
  
  Generate the full-day plan now.`,
});

const generateNutritionPlanFlow = ai.defineFlow(
  {
    name: 'generateNutritionPlanFlow',
    inputSchema: GenerateNutritionPlanInputSchema,
    outputSchema: GenerateNutritionPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
