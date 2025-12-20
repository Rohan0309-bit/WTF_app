"use server";

import { z } from 'zod';
import type { DailyWorkout } from '@/lib/workout-parser';

const formSchema = z.object({
  goal: z.string().optional(),
  gender: z.enum(['male', 'female']),
  level: z.string().min(1, 'Fitness level is required.'),
  location: z.enum(['home', 'gym']),
});

export type FormState = {
  message: string;
  workoutPlan?: DailyWorkout[];
  workoutInputs?: any;
  issues?: string[];
  isSuccess: boolean;
};

const SYSTEM_PROMPT = `
You are a professional fitness trainer and AI workout coach for the WTF (Well Trained Freak) app.

Task:
- Generate a 7-day workout plan for a user.
- The user will provide:
  - gender: "male" or "female"
  - location: "home" or "gym"
  - level: "beginner", "intermediate", "advanced"
  - goal (optional): a string describing their fitness goal

Output Requirements:
- Return ONLY a valid JSON object with a single key "workoutPlan".
- The value of "workoutPlan" must be an array of 7 day objects.
- Each day object must have:
  - day: string (e.g., "Monday")
  - title: string (e.g., "Full Body Strength", "Upper Body Power")
  - exercises: an array of exercise objects.
- Each exercise object must have:
  - name: string
  - sets: number or string
  - reps: number or string (e.g., "8-12", "30 sec")
  - rest: string (e.g., "60s", "90s")
- Example JSON format:
{
  "workoutPlan": [
    {
      "day": "Monday",
      "title": "Full Body Strength",
      "exercises": [
        { "name": "Push Ups", "sets": 3, "reps": "12", "rest": "60s" },
        { "name": "Squats", "sets": 3, "reps": "15", "rest": "90s" }
      ]
    }
  ]
}

Important:
- Do not include any text, conversation, or markdown outside the main JSON object.
- The entire output must be a single, valid, and parsable JSON object.
`;

export async function getWorkoutPlan(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    goal: formData.get('goal'),
    gender: formData.get('gender'),
    level: formData.get('level'),
    location: formData.get('location'),
  });

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission.',
      issues: validatedFields.error.flatten().fieldErrors.root,
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
    const { gender, location, level, goal } = validatedFields.data;
    
    const userPrompt = `
      Generate a 7-day workout plan based on the following user info:
      - gender: ${gender}
      - location: ${location}
      - fitnessLevel: ${level}
      - goal: ${goal || 'General Fitness'}
    `;

    const fullPrompt = `${SYSTEM_PROMPT}\n${userPrompt}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: fullPrompt }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048,
              responseMimeType: "application/json",
            }
        })
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API request failed:', errorData);
        throw new Error(errorData.error?.message || 'The AI failed to generate a response.');
    }

    const data = await response.json();
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiText) {
        console.error("AI response was empty or in an unexpected format:", data);
        throw new Error("AI returned an empty or invalid response.");
    }
    
    let workoutPlanData;
    try {
      workoutPlanData = JSON.parse(aiText);
    } catch (error){
      console.error("Failed to parse AI response as JSON:", aiText);
      throw new Error(`AI returned invalid JSON. Raw response: ${aiText}`);
    }

    if (!workoutPlanData || !workoutPlanData.workoutPlan || !Array.isArray(workoutPlanData.workoutPlan)) {
      console.error("AI response is missing 'workoutPlan' array:", workoutPlanData);
      throw new Error("AI returned an empty or invalid workout plan structure.");
    }
    
    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: workoutPlanData.workoutPlan,
      workoutInputs: validatedFields.data,
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
