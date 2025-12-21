
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GENDERS, SKILL_LEVELS, WORKOUT_PREFERENCES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { WorkoutSessionView } from '@/components/workout-session-view';

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

export default function AiWorkoutPlannerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setWorkoutPlan(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/ai-workout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate workout plan.');
        }

        const result = await response.json();
        setWorkoutPlan(result.plan);

    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: error instanceof Error ? error.message : 'An unknown error occurred.',
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">AI Workout Planner</CardTitle>
            <CardDescription>Tell us about yourself and we'll generate a custom workout plan for you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
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

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Generating...' : 'Generate Workout'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        {isLoading ? (
            <LoadingSkeleton />
        ) : workoutPlan ? (
          <WorkoutSessionView plan={workoutPlan} />
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
