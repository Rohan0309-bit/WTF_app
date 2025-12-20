'use server';

import { genkit, configure } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';
import { devLogger } from '@genkit-ai/core/logging';

configure({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export { genkit as ai };
