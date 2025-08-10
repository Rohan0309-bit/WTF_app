'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar as CalendarIcon, Award, History } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

// Mock workout history data
const workoutHistory = [
  { date: 'July 10, 2024', name: 'AI Generated: Full-Body', duration: '45 mins' },
  { date: 'July 8, 2024', name: 'General: Chest & Triceps', duration: '55 mins' },
  { date: 'July 6, 2024', name: 'General: Legs & Abs', duration: '60 mins' },
  { date: 'July 5, 2024', name: 'AI Generated: Posture', duration: '30 mins' },
  { date: 'July 3, 2024', name: 'General: Back & Biceps', duration: '50 mins' },
];

export default function ProgressPage() {
  // Mock workout dates. In a real app, this would come from a database.
  const [workoutDays, setWorkoutDays] = useState([
    new Date(2024, 6, 1),
    new Date(2024, 6, 3),
    new Date(2024, 6, 4),
    new Date(2024, 6, 5),
    new Date(2024, 6, 6),
    new Date(2024, 6, 8),
    new Date(2024, 6, 10),
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
        <Card>
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
        <Card>
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
         <Card className="lg:col-span-1 md:col-span-2">
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
      
      <div className="grid grid-cols-1">
        <Card>
            <CardHeader>
            <CardTitle className="font-headline">Workout History</CardTitle>
            <CardDescription>A log of your most recent training sessions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workoutHistory.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors">
                    <div className="flex items-center gap-4">
                       <div className="bg-muted p-2 rounded-full">
                        <History className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold">{session.name}</p>
                        <p className="text-sm text-muted-foreground">{session.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">{session.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
