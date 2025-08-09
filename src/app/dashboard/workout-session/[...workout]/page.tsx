'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  getWorkoutForSlug,
  DayWorkout,
  ExerciseDetails,
} from '@/lib/workouts';
import { ActiveWorkoutDialog } from '@/components/active-workout-dialog';

function WorkoutSession() {
  const params = useSearchParams();
  const slug = params.get('slug');
  const gender = params.get('gender') as 'male' | 'female' | null;
  const location = params.get('location') as 'gym' | 'home' | null;
  const day = params.get('day');

  if (!slug || !gender || !location) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-destructive">
          Invalid workout parameters provided.
        </p>
      </div>
    );
  }

  const workoutPlan = getWorkoutForSlug(slug, gender, location);

  let workout: DayWorkout | null = null;
  if (workoutPlan) {
    if (day && day in workoutPlan) {
      workout = workoutPlan[day];
    } else if ('Daily' in workoutPlan) {
      workout = workoutPlan['Daily'];
    } else if (!day) {
      // It's a single day plan
      workout = workoutPlan as unknown as DayWorkout;
    }
  }

  if (!workout) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-destructive">
          Could not load the requested workout plan.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-background">
      <ActiveWorkoutDialog
        isOpen={true}
        onOpenChange={() => {
          // In this view, the dialog is always open.
          // We can have it close the tab or navigate away.
          window.close();
        }}
        workout={workout}
        isPageView={true}
      />
    </div>
  );
}

export default function WorkoutSessionPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading workout...</div>}>
            <WorkoutSession />
        </Suspense>
    )
}
