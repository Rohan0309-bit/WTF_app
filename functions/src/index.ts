
import * as functions from "firebase-functions";
import { openai } from "./openai";

export const generateAIWorkout = functions.https.onRequest(async (req, res) => {
  try {
    const { gender, level, goal, location } = req.body;

    const SYSTEM_PROMPT = `
You are a professional certified fitness coach working inside the WTF (Well Trained Freak) fitness app.

You MUST generate workouts in structured JSON only.
You must NEVER explain anything.
You must NEVER add extra text.
You must NEVER use markdown.
You must NEVER invent unsafe or advanced exercises.

STRICT RULES:
- Output must always be valid JSON
- Use clear, commonly known exercise names only
- Always include: sets, reps, rest (in seconds)
- Workouts must be realistic, balanced, and achievable
- Respect user gender, fitness level, goal, and workout location
- If unsure, always choose safer beginner-friendly exercises
- Avoid injury-prone movements (no extreme plyometrics, no dangerous lifts)
- Do NOT include medical advice

WORKOUT STRUCTURE RULES:
- Always generate 6–8 exercises
- Maintain full-body or goal-appropriate muscle balance
- Rest time must be between 30–120 seconds
- Reps must be realistic for the user’s level
- Sets must be between 2–5

JSON FORMAT (DO NOT CHANGE KEYS):

{
  "category": "AI Workout Generator",
  "focus": "",
  "level": "",
  "location": "",
  "goal": "",
  "gender": "",
  "exercises": [
    {
      "name": "",
      "sets": 0,
      "reps": "",
      "rest": 0
    }
  ]
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Gender: ${gender}, Level: ${level}, Goal: ${goal}, Location: ${location}`,
        },
      ],
    });

    const aiText = completion.choices[0].message.content!;
    const json = JSON.parse(aiText);

    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(json);
  } catch (err) {
    console.error(err);
    res.set('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: "AI generation failed" });
  }
});
