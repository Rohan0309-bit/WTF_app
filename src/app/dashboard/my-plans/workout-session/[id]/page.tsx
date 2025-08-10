
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { ActiveWorkoutDialog } from '@/components/active-workout-dialog';
import { CustomWorkoutPlan, DayWorkout } from '@/lib/workouts';
import { Loader2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { WorkoutDisplay } from '@/components/workout-display';

export default function CustomWorkoutSessionPage() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  
  const [savedPlans] = useLocalStorage<CustomWorkoutPlan[]>('custom-workout-plans', []);
  const [plan, setPlan] = useState<CustomWorkoutPlan | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    const foundPlan = savedPlans.find(p => p.id === id);
    if (foundPlan) {
      setPlan(foundPlan);
      if (Object.keys(foundPlan.days).length > 0) {
        setSelectedDay(Object.keys(foundPlan.days)[0]);
      }
    } else {
      // Handle case where plan is not found, maybe redirect
      router.push('/dashboard/my-plans');
    }
  }, [id, savedPlans, router]);

  if (!plan || !selectedDay) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const workoutForDay = plan.days[selectedDay];

  const formattedWorkout: DayWorkout | null = workoutForDay ? {
      focus: `${plan.name} - ${selectedDay}`,
      exercises: workoutForDay.map(ex => ({
          ...ex,
          sets: ex.customSets,
          reps: ex.customReps,
          rest: ex.customRest
      }))
  } : null;

  return (
    <div className="container mx-auto p-4">
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold font-headline">{plan.name}</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            {plan.description || 'Your custom workout plan.'}
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <Tabs value={selectedDay} onValueChange={setSelectedDay} className="mb-8">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 h-auto">
                {Object.keys(plan.days).map(day => (
                <TabsTrigger key={day} value={day}>{day.substring(0,3)}</TabsTrigger>
                ))}
            </TabsList>
            </Tabs>

            {formattedWorkout ? (
                <WorkoutDisplay workout={formattedWorkout} />
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>No workout</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>No workout assigned for {selectedDay}.</p>
                    </CardContent>
                </Card>
            )}
        </div>
    </div>
  );
}
