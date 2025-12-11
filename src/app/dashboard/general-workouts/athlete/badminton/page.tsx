
'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const badmintonCategories = [
    { name: "Workouts", slug: "workouts", href: "/dashboard/general-workouts/athlete/badminton/workouts", image: "https://i.ibb.co/HDLtF7vg/Whats-App-Image-2025-09-07-at-16-45-55-1.jpg", hint: "badminton workout" },
    { name: "Footwork Drills", slug: "footwork-drills", image: "https://i.ibb.co/2GQ9myt/Whats-App-Image-2025-09-07-at-17-11-01.jpg", hint: "badminton footwork" },
    { name: "Stroke Training", slug: "stroke-training", image: "https://i.ibb.co/PGNy8cP7/Whats-App-Image-2025-09-07-at-17-07-21-1.jpg", hint: "badminton stroke" },
    { name: "Defense Drills", slug: "defense-drills", image: "https://i.ibb.co/NdGLKzfy/Whats-App-Image-2025-09-07-at-17-08-28.jpg", hint: "badminton defense" },
    { name: "Reaction & Reflex Training", slug: "reaction-reflex-training", image: "https://i.ibb.co/5WPfRVBc/Whats-App-Image-2025-09-07-at-17-08-48.jpg", hint: "badminton reaction" },
];

export default function BadmintonPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">🏸 Badminton Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your central command for all badminton-specific training. Select a category to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {badmintonCategories.map((category, index) => (
          <Link 
            href={
                category.slug === 'workouts' 
                ? category.href 
                : `/dashboard/general-workouts/athlete/badminton/drills?category=${category.slug}`
            } 
            key={category.name}
          >
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
