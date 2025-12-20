
import { NextRequest, NextResponse } from 'next/server';
import { ai } from "@/ai/genkit";
import { z } from "zod";

const GenerateAiWorkoutInputSchema = z.object({
  gender: z.enum(['male', 'female']).default('male'),
  level: z.string().default('Beginner'),
  goal: z.string().optional().default('General Fitness'),
  location: z.enum(['home', 'gym']).default('home'),
});

const ExerciseSchema = z.object({
    name: z.string().describe("Clear, commonly known exercise name."),
    sets: z.number().int().min(2).max(5).describe("Number of sets."),
    reps: z.string().describe("Reps, e.g., '8-12' or 'To Failure'."),
    rest: z.number().int().min(30).max(120).describe("Rest time in seconds."),
});

const WorkoutPlanSchema = z.object({
  category: z.literal("AI Workout Generator"),
  focus: z.string().describe("A concise focus for the workout, e.g., 'Full Body Strength'."),
  level: z.string(),
  location: z.string(),
  goal: z.string(),
  gender: z.string(),
  exercises: z.array(ExerciseSchema).min(6).max(8),
});

export type GenerateAiWorkoutInput = z.infer<typeof GenerateAiWorkoutInputSchema>;
export type GenerateAiWorkoutOutput = z.infer<typeof WorkoutPlanSchema>;

const prompt = ai.definePrompt({
    name: 'generateAiWorkoutPrompt',
    input: { schema: GenerateAiWorkoutInputSchema },
    output: { schema: WorkoutPlanSchema, format: 'json' },
    system: `You are a professional certified fitness coach working inside the WTF (Well Trained Freak) fitness app.

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
`,
    prompt: `Generate a workout plan for the following user:
- Gender: {{gender}}
- Fitness Level: {{level}}
- Goal: {{goal}}
- Location: {{location}}`
});

const generateAiWorkoutFlow = ai.defineFlow(
  {
    name: "generateAiWorkoutFlow",
    inputSchema: GenerateAiWorkoutInputSchema,
    outputSchema: WorkoutPlanSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error("Failed to generate workout plan.");
    }
    return output;
  }
);


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validatedInput = GenerateAiWorkoutInputSchema.safeParse(body);

        if (!validatedInput.success) {
            return NextResponse.json({ error: 'Invalid input', issues: validatedInput.error.flatten() }, { status: 400 });
        }

        const workoutPlan = await generateAiWorkoutFlow(validatedInput.data);
        return NextResponse.json(workoutPlan);

    } catch (error) {
        console.error("AI workout generation failed:", error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: `Failed to generate workout plan: ${errorMessage}` }, { status: 500 });
    }
}
