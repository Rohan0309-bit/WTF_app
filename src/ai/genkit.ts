'use server';
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'zod';

genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export const ai = genkit;

export async function generateWithAI(prompt: string): Promise<string> {
  const llm = ai.model('googleai/gemini-pro');

  const {text} = await llm.generate({
    prompt: prompt,
  });

  return text;
}
