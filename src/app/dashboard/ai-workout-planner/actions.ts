
"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateWorkoutPlan({ gender, workoutType }: { gender: string, workoutType: string }) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const prompt = `
You are a professional fitness coach for the WTF app.

Generate a 7-day ${gender} ${workoutType} workout plan.

Return ONLY valid JSON in this format:
[
  {
    "day": "Monday",
    "focus": "Full Body",
    "exercises": [
      { "name": "Push Ups", "sets": 3, "reps": 12 }
    ]
  }
]
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return JSON.parse(text);
}
