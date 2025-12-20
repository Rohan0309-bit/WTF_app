
"use server";

import { z } from 'zod';
import type { GenerateAiWorkoutInput, GenerateAiWorkoutOutput } from '@/app/api/ai-workout/route';

const formSchema = z.object({
  goal: z.string().optional(),
  gender: z.enum(['male', 'female']),
  level: z.string().min(1, 'Fitness level is required.'),
  location: z.enum(['home', 'gym']),
});

export type FormState = {
  message: string;
  workoutPlan?: GenerateAiWorkoutOutput;
  workoutInputs?: GenerateAiWorkoutInput;
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
    // Note: In a real app, you'd get the full URL from environment variables
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ai-workout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'The AI failed to generate a plan.');
    }

    const result = await response.json();

    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: result,
      workoutInputs: validatedFields.data,
      isSuccess: true,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `Failed to generate workout plan: ${errorMessage}`,
      isSuccess: false,
    };
  }
}
