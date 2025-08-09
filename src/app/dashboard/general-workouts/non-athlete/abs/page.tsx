
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  GENERAL_MALE_GYM_WORKOUT_PLAN,
  GENERAL_MALE_HOME_WORKOUT_PLAN,
  GENERAL_FEMALE_GYM_WORKOUT_PLAN,
  GENERAL_FEMALE_HOME_WORKOUT_PLAN,
  DayWorkout
} from '@/lib/workouts';
import { WorkoutDisplay } from '@/components/workout-display';

type Gender = 'male' | 'female';
type Location = 'gym' | 'home';

export default function AbsWorkoutPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [location, setLocation] = useState<Location>('gym');

  const getWorkout = (): DayWorkout => {
    let plan;
    if (gender === 'male' && location === 'gym') plan = GENERAL_MALE_GYM_WORKOUT_PLAN;
    else if (gender === 'male' && location === 'home') plan = GENERAL_MALE_HOME_WORKOUT_PLAN;
    else if (gender === 'female' && location === 'gym') plan = GENERAL_FEMALE_GYM_WORKOUT_PLAN;
    else plan = GENERAL_FEMALE_HOME_WORKOUT_PLAN;
    
    const coreExercises = Object.values(plan)
      .flatMap(day => day.exercises)
      .filter(ex => ex.muscle === 'Core');

    return {
      focus: "Abs & Core",
      exercises: coreExercises.slice(0, 6) // Get up to 6 core exercises
    };
  };

  const workout = getWorkout();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Abs & Core Workout</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sculpt your abs and strengthen your core.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
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
        <WorkoutDisplay workout={workout} />
      </div>
    </div>
  );
}
