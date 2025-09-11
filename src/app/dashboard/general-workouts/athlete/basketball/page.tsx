'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const basketballCategories = [
  { name: "Workouts", slug: "workouts", image: "https://i.ibb.co/HDLtF7vg/Whats-App-Image-2025-09-07-at-16-45-55-1.jpg", hint: "basketball workout" },
  { name: "Dribbling & Ball Handling", slug: "dribbling-ball-handling", image: "https://i.ibb.co/Ndqt8yWL/Whats-App-Image-2025-09-10-at-22-17-04.jpg", hint: "basketball dribbling" },
  { name: "Shooting & Scoring", slug: "shooting-scoring", image: "https://i.ibb.co/ksVBjtV2/Whats-App-Image-2025-09-10-at-22-17-04-1.jpg", hint: "basketball shooting" },
  { name: "Passing & Team Play", slug: "passing-team-play", image: "https://i.ibb.co/5hP74ZyB/Whats-App-Image-2025-09-10-at-22-20-58.jpg", hint: "basketball passing" },
  { name: "Defense & Rebounding", slug: "defense-rebounding", image: "https://i.ibb.co/ZzrwNdDY/Whats-App-Image-2025-09-10-at-22-20-57.jpg", hint: "basketball defense" },
  { name: "Agility & Conditioning", slug: "agility-conditioning", image: "https://i.ibb.co/LdCS4bDc/Whats-App-Image-2025-09-10-at-22-20-58-1.jpg", hint: "basketball conditioning" },
];

export default function BasketballPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">🏀 Basketball Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your central command for all basketball-specific training. Select a category to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {basketballCategories.map((category, index) => (
          <Link
            href={
              category.slug === "workouts"
                ? `/dashboard/general-workouts/athlete/basketball/workouts`
                : `/dashboard/general-workouts/athlete/basketball/drills?category=${category.slug}`
            }
            key={category.slug}
          >
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
                    <h3 className="text-xl font-bold font-headline text-white">
                      {category.name}
                    </h3>
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
