
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MeditationTimer } from '@/components/meditation-timer';
import { BrainCircuit, Scan, MessageSquare, Wind, Brain, Eye, Move } from 'lucide-react';

const meditationPlan = [
  {
    day: "Day 1",
    title: "Breath Control Meditation",
    type: "Breathing-Based",
    duration: "3–5 minutes",
    how: ["Inhale through nose for 4 sec", "Hold for 2 sec", "Exhale through mouth for 6 sec"],
    purpose: ["Calms nervous system", "Improves workout focus"],
    bestUse: "Before workout / morning",
    icon: Wind,
  },
  {
    day: "Day 2",
    title: "Body Scan Relaxation",
    type: "Awareness-Based",
    duration: "5–7 minutes",
    how: ["Close eyes", "Focus from toes → legs → core → chest → arms → face", "Relax each area slowly"],
    purpose: ["Improves mind–muscle connection", "Reduces injury risk"],
    bestUse: "Post-workout / night",
    icon: Scan,
  },
  {
    day: "Day 3",
    title: "Visualization Meditation",
    type: "Mental Imagery",
    duration: "5 minutes",
    how: ["Imagine a perfect workout, pose, or performance", "Feel the muscles, posture, confidence"],
    purpose: ["Boosts performance", "Helps posing & sports execution"],
    bestUse: "Pre-workout / pre-posing",
    icon: BrainCircuit,
  },
  {
    day: "Day 4",
    title: "Mantra / Affirmation Meditation",
    type: "Repetition-Based",
    duration: "3–5 minutes",
    how: ["Repeat silently or softly:", "“I am strong. I am focused. I am disciplined.”"],
    purpose: ["Builds confidence", "Improves consistency"],
    bestUse: "Morning motivation",
    icon: MessageSquare,
  },
  {
    day: "Day 5",
    title: "Sensory Awareness Meditation",
    type: "Sense-Based",
    duration: "4–6 minutes",
    how: ["Focus on sounds, temperature, smell, and touch", "Do not judge—just observe"],
    purpose: ["Improves mental sharpness", "Enhances present-moment awareness"],
    bestUse: "Anytime / stress relief",
    icon: Eye,
  },
  {
    day: "Day 6",
    title: "Counting Focus Meditation",
    type: "Concentration Training",
    duration: "4–6 minutes",
    how: ["Count breaths from 1 to 10", "If distracted, restart"],
    purpose: ["Trains focus under fatigue", "Improves discipline"],
    bestUse: "Before heavy training",
    icon: Brain,
  },
  {
    day: "Day 7",
    title: "Mindful Movement Meditation",
    type: "Movement-Based",
    duration: "5–10 minutes",
    how: ["Slow stretches (neck, shoulders, hips)", "Sync movement with breathing", "Full awareness of motion"],
    purpose: ["Recovery + relaxation", "Improves posture & posing control"],
    bestUse: "Recovery day / evening",
    icon: Move,
  },
];


export default function MeditationMindfulnessPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Meditation & Mindfulness</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A 7-day introductory plan to calm your mind, sharpen your focus, and improve your mind-body connection.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto" defaultValue="item-0">
        {meditationPlan.map((item, index) => {
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
                                <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                                    {item.how.map((step, i) => <li key={i}>{step}</li>)}
                                </ul>
                            </div>
                             <div className="space-y-1">
                                <h4 className="font-semibold text-sm">Purpose:</h4>
                                <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1">
                                    {item.purpose.map((p, i) => <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                            <div className="text-sm">
                                <span className="font-semibold">Best Use:</span> <span className="text-muted-foreground">{item.bestUse}</span>
                            </div>
                             <div className="text-sm">
                                <span className="font-semibold">Type:</span> <span className="text-muted-foreground">{item.type}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-secondary p-6 rounded-lg">
                           <h4 className="font-semibold mb-2">Meditation Timer</h4>
                           <p className="text-muted-foreground text-sm mb-4">Duration: {item.duration}</p>
                           <MeditationTimer />
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
