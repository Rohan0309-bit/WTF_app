
'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const basketballCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/basketball/workouts", image: "https://picsum.photos/400/300?random=20", hint: "basketball workout" },
    { name: "Dribbling & Ball Handling", href: "/dashboard/general-workouts/athlete/basketball/drills?category=Dribbling%20&%20Ball%20Handling", image: "https://picsum.photos/400/300?random=21", hint: "basketball dribbling" },
    { name: "Shooting & Scoring", href: "/dashboard/general-workouts/athlete/basketball/drills?category=Shooting%20&%20Scoring", image: "https://picsum.photos/400/300?random=22", hint: "basketball shooting" },
    { name: "Passing & Team Play", href: "/dashboard/general-workouts/athlete/basketball/drills?category=Passing%20&%20Team%20Play", image: "https://picsum.photos/400/300?random=23", hint: "basketball passing" },
    { name: "Defense & Rebounding", href: "/dashboard/general-workouts/athlete/basketball/drills?category=Defense%20&%20Rebounding", image: "https://picsum.photos/400/300?random=24", hint: "basketball defense" },
    { name: "Agility & Conditioning", href: "/dashboard/general-workouts/athlete/basketball/drills?category=Agility%20&%20Conditioning", image: "https://picsum.photos/400/300?random=25", hint: "basketball conditioning" },
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
