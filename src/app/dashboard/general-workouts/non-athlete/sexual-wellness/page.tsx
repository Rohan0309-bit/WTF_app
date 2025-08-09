
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Flame, Repeat, Timer } from 'lucide-react';
import type { ExerciseDetails } from '@/lib/workouts';

const WELLNESS_EXERCISES: ExerciseDetails[] = [
    { name: 'Kegels', type: 'strength', muscle: 'Pelvic Floor', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Identify your pelvic floor muscles (the ones you use to stop urination mid-stream). Squeeze and hold for 3-5 seconds, then relax for 3-5 seconds. Ensure you are not squeezing your glutes, thighs, or abs.', sets: "3", reps: "10-15", rest: "30s" },
    { name: 'Glute Bridges', type: 'strength', muscle: 'Glutes', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Lie on your back with knees bent and feet flat on the floor. Lift your hips toward the ceiling, squeezing your glutes and engaging your pelvic floor at the top. This exercise improves hip mobility and endurance.', sets: "3", reps: "15-20", rest: "45s" },
    { name: 'Plank', type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Hold a push-up position, keeping your core tight and body in a straight line. A strong core is essential for stamina and preventing injury.', sets: "3", reps: "30-60s hold", rest: "60s" },
    { name: 'Deep Squats (Goblet or Bodyweight)', type: 'strength', muscle: 'Legs', equipment: 'Bodyweight/Dumbbell', difficulty: 'Intermediate', instructions: 'Hold a dumbbell close to your chest or use bodyweight. Lower your hips as far as you can while keeping your chest up and back straight. Deep squats improve hip flexibility and blood flow to the pelvic region.', sets: "3", reps: "10-12", rest: "60s" },
    { name: 'Cat-Cow Stretch', type: 'flexibility', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'Beginner', instructions: 'Start on all fours. Inhale as you drop your belly (Cow pose), and exhale as you round your spine (Cat pose). This improves spinal flexibility and body awareness.', sets: "2", reps: "15 cycles", rest: "30s" },
    { name: 'Pigeon Pose', type: 'flexibility', muscle: 'Hips', equipment: 'Bodyweight', difficulty: 'Intermediate', instructions: 'From a plank position, bring one knee forward towards the corresponding wrist. Extend the other leg back. This deep stretch opens the hips, which can store a lot of tension.', sets: "1", reps: "30-60s hold per side", rest: "N/A" },
    { name: 'Light Cardio (Jogging or Brisk Walking)', type: 'cardio', muscle: 'Full Body', equipment: 'N/A', difficulty: 'Beginner', instructions: 'Engage in 20-30 minutes of light cardio to improve blood circulation and cardiovascular health, which is directly linked to sexual function and stamina.', sets: "1", reps: "20-30 mins", rest: "N/A" },
];

export default function SexualWellnessWorkoutPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Sexual Wellness Workout</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Enhance stamina, flexibility, and confidence with exercises designed to support sexual health.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">Wellness & Performance Focus</CardTitle>
            <CardDescription>Incorporate these exercises into your routine 3-4 times a week.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 pt-2">
              {WELLNESS_EXERCISES.map((exercise, exIndex) => (
                <div key={exIndex}>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-1"><Flame className="text-primary"/></span>
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
                  {exIndex < WELLNESS_EXERCISES.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
