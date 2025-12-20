
"use server";

import { genkit } from "@genkit-ai/core";
import { googleAI } from "@genkit-ai/googleai";
import { z } from "zod";

// --------------------------------------------------
// 🔹 Initialize Genkit With Google AI
// --------------------------------------------------
export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
});

// --------------------------------------------------
// 🔹 Simple text generation using Gemini
// --------------------------------------------------
export async function generateWithAI(prompt: string): Promise<string> {
  const model = ai.llm("googleai/gemini-1.5-flash");

  const result = await model.generate({
    prompt,
  });

  return result.text ?? "";
}
