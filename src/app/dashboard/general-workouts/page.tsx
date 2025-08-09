
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const workoutCategories = [
  {
    title: 'Athlete Workout Plans',
    description: 'High-intensity, sport-specific training programs designed to boost performance, strength, and agility for competitive athletes.',
    href: '/dashboard/general-workouts/athlete',
    image: 'https://i.ibb.co/V0tJBw3L/Whats-App-Image-2025-06-29-at-01-07-42.jpg',
  },
  {
    title: 'Non-Athlete Workout Plans',
    description: 'Structured fitness routines for all levels, focusing on general health, muscle toning, weight loss, and building a consistent workout habit.',
    href: '/dashboard/general-workouts/non-athlete',
    image: 'https://i.ibb.co/W4B3YwPx/Whats-App-Image-2025-06-29-at-01-01-13.jpg',
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
             <motion.div
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              className="w-full"
            >
              <Card className="flex flex-col w-full h-full hover:border-primary transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <CardHeader className="p-0">
                    <Image 
                        src={category.image}
                        alt={category.title}
                        width={600}
                        height={400}
                        className="object-contain w-full h-48 transition-transform duration-300 group-hover:scale-105"
                    />
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="font-headline text-xl mb-2">{category.title}</CardTitle>
                  <p className="text-muted-foreground flex-grow">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
