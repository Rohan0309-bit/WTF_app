"use server";

import { generateAthleteWorkout, GenerateAthleteWorkoutInput } from '@/ai/flows/generate-athlete-workout';
import { z } from 'zod';

const formSchema = z.object({
  sport: z.string().optional(),
  gender: z.enum(['male', 'female']),
  skillLevel: z.string().min(1, 'Skill level is required.'),
  workoutPreference: z.enum(['home', 'gym']),
  workoutType: z.string().optional(),
});

export type FormState = {
  message: string;
  workoutPlan?: string;
  workoutInputs?: GenerateAthleteWorkoutInput;
  issues?: string[];
  isSuccess: boolean;
};

export async function getWorkoutPlan(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    sport: formData.get('sport'),
    gender: formData.get('gender'),
    skillLevel: formData.get('skillLevel'),
    workoutPreference: formData.get('workoutPreference'),
    workoutType: formData.get('workoutType'),
  });

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission.',
      issues: validatedFields.error.flatten().fieldErrors.root,
      isSuccess: false,
    };
  }
  
  try {
    const result = await generateAthleteWorkout(validatedFields.data as GenerateAthleteWorkoutInput);
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
