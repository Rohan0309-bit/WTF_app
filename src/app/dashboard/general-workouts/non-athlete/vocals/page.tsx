
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mic, Repeat, Timer } from 'lucide-react';
import type { ExerciseDetails } from '@/lib/workouts';

const VOCAL_EXERCISES: ExerciseDetails[] = [
  { name: 'Lip Buzz (Lip Trills)', type: 'warmup', muscle: 'Vocal Cords', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Vibrate your lips together to create a "brrr" sound, like a horse. Try to maintain a steady pitch, then glide up and down in your vocal range. This warms up the vocal cords gently.', sets: "3", reps: "60s", rest: "30s" },
  { name: 'Diaphragmatic Breathing', type: 'technique', muscle: 'Diaphragm', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Lie on your back and place a hand on your stomach. Inhale deeply through your nose, allowing your stomach to rise. Exhale slowly through your mouth, feeling your stomach fall. This builds breath support.', sets: "1", reps: "5 mins", rest: "N/A" },
  { name: 'Yawn-Sigh Technique', type: 'warmup', muscle: 'Vocal Cords', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Initiate a natural yawn, feeling the space in the back of your throat. As you exhale, gently produce a sighing sound that descends in pitch. This relaxes the throat and larynx.', sets: "2", reps: "5-8 sighs", rest: "30s" },
  { name: 'Humming', type: 'warmup', muscle: 'Vocal Cords', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Close your lips and hum gently, feeling the vibration in the front of your face (around the nose and lips). Start on a comfortable pitch and glide up and down.', sets: "2", reps: "60s", rest: "30s" },
  { name: 'Tongue Twisters', type: 'articulation', muscle: 'Tongue & Lips', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Recite tongue twisters slowly at first, then gradually increase speed. Example: "Red leather, yellow leather" or "She sells seashells by the seashore." This improves diction and clarity.', sets: "3", reps: "3-5 reps each", rest: "30s" },
];

export default function VocalWorkoutPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Vocal Exercises</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strengthen your voice, improve clarity, and increase your vocal stamina.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Vocal Warm-up & Strength</CardTitle>
            <CardDescription>Perform these exercises to care for and develop your voice.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-2">
              {VOCAL_EXERCISES.map((exercise, exIndex) => (
                <div key={exIndex}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1"><Mic className="text-primary"/></span>
                    <div className="flex-1">
                      <p className="font-semibold">{exercise.name}</p>
                       <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1.5">
                            <Repeat className="h-4 w-4" />
                            <span>{exercise.reps}</span>
                          </div>
                          {exercise.rest !== "N/A" && <div className="flex items-center gap-1.5">
                             <Timer className="h-4 w-4" />
                             <span>{exercise.rest}</span>
                           </div>}
                        </div>
                      <p className="text-sm text-muted-foreground mt-2">{exercise.instructions}</p>
                    </div>
                  </div>
                  {exIndex < VOCAL_EXERCISES.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
