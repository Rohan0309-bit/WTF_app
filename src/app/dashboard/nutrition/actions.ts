
'use server';

import { z } from 'zod';

const formSchema = z.object({
  goal: z.string().min(3, 'Please enter a valid goal.'),
});

export type NutritionPlanState = {
  plan?: any;
  error?: string;
  isSuccess: boolean;
};

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
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/ai-nutrition`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ goal: validatedFields.data.goal }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'The AI nutritionist failed to generate a plan.');
    }

    const result = await response.json();
    
    if (!result || !result.plan) {
      throw new Error("AI returned an empty or invalid nutrition plan.");
    }
    
    return {
      plan: result.plan,
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
