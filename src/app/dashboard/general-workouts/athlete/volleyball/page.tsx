
'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const volleyballCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/volleyball/workouts", image: "https://i.ibb.co/HDLtF7vg/Whats-App-Image-2025-09-07-at-16-45-55-1.jpg", hint: "volleyball workout" },
    { name: "Serving Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=serving-drills", image: "https://i.ibb.co/VcwRhp2Q/Whats-App-Image-2025-09-10-at-22-41-09.jpg", hint: "volleyball serving" },
    { name: "Spiking / Attacking Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=spiking-attacking-drills", image: "https://i.ibb.co/chk6sQm4/Whats-App-Image-2025-09-10-at-22-41-08.jpg", hint: "volleyball spiking" },
    { name: "Blocking Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=blocking-drills", image: "https://i.ibb.co/VWc3G8st/Whats-App-Image-2025-09-10-at-22-41-09-1.jpg", hint: "volleyball blocking" },
    { name: "Defense & Passing Drills", href: "/dashboard/general-workouts/athlete/volleyball/drills?category=defense-passing-drills", image: "https://i.ibb.co/KcnbzNbs/Whats-App-Image-2025-09-10-at-22-41-09-2.jpg", hint: "volleyball passing" },
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
              <Card className="overflow-hidden group aspect-square transition-all duration-300 hover:shadow-lg hover:border-primary flex flex-col">
                 <div className="relative h-full">
                    <Image
                      src={category.image}
                      data-ai-hint={category.hint}
                      alt={category.name}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
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
