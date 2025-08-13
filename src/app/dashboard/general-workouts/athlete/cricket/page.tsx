
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Target, Activity, Shield, Stethoscope, Dumbbell, Utensils } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cricketCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/cricket/workouts", icon: Dumbbell, color: "from-green-500 to-emerald-500" },
    { name: "Shot Training", href: "/dashboard/general-workouts/athlete/cricket/drills", icon: Target, color: "from-blue-500 to-sky-500" },
    { name: "Bowling Drills", href: "/dashboard/general-workouts/athlete/cricket/drills", icon: Activity, color: "from-red-500 to-rose-500" },
    { name: "Fielding Drills", href: "/dashboard/general-workouts/athlete/cricket/drills", icon: Shield, color: "from-purple-500 to-violet-500" },
    { name: "Wicketkeeping", href: "/dashboard/general-workouts/athlete/cricket/drills", icon: Stethoscope, color: "from-orange-500 to-amber-500" },
];

export default function CricketPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">🏏 Cricket Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your central command for all cricket-specific training. Select a category to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cricketCategories.map((category, index) => (
          <Link href={category.href} key={category.name}>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
            >
              <Card className={`overflow-hidden group h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br ${category.color} text-white`}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <category.icon className="h-16 w-16 mb-4 drop-shadow-lg"/>
                    <h3 className="text-xl font-bold font-headline">{category.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
