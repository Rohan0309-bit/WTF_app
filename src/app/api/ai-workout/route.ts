
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are a professional fitness trainer and AI workout coach.

Task:
- Generate a 7-day workout plan for a user.
- The user can provide:
  - gender: "male" or "female"
  - location: "home" or "gym"
  - level: "beginner", "intermediate", "advanced"
  - goal: string (e.g., "muscle gain", "fat loss", "general fitness")

Output Requirements:
- Return **only JSON** (no explanations or extra text)
- Each day should be an object with:
  - day: string (e.g., "Monday")
  - title: string (e.g., "Full Body Strength", "Upper Body Power")
  - exercises: array of objects with:
      - name: string
      - sets: number or string
      - reps: number or string (e.g., "8-12", "30 sec")
      - rest: string (e.g., "60s", "90s")
- Example JSON format:

[
  {
    "day": "Monday",
    "title": "Full Body Strength",
    "exercises": [
      { "name": "Push Ups", "sets": 3, "reps": 12, "rest": "60s" },
      { "name": "Squats", "sets": 3, "reps": 15, "rest": "90s" }
    ]
  },
  ...
]

Important:
- Do not include any text outside the JSON.
- Make sure the JSON is valid and parsable.
`;

export async function POST(req: Request) {
  try {
    const { gender, location, level, goal } = await req.json();

    if (!gender || !location || !level || !goal) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userPrompt = `
Generate a 7-day workout plan based on the following user info:
- gender: ${gender}
- location: ${location}
- fitnessLevel: ${level}
- goal: ${goal}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error('Invalid response from AI:', data);
        throw new Error(data.error?.message || 'The AI failed to generate a response.');
    }

    const text = data.choices?.[0]?.message?.content;

    if (!text) {
        throw new Error("AI returned an empty response.");
    }
    
    let workoutPlan;
    try {
      // The API is now expected to return a JSON object with a key, e.g. "workoutPlan"
      const parsedObject = JSON.parse(text);
      // Let's assume the array is under a key, e.g. "plan" or we can adjust based on actual AI output
      workoutPlan = parsedObject.workoutPlan || parsedObject; 
    } catch {
      return NextResponse.json({ error: "AI returned invalid JSON", raw: text }, { status: 500 });
    }

    return NextResponse.json({ workoutPlan });

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
    console.error("AI handler error:", errorMessage);
    return NextResponse.json({ error: "Failed to generate workout plan" }, { status: 500 });
  }
}
