
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GENDERS, SKILL_LEVELS, WORKOUT_PREFERENCES } from '@/lib/constants';
import { getWorkoutPlan, FormState } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dumbbell, Repeat, Timer } from 'lucide-react';
import { DailyWorkout } from '@/lib/workout-parser';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? 'Generating...' : 'Generate Workout'}
    </Button>
  );
}

function LoadingSkeleton() {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-6">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="space-y-2 py-2">
                        <Skeleton className="h-6 w-1/2" />
                        <div className="flex items-start gap-4 pl-4 pt-2">
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-5 w-3/4" />
                                <div className="flex gap-4">
                                   <Skeleton className="h-4 w-20" />
                                   <Skeleton className="h-4 w-20" />
                                   <Skeleton className="h-4 w-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

function AIWorkoutDisplay({ plan }: { plan: DailyWorkout[] }) {
  if (!plan || plan.length === 0) {
    return <p>No workout plan available.</p>;
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Your Custom AI Workout Plan</CardTitle>
        <CardDescription>A 7-day plan generated just for you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="item-0">
          {plan.map((day, dayIndex) => (
            <AccordionItem value={`item-${dayIndex}`} key={dayIndex}>
              <AccordionTrigger className="font-headline">{day.day}: {day.title}</AccordionTrigger>
              <AccordionContent>
                {day.exercises && day.exercises.length > 0 ? (
                  <div className="space-y-4 pt-2">
                    {day.exercises.map((exercise, exIndex) => (
                      <div key={exIndex} className="flex items-start gap-4">
                        <div className="flex-1">
                          <p className="font-semibold">{exercise.name}</p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center gap-1.5"><Dumbbell className="h-4 w-4" /><span>{exercise.sets} sets</span></div>
                            <div className="flex items-center gap-1.5"><Repeat className="h-4 w-4" /><span>{exercise.reps} reps</span></div>
                            {exercise.rest && <div className="flex items-center gap-1.5"><Timer className="h-4 w-4" /><span>{exercise.rest}</span></div>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                   <p className="text-muted-foreground text-sm p-2">Rest Day</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}


export default function AiWorkoutPlannerPage() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState<FormState, FormData>(getWorkoutPlan, {
    message: '',
    isSuccess: false,
  });

  useEffect(() => {
    if (state.message && !state.isSuccess && !isPending) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast, isPending]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">AI Workout Planner</CardTitle>
            <CardDescription>Tell us about yourself and we'll generate a custom workout plan for you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="goal">Your Goal</Label>
                <Input id="goal" name="goal" placeholder="e.g., Build muscle, lose fat" defaultValue="General Fitness" required/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skillLevel">Fitness Level</Label>
                <Select name="level" required defaultValue="intermediate">
                  <SelectTrigger id="skillLevel"><SelectValue placeholder="Select your skill level" /></SelectTrigger>
                  <SelectContent>
                    {SKILL_LEVELS.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup name="gender" defaultValue="male" className="flex gap-4">
                  {GENDERS.map((gender) => (
                     <div key={gender.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={gender.value} id={`g-${gender.value}`} />
                        <Label htmlFor={`g-${gender.value}`}>{gender.label}</Label>
                     </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Workout Location</Label>
                <RadioGroup name="location" defaultValue="gym" className="flex gap-4">
                   {WORKOUT_PREFERENCES.map((pref) => (
                     <div key={pref.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={pref.value} id={`p-${pref.value}`} />
                        <Label htmlFor={`p-${pref.value}`}>{pref.label}</Label>
                     </div>
                  ))}
                </RadioGroup>
              </div>

              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        {isPending ? (
            <LoadingSkeleton />
        ) : state.isSuccess && state.workoutPlan ? (
          <AIWorkoutDisplay plan={state.workoutPlan} />
        ) : (
          <Card className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 border-dashed">
            <Sparkles className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold font-headline">Your workout plan will appear here</h3>
            <p className="text-muted-foreground">Fill out the form to generate your personalized plan.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
