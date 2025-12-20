
"use server";

import { z } from 'zod';
import { parseWorkoutPlan, DailyWorkout, Exercise } from '@/lib/workout-parser';

const formSchema = z.object({
  goal: z.string().optional(),
  gender: z.enum(['male', 'female']),
  level: z.string().min(1, 'Fitness level is required.'),
  location: z.enum(['home', 'gym']),
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
    const functionUrl = "https://generateaiworkout-bc3s8-uc.a.run.app";

    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch from AI function.');
    }

    const result = await response.json();
    
    // The AI returns a JSON object with a workout plan. We need to parse it.
    // The AI's response is a single object, not a weekly plan.
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

    if (!workout || workout.exercises.length === 0) {
      throw new Error("AI returned an empty or invalid workout plan.");
    }

    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: workout,
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
