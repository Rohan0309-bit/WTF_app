
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { DayWorkout, ExerciseDetails } from '@/lib/workouts';
import { Check, Flame, Repeat, Timer, X, Plus, Minus } from 'lucide-react';

interface ActiveWorkoutDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  workout: DayWorkout | null;
}

const parseRestTime = (rest: string): number => {
    const match = rest.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 60;
}

export function ActiveWorkoutDialog({ isOpen, onOpenChange, workout }: ActiveWorkoutDialogProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(60);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!workout || !isOpen) {
      // Reset state when dialog is closed or workout changes
      setCurrentExerciseIndex(0);
      setCurrentSet(1);
      setIsResting(false);
      setTimer(0);
      return;
    }

    if (isResting && timer > 0) {
      const interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (isResting && timer <= 0) {
      setIsResting(false);
      advanceToNext();
    }
  }, [isOpen, workout, isResting, timer]);

  if (!workout) return null;

  const totalExercises = workout.exercises.length;
  if (totalExercises === 0 || currentExerciseIndex >= totalExercises) {
    // Workout finished or empty
    return (
       <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-primary">Workout Complete!</DialogTitle>
                <DialogDescription>You crushed it! Well done, Freak.</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <Flame className="h-24 w-24 text-primary animate-pulse" />
                <p className="mt-4 font-semibold">Ready for the next challenge?</p>
            </div>
            <DialogFooter>
                <Button onClick={() => onOpenChange(false)}>Close</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  const currentExercise = workout.exercises[currentExerciseIndex];
  const totalSets = parseInt(currentExercise.sets || '1', 10);
  const progress = ((currentExerciseIndex) / totalExercises) * 100;

  const advanceToNext = () => {
    if (currentSet < totalSets) {
      setCurrentSet(s => s + 1);
    } else {
      if (currentExerciseIndex < totalExercises - 1) {
        setCurrentExerciseIndex(i => i + 1);
        setCurrentSet(1);
      } else {
        // Last exercise finished
        setCurrentExerciseIndex(i => i + 1);
      }
    }
  };

  const handleSetComplete = () => {
    const nextRestTime = parseRestTime(currentExercise.rest || '60s');
    setRestTime(nextRestTime);
    setTimer(nextRestTime);
    setIsResting(true);
  };
  
  const handleSkipRest = () => {
      setIsResting(false);
      advanceToNext();
  }

  const adjustTime = (amount: number) => {
      setRestTime(rt => Math.max(0, rt + amount));
      setTimer(t => Math.max(0, t + amount));
  }


  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        {!isResting ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">{currentExercise.name}</DialogTitle>
              <DialogDescription>Set {currentSet} of {totalSets}</DialogDescription>
            </DialogHeader>

            <div className="py-4 text-center">
              <div className="text-6xl font-bold text-primary mb-2">{currentExercise.reps}</div>
              <div className="text-muted-foreground">Reps</div>
            </div>

             <div className="flex justify-around text-center text-sm">
                <div>
                    <div className="font-bold">{currentSet}/{totalSets}</div>
                    <div className="text-muted-foreground">Set</div>
                </div>
                <div>
                    <div className="font-bold">{currentExercise.rest}</div>
                    <div className="text-muted-foreground">Rest</div>
                </div>
            </div>

            <DialogFooter className="mt-4 flex-col gap-2">
                <Button onClick={handleSetComplete} size="lg" className="w-full">
                    <Check className="mr-2 h-5 w-5" /> Mark Set as Complete
                </Button>
                 <Progress value={progress} className="w-full h-2" />
                 <span className="text-xs text-center text-muted-foreground w-full">Exercise {currentExerciseIndex + 1} of {totalExercises}</span>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl text-center">Rest Time</DialogTitle>
               <DialogDescription className="text-center">Next up: {currentSet < totalSets ? `${currentExercise.name} (Set ${currentSet+1})` : workout.exercises[currentExerciseIndex+1]?.name || 'Final Set!'}</DialogDescription>
            </DialogHeader>

            <div className="py-8 text-center">
              <div className="text-7xl font-bold text-primary mb-2">{timer}</div>
              <div className="text-muted-foreground">Seconds</div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <Button variant="outline" size="icon" onClick={() => adjustTime(-10)}><Minus/></Button>
                <Button onClick={handleSkipRest} variant="secondary">Skip Rest</Button>
                <Button variant="outline" size="icon" onClick={() => adjustTime(10)}><Plus/></Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
