'use server';

import {NextRequest, NextResponse} from 'next/server';
import {ai} from '@/ai/genkit';
import {z} from 'genkit/zod';

const workoutInputSchema = z.object({
  gender: z.string(),
  level: z.string(),
  goal: z.string(),
  location: z.string(),
});

const exerciseSchema = z.object({
  name: z.string(),
  sets: z.number(),
  reps: z.string(),
  rest: z.number(),
});

const workoutOutputSchema = z.object({
  category: z.literal('AI Workout Generator'),
  focus: z.string(),
  level: z.string(),
  location: z.string(),
  goal: z.string(),
  gender: z.string(),
  exercises: z.array(exerciseSchema),
});

const prompt = ai.definePrompt(
  {
    name: 'aiWorkoutPrompt',
    input: {schema: workoutInputSchema},
    output: {schema: workoutOutputSchema},
    prompt: `
You are a professional certified fitness coach working inside the WTF (Well Trained Freak) fitness app.

You MUST generate workouts in structured JSON only.
You must NEVER explain anything.
You must NEVER add extra text.
You must NEVER use markdown.
You must NEVER invent unsafe or advanced exercises.

STRICT RULES:
- Output must always be valid JSON that matches the provided schema. Do not wrap it in markdown backticks.
- Use clear, commonly known exercise names only.
- Always include: sets, reps, rest (in seconds).
- Workouts must be realistic, balanced, and achievable.
- Respect user gender: {{{gender}}}, fitness level: {{{level}}}, goal: {{{goal}}}, and workout location: {{{location}}}.
- If unsure, always choose safer beginner-friendly exercises.
- Avoid injury-prone movements (no extreme plyometrics, no dangerous lifts).
- Do NOT include medical advice.

WORKOUT STRUCTURE RULES:
- Always generate 6–8 exercises.
- Maintain full-body or goal-appropriate muscle balance.
- Rest time must be between 30–120 seconds.
- Reps must be realistic for the user’s level.
- Sets must be between 2–5.

Now, generate the workout based on the user's input.
`,
  },
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedInput = workoutInputSchema.parse(body);

    const {output} = await prompt(validatedInput);

    if (!output) {
      throw new Error('AI returned an empty response.');
    }
    
    return NextResponse.json(output);

  } catch (err) {
    console.error('AI generation failed:', err);
    let errorMessage = 'AI generation failed. Please try again later.';
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }
    return NextResponse.json({error: errorMessage}, {status: 500});
  }
}
