
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Dumbbell, Repeat, Timer, PlayCircle } from 'lucide-react';
import type { DayWorkout, ExerciseDetails } from '@/lib/workouts';
import Image from 'next/image';
import { Button } from './ui/button';
import { ActiveWorkoutDialog } from './active-workout-dialog';

const emojiMap: { [key: string]: string } = {
  squats: '🦵',
  'push-ups': '💪',
  lunges: '🦵',
  plank: '🧘',
  deadlift: '🏋️',
  'bench press': '🏋️',
  'pull-ups': '💪',
  crunches: '🧘',
  burpees: '🥵',
  'jumping jacks': '🤸',
  'bicep curls': '💪',
  rest: '😴',
};

function getEmojiForExercise(name: string): string {
  const lowerCaseName = name.toLowerCase();
  for (const key in emojiMap) {
    if (lowerCaseName.includes(key)) {
      return emojiMap[key];
    }
  }
  return '🔥';
}

interface WorkoutDisplayProps {
  workout: DayWorkout;
}

export function WorkoutDisplay({ workout }: WorkoutDisplayProps) {
  const [isWorkoutDialogOpen, setWorkoutDialogOpen] = useState(false);
  
  if (!workout || !workout.exercises || workout.exercises.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">{workout?.focus || 'Rest Day'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4">
            <span className="text-2xl">{getEmojiForExercise('rest')}</span>
            <p className="font-semibold text-muted-foreground">
              No exercises for this day. Time to rest and recover!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <>
    <Card className="shadow-lg mb-24">
      <CardHeader>
        <CardTitle className="font-headline">{workout.focus}</CardTitle>
        <CardDescription>Follow this plan for an effective workout.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 pt-2">
          {workout.exercises.map((exercise, exIndex) => (
            <div key={exIndex}>
              <div className="flex items-start gap-4">
                 <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0">
                   <Image
                      src={exercise.gifUrl || `https://placehold.co/100x100.png`}
                      data-ai-hint={`${exercise.muscle} exercise`}
                      alt={exercise.name}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                <div className="flex-1">
                  <p className="font-semibold">{exercise.name}</p>
                   {exercise.sets && exercise.reps && exercise.rest && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                      <div className="flex items-center gap-1.5">
                        <Dumbbell className="h-4 w-4" />
                        <span>{exercise.sets} sets</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Repeat className="h-4 w-4" />
                        <span>{exercise.reps} reps</span>
                      </div>
                       <div className="flex items-center gap-1.5">
                         <Timer className="h-4 w-4" />
                         <span>{exercise.rest}</span>
                       </div>
                    </div>
                  )}
                  {exercise.instructions && (
                    <p className="text-sm text-muted-foreground mt-2">{exercise.instructions}</p>
                  )}
                </div>
              </div>
              {exIndex < workout.exercises.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm">
        <Button size="lg" className="w-full shadow-lg" onClick={() => setWorkoutDialogOpen(true)}>
            <PlayCircle className="mr-2 h-5 w-5" />
            Start Workout
        </Button>
    </div>

    <ActiveWorkoutDialog 
        isOpen={isWorkoutDialogOpen}
        onOpenChange={setWorkoutDialogOpen}
        workout={workout}
    />
    </>
  );
}
