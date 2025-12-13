
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dumbbell, Calculator, UtensilsCrossed, PersonStanding, TrendingUp, BookOpen, ListPlus } from 'lucide-react';
import Image from 'next/image';
import { useUser } from '@/firebase';

const features = [
  {
    title: 'My Customized Plans',
    description: 'Create and manage your own custom workout plans.',
    href: '/dashboard/my-plans',
    image: 'https://i.ibb.co/Z64w6vf/Whats-App-Image-2025-12-11-at-22-18-41.jpg',
  },
   {
    title: 'Exercise Library',
    description: 'Browse hundreds of exercises with animated examples.',
    href: '/dashboard/exercise-library',
    image: 'https://i.ibb.co/ZzHq6fv/Whats-App-Image-2025-12-11-at-22-18-45.jpg',
  },
  {
    title: 'General Workouts',
    description: 'Browse our library of pre-defined workout plans.',
    href: '/dashboard/general-workouts',
    image: 'https://i.ibb.co/MxMLz7L/Whats-App-Image-2025-12-11-at-22-18-43-1.jpg',
  },
  {
    title: 'Calculators',
    description: 'Calculate your BMI and daily calorie needs.',
    href: '/dashboard/calculators',
    image: 'https://i.ibb.co/rKQrtpz/Whats-App-Image-2025-12-11-at-22-18-44.jpg',
  },
  {
    title: 'Nutrition Plans',
    description: 'Find the perfect meal plan for your goals.',
    href: '/dashboard/nutrition',
    image: 'https://i.ibb.co/YF8VcTH/Whats-App-Image-2025-12-11-at-22-18-44-1.jpg',
  },
  {
    title: 'Posing Tutorials',
    description: 'Master the art of physique presentation.',
    href: '/dashboard/posing-tutorials',
    image: 'https://i.ibb.co/HTW1T1jh/Whats-App-Image-2025-12-11-at-22-18-43.jpg',
  },
  {
    title: 'Track Progress',
    description: 'Monitor your gains and stay motivated.',
    href: '/dashboard/progress',
    image: 'https://i.ibb.co/ksPLhW1/Whats-App-Image-2025-12-11-at-22-18-42.jpg',
  },
];

export default function DashboardPage() {
  const { user } = useUser();
  const displayName = user?.displayName?.split(' ')[0] || 'Freak';

  return (
    <div className="flex flex-col gap-8">
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-headline">Welcome, {displayName}!</motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground">Ready to crush your goals today?</motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <Link href={feature.href} >
                <motion.div
                whileHover={{ scale: 1.05, rotateY: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
                >
                <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg group overflow-hidden bg-card/70 dark:bg-card/50 backdrop-blur-lg">
                    <CardHeader className="p-0 relative h-40">
                      <Image 
                          src={feature.image}
                          data-ai-hint="fitness workout"
                          alt={feature.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end">
                         <CardTitle className="font-headline text-white text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                </Card>
                </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
