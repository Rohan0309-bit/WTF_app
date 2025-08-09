
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { DayWorkout, ExerciseDetails } from '@/lib/workouts';
import { Check, Flame, Repeat, Timer, X, Plus, Minus, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ActiveWorkoutDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  workout: DayWorkout | null;
  isPageView?: boolean;
}

const parseRestTime = (rest: string): number => {
    const match = rest.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 60;
}

export function ActiveWorkoutDialog({ isOpen, onOpenChange, workout, isPageView = false }: ActiveWorkoutDialogProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(60);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!workout || !isOpen) {
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
    const content = (
        <>
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
        </>
    );

    if (isPageView) {
        return <div className="p-4 md:p-8 max-w-4xl mx-auto">{content}</div>
    }

    return (
       <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent>{content}</DialogContent>
      </Dialog>
    )
  }

  const currentExercise = workout.exercises[currentExerciseIndex];
  const totalSets = currentExercise.sets ? parseInt(currentExercise.sets, 10) : 1;
  const progress = ((currentExerciseIndex) / totalExercises) * 100;

  const advanceToNext = () => {
    if (currentSet < totalSets) {
      setCurrentSet(s => s + 1);
    } else {
      if (currentExerciseIndex < totalExercises - 1) {
        setCurrentExerciseIndex(i => i + 1);
        setCurrentSet(1);
      } else {
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

  const renderWorkoutContent = () => (
    !isResting ? (
      <>
        <DialogHeader>
            <DialogTitle className="font-headline text-3xl md:text-4xl text-center">{currentExercise.name}</DialogTitle>
            <DialogDescription className="text-center text-lg">Set {currentSet} of {totalSets}</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-auto aspect-square bg-muted rounded-lg overflow-hidden">
                 <Image
                    src={currentExercise.gifUrl || `https://placehold.co/400x400.png`}
                    alt={currentExercise.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    unoptimized
                />
            </div>
            <div className="space-y-6">
                <div className="text-center">
                    <div className="text-7xl font-bold text-primary mb-2">{currentExercise.reps}</div>
                    <div className="text-muted-foreground text-xl">Reps</div>
                </div>

                <div className="flex justify-around text-center text-lg">
                    <div>
                        <div className="font-bold">{currentSet}/{totalSets}</div>
                        <div className="text-muted-foreground">Set</div>
                    </div>
                    <div>
                        <div className="font-bold">{currentExercise.rest}</div>
                        <div className="text-muted-foreground">Rest</div>
                    </div>
                </div>

                {currentExercise.injury_prevention && (
                     <Card className="bg-secondary/50">
                        <CardContent className="p-4">
                            <h4 className="font-semibold flex items-center gap-2 mb-2"><ShieldCheck className="h-5 w-5 text-primary" /> Injury Prevention</h4>
                            <p className="text-sm text-muted-foreground">{currentExercise.injury_prevention}</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
        <DialogFooter className="mt-4 flex-col gap-4">
            <Button onClick={handleSetComplete} size="lg" className="w-full h-14 text-lg">
                <Check className="mr-2 h-6 w-6" /> Mark Set as Complete
            </Button>
            <Progress value={progress} className="w-full h-3" />
            <span className="text-sm text-center text-muted-foreground w-full">Exercise {currentExerciseIndex + 1} of {totalExercises}</span>
        </DialogFooter>
      </>
    ) : (
      <>
        <DialogHeader>
          <DialogTitle className="font-headline text-4xl text-center">Rest Time</DialogTitle>
           <DialogDescription className="text-center text-lg">Next up: {currentSet < totalSets ? `${currentExercise.name} (Set ${currentSet+1})` : workout.exercises[currentExerciseIndex+1]?.name || 'Final Set!'}</DialogDescription>
        </DialogHeader>

        <div className="py-8 text-center my-8">
          <div className="text-8xl font-bold text-primary mb-2">{timer}</div>
          <div className="text-muted-foreground text-xl">Seconds</div>
        </div>

        <div className="flex justify-center items-center gap-4">
            <Button variant="outline" size="lg" onClick={() => adjustTime(-10)}><Minus/></Button>
            <Button onClick={handleSkipRest} variant="secondary" size="lg">Skip Rest</Button>
            <Button variant="outline" size="lg" onClick={() => adjustTime(10)}><Plus/></Button>
        </div>
      </>
    )
  );

  if (isPageView) {
      return (
          <div className="p-4 md:p-8 max-w-4xl mx-auto flex flex-col justify-between min-h-screen">
             {renderWorkoutContent()}
          </div>
      );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-8">
        {renderWorkoutContent()}
      </DialogContent>
    </Dialog>
  );
}
