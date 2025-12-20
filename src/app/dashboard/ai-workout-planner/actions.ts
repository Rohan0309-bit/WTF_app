
"use server";

import { z } from 'zod';
import { generateAthleteWorkout, GenerateAthleteWorkoutInput } from '@/ai/flows/generate-athlete-workout';

const formSchema = z.object({
  goal: z.string().optional(),
  gender: z.enum(['male', 'female']),
  level: z.string().min(1, 'Fitness level is required.'),
  location: z.enum(['home', 'gym']),
});

export type FormState = {
  message: string;
  workoutPlan?: string;
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
    const result = await generateAthleteWorkout({
        ...validatedFields.data,
        skillLevel: validatedFields.data.level,
        workoutPreference: validatedFields.data.location
    } as GenerateAthleteWorkoutInput);

    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: result.workoutPlan,
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
