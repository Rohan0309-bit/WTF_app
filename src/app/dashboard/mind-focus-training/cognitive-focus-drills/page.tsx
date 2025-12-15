
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Target, AlertTriangle, Cpu, Brain, Shield, GitBranch, Zap } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    day: "Day 1",
    title: 'Single-Point Focus Drill',
    type: 'Concentration Training',
    duration: '3–5 min',
    description: 'Focus on one point/object on the screen. Do not let eyes or mind wander. If distracted, reset focus.',
    purpose: 'Builds laser focus & improves mind control during heavy lifts.',
    bestUse: 'Pre-workout',
    youtubeUrl: 'https://youtu.be/vhaYnT08kLI?si=H8GFVF-Z4_YdZE2Z',
    icon: Target,
  },
  {
    day: "Day 2",
    title: 'Reaction Time Drill',
    type: 'Speed & Alertness',
    duration: '3–4 min',
    description: 'Tap screen when color/symbol appears at random intervals.',
    purpose: 'Improves reaction speed & enhances athletic reflexes.',
    bestUse: 'Sports / warm-up',
    youtubeUrl: 'https://youtu.be/E7HOlJ_OhEo?si=oi5EX41tmztC-Lti',
    icon: Zap,
  },
  {
    day: "Day 3",
    title: 'Dual-Task Challenge',
    type: 'Cognitive Load Training',
    duration: '4–6 min',
    description: 'Do light physical movement (marching / wall sit) while simultaneously counting backwards or solving simple math.',
    purpose: 'Trains focus under fatigue & improves performance in real workouts.',
    bestUse: 'Athletic conditioning',
    youtubeUrl: 'https://youtu.be/E3BphOYLhtA?si=oNsecnQajmsQpzYd',
    icon: GitBranch,
  },
  {
    day: "Day 4",
    title: 'Memory Recall Drill',
    type: 'Memory Training',
    duration: '4–5 min',
    description: 'Show 6–8 objects/exercises briefly, hide them, then user recalls the order.',
    purpose: 'Improves working memory & sharpens mental clarity.',
    bestUse: 'Anytime',
    youtubeUrl: 'https://youtu.be/KVm5QuXSxxA?si=lAgReWJj9quF_a77',
    icon: Cpu,
  },
  {
    day: "Day 5",
    title: 'Distraction Resistance Drill',
    type: 'Mental Discipline',
    duration: '4–6 min',
    description: 'Focus on breathing or an object while the app introduces visual/audio distractions. User maintains focus.',
    purpose: 'Builds mental toughness, great for competition mindset.',
    bestUse: 'Advanced users',
    youtubeUrl: 'https://youtu.be/ba58WZd0NaE?si=eYfieagYKHd8pvrS',
    icon: Shield,
  },
  {
    day: "Day 6",
    title: 'Decision-Making Drill',
    type: 'Cognitive Speed',
    duration: '3–5 min',
    description: 'Make quick choices: Push / Pull, Yes / No, Left / Right.',
    purpose: 'Improves fast thinking, useful in sports & gym pacing.',
    bestUse: 'Pre-training activation',
    youtubeUrl: 'https://youtu.be/0SpnkfvZsmc?si=Kj8L53X6mt7rjtOv',
    icon: AlertTriangle,
  },
  {
    day: "Day 7",
    title: 'Visualization + Focus Combo',
    type: 'Integrated Brain Training',
    duration: '5–8 min',
    description: 'Visualize your workout/pose, pause to refocus on your breath, then resume visualization.',
    purpose: 'Merges mental imagery with attention for elite-level training.',
    bestUse: 'Performance days',
    youtubeUrl: 'https://youtu.be/BsEkNunXtkw?si=BUoqnWsAy5DPpWIf',
    icon: Brain,
  }
];

export default function CognitiveFocusDrillsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Cognitive & Focus Drills</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A 7-day plan to sharpen your concentration, improve reaction time, and enhance decision-making under pressure.
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
