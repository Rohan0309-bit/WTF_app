'use server';

import { z } from "zod";
import { generateWithAI } from "@/ai/genkit";

const GenerateAthleteWorkoutInputSchema = z.object({
  sport: z.string().optional(),
  gender: z.enum(['male', 'female']),
  skillLevel: z.enum(["beginner", "intermediate", "advanced"]),
  workoutPreference: z.enum(['home', 'gym']),
  workoutType: z
    .enum(["strength", "cardio", "mobility", "speed", "endurance"])
    .optional(),
});

export type GenerateAthleteWorkoutInput = z.infer<
  typeof GenerateAthleteWorkoutInputSchema
>;

export type GenerateAthleteWorkoutOutput = {
  workoutPlan: string;
};

export async function generateAthleteWorkout(
  input: GenerateAthleteWorkoutInput
): Promise<GenerateAthleteWorkoutOutput> {

  const validated = GenerateAthleteWorkoutInputSchema.parse(input);

  const prompt = `
You are an expert AI sports trainer. Create a **strictly formatted** 7-day athlete workout plan.

${validated.workoutType ? `Workout Type Focus: ${validated.workoutType}` : `Workout Type Focus: Full Body`}
${validated.sport ? `Sport: ${validated.sport}` : ""}
Gender: ${validated.gender}
Skill Level: ${validated.skillLevel}
Workout Preference: ${validated.workoutPreference}

===== OUTPUT RULES =====
1. Each day must follow this format:
Day 1: Title
1. Exercise — Sets×Reps (Rest)
2. Exercise — Sets×Reps (Rest)
...

2. EXACTLY 7 exercises per day.
3. EXACTLY 1 rest day (Day 7).
4. No markdown headings, no emojis, no extra paragraphs.
5. Output must be plain text only.

Now generate the full 7-day plan.
`;

  const result = await generateWithAI(prompt);

  return { workoutPlan: result };
}
