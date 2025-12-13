
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

const modules = [
  {
    title: 'Workout Visualization',
    description: 'Mentally perform exercises before physically doing them. Example: Imagine completing a perfect squat set or a flawless pose.',
    youtubeUrl: 'https://youtu.be/2K4jclRqz9o?si=tVO1dsRdg1pCviR-',
  },
  {
    title: 'Performance Visualization',
    description: 'Mentally rehearse athletic or competition scenarios. Example: Visualize making perfect shots, sprints, or jumps.',
    youtubeUrl: 'https://youtu.be/1fyxV1LwP10?si=wD-WgBKEawMNsqMN',
  },
  {
    title: 'Goal Mapping & Planning',
    description: 'Break long-term goals into weekly/daily targets. Example: “I will increase squat weight by 5kg in 2 weeks.”',
    youtubeUrl: 'https://youtu.be/H1bDIREguok?si=3qTmGSFjwiwRv1kS',
  },
  {
    title: 'Positive Self-Talk & Affirmations',
    description: 'Build confidence with daily affirmations. Example: “I am strong, focused, and consistent.”',
    youtubeUrl: 'https://youtu.be/yo1pJ_D-H3M?si=gFpqmc4-kEP-wKFu',
  },
  {
    title: 'Progress Tracking Visualization',
    description: 'Mentally review past achievements and set next milestones. Example: Visualize yourself hitting personal bests to boost motivation.',
    youtubeUrl: 'https://youtube.com/shorts/cF5AQdxS0vw?si=azVbADPk-g0dR8yn',
  },
];

export default function VisualizationGoalSettingPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Visualization & Goal-Setting</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Train your mind to build focus, achieve goals, and enhance your physical performance.
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Module</TableHead>
                <TableHead className="w-1/2">Description</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.title}>
                  <TableCell className="font-semibold">{module.title}</TableCell>
                  <TableCell className="text-muted-foreground">{module.description}</TableCell>
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
