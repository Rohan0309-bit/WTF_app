
'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cricketCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/cricket/workouts", image: "https://i.ibb.co/HDLtF7vg/Whats-App-Image-2025-09-07-at-16-45-55-1.jpg", hint: "cricket workout" },
    { name: "Shot Training", href: "/dashboard/general-workouts/athlete/cricket/drills?category=Shot%20Training", image: "https://i.ibb.co/4nwcvrw6/Whats-App-Image-2025-09-07-at-16-45-56.jpg", hint: "shot training" },
    { name: "Bowling Drills", href: "/dashboard/general-workouts/athlete/cricket/drills?category=Bowling%20Drills", image: "https://i.ibb.co/qYmC0rDP/Whats-App-Image-2025-09-07-at-16-45-54.jpg", hint: "bowling drills" },
    { name: "Fielding Drills", href: "/dashboard/general-workouts/athlete/cricket/drills?category=Fielding%20Drills", image: "https://i.ibb.co/CKFnV9sL/Whats-App-Image-2025-09-07-at-16-45-55.jpg", hint: "fielding drills" },
    { name: "Wicketkeeping", href: "/dashboard/general-workouts/athlete/cricket/drills?category=Wicketkeeping%20Drills", image: "https://i.ibb.co/674tvkPT/Whats-App-Image-2025-09-07-at-16-45-54-1.jpg", hint: "wicketkeeping drills" },
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
              <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-lg hover:border-primary">
                 <div className="relative">
                    <Image
                      src={category.image}
                      data-ai-hint={category.hint}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-xl font-bold font-headline text-white">{category.name}</h3>
                    </div>
                  </div>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
