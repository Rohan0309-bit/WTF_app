'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cricketSubCategories, SPORT_CATEGORIES, Drill } from '@/lib/drills';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, XCircle, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function DrillsLibrary({ drills, categoryName }: { drills: Drill[], categoryName: string }) {
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);
  
  return (
     <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedDrill(null)}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={categoryName}>
          <AccordionTrigger className="text-xl font-headline">{categoryName}</AccordionTrigger>
          <AccordionContent>
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
                    <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-primary"><CheckCircle /> How to Perform</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.steps.map((step, i) => <li key={i}>{step}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-destructive"><XCircle /> Common Mistakes</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.mistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-green-500"><Shield /> Injury Prevention</h3>
                        <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                            {selectedDrill.injuryPrevention.map((tip, i) => <li key={i}>{tip}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </DialogContent>
    )}
    </Dialog>
  );
}

export default function CricketDrillsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Shot Training");

  const categories = useMemo(() => {
    return SPORT_CATEGORIES.Cricket
        .filter(cat => cat.name !== "Workout" && cat.name !== "Nutrition")
        .map(cat => cat.name);
  }, []);
  
  const drillsForCategory = cricketSubCategories[selectedCategory] || [];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Cricket Drills Library</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hone your skills with our expert collection of cricket drills.
        </p>
      </div>
      
      <div className="mb-8 max-w-sm mx-auto">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
                <SelectValue placeholder="Select a drill category" />
            </SelectTrigger>
            <SelectContent>
                {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
            </SelectContent>
        </Select>
      </div>

      <DrillsLibrary drills={drillsForCategory} categoryName={selectedCategory} />

    </div>
  );
}