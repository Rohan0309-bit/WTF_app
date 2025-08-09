'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MALE_VOCAL_WORKOUT_PLAN, FEMALE_VOCAL_WORKOUT_PLAN, WorkoutSplit } from '@/lib/workouts';
import { WorkoutDisplay } from '@/components/workout-display';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type Gender = 'male' | 'female';

export default function VocalWorkoutPage() {
  const [gender, setGender] = useState<Gender>('male');

  const getWorkoutPlan = (): WorkoutSplit => {
    return gender === 'male' ? MALE_VOCAL_WORKOUT_PLAN : FEMALE_VOCAL_WORKOUT_PLAN;
  };

  const workoutPlan = getWorkoutPlan();
  const workoutForDay = workoutPlan['Daily'];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Vocal Exercises</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strengthen your voice, improve clarity, and increase your vocal stamina.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <Tabs value={gender} onValueChange={(value) => setGender(value as Gender)}>
          <TabsList>
            <TabsTrigger value="male">Male</TabsTrigger>
            <TabsTrigger value="female">Female</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
       <div className="max-w-4xl mx-auto">
        {workoutForDay ? (
            <WorkoutDisplay workout={workoutForDay} />
        ) : (
             <Card>
                <CardHeader>
                    <CardTitle>No workout</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>No workout plan found for the selected day.</p>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}