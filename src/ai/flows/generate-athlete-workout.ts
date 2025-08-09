'use server';

/**
 * @fileOverview AI-powered weekly workout plan generator for athletes.
 *
 * - generateAthleteWorkout - A function that generates a tailored weekly workout plan for athletes.
 * - GenerateAthleteWorkoutInput - The input type for the generateAthleteWorkout function.
 * - GenerateAthleteWorkoutOutput - The return type for the generateAthleteWorkout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAthleteWorkoutInputSchema = z.object({
  sport: z.string().optional().describe('The sport the athlete is training for (if any).'),
  gender: z.enum(['male', 'female']).describe('The athlete’s gender.'),
  skillLevel: z.string().describe('The athlete’s skill level (e.g., beginner, intermediate, advanced).'),
  workoutPreference: z.enum(['home', 'gym']).describe('The athlete’s workout preference (home or gym).'),
  workoutType: z.string().describe('The primary focus of the workout (e.g., Full-Body, Chest, Legs, Posture, Sexual Wellness).'),
});

export type GenerateAthleteWorkoutInput = z.infer<typeof GenerateAthleteWorkoutInputSchema>;

const GenerateAthleteWorkoutOutputSchema = z.object({
  workoutPlan: z.string().describe('A tailored 7-day workout plan for the athlete.'),
});

export type GenerateAthleteWorkoutOutput = z.infer<typeof GenerateAthleteWorkoutOutputSchema>;

export async function generateAthleteWorkout(input: GenerateAthleteWorkoutInput): Promise<GenerateAthleteWorkoutOutput> {
  return generateAthleteWorkoutFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAthleteWorkoutPrompt',
  input: {schema: GenerateAthleteWorkoutInputSchema},
  output: {schema: GenerateAthleteWorkoutOutputSchema},
  prompt: `You are an expert AI sports trainer. You are helping a user generate a weekly workout plan based on their preferences.

  Workout Type Focus: {{{workoutType}}}
  {{#if sport}}Sport: {{{sport}}}{{/if}}
  Gender: {{{gender}}}
  Skill Level: {{{skillLevel}}}
  Workout Preference: {{{workoutPreference}}}

  Generate a 7-day workout plan focused on the specified 'Workout Type Focus'. If a sport is provided, tailor the exercises to benefit that sport as well.
  
  For each day, provide a title (e.g., "Day 1: Upper Body Strength"). 
  Each workout day must include a list of at least 7 exercises. For each exercise, provide sets, reps, and rest time. 
  Ensure there is exactly one rest day in the 7-day plan. Structure the output clearly with headings for each day.
  
  Example for one day:
  Day 1: Full Body Strength
  1. Squats: 3 sets of 10-12 reps (60s rest)
  2. Push-ups: 3 sets of 15-20 reps (60s rest)
  ...

  Workout plan:`,
});

const generateAthleteWorkoutFlow = ai.defineFlow(
  {
    name: 'generateAthleteWorkoutFlow',
    inputSchema: GenerateAthleteWorkoutInputSchema,
    outputSchema: GenerateAthleteWorkoutOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
