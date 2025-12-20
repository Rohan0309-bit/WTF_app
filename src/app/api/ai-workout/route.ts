'use server';

import {NextRequest, NextResponse} from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const {gender, level, goal, location} = await req.json();

    const SYSTEM_PROMPT = `
You are a professional certified fitness coach working inside the WTF (Well Trained Freak) fitness app.

You MUST generate workouts in structured JSON only.
You must NEVER explain anything.
You must NEVER add extra text.
You must NEVER use markdown.
You must NEVER invent unsafe or advanced exercises.

STRICT RULES:
- Output must always be valid JSON. Do not wrap it in markdown backticks.
- Use clear, commonly known exercise names only.
- Always include: sets, reps, rest (in seconds).
- Workouts must be realistic, balanced, and achievable.
- Respect user gender, fitness level, goal, and workout location.
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
  "focus": "Legs & Core",
  "level": "Beginner",
  "location": "Home",
  "goal": "General Fitness",
  "gender": "male",
  "exercises": [
    {
      "name": "Squats",
      "sets": 3,
      "reps": "15",
      "rest": 60
    }
  ]
}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {role: 'system', content: SYSTEM_PROMPT},
        {
          role: 'user',
          content: `Gender: ${gender || 'female'}, Level: ${
            level || 'Beginner'
          }, Goal: ${goal || 'General Fitness'}, Location: ${
            location || 'Home'
          }`,
        },
      ],
      response_format: {type: 'json_object'},
    });

    const aiText = completion.choices[0].message.content;

    if (!aiText) {
      throw new Error('AI returned an empty response.');
    }

    // The AI response is already a JSON object because of response_format.
    // We can parse it directly.
    const json = JSON.parse(aiText);

    return NextResponse.json(json);
  } catch (err) {
    console.error('AI generation failed:', err);
    let errorMessage = 'AI generation failed. Please try again later.';
    if (err instanceof Error) {
        errorMessage = err.message;
    }
    return NextResponse.json({error: errorMessage}, {status: 500});
  }
}
