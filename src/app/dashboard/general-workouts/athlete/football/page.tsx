
'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const footballCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/football/workouts", image: "https://picsum.photos/400/300?random=1", hint: "football workout" },
    { name: "Dribbling Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=Dribbling%20Drills", image: "https://picsum.photos/400/300?random=2", hint: "football dribbling" },
    { name: "Passing Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=Passing%20Drills", image: "https://picsum.photos/400/300?random=3", hint: "football passing" },
    { name: "Shooting & Finishing Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=Shooting%20&%20Finishing%20Drills", image: "https://picsum.photos/400/300?random=4", hint: "football shooting" },
    { name: "Defensive Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=Defensive%20Drills", image: "https://picsum.photos/400/300?random=5", hint: "football defense" },
    { name: "Conditioning & Agility Drills", href: "/dashboard/general-workouts/athlete/football/drills?category=Conditioning%20&%20Agility%20Drills", image: "https://picsum.photos/400/300?random=6", hint: "football conditioning" },
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
