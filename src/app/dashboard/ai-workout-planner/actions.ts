"use server";

import { z } from 'zod';
import { getGenerativeModel } from 'firebase/ai';
import { ai } from '@/lib/firebase';

const formSchema = z.object({
  goal: z.string().optional(),
  gender: z.enum(['male', 'female']),
  level: z.string().min(1, 'Fitness level is required.'),
  location: z.enum(['home', 'gym']),
});

export type FormState = {
  message: string;
  workoutPlan?: any; // The structure is complex, so 'any' is used for simplicity here
  workoutInputs?: any;
  issues?: string[];
  isSuccess: boolean;
};

const SYSTEM_PROMPT = `
Role: You are a professional, CSCS-certified Fitness Coach and Exercise Scientist.

Task: Generate a highly personalized workout plan based on user inputs (Goal, Equipment, Available Time, Fitness Level).

Constraints:

Safety First: Always include a specific 5-minute dynamic warm-up.

Precision: Use specific exercise names (e.g., "Bulgarian Split Squat" instead of just "Legs").

Format: You MUST respond strictly in JSON format. Do not include any conversational text, markdown headers, or explanations outside of the JSON.

Expertise: Adjust volume (sets/reps) based on the user's level (Beginner/Intermediate/Advanced).

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
      message: 'There was an error with your submission. Please check the form fields.',
      issues: validatedFields.error.flatten().fieldErrors.root,
      isSuccess: false,
    };
  }
  
  if (!process.env.GEMINI_API_KEY) {
      return {
          message: 'The Gemini API key is not configured. Please add it to your .env file.',
          isSuccess: false
      }
  }
  
  try {
    const { gender, location, level, goal } = validatedFields.data;
    
    const model = getGenerativeModel(ai, { 
      model: "gemini-1.5-flash-latest",
      generationConfig: {
        responseMimeType: "application/json",
      },
      systemInstruction: SYSTEM_PROMPT,
    });
    
    const prompt = `Generate a workout for: ${JSON.stringify({ gender, workoutType: location, fitnessLevel: level, goal })}`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    let workoutPlanData;
    try {
      workoutPlanData = JSON.parse(responseText);
    } catch (error){
      console.error("Failed to parse AI response as JSON:", responseText);
      return { message: `AI returned invalid JSON. Please try generating again.`, isSuccess: false };
    }
    
    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: workoutPlanData,
      workoutInputs: validatedFields.data,
      isSuccess: true,
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    console.error("Error in getWorkoutPlan:", errorMessage);
    if (errorMessage.includes('API key not valid')) {
        return {
            message: 'Your Gemini API key is invalid. Please check your .env file.',
            isSuccess: false,
        };
    }
    return {
      message: `An unexpected error occurred: ${errorMessage}`,
      isSuccess: false,
    };
  }
}
