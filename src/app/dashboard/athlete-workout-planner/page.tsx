'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GENDERS, SKILL_LEVELS, SPORTS, WORKOUT_PREFERENCES, WORKOUT_TYPES } from '@/lib/constants';
import { getWorkoutPlan } from './actions';
import { useToast } from '@/hooks/use-toast';
import { WorkoutCard } from '@/components/workout-card';
import { Loader2, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? 'Generating...' : 'Generate Weekly Workout'}
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

export default function AthleteWorkoutPlannerPage() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState(getWorkoutPlan, {
    message: '',
    isSuccess: false,
  });

  useEffect(() => {
    if (state.message && !state.isSuccess) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Create Your Weekly Plan</CardTitle>
            <CardDescription>Tell us about yourself and we'll generate a custom 7-day workout plan for you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="sport">Sport (Optional)</Label>
                <Select name="sport">
                  <SelectTrigger id="sport"><SelectValue placeholder="Select your sport" /></SelectTrigger>
                  <SelectContent>
                    {SPORTS.map((sport) => (
                      <SelectItem key={sport} value={sport}>{sport}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workoutType">Workout Type (Optional)</Label>
                <Select name="workoutType">
                  <SelectTrigger id="workoutType"><SelectValue placeholder="Select body part to train" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Full-Body (Default)</SelectItem>
                    {WORKOUT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skillLevel">Skill Level</Label>
                <Select name="skillLevel" required>
                  <SelectTrigger id="skillLevel"><SelectValue placeholder="Select your skill level" /></SelectTrigger>
                  <SelectContent>
                    {SKILL_LEVELS.map((level) => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
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
                <Label>Workout Preference</Label>
                <RadioGroup name="workoutPreference" defaultValue="gym" className="flex gap-4">
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
          <WorkoutCard plan={state.workoutPlan} showActions={true} />
        ) : (
          <Card className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 border-dashed">
            <Sparkles className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold font-headline">Your weekly workout plan will appear here</h3>
            <p className="text-muted-foreground">Fill out the form to generate your personalized 7-day plan.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
