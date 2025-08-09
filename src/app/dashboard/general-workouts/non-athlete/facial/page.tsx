
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Smile, Repeat, Timer } from 'lucide-react';
import type { ExerciseDetails } from '@/lib/workouts';

const FACIAL_EXERCISES: ExerciseDetails[] = [
  { name: 'The Cheek Lifter', type: 'strength', muscle: 'Facial Muscles', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Open your mouth and form an "O". Position your upper lip over your teeth and smile to lift cheek muscles up. Hold for 5 seconds. Relax and repeat.', sets: "2", reps: "10", rest: "30s" },
  { name: 'Jawline Sculptor', type: 'strength', muscle: 'Jaw', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Tilt your head back and look at the ceiling. Pucker your lips as if you are kissing the ceiling to stretch the area under your chin. Hold for 5 seconds. Relax and repeat.', sets: "2", reps: "10", rest: "30s" },
  { name: 'Eyebrow Lifter', type: 'strength', muscle: 'Forehead', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Place your index fingers just above your eyebrows. Gently push down as you try to raise your eyebrows. Creates resistance to strengthen the forehead muscles.', sets: "2", reps: "10", rest: "30s" },
  { name: 'Lion\'s Breath', type: 'flexibility', muscle: 'Full Face', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Inhale through your nose, then open your mouth wide, stick your tongue out and down towards your chin. Exhale forcefully making a "ha" sound. Relieves facial tension.', sets: "1", reps: "5", rest: "30s" },
  { name: 'Fish Face', type: 'strength', muscle: 'Cheeks', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Suck your cheeks and lips inwards to make a "fish face". Try to smile while holding this pose. Hold for 5-10 seconds.', sets: "2", reps: "10", rest: "30s" },
];

export default function FacialWorkoutPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Facial Exercises</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tone and strengthen your facial muscles for a natural lift and youthful appearance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Face Yoga Routine</CardTitle>
            <CardDescription>Perform these gentle exercises daily for best results.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-2">
              {FACIAL_EXERCISES.map((exercise, exIndex) => (
                <div key={exIndex}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1"><Smile className="text-primary"/></span>
                    <div className="flex-1">
                      <p className="font-semibold">{exercise.name}</p>
                       <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1.5">
                            <Repeat className="h-4 w-4" />
                            <span>{exercise.reps}</span>
                          </div>
                           <div className="flex items-center gap-1.5">
                             <Timer className="h-4 w-4" />
                             <span>{exercise.rest}</span>
                           </div>
                        </div>
                      <p className="text-sm text-muted-foreground mt-2">{exercise.instructions}</p>
                    </div>
                  </div>
                  {exIndex < FACIAL_EXERCISES.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
