
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  CRICKET_MALE_GYM_WORKOUT_PLAN,
  CRICKET_MALE_HOME_WORKOUT_PLAN,
  CRICKET_FEMALE_GYM_WORKOUT_PLAN,
  CRICKET_FEMALE_HOME_WORKOUT_PLAN,
  WorkoutSplit
} from '@/lib/workouts';
import { WorkoutDisplay } from '@/components/workout-display';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, CheckCircle, XCircle, Youtube, Shield } from 'lucide-react';
import { cricketSubCategories, type Drill } from '@/lib/drills';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { CRICKET_CATEGORIES } from '@/lib/constants';

type Gender = 'male' | 'female';
type Location = 'gym' | 'home';

function WorkoutPlanner() {
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
        <div className="space-y-6">
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
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
    )
}

function DrillsLibrary({ drills, categoryName }: { drills: Drill[], categoryName: string }) {
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);
  
  return (
     <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedDrill(null)}>
      <Accordion type="single" collapsible defaultValue={categoryName} className="w-full space-y-4">
        <AccordionItem value={categoryName} className="border rounded-lg p-2">
          <AccordionTrigger className="text-xl font-headline px-4 hover:no-underline">{categoryName}</AccordionTrigger>
          <AccordionContent className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {drills.map((drill) => (
                <DialogTrigger asChild key={drill.name} onClick={() => setSelectedDrill(drill)}>
                   <Card className="overflow-hidden group cursor-pointer h-full hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col">
                    <div className="relative">
                      <Image
                        src={drill.image}
                        data-ai-hint={drill.hint}
                        alt={drill.name}
                        width={400}
                        height={300}
                        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <CardHeader className="flex-grow">
                        <CardTitle className="font-headline text-lg">{drill.name}</CardTitle>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {selectedDrill && (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="font-headline text-3xl">{selectedDrill.name}</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-4">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                            src={selectedDrill.image}
                            alt={selectedDrill.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                     <Link href={selectedDrill.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full">
                            <Youtube className="mr-2 h-5 w-5" />
                            Watch on YouTube
                        </Button>
                    </Link>
                </div>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-primary"><CheckCircle /> How to Perform</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.steps.map((step, i) => <li key={i}>{step}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-destructive"><XCircle /> Common Mistakes</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.mistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-green-500"><Shield /> Injury Prevention</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.injuryPrevention.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </DialogContent>
    )}
    </Dialog>
  );
}


export default function CricketWorkoutPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Cricket Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your complete resource for cricket workouts, drills, and performance training.
        </p>
      </div>

       <Tabs defaultValue="Workout" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto mb-6">
            {CRICKET_CATEGORIES.map(category => (
                <TabsTrigger key={category.name} value={category.name}>{category.name}</TabsTrigger>
            ))}
        </TabsList>
        <TabsContent value="Workout">
            <WorkoutPlanner />
        </TabsContent>
        <TabsContent value="Shot Training">
            <DrillsLibrary drills={cricketSubCategories["Shot Training"]} categoryName="Shot Training" />
        </TabsContent>
        <TabsContent value="Bowling Drills">
            <DrillsLibrary drills={cricketSubCategories["Bowling Drills"]} categoryName="Bowling Drills" />
        </TabsContent>
        <TabsContent value="Fielding Drills">
            <DrillsLibrary drills={cricketSubCategories["Fielding Drills"]} categoryName="Fielding Drills" />
        </TabsContent>
        <TabsContent value="Wicketkeeping Drills">
            <DrillsLibrary drills={cricketSubCategories["Wicketkeeping Drills"]} categoryName="Wicketkeeping Drills" />
        </TabsContent>
        </Tabs>
    </div>
  );
}
