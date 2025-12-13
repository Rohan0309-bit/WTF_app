
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const modules = [
  {
    day: "Day 1",
    title: 'Single-Point Focus Drill',
    type: 'Concentration Training',
    duration: '3–5 min',
    description: 'Focus on one point/object on the screen. Do not let eyes or mind wander. If distracted, reset focus.',
    purpose: 'Builds laser focus & improves mind control during heavy lifts.',
    bestUse: 'Pre-workout',
    youtubeUrl: 'https://youtu.be/vhaYnT08kLI?si=H8GFVF-Z4_YdZE2Z'
  },
  {
    day: "Day 2",
    title: 'Reaction Time Drill',
    type: 'Speed & Alertness',
    duration: '3–4 min',
    description: 'Tap screen when color/symbol appears at random intervals.',
    purpose: 'Improves reaction speed & enhances athletic reflexes.',
    bestUse: 'Sports / warm-up',
    youtubeUrl: 'https://youtu.be/E7HOlJ_OhEo?si=oi5EX41tmztC-Lti'
  },
  {
    day: "Day 3",
    title: 'Dual-Task Challenge',
    type: 'Cognitive Load Training',
    duration: '4–6 min',
    description: 'Do light physical movement (marching / wall sit) while simultaneously counting backwards or solving simple math.',
    purpose: 'Trains focus under fatigue & improves performance in real workouts.',
    bestUse: 'Athletic conditioning',
    youtubeUrl: 'https://youtu.be/E3BphOYLhtA?si=oNsecnQajmsQpzYd'
  },
  {
    day: "Day 4",
    title: 'Memory Recall Drill',
    type: 'Memory Training',
    duration: '4–5 min',
    description: 'Show 6–8 objects/exercises briefly, hide them, then user recalls the order.',
    purpose: 'Improves working memory & sharpens mental clarity.',
    bestUse: 'Anytime',
    youtubeUrl: 'https://youtu.be/KVm5QuXSxxA?si=lAgReWJj9quF_a77'
  },
  {
    day: "Day 5",
    title: 'Distraction Resistance Drill',
    type: 'Mental Discipline',
    duration: '4–6 min',
    description: 'Focus on breathing or an object while the app introduces visual/audio distractions. User maintains focus.',
    purpose: 'Builds mental toughness, great for competition mindset.',
    bestUse: 'Advanced users',
    youtubeUrl: 'https://youtu.be/ba58WZd0NaE?si=eYfieagYKHd8pvrS'
  },
  {
    day: "Day 6",
    title: 'Decision-Making Drill',
    type: 'Cognitive Speed',
    duration: '3–5 min',
    description: 'Make quick choices: Push / Pull, Yes / No, Left / Right.',
    purpose: 'Improves fast thinking, useful in sports & gym pacing.',
    bestUse: 'Pre-training activation',
    youtubeUrl: 'https://youtu.be/0SpnkfvZsmc?si=Kj8L53X6mt7rjtOv'
  },
  {
    day: "Day 7",
    title: 'Visualization + Focus Combo',
    type: 'Integrated Brain Training',
    duration: '5–8 min',
    description: 'Visualize your workout/pose, pause to refocus on your breath, then resume visualization.',
    purpose: 'Merges mental imagery with attention for elite-level training.',
    bestUse: 'Performance days',
    youtubeUrl: 'https://youtu.be/BsEkNunXtkw?si=BUoqnWsAy5DPpWIf'
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
