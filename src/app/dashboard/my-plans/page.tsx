'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Trash2, Play, FilePlus, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { auth, db } from '@/lib/firebase';
import { collection, doc, deleteDoc } from 'firebase/firestore';
import { useCollection } from '@/firebase/firestore/use-collection';
import { useUser, useMemoFirebase } from '@/firebase';
import type { CustomWorkoutPlan, DayWorkout, CustomExercise } from '@/lib/workouts';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { ActiveWorkoutDialog } from '@/components/active-workout-dialog';

interface StoredWorkoutPlan extends Omit<CustomWorkoutPlan, 'id'> {
    // This interface matches the data fetched from Firestore, which includes the doc ID.
}

export default function MyPlansPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();

  const customPlansQuery = useMemoFirebase(() => 
    user ? collection(db, 'users', user.uid, 'customPlans') : null
  , [user]);

  const { data: savedPlans, isLoading } = useCollection<StoredWorkoutPlan>(customPlansQuery);

  const [isWorkoutDialogOpen, setWorkoutDialogOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<DayWorkout | null>(null);

  const handleStartWorkout = (plan: StoredWorkoutPlan) => {
    if (Object.keys(plan.days).length === 0) {
      toast({
        variant: 'destructive',
        title: 'Empty Plan',
        description: 'This plan has no workout days. Please edit it to add exercises.',
      });
      return;
    }
    const firstDayKey = Object.keys(plan.days)[0];
    const firstDayExercises: CustomExercise[] = plan.days[firstDayKey];

    if (!firstDayExercises || firstDayExercises.length === 0) {
        toast({
            variant: 'destructive',
            title: 'Empty Day',
            description: 'The first day of this plan has no exercises.'
        });
        return;
    }

    const formattedWorkout: DayWorkout = {
      focus: `${plan.planName} - ${firstDayKey}`,
      exercises: firstDayExercises.map(ex => ({
          ...ex,
          sets: ex.customSets,
          reps: ex.customReps,
          rest: ex.customRest
      }))
    };
    setSelectedWorkout(formattedWorkout);
    setWorkoutDialogOpen(true);
  };


  const handleDeletePlan = async (planId: string) => {
    if (!user) return;
    try {
        const planDocRef = doc(db, 'users', user.uid, 'customPlans', planId);
        await deleteDoc(planDocRef);
        toast({
            variant: 'destructive',
            title: 'Plan Deleted',
            description: 'Your custom workout plan has been deleted.',
        });
    } catch (error) {
        console.error("Error deleting plan: ", error);
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Failed to delete the plan. Please try again.',
        });
    }
  };
  
   if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">My Customized Plans</h1>
          <p className="text-muted-foreground">Your collection of custom-built workout plans.</p>
        </div>
        <Link href="/dashboard/my-plans/create">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Plan
          </Button>
        </Link>
      </div>

      {savedPlans && savedPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedPlans.map(plan => (
            <Card key={plan.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{plan.planName}</CardTitle>
                <CardDescription>{plan.description || 'No description'}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 <div className="flex flex-wrap gap-1">
                  {Object.keys(plan.days).map(day => (
                    <span key={day} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{day.substring(0,3)}</span>
                  ))}
                 </div>
              </CardContent>
              <CardContent className="flex justify-end gap-2">
                 <Button variant="outline" size="sm" onClick={() => handleStartWorkout(plan)}>
                  <Play className="mr-2 h-4 w-4" />
                  Start
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete your custom plan: "{plan.planName}". This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDeletePlan(plan.id)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 border-dashed">
            <FilePlus className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold font-headline">No custom plans yet</h3>
            <p className="text-muted-foreground mb-4">Create your first personalized workout plan to see it here.</p>
             <Link href="/dashboard/my-plans/create">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create a Plan
              </Button>
            </Link>
          </Card>
      )}
    </div>
     <ActiveWorkoutDialog 
        isOpen={isWorkoutDialogOpen}
        onOpenChange={setWorkoutDialogOpen}
        workout={selectedWorkout}
      />
    </>
  );
}
    