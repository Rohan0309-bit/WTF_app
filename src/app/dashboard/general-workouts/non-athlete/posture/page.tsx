
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Dumbbell, Repeat, Timer } from 'lucide-react';
import type { ExerciseDetails } from '@/lib/workouts';

const POSTURE_EXERCISES: ExerciseDetails[] = [
  { name: 'Wall Angels', type: 'flexibility', muscle: 'Shoulders', equipment: 'Wall', difficulty: 'Beginner', instructions: 'Stand with your back against a wall, feet about 6 inches away. Bend your knees slightly. Press your lower back, upper back, and head into the wall. Raise your arms to shoulder height, elbows bent at 90 degrees, and press your arms and wrists against the wall. Slowly slide your arms up the wall, then back down.', sets: "3", reps: "10-12", rest: "30s" },
  { name: 'Cat-Cow Stretch', type: 'flexibility', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Start on your hands and knees. Inhale as you drop your belly towards the mat (Cow). Exhale as you round your spine up towards the ceiling (Cat). Repeat slowly.', sets: "3", reps: "10-12 cycles", rest: "30s" },
  { name: 'Thoracic Spine Rotation', type: 'flexibility', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Start on all fours. Place one hand behind your head. Rotate your torso to bring your elbow towards the ceiling, opening up your chest. Return to the start. Complete reps on one side before switching.', sets: "3", reps: "10 per side", rest: "30s" },
  { name: 'Glute Bridges', type: 'strength', muscle: 'Glutes', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Lie on your back with knees bent, feet flat on the floor hip-width apart. Lift your hips off the floor until your body forms a straight line from your shoulders to your knees. Squeeze your glutes at the top. Lower back down.', sets: "3", reps: "15", rest: "45s" },
  { name: 'Plank', type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Hold a push-up position, keeping your body in a straight line from head to heels. Engage your core and glutes. Do not let your hips sag.', sets: "3", reps: "30-60s hold", rest: "60s" },
  { name: 'Chin Tucks', type: 'strength', muscle: 'Neck', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Sit or stand tall. Gently tuck your chin towards your chest, creating a "double chin". Hold for a few seconds, then release. You should feel a stretch at the back of your neck.', sets: "3", reps: "10", rest: "30s" },
];

export default function PostureWorkoutPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Posture Correction Workout</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Improve your posture, reduce back pain, and stand taller with these exercises.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Posture Focus</CardTitle>
            <CardDescription>Perform these exercises 3-4 times a week for best results.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-2">
              {POSTURE_EXERCISES.map((exercise, exIndex) => (
                <div key={exIndex}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1">🧘</span>
                    <div className="flex-1">
                      <p className="font-semibold">{exercise.name}</p>
                       <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1.5">
                            <Dumbbell className="h-4 w-4" />
                            <span>{exercise.sets} sets</span>
                          </div>
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
                  {exIndex < POSTURE_EXERCISES.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
