
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Heart, Wind, Eye, Activity, Edit, Ear, Moon } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    day: "Day 1",
    title: 'Progressive Muscle Relaxation',
    type: 'Tension–Release',
    duration: '5–7 min',
    description: 'Tighten one muscle group for 5 sec, release for 10 sec, moving from feet to face.',
    purpose: 'Releases deep muscle stress & speeds up recovery.',
    bestUse: 'Night / post-training',
    youtubeUrl: 'https://youtu.be/ihO02wUzgkc?si=KGmxnzEbuKjd0T7Z',
    icon: Activity,
  },
  {
    day: "Day 2",
    title: 'Box Breathing (Nervous System Reset)',
    type: 'Breath Regulation',
    duration: '3–5 min',
    description: 'Inhale 4 sec, Hold 4 sec, Exhale 4 sec, Hold 4 sec.',
    purpose: 'Lowers cortisol, calms anxiety & overthinking.',
    bestUse: 'Stressful days / before sleep',
    youtubeUrl: 'https://youtu.be/ihO02wUzgkc?si=JdzCNvoobTRb8whj',
    icon: Wind,
  },
  {
    day: "Day 3",
    title: 'Recovery Visualization',
    type: 'Mental Recovery',
    duration: '4–6 min',
    description: 'Visualize muscles repairing, soreness fading, and body getting stronger.',
    purpose: 'Improves recovery mindset & reduces mental fatigue.',
    bestUse: 'Rest days',
    youtubeUrl: 'https://youtu.be/U0ZS4wb3eIs?si=pwZPiJ9GHgyajMO8',
    icon: Eye,
  },
  {
    day: "Day 4",
    title: 'Parasympathetic Activation',
    type: 'Deep Relaxation',
    duration: '5–7 min',
    description: 'Practice long slow exhales and gentle belly breathing with a hand on your chest & stomach.',
    purpose: 'Switches body into recovery mode & improves sleep quality.',
    bestUse: 'Evening / bedtime',
    youtubeUrl: 'https://youtu.be/8FpKpW0EhYo?si=FO1DgpKqPf9_7Ha_',
    icon: Heart,
  },
  {
    day: "Day 5",
    title: 'Mindful Journaling',
    type: 'Emotional Release',
    duration: '5 min',
    description: 'Write answers to: “What stressed me today?”, “What helped me today?”, “What can I improve tomorrow?”',
    purpose: 'Clears mental clutter & improves emotional regulation.',
    bestUse: 'Night reflection',
    youtubeUrl: 'https://youtu.be/7CcZ7gyFXv0?si=NoSc8GibrlP_py3L',
    icon: Edit,
  },
  {
    day: "Day 6",
    title: 'Sensory Relaxation',
    type: 'Sensory Reset',
    duration: '4–6 min',
    description: 'Focus on calming sounds, textures, and temperature to ground you in the moment.',
    purpose: 'Reduces anxiety & grounds the nervous system.',
    bestUse: 'Mid-day stress relief',
    youtubeUrl: 'https://youtu.be/4ROrW727q_s?si=yDRC9BM4jYDJmfhz',
    icon: Ear,
  },
  {
    day: "Day 7",
    title: 'Non-Sleep Deep Rest (NSDR)',
    type: 'Deep Recovery (Elite Method)',
    duration: '8–10 min',
    description: 'Lie down, keeping your body still and mind awake, following slow breathing and awareness.',
    purpose: 'Replaces short naps & powerful recovery for athletes.',
    bestUse: 'Recovery days / burnout prevention',
    youtubeUrl: 'https://youtu.be/AKGrmY8OSHM?si=pR23ckm7Mk9neOM5',
    icon: Moon,
  }
];

export default function StressRecoveryPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Stress & Recovery Techniques</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A 7-day plan to help you recover faster, reduce stress, and improve overall well-being.
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
