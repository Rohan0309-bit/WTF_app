
import OpenAI from "openai";
import * as functions from "firebase-functions";

export const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});
