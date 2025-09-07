
'use client';

import { useState, useMemo, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cricketSubCategories, type Drill } from '@/lib/drills';
import { SPORT_CATEGORIES_CRICKET } from '@/lib/constants';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, XCircle, Youtube, Shield, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

function DrillsLibrary({ drills, categoryName }: { drills: Drill[], categoryName: string }) {
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);
  
  const prettyCategoryName = categoryName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const tableCategories = ["shot-training", "bowling-drills", "fielding-drills", "wicketkeeping-drills"];
  const useTableView = tableCategories.includes(categoryName);

  return (
     <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedDrill(null)}>
      <Accordion type="single" collapsible className="w-full" defaultValue={categoryName}>
        <AccordionItem value={categoryName}>
          <AccordionTrigger className="text-xl font-headline">{prettyCategoryName}</AccordionTrigger>
          <AccordionContent>
            {useTableView ? (
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
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {drills.map((drill) => (
                    <DialogTrigger asChild key={drill.name} onClick={() => setSelectedDrill(drill)}>
                    <Card className="overflow-hidden group cursor-pointer h-full hover:border-primary transition-all duration-300 hover:shadow-lg">
                        <div className="relative">
                        <Image
                            src={drill.image}
                            data-ai-hint={drill.hint}
                            alt={drill.name}
                            width={400}
                            height={300}
                            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 p-4">
                            <CardTitle className="font-headline text-lg text-white">{drill.name}</CardTitle>
                        </div>
                        </div>
                    </Card>
                    </DialogTrigger>
                ))}
                </div>
            )}
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

function CricketDrillsContent() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  
  const drillsForCategory = useMemo(() => {
    if (!selectedCategory) return [];
    return cricketSubCategories[selectedCategory] || [];
  }, [selectedCategory]);
  
  const prettyCategoryName = selectedCategory?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">{prettyCategoryName || 'Cricket Drills Library'}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {selectedCategory 
            ? `Hone your skills with our expert collection of ${prettyCategoryName}.`
            : "Select a category from the Cricket Hub to view drills."
          }
        </p>
      </div>
      
      <div className="space-y-8">
        {selectedCategory && drillsForCategory.length > 0 ? (
            <DrillsLibrary drills={drillsForCategory} categoryName={selectedCategory} />
        ) : (
             <Card className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-8 border-dashed">
                <h3 className="text-xl font-bold font-headline">No Category Selected</h3>
                <p className="text-muted-foreground mb-4">Please go back to the Cricket Hub to choose a drill category.</p>
                <Link href="/dashboard/general-workouts/athlete/cricket">
                    <Button variant="outline">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to Cricket Hub
                    </Button>
                </Link>
             </Card>
        )}
      </div>

    </div>
  );
}

export default function CricketDrillsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CricketDrillsContent />
        </Suspense>
    )
}
