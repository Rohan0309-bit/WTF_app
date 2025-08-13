
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { cricketSubCategories, type Drill } from '@/lib/drills';
import { CheckCircle, XCircle, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CricketDrillsPage() {
  const [selectedDrill, setSelectedDrill] = useState<Drill | null>(null);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Cricket Drills Library</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse detailed tutorials to perfect every aspect of your game, from batting to fielding.
        </p>
      </div>

      <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedDrill(null)}>
        <Accordion type="multiple" defaultValue={['Shot Training']} className="w-full space-y-4">
          {Object.entries(cricketSubCategories).map(([categoryName, drills]) => (
            <AccordionItem value={categoryName} key={categoryName} className="border rounded-lg p-2">
              <AccordionTrigger className="text-xl font-headline px-4 hover:no-underline">{categoryName}</AccordionTrigger>
              <AccordionContent className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {drills.map((drill) => (
                    <DialogTrigger asChild key={drill.name} onClick={() => setSelectedDrill(drill)}>
                       <Card className="overflow-hidden group cursor-pointer h-full hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col">
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
                        </div>
                        <CardHeader className="flex-grow">
                            <CardTitle className="font-headline text-lg">{drill.name}</CardTitle>
                        </CardHeader>
                      </Card>
                    </DialogTrigger>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
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
    </div>
  );
}
