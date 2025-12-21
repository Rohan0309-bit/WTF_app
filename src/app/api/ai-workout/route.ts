
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

// -------------------------------
// Input Validation Schema
// -------------------------------
const workoutInputSchema = z.object({
  gender: z.string().min(1),
  goal: z.string().min(3),
  level: z.string().min(1),
  location: z.string().min(1),
});

// -------------------------------
// System Prompt
// -------------------------------
const SYSTEM_PROMPT = `
You are a professional, CSCS-certified fitness coach.

TASK:
Generate a safe, effective workout plan based on the user's details.

RULES (VERY IMPORTANT):
- Respond ONLY with valid JSON
- NO markdown
- NO explanations
- NO extra text outside JSON
- Exercises must match fitness level and location
- Keep it realistic and injury-safe

JSON FORMAT:
{
  "planName": "string",
  "difficulty": "string",
  "estimatedDurationMins": number,
  "warmup": [
    { "name": "string", "durationSec": number }
  ],
  "exercises": [
    {
      "name": "string",
      "sets": number,
      "reps": "string",
      "restSeconds": number,
      "proTip": "string"
    }
  ],
  "cooldown": [
    { "name": "string", "durationSec": number }
  ]
}
`;

// -------------------------------
// POST Handler
// -------------------------------
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedFields = workoutInputSchema.safeParse(body);

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    const { gender, goal, level, location } = validatedFields.data;

    // -------------------------------
    // Gemini Setup (STABLE)
    // -------------------------------
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro", // ✅ stable v1 model
    });

    const userPrompt = `
User Details:
- Gender: ${gender}
- Goal: ${goal}
- Fitness Level: ${level}
- Workout Location: ${location}
`;

    const result = await model.generateContent([
      SYSTEM_PROMPT,
      userPrompt,
    ]);

    const rawText = result.response.text();

    // -------------------------------
    // Clean & Parse JSON
    // -------------------------------
    const cleanedText = rawText
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let workoutPlan;
    try {
      workoutPlan = JSON.parse(cleanedText);
    } catch (err) {
      console.error("Invalid JSON from Gemini:", cleanedText);
      return NextResponse.json(
        { error: "AI returned invalid JSON", raw: cleanedText },
        { status: 500 }
      );
    }

    return NextResponse.json({ plan: workoutPlan });

  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("AI workout handler error:", error);

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
