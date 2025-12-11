'use server';

import { z } from "zod";
import { generateWithAI } from "@/ai/genkit";

const GenerateAthleteWorkoutInputSchema = z.object({
  sport: z.string().optional(),
  gender: z.enum(['male', 'female']),
  skillLevel: z.string(),
  workoutPreference: z.enum(['home', 'gym']),
  workoutType: z.string().optional(),
});

export type GenerateAthleteWorkoutInput = z.infer<typeof GenerateAthleteWorkoutInputSchema>;

const GenerateAthleteWorkoutOutputSchema = z.object({
  workoutPlan: z.string(),
});

export type GenerateAthleteWorkoutOutput = z.infer<typeof GenerateAthleteWorkoutOutputSchema>;

export async function generateAthleteWorkout(
  input: GenerateAthleteWorkoutInput
): Promise<GenerateAthleteWorkoutOutput> {

  const validated = GenerateAthleteWorkoutInputSchema.parse(input);

  const prompt = `
You are an expert AI sports trainer. Create a structured, professional **7-day workout plan**.

${validated.workoutType ? `Workout Type Focus: ${validated.workoutType}` : `Workout Type Focus: Full Body`}
${validated.sport ? `Sport: ${validated.sport}` : ""}
Gender: ${validated.gender}
Skill Level: ${validated.skillLevel}
Workout Preference: ${validated.workoutPreference}

Rules:
- Every day must have a clear title.
- Each day must include **7 exercises**.
- Each exercise must include sets, reps, and rest time.
- Include **1 rest day only**.
- Format must be clean and easy to render.

Example Format:
Day 1: Full Body Strength
1. Squats — 3×10-12 (60s)
2. Push-ups — 3×15-20 (60s)
...

Now generate the full 7-day plan.
`;

  const result = await generateWithAI(prompt);

  return { workoutPlan: result };
}
