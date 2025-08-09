
"use server";

// This file is no longer used for the static nutrition plans, 
// but is kept in case AI generation is re-enabled in the future.

import { generateNutritionPlan, GenerateNutritionPlanOutput } from '@/ai/flows/generate-nutrition-plan';

export type NutritionPlanState = {
  plan?: GenerateNutritionPlanOutput;
  error?: string;
  goal?: string;
};

export async function getNutritionPlan(goal: string): Promise<NutritionPlanState> {
  try {
    const plan = await generateNutritionPlan({ goal });
    return { plan, goal };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { error: `Failed to generate plan for ${goal}: ${errorMessage}`, goal };
  }
}
