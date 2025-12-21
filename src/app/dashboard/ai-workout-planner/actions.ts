
"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from 'zod';

export type FormState = {
  message: string;
  workoutPlan?: any;
  isSuccess: boolean;
};

const formSchema = z.object({
  gender: z.string(),
  goal: z.string(),
  level: z.string(),
  location: z.string(),
});

export async function getWorkoutPlan(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
    
  const validatedFields = formSchema.safeParse({
    gender: formData.get('gender'),
    goal: formData.get('goal'),
    level: formData.get('level'),
    location: formData.get('location'),
  });

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission. All fields are required.',
      isSuccess: false,
    };
  }

  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "YOUR_GEMINI_API_KEY") {
      return {
          message: 'The Gemini API key is not configured. Please add it to your .env file.',
          isSuccess: false
      }
  }

  try {
    const { gender, goal, level, location } = validatedFields.data;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are a professional, CSCS-certified Fitness Coach and Exercise Scientist.
      Task: Generate a highly personalized workout plan based on user inputs.
      User Inputs:
      - Goal: ${goal}
      - Equipment: ${location}
      - Fitness Level: ${level}
      - Gender: ${gender}

      Constraints:
      - Safety First: Always include a specific 5-minute dynamic warm-up.
      - Precision: Use specific exercise names (e.g., "Bulgarian Split Squat" instead of just "Legs").
      - Format: You MUST respond strictly in JSON format. Do not include any conversational text, markdown headers, or explanations outside of the JSON.
      - Expertise: Adjust volume (sets/reps) based on the user's level.

      Required JSON Structure:
      {
        "plan_name": "String",
        "difficulty": "String",
        "estimated_duration_mins": Number,
        "warmup": [{ "name": "String", "duration_sec": Number }],
        "exercises": [
          {
            "name": "String",
            "sets": Number,
            "reps": "String",
            "rest_seconds": Number,
            "pro_tip": "String"
          }
        ],
        "cooldown": [{ "name": "String", "duration_sec": Number }]
      }
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    let workoutPlan;
    try {
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        workoutPlan = JSON.parse(cleanedText);
    } catch (e) {
        console.error("Failed to parse AI response JSON:", text);
        return { message: `AI returned invalid JSON. Raw response: ${text}`, isSuccess: false };
    }

    return {
      message: 'Plan generated!',
      workoutPlan: workoutPlan,
      isSuccess: true,
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error("Error in getWorkoutPlan:", errorMessage);
    return {
      message: `Failed to generate workout plan: ${errorMessage}`,
      isSuccess: false,
    };
  }
}
