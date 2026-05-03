'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar as CalendarIcon, Award, History, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Calendar } from '@/components/ui/calendar';
import { useState, useEffect, useMemo } from 'react';
import { format, subDays } from 'date-fns';
import { cn } from '@/lib/utils';

export default function ProgressPage() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Use useMemo to generate data only once on mount to avoid hydration mismatch
  const { workoutDays, workoutHistory } = useMemo(() => {
    const today = new Date();
    const days = [
      subDays(today, 1),
      subDays(today, 3),
      subDays(today, 4),
      subDays(today, 6),
      subDays(today, 8),
      today,
    ];

    const history = [
      { date: format(today, 'MMMM d, yyyy'), name: 'Chest & Triceps Power', duration: '55 mins', type: 'Gym' },
      { date: format(subDays(today, 1), 'MMMM d, yyyy'), name: 'Upper Body Agility', duration: '45 mins', type: 'Athlete' },
      { date: format(subDays(today, 2), 'MMMM d, yyyy'), name: 'Active Recovery Flow', duration: '30 mins', type: 'Yoga' },
      { date: format(subDays(today, 3), 'MMMM d, yyyy'), name: 'Leg Day Freak Mode', duration: '65 mins', type: 'Gym' },
      { date: format(subDays(today, 4), 'MMMM d, yyyy'), name: 'Back & Biceps Thickness', duration: '50 mins', type: 'Gym' },
      { date: format(subDays(today, 5), 'MMMM d, yyyy'), name: 'Core & Mind Focus', duration: '40 mins', type: 'Mental' },
    ];

    return { workoutDays: days, workoutHistory: history };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold font-headline tracking-tight">Your <span className="text-primary">Progress</span></h1>
          <p className="text-muted-foreground mt-1">
            Tracking your evolution into a Well Trained Freak.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="font-bold text-primary">Level 12 Freak</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card/40 backdrop-blur-xl border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Workout Streak</CardTitle>
            <CalendarIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold font-headline">14 Days</div>
            <p className="text-xs text-muted-foreground mt-1">You're in the zone! Keep pushing 🔥</p>
            <Progress value={70} className="mt-6 h-2 bg-primary/20" />
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Badges Earned</CardTitle>
            <Award className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold font-headline">5</div>
            <p className="text-xs text-muted-foreground mt-1">Newest unlock: "Consistent Freak"</p>
             <div className="flex space-x-3 mt-6">
                <div className="text-3xl grayscale hover:grayscale-0 transition-all cursor-help" title="Early Bird">🏅</div>
                <div className="text-3xl cursor-help" title="10 Day Streak">🏆</div>
                <div className="text-3xl cursor-help" title="Power Lifter">💪</div>
                <div className="text-3xl cursor-help" title="Fire Starter">🔥</div>
                <div className="text-3xl cursor-help" title="Master Freak">🌟</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/40 backdrop-blur-xl border-primary/10 lg:col-span-1 md:col-span-2">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Consistency Map</CardTitle>
                <CardDescription className="text-xs">Navigate months to see your long-term consistency.</CardDescription>
            </CardHeader>
            <CardContent>
               <Calendar
                mode="multiple"
                selected={workoutDays}
                className="p-0"
                classNames={{
                    day_selected: "bg-primary text-primary-foreground font-bold rounded-full !opacity-100",
                    day_today: "bg-blue-600 text-white font-extrabold rounded-none",
                    table: "w-full border-collapse space-y-1",
                    head_cell: "text-muted-foreground w-9 font-bold text-[0.7rem] uppercase",
                    day: "h-9 w-9 p-0 font-medium transition-all hover:bg-accent hover:text-accent-foreground"
                }}
              />
              <div className="mt-4 flex items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>Workout Logged</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-blue-600" />
                  <span>Today</span>
                </div>
              </div>
            </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1">
        <Card className="bg-card/40 backdrop-blur-xl border-primary/10 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <CardHeader>
                <div className="flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" />
                    <CardTitle className="font-headline text-xl">Recent Training History</CardTitle>
                </div>
                <CardDescription>Visualizing your efforts from the last 6 sessions.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-primary/5">
                {workoutHistory.map((session, index) => (
                  <div key={index} className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors group">
                    <div className="flex items-center gap-4">
                       <div className={cn(
                           "p-3 rounded-xl transition-colors",
                           index === 0 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground group-hover:bg-primary/10"
                       )}>
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold tracking-tight">{session.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{session.date}</span>
                            <span className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                            <span className="uppercase tracking-tighter font-semibold text-primary/70">{session.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold font-headline text-primary">{session.duration}</p>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Duration</p>
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
