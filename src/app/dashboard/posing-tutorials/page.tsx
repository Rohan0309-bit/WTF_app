
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { POSING_TUTORIALS, type Pose, type PosingCategory } from '@/lib/posing';
import { CheckCircle, XCircle, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function PosingTutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<PosingCategory | null>(null);
  const [selectedPose, setSelectedPose] = useState<Pose | null>(null);

  if (selectedCategory) {
    return (
      <div className="container mx-auto p-4">
        <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedPose(null)}>
          <div className="mb-8">
            <Button variant="ghost" onClick={() => setSelectedCategory(null)} className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline">{selectedCategory.categoryName}</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Select a pose to view detailed instructions.
                </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategory.poses.map((pose) => (
              <DialogTrigger asChild key={pose.name} onClick={() => setSelectedPose(pose)}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="overflow-hidden group cursor-pointer aspect-square hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col">
                    <div className="relative h-full">
                      <Image
                        src={pose.image}
                        data-ai-hint={pose.hint}
                        alt={pose.name}
                        fill
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 p-4">
                        <CardTitle className="font-headline text-lg text-white">{pose.name}</CardTitle>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </DialogTrigger>
            ))}
          </div>

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

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Posing Tutorials</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Perfect your presentation for the stage or for the camera. Learn to showcase your physique with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {POSING_TUTORIALS.map((category) => (
            <motion.div
              key={category.categoryName}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedCategory(category)}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden group aspect-square transition-all duration-300 hover:shadow-lg hover:border-primary flex flex-col">
                <div className="relative h-full">
                    <Image
                      src={category.poses[0].image}
                      alt={category.categoryName}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={category.poses[0].hint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                     <div className="absolute bottom-0 p-6">
                        <h3 className="text-2xl font-bold font-headline text-white">{category.categoryName}</h3>
                    </div>
                </div>
              </Card>
            </motion.div>
        ))}
      </div>
    </div>
  );
}
