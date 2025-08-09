
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ACTIVITY_LEVELS, GOALS } from '@/lib/constants';

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

function TdeeCalculator() {
  const [form, setForm] = useState({ age: '', weight: '', height: '', gender: 'male', activityLevel: '1.55' });
  const [calories, setCalories] = useState<Record<string, number> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleValueChange = (name: string) => (value: string) => {
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
        mildLoss: Math.round(maintenance * 0.9),
        weightLoss: Math.round(maintenance * 0.8),
        mildGain: Math.round(maintenance * 1.1),
        weightGain: Math.round(maintenance * 1.2),
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">TDEE Calculator</CardTitle>
        <CardDescription>Estimate your Total Daily Energy Expenditure (TDEE) for maintenance, cutting, and bulking.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={calculateCalories} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2"><Label htmlFor="age-tdee">Age</Label><Input id="age-tdee" name="age" type="number" value={form.age} onChange={handleChange} required placeholder="25" /></div>
            <div className="space-y-2"><Label htmlFor="weight-tdee">Weight (kg)</Label><Input id="weight-tdee" name="weight" type="number" value={form.weight} onChange={handleChange} required placeholder="75" /></div>
            <div className="space-y-2"><Label htmlFor="height-tdee">Height (cm)</Label><Input id="height-tdee" name="height" type="number" value={form.height} onChange={handleChange} required placeholder="180" /></div>
          </div>
          <div className="space-y-2"><Label>Gender</Label><RadioGroup name="gender" value={form.gender} onValueChange={handleValueChange('gender')} className="flex"><div className="flex items-center space-x-2"><RadioGroupItem value="male" id="g-male-tdee" /><Label htmlFor="g-male-tdee">Male</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="female" id="g-female-tdee" /><Label htmlFor="g-female-tdee">Female</Label></div></RadioGroup></div>
          <div className="space-y-2"><Label htmlFor="activityLevel-tdee">Activity Level</Label><Select name="activityLevel" value={form.activityLevel} onValueChange={handleValueChange('activityLevel')}><SelectTrigger id="activityLevel-tdee"><SelectValue /></SelectTrigger><SelectContent>{ACTIVITY_LEVELS.map(l => <SelectItem key={l.value} value={String(l.value)}>{l.label}</SelectItem>)}</SelectContent></Select></div>
          <Button type="submit" className="w-full">Calculate TDEE</Button>
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
                <CardTitle className="text-lg font-headline">Weight Loss</CardTitle>
                <p>Mild loss: {calories.mildLoss}</p>
                <p>Weight loss: {calories.weightLoss}</p>
              </Card>
              <Card className="text-center p-4">
                <CardTitle className="text-lg font-headline">Weight Gain</CardTitle>
                <p>Mild gain: {calories.mildGain}</p>
                <p>Weight gain: {calories.weightGain}</p>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function MacroCalculator() {
  const [form, setForm] = useState({ calories: '', goal: 'maintain' });
  const [macros, setMacros] = useState<{ protein: number; carbs: number; fat: number } | null>(null);
  
  const calculateMacros = (e: React.FormEvent) => {
    e.preventDefault();
    const calories = parseFloat(form.calories);
    if (calories > 0) {
      let proteinRatio = 0.3, carbRatio = 0.4, fatRatio = 0.3; // Maintain
      if (form.goal === 'cut') {
        proteinRatio = 0.4; carbRatio = 0.3; fatRatio = 0.3;
      } else if (form.goal === 'bulk') {
        proteinRatio = 0.3; carbRatio = 0.5; fatRatio = 0.2;
      }
      setMacros({
        protein: Math.round((calories * proteinRatio) / 4),
        carbs: Math.round((calories * carbRatio) / 4),
        fat: Math.round((calories * fatRatio) / 9),
      });
    }
  };

  return (
    <Card>
      <CardHeader><CardTitle className="font-headline">Macro Split Calculator</CardTitle><CardDescription>Calculate daily protein, carbs, and fats based on your calorie intake and goal.</CardDescription></CardHeader>
      <CardContent>
        <form onSubmit={calculateMacros} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"><Label htmlFor="calories-macro">Daily Calories (kcal)</Label><Input id="calories-macro" type="number" value={form.calories} onChange={(e) => setForm({...form, calories: e.target.value})} placeholder="2500" required /></div>
            <div className="space-y-2"><Label htmlFor="goal-macro">Goal</Label><Select value={form.goal} onValueChange={(v) => setForm({...form, goal: v})}><SelectTrigger id="goal-macro"><SelectValue /></SelectTrigger><SelectContent>{GOALS.map(g => <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>)}</SelectContent></Select></div>
          </div>
          <Button type="submit" className="w-full">Calculate Macros</Button>
        </form>
        {macros && <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <Card className="p-4"><p className="text-sm text-muted-foreground">Protein</p><p className="text-2xl font-bold">{macros.protein}g</p></Card>
            <Card className="p-4"><p className="text-sm text-muted-foreground">Carbs</p><p className="text-2xl font-bold">{macros.carbs}g</p></Card>
            <Card className="p-4"><p className="text-sm text-muted-foreground">Fat</p><p className="text-2xl font-bold">{macros.fat}g</p></Card>
        </div>}
      </CardContent>
    </Card>
  )
}

function WaterIntakeCalculator() {
    const [weight, setWeight] = useState('');
    const [waterIntake, setWaterIntake] = useState<number | null>(null);

    const calculateWater = (e: React.FormEvent) => {
        e.preventDefault();
        const weightKg = parseFloat(weight);
        if (weightKg > 0) {
            setWaterIntake(Math.round(weightKg * 35)); // 35ml per kg of bodyweight
        }
    };
    return (
        <Card>
            <CardHeader><CardTitle className="font-headline">Water Intake Calculator</CardTitle><CardDescription>Estimate your daily water needs based on your body weight.</CardDescription></CardHeader>
            <CardContent>
                <form onSubmit={calculateWater} className="space-y-4">
                    <div className="space-y-2"><Label htmlFor="weight-water">Weight (kg)</Label><Input id="weight-water" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="75" required /></div>
                    <Button type="submit" className="w-full">Calculate Intake</Button>
                </form>
                {waterIntake && <div className="mt-6 text-center p-4 bg-secondary rounded-lg"><p className="text-sm text-muted-foreground">Recommended Daily Water Intake</p><p className="text-4xl font-bold text-primary">{waterIntake} ml</p><p className="font-semibold">({(waterIntake / 1000).toFixed(1)} Liters)</p></div>}
            </CardContent>
        </Card>
    )
}

function BodyFatCalculator() {
  const [form, setForm] = useState({ gender: 'male', height: '', waist: '', hip: '', neck: '' });
  const [bodyFat, setBodyFat] = useState<number | null>(null);

  const calculateBodyFat = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(form.height), w = parseFloat(form.waist), n = parseFloat(form.neck), hip = parseFloat(form.hip);
    if (h > 0 && w > 0 && n > 0) {
      let bfp = 0;
      if (form.gender === 'male') {
        bfp = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      } else {
        if (hip > 0) {
           bfp = 495 / (1.29579 - 0.35004 * Math.log10(w + hip - n) + 0.22100 * Math.log10(h)) - 450;
        }
      }
      if (bfp > 0) setBodyFat(bfp);
    }
  };
  return (
    <Card>
        <CardHeader><CardTitle className="font-headline">Body Fat Estimator</CardTitle><CardDescription>Estimate your body fat percentage using the U.S. Navy method.</CardDescription></CardHeader>
        <CardContent>
            <form onSubmit={calculateBodyFat} className="space-y-4">
                <div className="space-y-2"><Label>Gender</Label><RadioGroup value={form.gender} onValueChange={v => setForm({...form, gender: v})} className="flex"><div className="flex items-center space-x-2"><RadioGroupItem value="male" id="g-male-bf" /><Label htmlFor="g-male-bf">Male</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="female" id="g-female-bf" /><Label htmlFor="g-female-bf">Female</Label></div></RadioGroup></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2"><Label htmlFor="height-bf">Height (cm)</Label><Input id="height-bf" value={form.height} onChange={e => setForm({...form, height: e.target.value})} type="number" required placeholder="180" /></div>
                    <div className="space-y-2"><Label htmlFor="waist-bf">Waist (cm)</Label><Input id="waist-bf" value={form.waist} onChange={e => setForm({...form, waist: e.target.value})} type="number" required placeholder="80" /></div>
                    <div className="space-y-2"><Label htmlFor="neck-bf">Neck (cm)</Label><Input id="neck-bf" value={form.neck} onChange={e => setForm({...form, neck: e.target.value})} type="number" required placeholder="40" /></div>
                    {form.gender === 'female' && <div className="space-y-2"><Label htmlFor="hip-bf">Hip (cm)</Label><Input id="hip-bf" value={form.hip} onChange={e => setForm({...form, hip: e.target.value})} type="number" required placeholder="95"/></div>}
                </div>
                <Button type="submit" className="w-full">Estimate Body Fat</Button>
            </form>
            {bodyFat && <div className="mt-6 text-center p-4 bg-secondary rounded-lg"><p className="text-sm text-muted-foreground">Estimated Body Fat</p><p className="text-4xl font-bold text-primary">{bodyFat.toFixed(1)}%</p></div>}
        </CardContent>
    </Card>
  )
}

function IdealWeightCalculator() {
    const [form, setForm] = useState({ height: '', gender: 'male' });
    const [weightRange, setWeightRange] = useState<{ min: number; max: number } | null>(null);

    const calculateIdealWeight = (e: React.FormEvent) => {
        e.preventDefault();
        const h = parseFloat(form.height);
        if (h > 0) {
            const heightInInches = h / 2.54;
            let ideal = 0;
            if (form.gender === 'male') {
                ideal = 50 + 2.3 * (heightInInches - 60); // Robinson formula (1983)
            } else {
                ideal = 45.5 + 2.3 * (heightInInches - 60); // Miller formula (1983)
            }
            if (ideal > 0) {
              setWeightRange({ min: Math.round(ideal * 0.9), max: Math.round(ideal * 1.1) });
            }
        }
    };
    return (
        <Card>
            <CardHeader><CardTitle className="font-headline">Ideal Weight Calculator</CardTitle><CardDescription>Calculate your ideal weight range based on your height and gender.</CardDescription></CardHeader>
            <CardContent>
                <form onSubmit={calculateIdealWeight} className="space-y-4">
                    <div className="space-y-2"><Label>Gender</Label><RadioGroup value={form.gender} onValueChange={v => setForm({...form, gender: v})} className="flex"><div className="flex items-center space-x-2"><RadioGroupItem value="male" id="g-male-iw" /><Label htmlFor="g-male-iw">Male</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="female" id="g-female-iw" /><Label htmlFor="g-female-iw">Female</Label></div></RadioGroup></div>
                    <div className="space-y-2"><Label htmlFor="height-iw">Height (cm)</Label><Input id="height-iw" type="number" value={form.height} onChange={(e) => setForm({...form, height: e.target.value})} placeholder="180" required /></div>
                    <Button type="submit" className="w-full">Calculate Ideal Weight</Button>
                </form>
                {weightRange && <div className="mt-6 text-center p-4 bg-secondary rounded-lg"><p className="text-sm text-muted-foreground">Your Ideal Weight Range is</p><p className="text-4xl font-bold text-primary">{weightRange.min} - {weightRange.max} kg</p></div>}
            </CardContent>
        </Card>
    );
}

const calculators = [
    { value: 'tdee', label: 'TDEE Calculator', component: <TdeeCalculator /> },
    { value: 'bmi', label: 'BMI Calculator', component: <BmiCalculator /> },
    { value: 'macros', label: 'Macro Split Calculator', component: <MacroCalculator /> },
    { value: 'bodyfat', label: 'Body Fat % Estimator', component: <BodyFatCalculator /> },
    { value: 'water', label: 'Water Intake Calculator', component: <WaterIntakeCalculator /> },
    { value: 'ideal-weight', label: 'Ideal Weight Calculator', component: <IdealWeightCalculator /> },
]

export default function CalculatorsPage() {
  const [selectedCalculator, setSelectedCalculator] = useState('tdee');

  const renderCalculator = () => {
    const calculator = calculators.find(c => c.value === selectedCalculator);
    return calculator ? calculator.component : null;
  }

  return (
    <div className="space-y-6">
      <div className="max-w-xs">
         <Select value={selectedCalculator} onValueChange={setSelectedCalculator}>
            <SelectTrigger><SelectValue placeholder="Select a calculator" /></SelectTrigger>
            <SelectContent>
                {calculators.map(c => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                ))}
            </SelectContent>
        </Select>
      </div>
      <div>
        {renderCalculator()}
      </div>
    </div>
  );
}
