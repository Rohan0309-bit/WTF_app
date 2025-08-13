

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { DayWorkout, ExerciseDetails, WARMUP_EXERCISES, COOLDOWN_EXERCISES } from '@/lib/workouts';
import { Check, Flame, Repeat, Timer, X, Plus, Minus, ShieldCheck, ChevronsRight, ChevronsLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface ActiveWorkoutDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  workout: DayWorkout | null;
  isPageView?: boolean;
}

type WorkoutPhase = 'warmup' | 'main' | 'cooldown' | 'complete';

const parseRestTime = (rest: string): number => {
    const match = rest.match(/(\d+)/);
    return match ? parseInt(match[0], 10) : 60;
}

export function ActiveWorkoutDialog({ isOpen, onOpenChange, workout, isPageView = false }: ActiveWorkoutDialogProps) {
  const isSpecialtyWorkout = workout?.focus?.includes('Facial') || workout?.focus?.includes('Vocal');
  const [phase, setPhase] = useState<WorkoutPhase>(isSpecialtyWorkout ? 'main' : 'warmup');
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(60);
  const [timer, setTimer] = useState(0);
  
  const getExercisesForPhase = (currentPhase: WorkoutPhase) => {
    switch (currentPhase) {
      case 'warmup':
        return WARMUP_EXERCISES;
      case 'main':
        return workout?.exercises || [];
      case 'cooldown':
        return COOLDOWN_EXERCISES;
      default:
        return [];
    }
  };

  useEffect(() => {
    if (!workout || !isOpen) {
      setPhase(isSpecialtyWorkout ? 'main' : 'warmup');
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
  }, [isOpen, workout, isResting, timer, isSpecialtyWorkout]);

  if (!workout) return null;

  const exercises = getExercisesForPhase(phase);
  const totalExercises = exercises.length;

  if (phase === 'complete') {
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

  if (totalExercises === 0 || currentExerciseIndex >= totalExercises) {
    if (phase === 'warmup') {
      setPhase('main');
      setCurrentExerciseIndex(0);
      setCurrentSet(1);
    } else if (phase === 'main') {
       if (isSpecialtyWorkout) {
        setPhase('complete');
      } else {
        setPhase('cooldown');
      }
      setCurrentExerciseIndex(0);
      setCurrentSet(1);
    } else if (phase === 'cooldown') {
      setPhase('complete');
    }
    return null; // Let the effect re-render
  }
  
  const currentExercise = exercises[currentExerciseIndex];
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
        setCurrentExerciseIndex(i => i + 1); // This will trigger phase change effect
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

  const handleSkipPhase = () => {
      if(phase === 'warmup') {
          setPhase('main');
          setCurrentExerciseIndex(0);
          setCurrentSet(1);
      } else if (phase === 'cooldown') {
          setPhase('complete');
      }
  }

  const adjustTime = (amount: number) => {
      setRestTime(rt => Math.max(0, rt + amount));
      setTimer(t => Math.max(0, t + amount));
  }
  
  const phaseTitles: Record<WorkoutPhase, string> = {
    warmup: 'Warm-Up',
    main: 'Main Workout',
    cooldown: 'Cool-Down',
    complete: 'Complete'
  }

  const renderWorkoutContent = () => (
    <div className="flex flex-col h-full">
      {!isResting ? (
        <>
          <DialogHeader className="flex-shrink-0">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-bold text-primary uppercase tracking-wider">{phaseTitles[phase]}</div>
              {(phase === 'warmup' || phase === 'cooldown') && (
                <Button variant="ghost" size="sm" onClick={handleSkipPhase}>
                  Skip {phaseTitles[phase]} <ChevronsRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
            <DialogTitle className="font-headline text-2xl md:text-3xl text-center">{currentExercise.name}</DialogTitle>
            <DialogDescription className="text-center text-lg">Set {currentSet} of {totalSets}</DialogDescription>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto my-4 pr-2">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <div className="w-full md:w-1/2 h-auto aspect-square bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={currentExercise.gifUrl || `https://placehold.co/400x400.png`}
                  data-ai-hint={`${currentExercise.muscle} exercise`}
                  alt={currentExercise.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-primary mb-1">{currentExercise.reps}</div>
                  <div className="text-muted-foreground text-lg md:text-xl">Reps</div>
                </div>
                <div className="flex justify-around text-center text-base md:text-lg">
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
                    <CardContent className="p-3">
                      <h4 className="font-semibold flex items-center gap-2 mb-2 text-sm"><ShieldCheck className="h-4 w-4 text-primary" /> Injury Prevention</h4>
                      <p className="text-xs text-muted-foreground">{currentExercise.injury_prevention}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          <DialogFooter className="mt-auto flex-shrink-0 flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button onClick={() => onOpenChange(false)} variant="destructive" className="w-full sm:w-auto">
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button onClick={handleSetComplete} size="lg" className="w-full h-12 text-base md:text-lg flex-1">
                <Check className="mr-2 h-5 w-5" /> Mark Set as Complete
              </Button>
            </div>
            <div>
              <Progress value={progress} className="w-full h-2" />
              <span className="text-xs text-center text-muted-foreground w-full mt-1 block">{phaseTitles[phase]} - Ex {currentExerciseIndex + 1} of {totalExercises}</span>
            </div>
          </DialogFooter>
        </>
      ) : (
        <>
          <DialogHeader>
            <DialogTitle className="font-headline text-3xl md:text-4xl text-center">Rest Time</DialogTitle>
            <DialogDescription className="text-center text-base md:text-lg">Next up: {currentSet < totalSets ? `${currentExercise.name} (Set ${currentSet+1})` : exercises[currentExerciseIndex+1]?.name || 'Final Set!'}</DialogDescription>
          </DialogHeader>
          <div className="py-8 text-center my-auto">
            <div className="text-7xl md:text-8xl font-bold text-primary mb-2">{timer}</div>
            <div className="text-muted-foreground text-lg md:text-xl">Seconds</div>
          </div>
          <DialogFooter className="flex-col gap-4 mt-auto">
            <div className="flex justify-center items-center gap-4">
              <Button variant="outline" size="lg" onClick={() => adjustTime(-10)}><Minus/></Button>
              <Button onClick={handleSkipRest} variant="secondary" size="lg">Skip Rest</Button>
              <Button variant="outline" size="lg" onClick={() => adjustTime(10)}><Plus/></Button>
            </div>
            <Button onClick={() => onOpenChange(false)} variant="destructive" className="w-full sm:w-auto mx-auto">
              <X className="mr-2 h-4 w-4" />
              Cancel Workout
            </Button>
          </DialogFooter>
        </>
      )}
    </div>
  );


  if (isPageView) {
      return (
          <div className="p-4 md:p-6 max-w-4xl mx-auto flex flex-col min-h-screen">
             {renderWorkoutContent()}
          </div>
      );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-4 md:p-6 h-[90vh] md:h-auto flex flex-col">
        {renderWorkoutContent()}
      </DialogContent>
    </Dialog>
  );
}
