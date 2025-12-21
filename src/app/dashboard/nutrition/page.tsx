'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function NutritionPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="flex flex-col items-center justify-center h-full min-h-[400px] w-full max-w-2xl text-center p-8 border-dashed">
        <Sparkles className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-bold font-headline">AI Nutritionist Coming Soon!</h3>
        <p className="text-muted-foreground">This feature is currently under development. Get ready for personalized meal plans generated just for you.</p>
      </Card>
    </div>
  );
}
