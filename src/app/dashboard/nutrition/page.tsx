
'use client';

import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  BulkingPlan,
  CuttingPlan,
  LeanPlan,
  CricketNutritionPlan,
  BadmintonNutritionPlan,
  FootballNutritionPlan,
  BasketballNutritionPlan,
  VolleyballNutritionPlan,
  TableTennisNutritionPlan,
  SexualWellnessNutritionPlan
} from './plans';

const nutritionPlans = [
  { value: 'bulking', label: 'Bulking Plan', component: <BulkingPlan /> },
  { value: 'cutting', label: 'Cutting Plan', component: <CuttingPlan /> },
  { value: 'lean', label: 'Lean Maintenance Plan', component: <LeanPlan /> },
  { value: 'cricket', label: 'Cricket Nutrition Plan', component: <CricketNutritionPlan /> },
  { value: 'badminton', label: 'Badminton Nutrition Plan', component: <BadmintonNutritionPlan /> },
  { value: 'football', label: 'Football Nutrition Plan', component: <FootballNutritionPlan /> },
  { value: 'basketball', label: 'Basketball Nutrition Plan', component: <BasketballNutritionPlan /> },
  { value: 'volleyball', label: 'Volleyball Nutrition Plan', component: <VolleyballNutritionPlan /> },
  { value: 'table-tennis', label: 'Table Tennis Nutrition Plan', component: <TableTennisNutritionPlan /> },
  { value: 'sexual-wellness', label: 'Sexual Wellness Nutrition Plan', component: <SexualWellnessNutritionPlan /> },
];

export default function NutritionPage() {
  const [selectedPlan, setSelectedPlan] = useState('bulking');

  const renderPlan = () => {
    const plan = nutritionPlans.find(p => p.value === selectedPlan);
    return plan ? plan.component : null;
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold font-headline">Nutrition Plans</h1>
        <p className="text-muted-foreground">
          Fuel your body for peak performance. Select a plan to get started.
        </p>
      </div>

      <div className="max-w-md">
         <Select value={selectedPlan} onValueChange={setSelectedPlan}>
            <SelectTrigger><SelectValue placeholder="Select a nutrition plan" /></SelectTrigger>
            <SelectContent>
                {nutritionPlans.map(p => (
                    <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
      </div>

      <div>
        {renderPlan()}
      </div>
    </div>
  );
}
