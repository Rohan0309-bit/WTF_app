
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Calendar as CalendarIcon, Award, Share2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

export default function ProgressPage() {
  // Mock workout dates. In a real app, this would come from a database.
  const [workoutDays, setWorkoutDays] = useState([
    new Date(2024, 6, 1),
    new Date(2024, 6, 3),
    new Date(2024, 6, 4),
    new Date(2024, 6, 7),
    new Date(2024, 6, 9),
    new Date(2024, 6, 11),
    new Date(), // Today
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Your Progress</h1>
        <p className="text-muted-foreground">
          Track your journey, celebrate milestones, and stay motivated.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Workout Streak</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14 Days</div>
            <p className="text-xs text-muted-foreground">Keep it up! You're on fire 🔥</p>
            <Progress value={70} className="mt-4" />
          </CardContent>
        </Card>
        <Card className="lg:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">New badge: "Consistent Freak"</p>
             <div className="flex space-x-2 mt-4">
                <span className="text-2xl">🏅</span>
                <span className="text-2xl">🏆</span>
                <span className="text-2xl">💪</span>
                <span className="text-2xl">🔥</span>
                <span className="text-2xl">🌟</span>
            </div>
          </CardContent>
        </Card>
         <Card className="lg:col-span-1">
            <CardHeader>
                <CardTitle className="font-headline">Workout Log</CardTitle>
                <CardDescription>Your workout history at a glance. Green days are completed workouts.</CardDescription>
            </CardHeader>
            <CardContent>
               <Calendar
                mode="multiple"
                selected={workoutDays}
                onSelect={undefined} // Disable selection
                className="p-0"
                classNames={{
                    day_selected: "bg-green-500 text-white hover:bg-green-600 focus:bg-green-600",
                    day_today: "bg-destructive text-destructive-foreground"
                }}
              />
            </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
            <CardTitle className="font-headline">Lift Progress: Bench Press</CardTitle>
            <CardDescription>Visual representation of your strength gains over time.</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="h-[300px] bg-secondary rounded-lg flex items-center justify-center">
                <BarChart className="h-16 w-16 text-muted-foreground" />
                <p className="ml-4 text-muted-foreground">Chart data coming soon</p>
            </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Share & Export</CardTitle>
                <CardDescription>Download your progress report or share it with friends.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
                <Button>Download PDF</Button>
                <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Progress
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
