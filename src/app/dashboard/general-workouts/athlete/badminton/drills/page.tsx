
'use client';

import { useState, useMemo, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { badmintonSubCategories, type BadmintonDrill } from '@/lib/badminton-drills';
import { SPORT_CATEGORIES_BADMINTON } from '@/lib/constants';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, XCircle, Youtube, Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

function DrillsLibrary({ drills, categoryName }: { drills: BadmintonDrill[], categoryName: string }) {
  const [selectedDrill, setSelectedDrill] = useState<BadmintonDrill | null>(null);
  
  return (
     <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedDrill(null)}>
      <Accordion type="single" collapsible className="w-full" defaultValue={categoryName}>
        <AccordionItem value={categoryName}>
          <AccordionTrigger className="text-xl font-headline">{categoryName}</AccordionTrigger>
          <AccordionContent>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Drill Name</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {drills.map((drill) => (
                    <TableRow key={drill.name}>
                        <TableCell className="font-medium">{drill.name}</TableCell>
                        <TableCell className="text-right">
                            <DialogTrigger asChild onClick={() => setSelectedDrill(drill)}>
                                <Button variant="outline" size="sm">View Details</Button>
                            </DialogTrigger>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {selectedDrill && (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="font-headline text-3xl">{selectedDrill.name}</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div className="space-y-4">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        <Image
                            src={selectedDrill.image}
                            alt={selectedDrill.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                     <Link href={selectedDrill.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full">
                            <Youtube className="mr-2 h-5 w-5" />
                            Watch on YouTube
                        </Button>
                    </Link>
                </div>
                <div className="space-y-6">
                    {selectedDrill.steps && (
                    <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-primary"><CheckCircle /> How to Perform</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.steps.map((step, i) => <li key={i}>{step}</li>)}
                        </ul>
                    </div>
                    )}
                    {selectedDrill.commonMistakes && (
                     <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-destructive"><XCircle /> Common Mistakes</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.commonMistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
                        </ul>
                    </div>
                    )}
                    {selectedDrill.injuryPrevention && (
                     <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-green-500"><Shield /> Injury Prevention</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.injuryPrevention.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
        </DialogContent>
    )}
    </Dialog>
  );
}

function BadmintonDrillsContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  
  const categories = useMemo(() => {
    const allCategories = SPORT_CATEGORIES_BADMINTON
        .filter(cat => cat.name !== "Workouts")
        .map(cat => cat.name);
    
    if (selectedCategory && allCategories.includes(selectedCategory)) {
        return [selectedCategory];
    }
    
    return allCategories;
  }, [selectedCategory]);
  
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">{selectedCategory || 'Badminton Drills Library'}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hone your skills with our expert collection of badminton drills.
        </p>
      </div>
      
      <div className="space-y-8">
        {categories.map(categoryName => {
            const drills = badmintonSubCategories[categoryName] || [];
            if (drills.length === 0) return null;
            return <DrillsLibrary key={categoryName} drills={drills} categoryName={categoryName} />
        })}
      </div>

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
