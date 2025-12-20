'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { getNutritionPlan, NutritionPlanState } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, Utensils } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? 'Generating...' : 'Generate Nutrition Plan'}
    </Button>
  );
}

function LoadingSkeleton() {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-6">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-2 py-2">
                        <Skeleton className="h-6 w-1/3" />
                        <div className="pl-4 pt-2 space-y-2">
                           <Skeleton className="h-4 w-3/4" />
                           <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

function NutritionPlanDisplay({ plan }: { plan: any }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">{plan.planName || 'Your Custom Nutrition Plan'}</CardTitle>
                <CardDescription>{plan.planDescription || 'Here is a sample meal plan for your goal.'}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {Object.entries(plan.dailyPlan).map(([meal, details]) => (
                     <div key={meal}>
                        <h3 className="text-lg font-semibold capitalize flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" />{meal}</h3>
                        <p className="text-muted-foreground text-sm pl-7">{typeof details === 'string' ? details : (details as any).description}</p>
                     </div>
                ))}
            </CardContent>
        </Card>
    )
}

export default function NutritionPage() {
  const { toast } = useToast();
  const [state, formAction, isPending] = useActionState<NutritionPlanState, FormData>(getNutritionPlan, {
    isSuccess: false,
  });

  useEffect(() => {
    if (state.error && !isPending) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast, isPending]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">AI Nutritionist</CardTitle>
            <CardDescription>Tell us your goal and we'll generate a sample meal plan.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="goal">Your Nutrition Goal</Label>
                <Input id="goal" name="goal" placeholder="e.g., Bulking, Fat Loss, Lean Muscle" required />
              </div>

              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        {isPending ? (
            <LoadingSkeleton />
        ) : state.isSuccess && state.plan ? (
          <NutritionPlanDisplay plan={state.plan} />
        ) : (
          <Card className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 border-dashed">
            <Sparkles className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-bold font-headline">Your nutrition plan will appear here</h3>
            <p className="text-muted-foreground">Enter your goal to generate a personalized plan.</p>
          </Card>
        )}
      </div>
    </div>
  );
}
