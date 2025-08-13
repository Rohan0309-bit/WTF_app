
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CRICKET_MALE_GYM_WORKOUT_PLAN,
  CRICKET_MALE_HOME_WORKOUT_PLAN,
  CRICKET_FEMALE_GYM_WORKOUT_PLAN,
  CRICKET_FEMALE_HOME_WORKOUT_PLAN,
  WorkoutSplit
} from '@/lib/workouts';
import { WorkoutDisplay } from '@/components/workout-display';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Gender = 'male' | 'female';
type Location = 'gym' | 'home';

export default function CricketWorkoutPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [location, setLocation] = useState<Location>('gym');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const getWorkoutPlan = (): WorkoutSplit => {
    if (gender === 'male' && location === 'gym') return CRICKET_MALE_GYM_WORKOUT_PLAN;
    if (gender === 'male' && location === 'home') return CRICKET_MALE_HOME_WORKOUT_PLAN;
    if (gender === 'female' && location === 'gym') return CRICKET_FEMALE_GYM_WORKOUT_PLAN;
    return CRICKET_FEMALE_HOME_WORKOUT_PLAN;
  };

  const workoutPlan = getWorkoutPlan();
  const workoutForDay = workoutPlan[selectedDay];
  const days = Object.keys(workoutPlan);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Cricket Workout</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sport-specific program for Cricket players to improve power, agility, and on-field performance.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <Tabs value={gender} onValueChange={(value) => setGender(value as Gender)}>
          <TabsList>
            <TabsTrigger value="male">Male</TabsTrigger>
            <TabsTrigger value="female">Female</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs value={location} onValueChange={(value) => setLocation(value as Location)}>
          <TabsList>
            <TabsTrigger value="gym">Gym</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
       <div className="max-w-4xl mx-auto">
         <Tabs value={selectedDay} onValueChange={setSelectedDay} className="mb-8">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 h-auto">
             {days.map(day => (
              <TabsTrigger key={day} value={day}>{day.substring(0,3)}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

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
