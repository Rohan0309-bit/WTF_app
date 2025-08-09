
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { type DailyWorkout } from '@/lib/workout-parser';
import { CheckCircle2, Circle, Dumbbell, Repeat, Timer } from 'lucide-react';

interface ActiveWorkoutDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  workout: DailyWorkout | null;
}

export function ActiveWorkoutDialog({ isOpen, onOpenChange, workout }: ActiveWorkoutDialogProps) {
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());

  if (!workout) return null;

  const toggleExercise = (index: number) => {
    setCompletedExercises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isWorkoutComplete = completedExercises.size === workout.exercises.length;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline">{workout.day}: {workout.title}</DialogTitle>
          <DialogDescription>Focus on your form and crush this workout!</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
          {workout.exercises.map((exercise, index) => {
            const isCompleted = completedExercises.has(index);
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-3 rounded-lg transition-colors data-[completed=true]:bg-green-900/20 data-[completed=true]:text-muted-foreground"
                data-completed={isCompleted}
              >
                <Button variant="ghost" size="icon" className="h-8 w-8 mt-1" onClick={() => toggleExercise(index)}>
                  {isCompleted ? <CheckCircle2 className="text-primary h-6 w-6" /> : <Circle className="h-6 w-6" />}
                </Button>
                <div className="flex-1">
                  <p className="font-semibold">{exercise.name}</p>
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
                </div>
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)} variant={isWorkoutComplete ? 'default' : 'secondary'}>
            {isWorkoutComplete ? 'Finish Workout 💪' : 'Close'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
