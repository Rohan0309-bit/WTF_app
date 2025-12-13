
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export default function MindFocusTrainingPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Mind & Focus Training</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sharpen your mental edge. Exercises and techniques to improve concentration, reduce stress, and enhance performance.
        </p>
      </div>

      <Card className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 border-dashed">
        <BrainCircuit className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-bold font-headline">Coming Soon</h3>
        <p className="text-muted-foreground">We're developing powerful mind and focus training modules. Stay tuned!</p>
      </Card>
    </div>
  );
}
