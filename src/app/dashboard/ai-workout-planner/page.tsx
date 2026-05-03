'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GENDERS, SKILL_LEVELS, WORKOUT_PREFERENCES } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { Input } from '@/components/ui/input';
import { WorkoutSessionView } from '@/components/workout-session-view';
import { motion, AnimatePresence } from 'framer-motion';

function LoadingSkeleton() {
    return (
        <Card className="border-none bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <Skeleton className="h-10 w-3/4 bg-primary/10" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </CardHeader>
            <CardContent className="space-y-8 p-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="space-y-3">
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-8 w-8 rounded-full bg-primary/20" />
                            <Skeleton className="h-6 w-1/3 bg-muted" />
                        </div>
                        <div className="pl-11 space-y-2">
                            <Skeleton className="h-4 w-full bg-muted/50" />
                            <Skeleton className="h-4 w-5/6 bg-muted/50" />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default function AiWorkoutPlannerPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setWorkoutPlan(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/ai-workout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to generate workout plan.');
        }

        const result = await response.json();
        setWorkoutPlan(result.plan);

    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'AI Trainer Error',
            description: error instanceof Error ? error.message : 'An unknown error occurred.',
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card className="sticky top-20 border-primary/10 shadow-xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
                <BrainCircuit className="h-6 w-6 text-primary" />
                AI Workout Planner
            </CardTitle>
            <CardDescription>Tailored fitness blueprints powered by AI.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="goal">Your Main Goal</Label>
                <Input id="goal" name="goal" placeholder="e.g., Explosive power, weight loss" defaultValue="General Fitness" required className="bg-secondary/50"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skillLevel">Fitness Level</Label>
                <Select name="level" required defaultValue="intermediate">
                  <SelectTrigger id="skillLevel" className="bg-secondary/50"><SelectValue placeholder="Select level" /></SelectTrigger>
                  <SelectContent>
                    {SKILL_LEVELS.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Gender</Label>
                <RadioGroup name="gender" defaultValue="male" className="grid grid-cols-2 gap-2">
                  {GENDERS.map((gender) => (
                     <div key={gender.value} className="flex items-center space-x-2 border rounded-md p-2 hover:bg-secondary transition-colors cursor-pointer">
                        <RadioGroupItem value={gender.value} id={`g-${gender.value}`} />
                        <Label htmlFor={`g-${gender.value}`} className="cursor-pointer">{gender.label}</Label>
                     </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Preferred Location</Label>
                <RadioGroup name="location" defaultValue="gym" className="grid grid-cols-2 gap-2">
                   {WORKOUT_PREFERENCES.map((pref) => (
                     <div key={pref.value} className="flex items-center space-x-2 border rounded-md p-2 hover:bg-secondary transition-colors cursor-pointer">
                        <RadioGroupItem value={pref.value} id={`p-${pref.value}`} />
                        <Label htmlFor={`p-${pref.value}`} className="cursor-pointer">{pref.label}</Label>
                     </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full h-12 shadow-glow hover:shadow-glow-active transition-all" disabled={isLoading}>
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Consulting AI...
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        Generate Freak Plan
                    </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <AnimatePresence mode="wait">
            {isLoading ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <LoadingSkeleton />
                </motion.div>
            ) : workoutPlan ? (
                <motion.div
                    key="content"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                >
                    <WorkoutSessionView plan={workoutPlan} />
                </motion.div>
            ) : (
                <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full"
                >
                    <Card className="flex flex-col items-center justify-center h-full min-h-[500px] text-center p-12 border-dashed bg-secondary/20 border-primary/20 backdrop-blur-sm">
                        <div className="bg-primary/10 p-6 rounded-full mb-6">
                            <Sparkles className="h-16 w-16 text-primary animate-pulse" />
                        </div>
                        <h3 className="text-2xl font-bold font-headline mb-2">Ready to Level Up?</h3>
                        <p className="text-muted-foreground max-w-sm">Fill out your profile on the left and our AI coach will build a science-backed routine just for you.</p>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}
