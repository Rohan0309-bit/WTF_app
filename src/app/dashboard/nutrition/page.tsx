
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { NUTRITION_PLANS, type DailyNutritionPlan } from '@/lib/nutrition';
import { Flame, Utensils, Zap } from 'lucide-react';

const sports = Object.keys(NUTRITION_PLANS);
const goals = Object.keys(NUTRITION_PLANS[sports[0]]);

export default function NutritionPage() {
  const [selectedSport, setSelectedSport] = useState(sports[0]);
  const [selectedGoal, setSelectedGoal] = useState(goals[0]);

  const plan: DailyNutritionPlan = NUTRITION_PLANS[selectedSport][selectedGoal];

  const totalMacros = plan.meals.reduce((acc, meal) => {
    acc.calories += meal.calories;
    acc.protein += meal.protein;
    acc.carbs += meal.carbs;
    acc.fat += meal.fat;
    return acc;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Nutrition Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Fuel your body for optimal performance. Select your sport and goal to view a tailored meal plan.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <div className="w-full sm:w-64">
          <Select value={selectedSport} onValueChange={setSelectedSport}>
            <SelectTrigger><SelectValue placeholder="Select a sport" /></SelectTrigger>
            <SelectContent>
              {sports.map(sport => <SelectItem key={sport} value={sport}>{sport}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
         <div className="w-full sm:w-64">
          <Select value={selectedGoal} onValueChange={setSelectedGoal}>
            <SelectTrigger><SelectValue placeholder="Select your goal" /></SelectTrigger>
            <SelectContent>
              {goals.map(goal => <SelectItem key={goal} value={goal}>{goal}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">{plan.goal}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6 border-t pt-4">
                <div className="p-2 rounded-lg">
                    <p className="text-sm text-muted-foreground">Calories</p>
                    <p className="text-2xl font-bold text-primary">{totalMacros.calories}</p>
                </div>
                <div className="p-2 rounded-lg">
                    <p className="text-sm text-muted-foreground">Protein</p>
                    <p className="text-2xl font-bold">{totalMacros.protein}g</p>
                </div>
                <div className="p-2 rounded-lg">
                    <p className="text-sm text-muted-foreground">Carbs</p>
                    <p className="text-2xl font-bold">{totalMacros.carbs}g</p>
                </div>
                <div className="p-2 rounded-lg">
                    <p className="text-sm text-muted-foreground">Fat</p>
                    <p className="text-2xl font-bold">{totalMacros.fat}g</p>
                </div>
            </div>

             <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {plan.meals.map((meal, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                     <div className="flex items-center gap-3">
                        <Utensils className="h-5 w-5 text-primary"/>
                        <span>{meal.time} - {meal.name}</span>
                     </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                     <div className="pl-8">
                         <h4 className="font-semibold mb-2">Ingredients:</h4>
                         <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {meal.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                         </ul>
                         <div className="flex gap-4 mt-4 text-xs">
                           <span>🔥 {meal.calories} kcal</span>
                           <span>💪 {meal.protein}g P</span>
                           <span>⚡️ {meal.carbs}g C</span>
                           <span>🥑 {meal.fat}g F</span>
                         </div>
                     </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
