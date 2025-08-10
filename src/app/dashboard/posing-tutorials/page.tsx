
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { POSING_TUTORIALS, type Pose } from '@/lib/posing';
import { CheckCircle, XCircle } from 'lucide-react';

export default function PosingTutorialsPage() {
  const [selectedPose, setSelectedPose] = useState<Pose | null>(null);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Posing Tutorials</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Perfect your presentation for the stage or for the camera. Learn to showcase your physique with confidence.
        </p>
      </div>

      <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedPose(null)}>
        <Accordion type="multiple" defaultValue={['Front Poses']} className="w-full">
          {POSING_TUTORIALS.map((category) => (
            <AccordionItem value={category.categoryName} key={category.categoryName}>
              <AccordionTrigger className="text-xl font-headline">{category.categoryName}</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.poses.map((pose) => (
                    <DialogTrigger asChild key={pose.name} onClick={() => setSelectedPose(pose)}>
                       <Card className="overflow-hidden group cursor-pointer h-full hover:border-primary transition-all duration-300 hover:shadow-lg">
                        <div className="relative">
                          <Image
                            src={pose.image}
                            data-ai-hint={pose.hint}
                            alt={pose.name}
                            width={400}
                            height={600}
                            className="object-cover w-full h-72 transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 p-4">
                            <CardTitle className="font-headline text-lg text-white">{pose.name}</CardTitle>
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {selectedPose && (
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="font-headline text-3xl">{selectedPose.name}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                    <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
                        <Image
                            src={selectedPose.image}
                            alt={selectedPose.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div>
                        <div className="mb-6">
                            <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-primary"><CheckCircle /> How to Perform</h3>
                            <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                                {selectedPose.steps.map((step, i) => <li key={i}>{step}</li>)}
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-headline text-xl mb-3 flex items-center gap-2 text-destructive"><XCircle /> Common Mistakes</h3>
                            <ul className="space-y-2 list-inside list-decimal text-muted-foreground">
                                {selectedPose.mistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}
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
