
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  GENERAL_MALE_GYM_WORKOUT_PLAN,
  GENERAL_MALE_HOME_WORKOUT_PLAN,
  GENERAL_FEMALE_GYM_WORKOUT_PLAN,
  GENERAL_FEMALE_HOME_WORKOUT_PLAN,
  WorkoutSplit
} from '@/lib/workouts';
import { WorkoutDisplay } from '@/components/workout-display';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Gender = 'male' | 'female';
type Location = 'gym' | 'home';

const FullWorkoutPlanDisplay = ({ plan }: { plan: WorkoutSplit }) => (
  <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
    {Object.entries(plan).map(([day, workout], index) => (
      <AccordionItem value={`item-${index}`} key={day}>
        <AccordionTrigger>{day}: {workout.focus}</AccordionTrigger>
        <AccordionContent>
          <WorkoutDisplay workout={workout} />
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);


export default function FullBodyWorkoutPage() {
  const [gender, setGender] = useState<Gender>('male');
  const [location, setLocation] = useState<Location>('gym');

  const getWorkoutPlan = (): WorkoutSplit => {
    if (gender === 'male' && location === 'gym') return GENERAL_MALE_GYM_WORKOUT_PLAN;
    if (gender === 'male' && location === 'home') return GENERAL_MALE_HOME_WORKOUT_PLAN;
    if (gender === 'female' && location === 'gym') return GENERAL_FEMALE_GYM_WORKOUT_PLAN;
    return GENERAL_FEMALE_HOME_WORKOUT_PLAN;
  };

  const workoutPlan = getWorkoutPlan();

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Full Body Workout</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive workouts targeting all major muscle groups.
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
        <Card>
            <CardHeader>
                <CardTitle>Weekly Plan</CardTitle>
            </CardHeader>
            <CardContent>
                <FullWorkoutPlanDisplay plan={workoutPlan} />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
