'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const modules = [
  {
    day: "Day 1",
    title: 'Confidence Building',
    type: 'Self-belief',
    duration: '3–5 min',
    description: 'Recall 3 past wins or achievements (gym PRs, discipline, physique progress). Relive how it felt. Anchor that feeling before training.',
    purpose: 'Builds confidence & reduces self-doubt.',
    bestUse: 'Before heavy workouts / posing',
    youtubeUrl: 'https://youtu.be/8IhFPJ6Pysc?si=9xylCfL94r4wpl8F'
  },
  {
    day: "Day 2",
    title: 'Positive Self-Talk Training',
    type: 'Internal dialogue',
    duration: '3–4 min',
    description: 'Replace negative thoughts with cues like: “Strong & controlled” or “I finish what I start.” Repeat during breathing.',
    purpose: 'Improves consistency & controls mental fatigue.',
    bestUse: 'During tough training phases',
    youtubeUrl: 'https://youtu.be/71_NkXgAK1g?si=rS_qFAJci6URdRho'
  },
  {
    day: "Day 3",
    title: 'Pressure Simulation',
    type: 'Handling stress',
    duration: '4–6 min',
    description: 'Visualize a high-pressure situation. Practice staying calm with slow breathing. Mentally execute perfectly.',
    purpose: 'Reduces anxiety & prepares for competition/stage.',
    bestUse: 'Athletes & posing practice',
    youtubeUrl: 'https://youtu.be/krOLhXWLj-Q?si=4CJXJ-E7i9bbU7Dx'
  },
  {
    day: "Day 4",
    title: 'Focus Reset Ritual',
    type: 'Attention control',
    duration: '2–3 min',
    description: 'Use a short breathing exercise + a keyword (e.g., “Focus”) anytime distraction hits.',
    purpose: 'Improves in-workout focus & prevents mental drift.',
    bestUse: 'Mid-workout / between sets',
    youtubeUrl: 'https://youtu.be/QtE00VP4W3Y?si=OHVzu03B-GeoANqa'
  },
  {
    day: "Day 5",
    title: 'Emotional Control',
    type: 'Emotion regulation',
    duration: '4–5 min',
    description: 'Observe emotions without reacting. Label them (“stress”, “fear”, “excitement”) and let them pass.',
    purpose: 'Controls anger, frustration & improves decision-making.',
    bestUse: 'Bad days / plateaus',
    youtubeUrl: 'https://youtu.be/f0oG1J2escU?si=K3056LXoixTz2CKh'
  },
  {
    day: "Day 6",
    title: 'Discipline Conditioning',
    type: 'Habit psychology',
    duration: '3–5 min',
    description: 'Visualize showing up even when motivation is low. Commit to the process, not your mood.',
    purpose: 'Builds long-term consistency & separates amateurs from pros.',
    bestUse: 'Cutting / long programs',
    youtubeUrl: 'https://youtu.be/CU8pKyCs4_o?si=rsDxgAC6X9-oERQ7'
  },
  {
    day: "Day 7",
    title: 'Competition / Stage Mindset',
    type: 'Peak performance',
    duration: '5–7 min',
    description: 'Full mental rehearsal: calm breathing + confidence recall. Lock-in execution mindset.',
    purpose: 'Peak focus & elite performance readiness.',
    bestUse: 'Event / shoot / competition days',
    youtubeUrl: 'https://youtu.be/n4SPwPhWu8g?si=VUGo4Zpo2hHRJpa4'
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

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Day & Title</TableHead>
                <TableHead className="w-1/2">How it Works & Purpose</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.title}>
                  <TableCell>
                    <p className="font-semibold">{module.day}: {module.title}</p>
                    <p className="text-xs text-muted-foreground">{module.type} ({module.duration})</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">{module.description}</p>
                    <p className="text-xs text-muted-foreground mt-1"><strong>Purpose:</strong> {module.purpose}</p>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={module.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Youtube className="mr-2 h-4 w-4" />
                        Watch
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
