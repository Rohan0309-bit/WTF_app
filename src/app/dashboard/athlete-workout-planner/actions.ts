
"use server";

import { z } from 'zod';
import { DailyWorkout } from '@/lib/workout-parser';

const formSchema = z.object({
  sport: z.string().optional(),
  gender: z.enum(['male', 'female']),
  skillLevel: z.string().min(1, 'Skill level is required.'),
  workoutPreference: z.enum(['home', 'gym']),
  workoutType: z.string().optional(),
});

export type FormState = {
  message: string;
  workoutPlan?: DailyWorkout;
  workoutInputs?: any;
  issues?: string[];
  isSuccess: boolean;
};

const SYSTEM_PROMPT = `
You are a professional fitness trainer for athletes.
Task:
- Generate a single, focused workout session based on user inputs.
- The user will provide:
  - sport or workoutType
  - gender
  - skillLevel
  - workoutPreference (home or gym)
Output Requirements:
- Return ONLY a JSON object with:
  - focus: string (e.g., "Basketball: Agility & Power", "Cricket: Bowling Strength")
  - exercises: array of objects with:
      - name: string
      - sets: number or string
      - reps: number or string (e.g., "8-12", "30 sec")
      - rest: string (e.g., "60s", "90s")
- Example JSON format:
{
  "focus": "Basketball: Explosive Power",
  "exercises": [
    { "name": "Box Jumps", "sets": 5, "reps": 5, "rest": "90s" },
    { "name": "Medicine Ball Slams", "sets": 4, "reps": 12, "rest": "60s" }
  ]
}
Important:
- Do not include any text outside the main JSON object.
- Make sure the entire output is valid and parsable JSON.
`;

export async function getWorkoutPlan(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    sport: formData.get('sport'),
    gender: formData.get('gender'),
    skillLevel: formData.get('skillLevel'),
    workoutPreference: formData.get('workoutPreference'),
    workoutType: formData.get('workoutType'),
  });

  if (!validatedFields.success) {
    return {
      message: 'There was an error with your submission.',
      issues: validatedFields.error.flatten().fieldErrors.root,
      isSuccess: false,
    };
  }
  
  try {
    const { sport, gender, skillLevel, workoutPreference, workoutType } = validatedFields.data;
    
    const userPrompt = `
      Generate a single-day workout session based on this athlete's info:
      - Sport: ${sport || 'General Athlete'}
      - Workout Type Focus: ${workoutType || 'Overall Performance'}
      - Gender: ${gender}
      - Skill Level: ${skillLevel}
      - Location: ${workoutPreference}
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
        max_tokens: 1500,
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Invalid response from AI' }));
        console.error('Invalid response from AI:', errorData);
        throw new Error(errorData.error?.message || 'The AI failed to generate a response.');
    }
    
    const result = await response.json();
    const text = result.choices?.[0]?.message?.content;

    if (!text) {
        throw new Error("AI returned an empty response.");
    }
    
    let workoutData;
    try {
      workoutData = JSON.parse(text); 
    } catch (error){
      console.error("Failed to parse AI response as JSON:", text);
      throw new Error(`AI returned invalid JSON. Raw response: ${text}`);
    }

    if (!workoutData || !workoutData.focus || !workoutData.exercises || !Array.isArray(workoutData.exercises)) {
      console.error("AI response is missing required fields:", workoutData);
      throw new Error("AI returned an empty or invalid workout structure.");
    }

    const workout: DailyWorkout = {
        day: "Today's Focus",
        title: workoutData.focus,
        exercises: workoutData.exercises.map((ex: any) => ({
            name: ex.name,
            sets: String(ex.sets),
            reps: String(ex.reps),
            rest: ex.rest
        }))
    };

    return {
      message: 'Workout plan generated successfully!',
      workoutPlan: workout,
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
