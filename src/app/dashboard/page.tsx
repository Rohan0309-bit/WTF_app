'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dumbbell, Calculator, UtensilsCrossed, PersonStanding, TrendingUp, BookOpen, ListPlus, BrainCircuit, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useUser } from '@/firebase';
import { cn } from '@/lib/utils';

const features = [
   {
    title: 'AI Workout Planner',
    description: 'Generate a custom workout plan with our AI trainer.',
    href: '/dashboard/ai-workout-planner',
    image: 'https://i.ibb.co/JWmC8kBm/Whats-App-Image-2025-12-21-at-23-50-25.jpg',
    comingSoon: true,
  },
  {
    title: 'General Workouts',
    description: 'Browse our library of pre-defined workout plans.',
    href: '/dashboard/general-workouts',
    image: 'https://i.ibb.co/MxMLz7L2/Whats-App-Image-2025-12-11-at-22-18-43-1.jpg',
  },
  {
    title: 'My Customized Plans',
    description: 'Create and manage your own custom workout plans.',
    href: '/dashboard/my-plans',
    image: 'https://i.ibb.co/Z64w6vf0/Whats-App-Image-2025-12-11-at-22-18-41.jpg',
  },
  {
    title: 'Exercise Library',
    description: 'Browse hundreds of exercises with animated examples.',
    href: '/dashboard/exercise-library',
    image: 'https://i.ibb.co/ZzHq6fvz/Whats-App-Image-2025-12-11-at-22-18-45.jpg',
  },
  {
    title: 'Mind & Focus Training',
    description: 'Sharpen your mental game with focus and meditation exercises.',
    href: '/dashboard/mind-focus-training',
    image: 'https://i.ibb.co/bjL1Zbj3/Whats-App-Image-2025-12-13-at-12-48-08.jpg',
  },
  {
    title: 'Posing Tutorials',
    description: 'Master the art of physique presentation.',
    href: '/dashboard/posing-tutorials',
    image: 'https://i.ibb.co/HTW1T1jh/Whats-App-Image-2025-12-11-at-22-18-43.jpg',
  },
  {
    title: 'Nutrition Plans',
    description: 'Find the perfect meal plan for your goals.',
    href: '/dashboard/nutrition',
    image: 'https://i.ibb.co/YF8VcTHH/Whats-App-Image-2025-12-11-at-22-18-44-1.jpg',
  },
  {
    title: 'Calculators',
    description: 'Calculate your BMI and daily calorie needs.',
    href: '/dashboard/calculators',
    image: 'https://i.ibb.co/rKQrtpz7/Whats-App-Image-2025-12-11-at-22-18-44.jpg',
  },
  {
    title: 'Track Progress',
    description: 'Monitor your gains and stay motivated.',
    href: '/dashboard/progress',
    image: 'https://i.ibb.co/ksPLhW16/Whats-App-Image-2025-12-11-at-22-18-42.jpg',
    comingSoon: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardPage() {
  const { user } = useUser();
  const displayName = user?.displayName?.split(' ')[0] || 'Freak';

  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-headline tracking-tight">Welcome, <span className="text-primary">{displayName}</span>!</h1>
        <p className="text-muted-foreground mt-1">Ready to crush your goals today?</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={item}
          >
            <Link href={feature.href} className={cn(feature.comingSoon && "pointer-events-none opacity-80")}>
                <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="h-full"
                >
                <Card className="h-full border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,163,108,0.3)] group overflow-hidden bg-card/40 dark:bg-card/20 backdrop-blur-xl">
                    <CardHeader className="p-0 relative h-44">
                      <Image 
                          src={feature.image}
                          data-ai-hint="fitness workout"
                          alt={feature.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-4 flex flex-col justify-between">
                         <div>
                            {feature.comingSoon && (
                              <div className="text-[10px] uppercase tracking-widest font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full w-fit shadow-lg">
                                Coming Soon
                              </div>
                            )}
                         </div>
                         <CardTitle className="font-headline text-white text-xl drop-shadow-md">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                </Card>
                </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
