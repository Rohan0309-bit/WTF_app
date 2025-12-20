
"use server";

import { z } from 'zod';
import { DailyWorkout } from '@/lib/workout-parser';

const formSchema = z.object({
  goal: z.string().optional(),
  gender: z.enum(['male', 'female']),
  level: z.string().min(1, 'Fitness level is required.'),
  location: z.enum(['home', 'gym']),
});

export type FormState = {
  message: string;
  workoutPlan?: DailyWorkout[];
  workoutInputs?: any;
  issues?: string[];
  isSuccess: boolean;
};

export async function getWorkoutPlan(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    goal: formData.get('goal'),
    gender: formData.get('gender'),
    level: formData.get('level'),
    location: formData.get('location'),
  });

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission.',
      issues: validatedFields.error.flatten().fieldErrors.root,
      isSuccess: false,
    };
  }
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/ai-workout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'The AI workout generator failed.');
    }

    const result = await response.json();
    
    if (!result || !result.workoutPlan || result.workoutPlan.length === 0) {
      throw new Error("AI returned an empty or invalid workout plan.");
    }
    
    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: result.workoutPlan,
      workoutInputs: validatedFields.data,
      isSuccess: true,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error("Error in getWorkoutPlan:", errorMessage);
    return {
      message: `Failed to generate workout plan: ${errorMessage}`,
      isSuccess: false,
    };
  }
}
