
'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tableTennisCategories = [
    { name: "Workouts", href: "/dashboard/general-workouts/athlete/table-tennis/workouts", image: "https://i.ibb.co/HDLtF7vg/Whats-App-Image-2025-09-07-at-16-45-55-1.jpg", hint: "table tennis workout" },
    { name: "Footwork Drills", href: "/dashboard/general-workouts/athlete/table-tennis/drills?category=footwork-drills", image: "https://i.ibb.co/1f37v9sr/Whats-App-Image-2025-09-10-at-22-31-45-1.jpg", hint: "table tennis footwork" },
    { name: "Stroke Training", href: "/dashboard/general-workouts/athlete/table-tennis/drills?category=stroke-training", image: "https://i.ibb.co/4n0B48Nj/Whats-App-Image-2025-09-10-at-22-31-45.jpg", hint: "table tennis stroke" },
    { name: "Serve & Return Drills", href: "/dashboard/general-workouts/athlete/table-tennis/drills?category=serve-return-drills", image: "https://i.ibb.co/tMWHvyr4/Whats-App-Image-2025-09-10-at-22-31-44-1.jpg", hint: "table tennis serve" },
    { name: "Reaction & Reflex Training", href: "/dashboard/general-workouts/athlete/table-tennis/drills?category=reaction-reflex-training", image: "https://i.ibb.co/WwcqrNk/Whats-App-Image-2025-09-10-at-22-31-44.jpg", hint: "table tennis reaction" },
];

export default function TableTennisPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">🏓 Table Tennis Training Hub</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your central command for all table tennis-specific training. Select a category to begin.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tableTennisCategories.map((category, index) => (
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
