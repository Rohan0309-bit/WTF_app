'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Loader2, UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';
import { getNutritionPlan, type NutritionPlanState } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { GenerateNutritionPlanOutput } from '@/ai/flows/generate-nutrition-plan';

const nutritionCategories = [
  { name: 'Cutting', hint: 'healthy salad' },
  { name: 'Bulking', hint: 'steak potatoes' },
  { name: 'Lean Muscle', hint: 'chicken rice' },
  { name: 'Sport: Cricket', hint: 'balanced meal' },
  { name: 'Sport: Football', hint: 'pasta meal' },
  { name: 'Sport: Basketball', hint: 'high protein meal' },
];

function NutritionPlanDialog({ state, open, onOpenChange }: { state: NutritionPlanState; open: boolean; onOpenChange: (open: boolean) => void }) {
  const { plan, goal } = state;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-headline">Meal Plan: {goal}</DialogTitle>
          <DialogDescription>A full-day meal plan generated just for you.</DialogDescription>
        </DialogHeader>
        {plan ? (
          <div className="space-y-4 py-4 max-h-[70vh] overflow-y-auto">
            <MealCard mealType="Breakfast" meal={plan.breakfast} />
            <MealCard mealType="Lunch" meal={plan.lunch} />
            <MealCard mealType="Dinner" meal={plan.dinner} />
            <MealCard mealType="Snacks" meal={plan.snacks} />
          </div>
        ) : (
          <div className="text-center p-8">
            <p>Could not load the meal plan.</p>
          </div>
        )}
        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function MealCard({ mealType, meal }: { mealType: string, meal: GenerateNutritionPlanOutput['breakfast'] }) {
    return (
        <div>
            <h3 className="font-headline text-lg text-primary">{mealType}</h3>
            <p className="font-semibold">{meal.name}</p>
            <p className="text-sm text-muted-foreground">{meal.description}</p>
            <Separator className="my-3" />
        </div>
    );
}

export default function NutritionPage() {
  const [loadingCategory, setLoadingCategory] = useState<string | null>(null);
  const [dialogState, setDialogState] = useState<NutritionPlanState>({});
  const [isDialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleGetPlan = async (name: string) => {
    setLoadingCategory(name);
    const result = await getNutritionPlan(name);
    setLoadingCategory(null);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else {
      setDialogState(result);
      setDialogOpen(true);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-headline">Nutrition Plans</h1>
          <p className="text-muted-foreground">
            Fuel your body for peak performance. Click a category to generate a professional meal plan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nutritionCategories.map((category) => (
            <Card
              key={category.name}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => !loadingCategory && handleGetPlan(category.name)}
            >
              <CardHeader className="p-0 relative">
                <Image
                  src={`https://placehold.co/600x400.png`}
                  data-ai-hint={category.hint}
                  alt={category.name}
                  width={600}
                  height={400}
                  className="object-cover"
                />
                 {loadingCategory === category.name && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="h-8 w-8 text-white animate-spin" />
                    </div>
                 )}
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                <CardDescription className="mt-1">Full-day meal plans available.</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <NutritionPlanDialog state={dialogState} open={isDialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
