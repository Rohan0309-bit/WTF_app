
'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const footballCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/football/workouts", image: "https://i.ibb.co/HDLtF7vg/Whats-App-Image-2025-09-07-at-16-45-55-1.jpg", hint: "football workout" },
    { name: "Dribbling Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=dribbling-drills", image: "https://i.ibb.co/VYYMZ0Xs/Whats-App-Image-2025-09-07-at-23-14-55.jpg", hint: "football dribbling" },
    { name: "Passing Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=passing-drills", image: "https://i.ibb.co/pjR1WmRD/Whats-App-Image-2025-09-07-at-23-14-56.jpg", hint: "football passing" },
    { name: "Shooting & Finishing Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=shooting-finishing-drills", image: "https://i.ibb.co/Ldj3rjwB/Whats-App-Image-2025-09-07-at-23-14-56-1.jpg", hint: "football shooting" },
    { name: "Defensive Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=defensive-drills", image: "https://i.ibb.co/q3QsGw4j/Whats-App-Image-2025-09-07-at-23-20-32.jpg", hint: "football defense" },
    { name: "Conditioning & Agility Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=conditioning-agility-drills", image: "https://i.ibb.co/wFbHKxCn/Whats-App-Image-2025-09-07-at-23-14-56-2.jpg", hint: "football conditioning" },
];

export default function FootballPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">⚽ Football Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your central command for all football-specific training. Select a category to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {footballCategories.map((category, index) => (
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
