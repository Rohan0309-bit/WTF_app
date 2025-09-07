
'use client';

import { useSearchParams } from 'next/navigation';
import { badmintonSubCategories } from '@/lib/badminton-drills';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

function BadmintonDrillsContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const drills = selectedCategory ? badmintonSubCategories[selectedCategory] : null;

  if (!drills) {
    return (
      <Card className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-8 border-dashed">
        <h3 className="text-xl font-bold font-headline">No Category Selected</h3>
        <p className="text-muted-foreground mb-4">Please go back to the Badminton Hub to choose a drill category.</p>
        <Link href="/dashboard/general-workouts/athlete/badminton">
            <Button variant="outline">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Badminton Hub
            </Button>
        </Link>
      </Card>
    );
  }
  
  const prettyCategoryName = selectedCategory.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="space-y-6">
       <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">{prettyCategoryName}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hone your skills with our expert collection of {prettyCategoryName} drills.
        </p>
      </div>
      <ul className="space-y-4">
        {drills.map((drill, idx) => (
          <li key={idx} className="p-4 border rounded-lg bg-card shadow-sm">
            <h3 className="font-semibold text-lg">{drill.title}</h3>
            <p className="text-muted-foreground mt-1">{drill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default function BadmintonDrillsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BadmintonDrillsContent />
        </Suspense>
    )
}
