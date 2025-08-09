
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Award, Dumbbell, HeartPulse } from 'lucide-react';

const workoutCategories = [
  {
    title: 'Athlete Workout Plans',
    description: 'High-intensity, sport-specific training programs designed to boost performance, strength, and agility for competitive athletes.',
    href: '/dashboard/general-workouts/athlete',
    icon: <Award className="h-12 w-12 text-primary" />,
  },
  {
    title: 'Non-Athlete Workout Plans',
    description: 'Structured fitness routines for all levels, focusing on general health, muscle toning, weight loss, and building a consistent workout habit.',
    href: '/dashboard/general-workouts/non-athlete',
    icon: <HeartPulse className="h-12 w-12 text-primary" />,
  },
];

export default function GeneralWorkoutsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Explore Workout Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're a competitive athlete or just starting your fitness journey, we have a plan for you. Select a category below to find your perfect workout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {workoutCategories.map((category) => (
          <Link href={category.href} key={category.title} className="flex">
            <Card className="flex flex-col w-full hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                </div>
                <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
