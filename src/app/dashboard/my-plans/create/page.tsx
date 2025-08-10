
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MASTER_EXERCISE_DATA, ExerciseDetails } from '@/lib/workouts';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { PlusCircle, Trash2, X, Dumbbell, Repeat, Timer, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const allExercises: ExerciseDetails[] = Object.entries(MASTER_EXERCISE_DATA).map(([name, details]) => ({
  name,
  type: details.type || 'N/A',
  muscle: details.muscle || 'N/A',
  equipment: details.equipment || 'N/A',
  difficulty: details.difficulty || 'N/A',
  instructions: details.instructions || 'No instructions available.',
  gifUrl: details.gifUrl || `https://placehold.co/400x300.png`,
})).sort((a, b) => a.name.localeCompare(b.name));

interface CustomExercise extends ExerciseDetails {
  customSets: string;
  customReps: string;
  customRest: string;
}

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function CreatePlanPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [savedPlans, setSavedPlans] = useLocalStorage<any[]>('custom-workout-plans', []);
  const [planName, setPlanName] = useState('');
  const [planDescription, setPlanDescription] = useState('');
  const [days, setDays] = useState<Record<string, CustomExercise[]>>({ 'Monday': [] });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeDay, setActiveDay] = useState('Monday');

  const addDay = () => {
    const nextDay = WEEK_DAYS.find(d => !Object.keys(days).includes(d));
    if (nextDay) {
      setDays({ ...days, [nextDay]: [] });
    }
  };

  const removeDay = (day: string) => {
    const newDays = { ...days };
    delete newDays[day];
    setDays(newDays);
  };

  const addExerciseToDay = (exercise: ExerciseDetails) => {
    const newExercise: CustomExercise = {
      ...exercise,
      customSets: '3',
      customReps: '12',
      customRest: '60s',
    };
    const newDays = { ...days };
    newDays[activeDay].push(newExercise);
    setDays(newDays);
    setIsDialogOpen(false);
  };
  
  const removeExerciseFromDay = (day: string, index: number) => {
    const newDays = { ...days };
    newDays[day].splice(index, 1);
    setDays(newDays);
  }
  
  const handleExerciseChange = (day: string, index: number, field: keyof CustomExercise, value: string) => {
      const newDays = { ...days };
      (newDays[day][index] as any)[field] = value;
      setDays(newDays);
  }

  const savePlan = () => {
    if (!planName) {
      toast({ variant: 'destructive', title: 'Error', description: 'Plan name is required.' });
      return;
    }
    const newPlan = {
      id: new Date().toISOString(),
      name: planName,
      description: planDescription,
      days: days,
    };
    setSavedPlans([...savedPlans, newPlan]);
    toast({ title: 'Plan Saved!', description: 'Your new custom plan has been saved.' });
    router.push('/dashboard/my-plans');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Create a New Workout Plan</CardTitle>
          <CardDescription>Build your weekly routine from scratch.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="plan-name">Plan Name</Label>
            <Input id="plan-name" placeholder="e.g., My 5-Day Split" value={planName} onChange={e => setPlanName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan-description">Description (Optional)</Label>
            <Textarea id="plan-description" placeholder="A short description of your plan's goal." value={planDescription} onChange={e => setPlanDescription(e.target.value)} />
          </div>
        </CardContent>
      </Card>

      {Object.entries(days).map(([day, exercises]) => (
        <Card key={day}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-headline">{day}</CardTitle>
             <Button variant="ghost" size="icon" onClick={() => removeDay(day)}>
                <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {exercises.map((ex, index) => (
              <div key={index} className="flex items-start gap-4 p-2 border rounded-lg">
                <Image src={ex.gifUrl!} alt={ex.name} width={60} height={60} className="rounded-md" />
                <div className="flex-1 space-y-2">
                    <p className="font-semibold">{ex.name}</p>
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="flex items-center gap-1"><Dumbbell className="h-4 w-4 text-muted-foreground"/><Input className="w-20 h-8" value={ex.customSets} onChange={e => handleExerciseChange(day, index, 'customSets', e.target.value)} placeholder="Sets"/></div>
                        <div className="flex items-center gap-1"><Repeat className="h-4 w-4 text-muted-foreground"/><Input className="w-20 h-8" value={ex.customReps} onChange={e => handleExerciseChange(day, index, 'customReps', e.target.value)} placeholder="Reps"/></div>
                        <div className="flex items-center gap-1"><Timer className="h-4 w-4 text-muted-foreground"/><Input className="w-20 h-8" value={ex.customRest} onChange={e => handleExerciseChange(day, index, 'customRest', e.target.value)} placeholder="Rest"/></div>
                    </div>
                </div>
                 <Button variant="ghost" size="icon" onClick={() => removeExerciseFromDay(day, index)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
            <Dialog open={isDialogOpen && activeDay === day} onOpenChange={(open) => { if (!open) setIsDialogOpen(false); }}>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => { setActiveDay(day); setIsDialogOpen(true); }}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Exercise
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl h-5/6 flex flex-col">
                <DialogHeader>
                  <DialogTitle>Add Exercise to {day}</DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-y-auto pr-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allExercises.map(ex => (
                      <Card key={ex.name} className="flex flex-col">
                        <CardHeader className="p-2">
                           <Image src={ex.gifUrl!} alt={ex.name} width={200} height={150} className="rounded-md mx-auto" />
                        </CardHeader>
                        <CardContent className="p-3 flex-grow">
                          <p className="font-semibold text-sm">{ex.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{ex.muscle}</p>
                        </CardContent>
                         <CardContent className="p-3">
                            <Button size="sm" className="w-full" onClick={() => addExerciseToDay(ex)}>Add</Button>
                         </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-between items-center">
        <Button onClick={addDay} variant="secondary" disabled={Object.keys(days).length >= 7}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Day
        </Button>
        <div className="flex gap-2">
            <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            <Button onClick={savePlan}>
                <Check className="mr-2 h-4 w-4"/>
                Save Plan
            </Button>
        </div>
      </div>
    </div>
  );
}
