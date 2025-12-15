
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Youtube, Target, Map, Smile, BookCheck } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    title: 'Workout Visualization',
    description: 'Mentally perform exercises before physically doing them. Example: Imagine completing a perfect squat set or a flawless pose.',
    youtubeUrl: 'https://youtu.be/2K4jclRqz9o?si=tVO1dsRdg1pCviR-',
    icon: Target,
  },
  {
    title: 'Performance Visualization',
    description: 'Mentally rehearse athletic or competition scenarios. Example: Visualize making perfect shots, sprints, or jumps.',
    youtubeUrl: 'https://youtu.be/1fyxV1LwP10?si=wD-WgBKEawMNsqMN',
    icon: Target,
  },
  {
    title: 'Goal Mapping & Planning',
    description: 'Break long-term goals into weekly/daily targets. Example: “I will increase squat weight by 5kg in 2 weeks.”',
    youtubeUrl: 'https://youtu.be/H1bDIREguok?si=3qTmGSFjwiwRv1kS',
    icon: Map,
  },
  {
    title: 'Positive Self-Talk & Affirmations',
    description: 'Build confidence with daily affirmations. Example: “I am strong, focused, and consistent.”',
    youtubeUrl: 'https://youtu.be/yo1pJ_D-H3M?si=gFpqmc4-kEP-wKFu',
    icon: Smile,
  },
  {
    title: 'Progress Tracking Visualization',
    description: 'Mentally review past achievements and set next milestones. Example: Visualize yourself hitting personal bests to boost motivation.',
    youtubeUrl: 'https://youtube.com/shorts/cF5AQdxS0vw?si=azVbADPk-g0dR8yn',
    icon: BookCheck,
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

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto" defaultValue="item-0">
        {modules.map((item, index) => {
          const Icon = item.icon;
          return (
            <AccordionItem value={`item-${index}`} key={item.title}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <div className="flex items-center gap-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2">
                <Card className="border-none shadow-none">
                    <CardContent className="grid md:grid-cols-2 gap-6 pt-4">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <h4 className="font-semibold text-sm">Description:</h4>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
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
