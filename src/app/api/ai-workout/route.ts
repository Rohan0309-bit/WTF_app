
import {NextRequest, NextResponse} from 'next/server';
import { z } from 'zod';

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

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validatedFields = workoutInputSchema.safeParse(body);

  if (!validatedFields.success) {
    return NextResponse.json({error: 'Invalid input'}, {status: 400});
  }

  const {gender, level, goal, location} = validatedFields.data;

  const prompt = `
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
- Respect user gender: ${gender}, fitness level: ${level}, goal: ${goal}, and workout location: ${location}.
- If unsure, always choose safer beginner-friendly exercises.
- Avoid injury-prone movements (no extreme plyometrics, no dangerous lifts).
- Do NOT include medical advice.

WORKOUT STRUCTURE RULES:
- Always generate 6–8 exercises.
- Maintain full-body or goal-appropriate muscle balance.
- Rest time must be between 30–120 seconds.
- Reps must be realistic for the user’s level.
- Sets must be between 2–5.

JSON FORMAT (DO NOT CHANGE KEYS):

{
  "category": "AI Workout Generator",
  "focus": "...",
  "level": "${level}",
  "location": "${location}",
  "goal": "${goal}",
  "gender": "${gender}",
  "exercises": [
    {
      "name": "...",
      "sets": 0,
      "reps": "...",
      "rest": 0
    }
  ]
}
`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: prompt }],
        temperature: 0.7,
        max_tokens: 1200,
        response_format: { type: "json_object" }
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.choices || data.choices.length === 0) {
      console.error('Invalid response from AI:', data);
      throw new Error(data.error?.message || 'The AI failed to generate a response.');
    }
    
    const aiText = data.choices[0].message.content;

    if (!aiText) {
        throw new Error("AI returned an empty response.");
    }
    
    const workoutJson = JSON.parse(aiText);

    // Validate the output from the AI
    const parsedOutput = workoutOutputSchema.safeParse(workoutJson);
    if (!parsedOutput.success) {
      console.error('AI returned malformed JSON object:', parsedOutput.error);
      throw new Error('AI returned a workout with an invalid structure.');
    }

    return NextResponse.json(parsedOutput.data);
  } catch (error) {
    console.error('AI handler error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({error: errorMessage}, {status: 500});
  }
}
