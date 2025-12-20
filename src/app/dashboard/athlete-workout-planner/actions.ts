
"use server";

import { z } from 'zod';
import { DailyWorkout } from '@/lib/workout-parser';

const formSchema = z.object({
  sport: z.string().optional(),
  gender: z.enum(['male', 'female']),
  skillLevel: z.string().min(1, 'Skill level is required.'),
  workoutPreference: z.enum(['home', 'gym']),
  workoutType: z.string().optional(),
});

export type FormState = {
  message: string;
  workoutPlan?: DailyWorkout;
  workoutInputs?: any;
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/ai-workout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          goal: validatedFields.data.sport || validatedFields.data.workoutType || 'General Fitness',
          gender: validatedFields.data.gender,
          level: validatedFields.data.skillLevel,
          location: validatedFields.data.workoutPreference
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'The AI workout generator failed.');
    }

    const result = await response.json();
    
    if (!result || !result.exercises || result.exercises.length === 0) {
      throw new Error("AI returned an empty or invalid workout plan.");
    }
    
    const workout: DailyWorkout = {
        day: "Today",
        title: result.focus || "Generated Workout",
        exercises: result.exercises.map((ex: any) => ({
            name: ex.name,
            sets: String(ex.sets),
            reps: String(ex.reps),
            rest: `${ex.rest}s`
        }))
    };

    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: workout,
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

