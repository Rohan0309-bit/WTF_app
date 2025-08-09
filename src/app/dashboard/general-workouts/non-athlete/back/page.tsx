
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  MALE_BACK_GYM,
  MALE_BACK_HOME,
  FEMALE_BACK_GYM,
  FEMALE_BACK_HOME,
} from '@/lib/workouts';
import { WorkoutDisplay } from '@/components/workout-display';

type Gender = 'male' | 'female';
type Location = 'gym' | 'home';

export default function BackWorkoutPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [location, setLocation] = useState<Location>('gym');

  const getWorkout = () => {
    if (gender === 'male' && location === 'gym') {
      return MALE_BACK_GYM;
    }
    if (gender === 'male' && location === 'home') {
      return MALE_BACK_HOME;
    }
    if (gender === 'female' && location === 'gym') {
      return FEMALE_BACK_GYM;
    }
    if (gender === 'female' && location === 'home') {
      return FEMALE_BACK_HOME;
    }
    return MALE_BACK_GYM;
  };

  const workout = getWorkout();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Back Workout</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strengthen your back with these targeted exercises.
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
