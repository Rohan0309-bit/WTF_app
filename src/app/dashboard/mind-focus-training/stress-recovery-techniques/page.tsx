
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const modules = [
  {
    day: "Day 1",
    title: 'Progressive Muscle Relaxation',
    type: 'Tension–Release',
    duration: '5–7 min',
    description: 'Tighten one muscle group for 5 sec, release for 10 sec, moving from feet to face.',
    purpose: 'Releases deep muscle stress & speeds up recovery.',
    bestUse: 'Night / post-training',
    youtubeUrl: 'https://youtu.be/ihO02wUzgkc?si=KGmxnzEbuKjd0T7Z'
  },
  {
    day: "Day 2",
    title: 'Box Breathing (Nervous System Reset)',
    type: 'Breath Regulation',
    duration: '3–5 min',
    description: 'Inhale 4 sec, Hold 4 sec, Exhale 4 sec, Hold 4 sec.',
    purpose: 'Lowers cortisol, calms anxiety & overthinking.',
    bestUse: 'Stressful days / before sleep',
    youtubeUrl: 'https://youtu.be/ihO02wUzgkc?si=JdzCNvoobTRb8whj'
  },
  {
    day: "Day 3",
    title: 'Recovery Visualization',
    type: 'Mental Recovery',
    duration: '4–6 min',
    description: 'Visualize muscles repairing, soreness fading, and body getting stronger.',
    purpose: 'Improves recovery mindset & reduces mental fatigue.',
    bestUse: 'Rest days',
    youtubeUrl: 'https://youtu.be/U0ZS4wb3eIs?si=pwZPiJ9GHgyajMO8'
  },
  {
    day: "Day 4",
    title: 'Parasympathetic Activation',
    type: 'Deep Relaxation',
    duration: '5–7 min',
    description: 'Practice long slow exhales and gentle belly breathing with a hand on your chest & stomach.',
    purpose: 'Switches body into recovery mode & improves sleep quality.',
    bestUse: 'Evening / bedtime',
    youtubeUrl: 'https://youtu.be/8FpKpW0EhYo?si=FO1DgpKqPf9_7Ha_'
  },
  {
    day: "Day 5",
    title: 'Mindful Journaling',
    type: 'Emotional Release',
    duration: '5 min',
    description: 'Write answers to: “What stressed me today?”, “What helped me today?”, “What can I improve tomorrow?”',
    purpose: 'Clears mental clutter & improves emotional regulation.',
    bestUse: 'Night reflection',
    youtubeUrl: 'https://youtu.be/7CcZ7gyFXv0?si=NoSc8GibrlP_py3L'
  },
  {
    day: "Day 6",
    title: 'Sensory Relaxation',
    type: 'Sensory Reset',
    duration: '4–6 min',
    description: 'Focus on calming sounds, textures, and temperature to ground you in the moment.',
    purpose: 'Reduces anxiety & grounds the nervous system.',
    bestUse: 'Mid-day stress relief',
    youtubeUrl: 'https://youtu.be/4ROrW727q_s?si=yDRC9BM4jYDJmfhz'
  },
  {
    day: "Day 7",
    title: 'Non-Sleep Deep Rest (NSDR)',
    type: 'Deep Recovery (Elite Method)',
    duration: '8–10 min',
    description: 'Lie down, keeping your body still and mind awake, following slow breathing and awareness.',
    purpose: 'Replaces short naps & powerful recovery for athletes.',
    bestUse: 'Recovery days / burnout prevention',
    youtubeUrl: 'https://youtu.be/AKGrmY8OSHM?si=pR23ckm7Mk9neOM5'
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
