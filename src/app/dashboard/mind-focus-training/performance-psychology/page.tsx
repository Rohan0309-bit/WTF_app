
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Shield, MessageSquare, Brain, Clock, Drama, BookOpen, Star } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    day: "Day 1",
    title: 'Confidence Building',
    type: 'Self-belief',
    duration: '3–5 min',
    description: 'Recall 3 past wins or achievements (gym PRs, discipline, physique progress). Relive how it felt. Anchor that feeling before training.',
    purpose: 'Builds confidence & reduces self-doubt.',
    bestUse: 'Before heavy workouts / posing',
    youtubeUrl: 'https://youtu.be/8IhFPJ6Pysc?si=9xylCfL94r4wpl8F',
    icon: Shield,
  },
  {
    day: "Day 2",
    title: 'Positive Self-Talk Training',
    type: 'Internal dialogue',
    duration: '3–4 min',
    description: 'Replace negative thoughts with cues like: “Strong & controlled” or “I finish what I start.” Repeat during breathing.',
    purpose: 'Improves consistency & controls mental fatigue.',
    bestUse: 'During tough training phases',
    youtubeUrl: 'https://youtu.be/71_NkXgAK1g?si=rS_qFAJci6URdRho',
    icon: MessageSquare,
  },
  {
    day: "Day 3",
    title: 'Pressure Simulation',
    type: 'Handling stress',
    duration: '4–6 min',
    description: 'Visualize a high-pressure situation. Practice staying calm with slow breathing. Mentally execute perfectly.',
    purpose: 'Reduces anxiety & prepares for competition/stage.',
    bestUse: 'Athletes & posing practice',
    youtubeUrl: 'https://youtu.be/krOLhXWLj-Q?si=4CJXJ-E7i9bbU7Dx',
    icon: Drama,
  },
  {
    day: "Day 4",
    title: 'Focus Reset Ritual',
    type: 'Attention control',
    duration: '2–3 min',
    description: 'Use a short breathing exercise + a keyword (e.g., “Focus”) anytime distraction hits.',
    purpose: 'Improves in-workout focus & prevents mental drift.',
    bestUse: 'Mid-workout / between sets',
    youtubeUrl: 'https://youtu.be/QtE00VP4W3Y?si=OHVzu03B-GeoANqa',
    icon: Clock,
  },
  {
    day: "Day 5",
    title: 'Emotional Control',
    type: 'Emotion regulation',
    duration: '4–5 min',
    description: 'Observe emotions without reacting. Label them (“stress”, “fear”, “excitement”) and let them pass.',
    purpose: 'Controls anger, frustration & improves decision-making.',
    bestUse: 'Bad days / plateaus',
    youtubeUrl: 'https://youtu.be/f0oG1J2escU?si=K3056LXoixTz2CKh',
    icon: Brain,
  },
  {
    day: "Day 6",
    title: 'Discipline Conditioning',
    type: 'Habit psychology',
    duration: '3–5 min',
    description: 'Visualize showing up even when motivation is low. Commit to the process, not your mood.',
    purpose: 'Builds long-term consistency & separates amateurs from pros.',
    bestUse: 'Cutting / long programs',
    youtubeUrl: 'https://youtu.be/CU8pKyCs4_o?si=rsDxgAC6X9-oERQ7',
    icon: BookOpen,
  },
  {
    day: "Day 7",
    title: 'Competition / Stage Mindset',
    type: 'Peak performance',
    duration: '5–7 min',
    description: 'Full mental rehearsal: calm breathing + confidence recall. Lock-in execution mindset.',
    purpose: 'Peak focus & elite performance readiness.',
    bestUse: 'Event / shoot / competition days',
    youtubeUrl: 'https://youtu.be/n4SPwPhWu8g?si=VUGo4Zpo2hHRJpa4',
    icon: Star,
  }
];

export default function PerformancePsychologyPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Performance Psychology</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A 7-day plan to build mental toughness, control your internal dialogue, and perform under pressure.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto" defaultValue="item-0">
        {modules.map((item, index) => {
          const Icon = item.icon;
          return (
            <AccordionItem value={`item-${index}`} key={item.day}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <span>{item.day}: {item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <Card className="border-none shadow-none">
                    <CardContent className="grid md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm">How it Works:</h4>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </div>
                             <div className="space-y-1">
                                <h4 className="font-semibold text-sm">Purpose:</h4>
                                <p className="text-muted-foreground text-sm">{item.purpose}</p>
                            </div>
                            <div className="text-sm">
                                <span className="font-semibold">Best Use:</span> <span className="text-muted-foreground">{item.bestUse}</span>
                            </div>
                             <div className="text-sm">
                                <span className="font-semibold">Type:</span> <span className="text-muted-foreground">{item.type} ({item.duration})</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-secondary p-6 rounded-lg">
                           <Link href={item.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button className="w-full">
                                    <Youtube className="mr-2 h-5 w-5" />
                                    Watch on YouTube
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  );
}
