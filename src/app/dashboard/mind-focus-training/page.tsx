'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit, Target, Wind, Puzzle, Heart, Sparkles, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const mindFocusCategories = [
  {
    title: 'Visualization & Goal-Setting',
    description: 'Mental rehearsal, goal mapping, and performance visualization to mentally plan workouts, poses, or athletic moves.',
    href: '#',
    image: 'https://picsum.photos/seed/vis1/600/400',
    dataAiHint: 'focus meditation',
    icon: Target,
    comingSoon: true,
  },
  {
    title: 'Meditation & Mindfulness',
    description: 'Guided meditations, breathing exercises, and body scans to improve focus, reduce stress, and enhance mind-body connection.',
    href: '#',
    image: 'https://picsum.photos/seed/med2/600/400',
    dataAiHint: 'calm meditation',
    icon: Wind,
    comingSoon: true,
  },
  {
    title: 'Cognitive & Focus Drills',
    description: 'Attention exercises, reaction time games, and dual-task challenges to sharpen concentration and decision-making.',
    href: '#',
    image: 'https://picsum.photos/seed/cog3/600/400',
    dataAiHint: 'brain puzzle',
    icon: Puzzle,
    comingSoon: true,
  },
  {
    title: 'Stress & Recovery Techniques',
    description: 'Progressive muscle relaxation and mental recovery visualization for post-workout relaxation and stress reduction.',
    href: '#',
    image: 'https://picsum.photos/seed/rec4/600/400',
    dataAiHint: 'relax nature',
    icon: Heart,
    comingSoon: true,
  },
  {
    title: 'Performance Psychology',
    description: 'Techniques like positive self-talk and confidence building to stay motivated, reduce anxiety, and perform better under pressure.',
    href: '#',
    image: 'https://picsum.photos/seed/psy5/600/400',
    dataAiHint: 'success achievement',
    icon: UserCheck,
    comingSoon: true,
  },
];

export default function MindFocusTrainingPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Mind & Focus Training</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sharpen your mental edge. Exercises and techniques to improve concentration, reduce stress, and enhance performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mindFocusCategories.map((category) => (
          <Link href={category.href} key={category.title} className={category.comingSoon ? "pointer-events-none" : ""}>
            <Card className="overflow-hidden group w-full h-full block hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      data-ai-hint={category.dataAiHint}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-4 right-4">
                         {category.comingSoon && <div className="text-xs bg-black/50 text-white/90 px-2 py-1 rounded-full backdrop-blur-sm">Coming Soon</div>}
                    </div>
                     <div className="absolute bottom-0 p-4">
                        <h3 className="text-lg font-bold font-headline text-white">{category.title}</h3>
                     </div>
                </div>
                <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}