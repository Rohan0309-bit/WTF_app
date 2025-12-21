'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Repeat, Timer, BrainCircuit, Flame, Wind } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Exercise = {
  name: string;
  sets: number;
  reps: string;
  rest_seconds: number;
  pro_tip: string;
};

type WarmupCooldown = {
  name: string;
  duration_sec: number;
};

type WorkoutPlan = {
  plan_name: string;
  difficulty: string;
  estimated_duration_mins: number;
  warmup: WarmupCooldown[];
  exercises: Exercise[];
  cooldown: WarmupCooldown[];
};

interface WorkoutSessionViewProps {
  plan: WorkoutPlan;
}

export function WorkoutSessionView({ plan }: WorkoutSessionViewProps) {
  if (!plan) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Plan Available</CardTitle>
          <CardDescription>Could not load the workout plan.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{plan.plan_name}</CardTitle>
        <CardDescription>
          A {plan.difficulty} plan estimated to take {plan.estimated_duration_mins} minutes.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="exercises" className="w-full">
          <AccordionItem value="warmup">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-primary" />
                Warm-Up
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2 pt-2">
                {plan.warmup.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item.name} ({item.duration_sec} sec)
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="exercises">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-primary" />
                Main Workout
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              {plan.exercises.map((exercise, index) => (
                <div key={index} className="space-y-2 rounded-lg border p-3">
                  <p className="font-semibold">{exercise.name}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Repeat className="h-4 w-4" />
                      <span>{exercise.sets} sets x {exercise.reps}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Timer className="h-4 w-4" />
                      <span>{exercise.rest_seconds}s rest</span>
                    </div>
                  </div>
                  {exercise.pro_tip && (
                     <div className="flex items-start gap-2 text-xs text-amber-600 dark:text-amber-400 pt-1">
                        <BrainCircuit className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <p>{exercise.pro_tip}</p>
                     </div>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cooldown">
            <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-primary" />
                    Cool-Down
                </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2 pt-2">
                {plan.cooldown.map((item, index) => (
                  <li key={index} className="text-muted-foreground">
                    {item.name} ({item.duration_sec} sec)
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
