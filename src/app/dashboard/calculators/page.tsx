'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ACTIVITY_LEVELS } from '@/lib/constants';

function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<{ value: number; category: string } | null>(null);

  const calculateBmi = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      let category = '';
      if (bmiValue < 18.5) category = 'Underweight';
      else if (bmiValue < 24.9) category = 'Normal weight';
      else if (bmiValue < 29.9) category = 'Overweight';
      else category = 'Obesity';
      setBmi({ value: bmiValue, category });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">BMI Calculator</CardTitle>
        <CardDescription>Calculate your Body Mass Index.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateBmi} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="height-bmi">Height (cm)</Label>
              <Input id="height-bmi" type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="180" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight-bmi">Weight (kg)</Label>
              <Input id="weight-bmi" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="75" required />
            </div>
          </div>
          <Button type="submit" className="w-full">Calculate BMI</Button>
        </form>
        {bmi && (
          <div className="mt-6 text-center p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground">Your BMI is</p>
            <p className="text-4xl font-bold text-primary">{bmi.value.toFixed(1)}</p>
            <p className="font-semibold">{bmi.category}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function CalorieCalculator() {
  const [form, setForm] = useState({ age: '', weight: '', height: '', gender: 'male', activityLevel: '1.2' });
  const [calories, setCalories] = useState<Record<string, number> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (name: string) => (value: string) => {
    setForm({ ...form, [name]: value });
  };

  const calculateCalories = (e: React.FormEvent) => {
    e.preventDefault();
    const { age, weight, height, gender, activityLevel } = form;
    const ageNum = parseInt(age), weightNum = parseInt(weight), heightNum = parseInt(height);
    
    if (ageNum > 0 && weightNum > 0 && heightNum > 0) {
      let bmr = 0;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weightNum) + (4.799 * heightNum) - (5.677 * ageNum);
      } else {
        bmr = 447.593 + (9.247 * weightNum) + (3.098 * heightNum) - (4.330 * ageNum);
      }
      const maintenance = bmr * parseFloat(activityLevel);
      setCalories({
        maintenance: Math.round(maintenance),
        mildCut: Math.round(maintenance * 0.9),
        cut: Math.round(maintenance * 0.8),
        mildBulk: Math.round(maintenance * 1.1),
        bulk: Math.round(maintenance * 1.2),
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Daily Calorie Calculator</CardTitle>
        <CardDescription>Estimate your daily calorie needs for maintenance, cutting, and bulking.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateCalories} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2"><Label htmlFor="age">Age</Label><Input id="age" name="age" type="number" value={form.age} onChange={handleChange} required /></div>
            <div className="space-y-2"><Label htmlFor="weight">Weight (kg)</Label><Input id="weight" name="weight" type="number" value={form.weight} onChange={handleChange} required /></div>
            <div className="space-y-2"><Label htmlFor="height">Height (cm)</Label><Input id="height" name="height" type="number" value={form.height} onChange={handleChange} required /></div>
          </div>
          <div className="space-y-2"><Label>Gender</Label><RadioGroup name="gender" value={form.gender} onValueChange={handleSelectChange('gender')} className="flex"><div className="flex items-center space-x-2"><RadioGroupItem value="male" id="g-male" /><Label htmlFor="g-male">Male</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="female" id="g-female" /><Label htmlFor="g-female">Female</Label></div></RadioGroup></div>
          <div className="space-y-2"><Label htmlFor="activityLevel">Activity Level</Label><Select name="activityLevel" value={form.activityLevel} onValueChange={handleSelectChange('activityLevel')}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{ACTIVITY_LEVELS.map(l => <SelectItem key={l.value} value={String(l.value)}>{l.label}</SelectItem>)}</SelectContent></Select></div>
          <Button type="submit" className="w-full">Calculate Calories</Button>
        </form>
        {calories && (
          <div className="mt-6 space-y-4">
            <Card className="text-center p-4 bg-secondary">
              <p className="text-sm text-muted-foreground">Maintenance Calories</p>
              <p className="text-3xl font-bold text-primary">{calories.maintenance}</p>
              <p className="text-xs text-muted-foreground">Calories/day</p>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4">
                <CardTitle className="text-lg font-headline">Cutting</CardTitle>
                <p>Mild Cut: {calories.mildCut}</p>
                <p>Weight Loss: {calories.cut}</p>
              </Card>
              <Card className="text-center p-4">
                <CardTitle className="text-lg font-headline">Bulking</CardTitle>
                <p>Mild Bulk: {calories.mildBulk}</p>
                <p>Weight Gain: {calories.bulk}</p>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function CalculatorsPage() {
  return (
    <div>
      <Tabs defaultValue="bmi" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bmi">BMI Calculator</TabsTrigger>
          <TabsTrigger value="calorie">Calorie Calculator</TabsTrigger>
        </TabsList>
        <TabsContent value="bmi" className="mt-4">
          <BmiCalculator />
        </TabsContent>
        <TabsContent value="calorie" className="mt-4">
          <CalorieCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
}
