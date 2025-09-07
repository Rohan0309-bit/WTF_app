
'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const volleyballCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/volleyball/workouts", image: "https://i.ibb.co/V0tJBw3L/Whats-App-Image-2025-06-29-at-01-07-42.jpg", hint: "volleyball workout" },
    { name: "Serving Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=serving-drills", image: "https://i.ibb.co/L5kRScD/volleyball-serve.jpg", hint: "volleyball serving" },
    { name: "Spiking / Attacking Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=spiking-attacking-drills", image: "https://i.ibb.co/N1pWf2Y/volleyball-spike.jpg", hint: "volleyball spiking" },
    { name: "Blocking Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=blocking-drills", image: "https://i.ibb.co/rfnL1rQ/volleyball-block.jpg", hint: "volleyball blocking" },
    { name: "Defense & Passing Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=defense-passing-drills", image: "https://i.ibb.co/f2sFf9J/volleyball-defense.jpg", hint: "volleyball passing" },
];

export default function VolleyballPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">🏐 Volleyball Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your central command for all volleyball-specific training. Select a category to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {volleyballCategories.map((category, index) => (
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
