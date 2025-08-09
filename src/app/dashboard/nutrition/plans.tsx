
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, Sun, Utensils, Clock, Moon, Info, Droplets, Check, Lightbulb, Flame, X } from 'lucide-react';


export const BulkingPlan = () => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Nutrition Plan for Bulking</CardTitle>
            <CardDescription>Goal: Gain lean muscle mass naturally — from 65 kg to 75 kg</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Card className="bg-muted/50 border-primary/20">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold"><Target className="h-5 w-5 text-primary" /> Target Daily Intake</CardTitle>
                </CardHeader>
                <CardContent className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
                    <p><strong>Calories:</strong> 2800–3200 kcal</p>
                    <p><strong>Protein:</strong> 110–130 g</p>
                    <p><strong>Carbohydrates:</strong> 350–400 g</p>
                    <p><strong>Fats:</strong> 80–90 g</p>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Sun className="text-primary h-5 w-5"/> Early Morning (7:00 AM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>5–6 soaked almonds</li>
                            <li>2 walnuts</li>
                            <li>1 banana</li>
                            <li>1 glass warm full-fat milk</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Breakfast (8:30 AM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                       <ul className="list-disc">
                            <li>3 boiled/scrambled eggs (or 1 whole egg + 3 egg whites)</li>
                            <li>2 whole wheat parathas (or 3 multigrain bread slices)</li>
                            <li>100 g curd or paneer bhurji</li>
                            <li>1 seasonal fruit (e.g., apple/orange)</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                     <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Clock className="text-primary h-5 w-5"/> Mid-Morning Snack (11:00 AM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>1 handful peanut chikki or roasted peanuts</li>
                            <li>1 glass buttermilk (chaas)</li>
                        </ul>
                    </CardContent>
                </Card>

                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Lunch (1:30 PM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                       <ul className="list-disc">
                            <li>1.5–2 cups cooked rice (or 2–3 whole wheat rotis)</li>
                            <li>1 cup dal or rajma/chole</li>
                            <li>100–150 g paneer or chicken</li>
                            <li>Mixed salad: cucumber, carrot, beetroot</li>
                            <li>1 tsp ghee (for healthy fats)</li>
                        </ul>
                    </CardContent>
                </Card>
                
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Clock className="text-primary h-5 w-5"/> Post-Lunch (4:00 PM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>1 boiled sweet potato or 1 boiled corn</li>
                            <li>Handful of makhana or roasted chana</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Pre-Workout Snack (6:00 PM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>1 banana or dates</li>
                            <li>Black coffee (optional)</li>
                            <li>Handful of raisins + few peanuts/almonds</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Post-Workout (7:30 PM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>1 glass full-fat milk + jaggery</li>
                            <li>3 boiled eggs (or 100 g paneer/tofu)</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Dinner (8:30–9:00 PM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>2 whole wheat rotis (or 1.5 cups brown rice)</li>
                            <li>1 cup dal or vegetable sabzi</li>
                            <li>100 g paneer, chicken, or fish</li>
                            <li>Curd or salad</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base font-semibold"><Moon className="text-primary h-5 w-5"/> Before Bed (10:30 PM)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10">
                        <ul className="list-disc">
                            <li>1 glass warm milk</li>
                            <li>Handful of soaked almonds (or 1 tsp natural peanut butter)</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <Card className="bg-muted/50 border-accent/20">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base font-semibold"><Info className="h-5 w-5 text-accent"/> Weekly Tips</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground pl-10">
                     <ul className="list-disc space-y-1">
                        <li><strong>Rotate protein sources:</strong> Dal, rajma, chole, paneer, eggs, tofu, soy chunks, chicken, fish.</li>
                        <li><strong>Track progress every 2 weeks:</strong> If weight is stagnant, increase calories by 200–300.</li>
                        <li><strong>Avoid junk food:</strong> Focus on quality calories, not just quantity.</li>
                        <li><strong>Stay hydrated and aim for 7–8 hours of sleep.</strong></li>
                    </ul>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

export const LeanPlan = () => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Nutrition Plan for Lean Maintenance</CardTitle>
            <CardDescription>Goal: Maintain muscle mass and energy while staying lean.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Card className="bg-muted/50 border-primary/20">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold"><Target className="h-5 w-5 text-primary" /> Target Daily Intake</CardTitle>
                </CardHeader>
                <CardContent className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
                    <p><strong>Calories:</strong> 2200–2500 kcal</p>
                    <p><strong>Protein:</strong> 120–140 g</p>
                    <p><strong>Carbohydrates:</strong> 200–250 g</p>
                    <p><strong>Fats:</strong> 70–80 g</p>
                </CardContent>
            </Card>

            <div className="space-y-4">
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Breakfast</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>Scrambled eggs (2-3) with spinach & feta cheese</li><li>1/2 avocado on 1 slice of whole-wheat toast</li></ul></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Lunch</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>150g grilled chicken or tofu salad</li><li>Mixed greens, cucumber, tomatoes, bell peppers</li><li>Light vinaigrette dressing</li></ul></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Clock className="text-primary h-5 w-5"/> Snack</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>1 cup Greek yogurt with a handful of berries</li><li>Small handful of almonds or walnuts</li></ul></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Dinner</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>150g baked salmon or cod</li><li>1 cup of quinoa</li><li>Steamed asparagus or broccoli</li></ul></CardContent>
                </Card>
            </div>

            <Card className="bg-muted/50 border-accent/20">
                <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Info className="h-5 w-5 text-accent"/> Key Principles</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground pl-10">
                     <ul className="list-disc space-y-1">
                        <li>Focus on nutrient-dense whole foods.</li>
                        <li>Prioritize lean protein sources to support muscle repair.</li>
                        <li>Choose complex carbohydrates for sustained energy.</li>
                        <li>Adjust portion sizes based on activity level and results.</li>
                    </ul>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

export const CuttingPlan = () => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Nutrition Plan for Cutting</CardTitle>
            <CardDescription>Goal: Maximize fat loss while preserving lean muscle mass.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Card className="bg-muted/50 border-primary/20">
                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold"><Target className="h-5 w-5 text-primary" /> Target Daily Intake</CardTitle>
                </CardHeader>
                <CardContent className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
                    <p><strong>Calories:</strong> 1800–2100 kcal (in deficit)</p>
                    <p><strong>Protein:</strong> 140–160 g</p>
                    <p><strong>Carbohydrates:</strong> 140–180 g</p>
                    <p><strong>Fats:</strong> 60–70 g</p>
                </CardContent>
            </Card>

            <div className="space-y-4">
                 <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Breakfast</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>Protein shake (1 scoop whey) with water, spinach, and 1/2 banana</li><li>Black coffee or green tea</li></ul></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Lunch</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>Large salad with 150g canned tuna (in water)</li><li>Plenty of leafy greens and non-starchy vegetables</li><li>Use Greek yogurt or lemon juice as dressing</li></ul></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Clock className="text-primary h-5 w-5"/> Snack</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>1 cup of low-fat cottage cheese</li><li>Cucumber slices or celery sticks</li></ul></CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Utensils className="text-primary h-5 w-5"/> Dinner</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground pl-10"><ul className="list-disc"><li>180g lean ground turkey or chicken breast stir-fry</li><li>Lots of broccoli, bell peppers, and onions</li><li>Small portion (1/2 cup) of brown rice</li></ul></CardContent>
                </Card>
            </div>

             <Card className="bg-muted/50 border-accent/20">
                <CardHeader className="pb-2"><CardTitle className="flex items-center gap-2 text-base font-semibold"><Info className="h-5 w-5 text-accent"/> Key Principles</CardTitle></CardHeader>
                <CardContent className="text-sm text-muted-foreground pl-10">
                     <ul className="list-disc space-y-1">
                        <li>High protein intake is crucial for satiety and muscle preservation.</li>
                        <li>Fill up on high-volume, low-calorie foods like green vegetables.</li>
                        <li>Time carbohydrate intake around your workouts to fuel performance.</li>
                        <li>Drink at least 3-4 liters of water per day.</li>
                        <li>Be consistent with your caloric deficit for best results.</li>
                    </ul>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

export const CricketNutritionPlan = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> 6:30–7:00 AM: Wake-Up + Hydration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> 500–750 ml water with lemon or electrolytes</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: 1 tsp honey + pinch of salt (natural electrolyte boost)</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 8:00 AM: Pre-Workout / Pre-Training Breakfast</CardTitle>
                 <CardDescription>High-carb, moderate protein, low fat</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Oats with skim milk</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Add banana or berries</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Boiled eggs / egg whites</TableCell>
                            <TableCell>2–4</TableCell>
                            <TableCell>Based on protein needs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Whole wheat toast</TableCell>
                            <TableCell>1–2 slices</TableCell>
                            <TableCell>Add peanut butter if needed</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Banana or apple</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Easy on digestion</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Water</TableCell>
                            <TableCell>300–500 ml</TableCell>
                            <TableCell>Sip slowly</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> 10:00–10:30 AM: During Training / Match</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Water every 15–20 min</p>
                <p className="flex items-center gap-2 mt-2"><Droplets className="h-4 w-4 text-accent"/> Electrolyte drink (like Gatorade/coconut water) if intense</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: Energy bar, dates, or banana during long sessions</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 12:30 PM: Post-Training / Lunch</CardTitle>
                 <CardDescription>Focus on recovery: protein + complex carbs + antioxidants</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Grilled chicken / paneer / tofu</TableCell>
                            <TableCell>150–200g</TableCell>
                            <TableCell>Lean protein</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brown rice / roti / quinoa</TableCell>
                            <TableCell>1–2 cups</TableCell>
                            <TableCell>Complex carbs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mixed salad</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Add olive oil or flaxseed</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Curd or buttermilk</TableCell>
                            <TableCell>1 cup</TableCell>
                            <TableCell>Probiotic support</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Fruit (e.g., papaya, pomegranate)</TableCell>
                            <TableCell>1 serving</TableCell>
                            <TableCell>Antioxidant boost</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Water</TableCell>
                            <TableCell>500 ml</TableCell>
                            <TableCell>Rehydrate fully</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 4:00 PM: Snack / Energy Booster</CardTitle>
                 <CardDescription>Keep energy levels stable before evening session or gym</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Boiled egg / Greek yogurt</TableCell>
                            <TableCell>1–2</TableCell>
                            <TableCell>Protein</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Handful of almonds or walnuts</TableCell>
                            <TableCell>10–12 pieces</TableCell>
                            <TableCell>Healthy fats</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Fruit smoothie or protein shake</TableCell>
                            <TableCell>1 glass</TableCell>
                            <TableCell>Add peanut butter or banana</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Herbal tea / Green tea</TableCell>
                            <TableCell>1 cup</TableCell>
                            <TableCell>Optional</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30–8:00 PM: Dinner</CardTitle>
                 <CardDescription>Lighter but balanced: protein, veggies, fewer carbs</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Grilled fish / tofu / lentils / egg curry</TableCell>
                            <TableCell>150–200g</TableCell>
                            <TableCell>Easy digestible protein</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Steamed/roasted veggies</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Fiber + micronutrients</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Sweet potato / 1 small roti</TableCell>
                            <TableCell>Small portion</TableCell>
                            <TableCell>Minimal carbs</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Water</TableCell>
                            <TableCell>300 ml</TableCell>
                            <TableCell>Don't skip hydration</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> 9:30–10:00 PM: Pre-Sleep Snack (Optional)</CardTitle>
                 <CardDescription>Supports recovery and sleep</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Warm low-fat milk with turmeric</p>
                <p className="flex items-center gap-2 mt-2"><Utensils className="h-4 w-4 text-accent"/> Few almonds or 1 fig</p>
                <p className="text-sm text-muted-foreground ml-6">Casein protein (if under heavy training)</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Check className="text-primary"/> Key Tips for Cricketers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Hydrate:</strong> 2.5–4 liters/day, depending on climate & exertion</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Avoid:</strong> fried foods, sugary drinks, processed snacks</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Match day?</strong> Focus on easily digestible carbs and hydration</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Prevent cramps:</strong> Use electrolytes + bananas during long matches</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Protein intake:</strong> ~1.2–1.6g/kg body weight per day</p>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Carbs:</strong> ~5–6g/kg for high training load</p>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const BadmintonNutritionPlan = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> 6:30–7:00 AM: Wake-Up + Hydration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Warm water (500–750 ml) with lemon or electrolyte tablet</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: Soaked almonds (5–6) or dates (2)</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30–8:00 AM: Pre-Training Breakfast</CardTitle>
                 <CardDescription>Focus: High carbs + moderate protein, easy digestion</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Oats or muesli with milk</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Add fruits like banana/berries</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Boiled eggs / egg whites</TableCell>
                            <TableCell>2–4</TableCell>
                            <TableCell>Based on protein needs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Whole wheat toast</TableCell>
                            <TableCell>1–2 slices</TableCell>
                            <TableCell>Add almond butter or peanut butter</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Banana or apple</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Natural sugar for energy</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Water</TableCell>
                            <TableCell>300–500 ml</TableCell>
                            <TableCell>Keep sipping before training</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> 9:00–10:30 AM: During Training</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Water every 15–20 mins</p>
                <p className="flex items-center gap-2 mt-2"><Droplets className="h-4 w-4 text-accent"/> Coconut water or sports drink for longer sessions</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: Dates, raisins, or natural energy bar if more than 1 hr</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 12:30 PM: Post-Training / Lunch</CardTitle>
                 <CardDescription>Focus: Muscle recovery, energy refill, and anti-inflammation</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Chicken breast / paneer / tofu</TableCell>
                            <TableCell>150–200g</TableCell>
                            <TableCell>Lean protein</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brown rice / quinoa / millets</TableCell>
                            <TableCell>1 cup</TableCell>
                            <TableCell>Complex carbs</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dal / lentils</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Adds protein + fiber</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Green salad with lemon/olive oil</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Micronutrients</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Yogurt or buttermilk</TableCell>
                            <TableCell>1 cup</TableCell>
                            <TableCell>Cooling and probiotic</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Fruit (like kiwi, orange, papaya)</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>Antioxidant boost</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 4:00–4:30 PM: Evening Snack / Pre-Session Energy</CardTitle>
                 <CardDescription>Supports agility and sharpness in second session or match</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Protein smoothie / shake</TableCell>
                            <TableCell>1 glass</TableCell>
                            <TableCell>Add banana, milk, seeds</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Boiled egg / Greek yogurt</TableCell>
                            <TableCell>1–2</TableCell>
                            <TableCell>Light protein</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Handful trail mix or nuts</TableCell>
                            <TableCell>10–12 pcs</TableCell>
                            <TableCell>Energy + healthy fats</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Herbal tea / green tea</TableCell>
                            <TableCell>1 cup</TableCell>
                            <TableCell>Optional, light caffeine</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30–8:00 PM: Dinner</CardTitle>
                 <CardDescription>Lighter but essential for overnight recovery</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Food</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Notes</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Grilled fish / dal / tofu curry</TableCell>
                            <TableCell>150–200g</TableCell>
                            <TableCell>Lean protein</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Stir-fried or steamed vegetables</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Fiber + minerals</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Sweet potato / 1 small roti</TableCell>
                            <TableCell>Optional</TableCell>
                            <TableCell>Light carb load</TableCell>
                        </TableRow>
                         <TableRow>
                            <TableCell>Cucumber or beetroot salad</TableCell>
                            <TableCell>1 bowl</TableCell>
                            <TableCell>Hydrating & anti-inflammatory</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> 9:30 PM: Pre-Sleep Snack (Optional)</CardTitle>
                 <CardDescription>Promotes recovery and sleep quality</CardDescription>
            </CardHeader>
            <CardContent>
                 <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Warm low-fat milk + pinch of turmeric</p>
                <p className="flex items-center gap-2 mt-2"><Utensils className="h-4 w-4 text-accent"/> 1 fig or few almonds</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: Casein protein (slow-digesting)</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Check className="text-primary"/> Core Guidelines for Badminton Players</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Hydration:</strong> 3–4L/day with electrolytes if sweating heavily</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Meal Timing:</strong> Eat every 3–4 hours</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Protein Intake:</strong> 1.4–1.8g/kg body weight/day</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Carbohydrates:</strong> 5–7g/kg to maintain high energy levels</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Avoid:</strong> Sugary sodas, deep-fried foods, energy crashes from sweets</p>
                </div>
                <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground">Load more carbs on match days; reduce slightly on rest days</p>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Lightbulb className="text-primary"/> Pro Tip:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-muted-foreground mb-3">Badminton players need sharp reaction time + joint strength, so include:</p>
                <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Omega-3s:</strong> (walnuts, flaxseeds, fatty fish)</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Magnesium-rich foods:</strong> spinach, banana, pumpkin seeds</p>
                </div>
                 <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                    <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Anti-inflammatory foods:</strong> turmeric, ginger, berries</p>
                </div>
            </CardContent>
        </Card>
    </div>
);

export const FootballNutritionPlan = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> 6:00–6:30 AM: Hydration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> 500–700 ml water with electrolytes</p>
                <p className="text-sm text-muted-foreground ml-6">1 banana or 2 dates</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30 AM: Pre-Match/Training Breakfast</CardTitle>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Porridge with honey + fruits</TableCell><TableCell>Slow-digesting carbs</TableCell></TableRow>
                        <TableRow><TableCell>3 egg whites + 1 yolk / tofu</TableCell><TableCell>Protein</TableCell></TableRow>
                        <TableRow><TableCell>Whole grain toast</TableCell><TableCell>Sustained energy</TableCell></TableRow>
                        <TableRow><TableCell>Water (300–500 ml)</TableCell><TableCell>Hydrate well</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> 9:00–10:30 AM: During Session</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Sip water frequently</p>
                <p className="flex items-center gap-2 mt-2"><Droplets className="h-4 w-4 text-accent"/> Coconut water or ORS after 30–45 mins</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: 1 banana or homemade energy ball</p>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 1:00 PM: Recovery Lunch</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Grilled lean meat / paneer / soy</TableCell><TableCell>Muscle repair</TableCell></TableRow>
                        <TableRow><TableCell>Whole grain pasta / rice</TableCell><TableCell>Carbs refill</TableCell></TableRow>
                        <TableRow><TableCell>Leafy salad + olive oil</TableCell><TableCell>Antioxidants</TableCell></TableRow>
                        <TableRow><TableCell>Yogurt or lassi</TableCell><TableCell>Cooling effect</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 4:30 PM: Snack</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Protein smoothie + chia or flaxseeds</TableCell><TableCell>Muscle support</TableCell></TableRow>
                        <TableRow><TableCell>1 fruit (orange or kiwi)</TableCell><TableCell>Vitamin C</TableCell></TableRow>
                        <TableRow><TableCell>Handful mixed nuts</TableCell><TableCell>Healthy fats and magnesium</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 8:00 PM: Dinner</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Quinoa + dal / egg curry</TableCell><TableCell>Balanced protein</TableCell></TableRow>
                        <TableRow><TableCell>Steamed veggies</TableCell><TableCell>Light on digestion</TableCell></TableRow>
                        <TableRow><TableCell>Sweet potato</TableCell><TableCell>Complex carbs (small portion)</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> 9:30 PM: Night Snack</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Milk + turmeric + 1 fig / few almonds</p>
            </CardContent>
        </Card>
    </div>
);

export const BasketballNutritionPlan = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> 6:30–7:00 AM: Hydration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> 500–750 ml water with lemon and pinch of salt</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: 4 soaked almonds + 1 date</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 8:00 AM: Pre-Training Breakfast</CardTitle>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Oats + banana + peanut butter</TableCell><TableCell>Energy + potassium</TableCell></TableRow>
                        <TableRow><TableCell>2–3 boiled eggs / egg whites</TableCell><TableCell>Protein</TableCell></TableRow>
                        <TableRow><TableCell>Whole wheat toast</TableCell><TableCell>Light complex carbs</TableCell></TableRow>
                        <TableRow><TableCell>Water or coconut water</TableCell><TableCell>Hydration boost</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> 10:00–11:30 AM: During Training</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Water every 15–20 mins</p>
                <p className="flex items-center gap-2 mt-2"><Droplets className="h-4 w-4 text-accent"/> Electrolyte drink (if over 60 mins)</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: 1 banana or natural energy bar</p>
            </CardContent>
        </Card>
         <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 1:00 PM: Post-Training Lunch</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Grilled chicken/tofu</TableCell><TableCell>Lean protein</TableCell></TableRow>
                        <TableRow><TableCell>Brown rice / quinoa / chapati</TableCell><TableCell>Complex carbs</TableCell></TableRow>
                        <TableRow><TableCell>Mixed vegetables + leafy greens</TableCell><TableCell>Micronutrients</TableCell></TableRow>
                        <TableRow><TableCell>Yogurt or buttermilk</TableCell><TableCell>Digestion and probiotics</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 4:00 PM: Pre-Evening Practice Snack</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Fruit smoothie with chia seeds</TableCell><TableCell>Energy + fiber</TableCell></TableRow>
                        <TableRow><TableCell>1 boiled egg / Greek yogurt</TableCell><TableCell>Light protein</TableCell></TableRow>
                        <TableRow><TableCell>Handful nuts/seeds</TableCell><TableCell>Omega-3 & healthy fats</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 8:00 PM: Dinner</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Lentil soup + roti + sautéed veggies</TableCell><TableCell>Easy digest</TableCell></TableRow>
                        <TableRow><TableCell>Grilled paneer / tofu / fish</TableCell><TableCell>Recovery</TableCell></TableRow>
                        <TableRow><TableCell>Beetroot or cucumber salad</TableCell><TableCell>Hydrating</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> 9:30 PM: Pre-Bed Snack</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Warm turmeric milk + 2 soaked figs or almonds</p>
            </CardContent>
        </Card>
    </div>
);

export const VolleyballNutritionPlan = () => (
     <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> 6:30 AM: Hydration</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Water + lemon + pinch of rock salt</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: 1 date + 4 soaked almonds</p>
            </CardContent>
        </Card>
         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30 AM: Pre-Training Fuel</CardTitle>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Smoothie: oats + banana + milk + honey</TableCell><TableCell>Instant energy</TableCell></TableRow>
                        <TableRow><TableCell>Boiled eggs (2–3) or tofu slices</TableCell><TableCell>Protein</TableCell></TableRow>
                        <TableRow><TableCell>Water (300–500 ml)</TableCell><TableCell>Start hydrated</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> 9:00–10:30 AM: During Training</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> 2–3 sips of water every 15–20 mins</p>
                <p className="flex items-center gap-2 mt-2"><Droplets className="h-4 w-4 text-accent"/> Coconut water or lemon + salt drink</p>
                <p className="text-sm text-muted-foreground ml-6">Optional: Dates or raisins mid-session</p>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 12:30 PM: Lunch</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Grilled chicken/tofu + rice</TableCell><TableCell>Carbs + protein</TableCell></TableRow>
                        <TableRow><TableCell>Salad: carrots, cucumbers, tomato</TableCell><TableCell>Hydration & antioxidants</TableCell></TableRow>
                        <TableRow><TableCell>Curd or lassi</TableCell><TableCell>Gut support</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 4:00 PM: Snack</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Peanut butter toast</TableCell><TableCell>Healthy fats</TableCell></TableRow>
                        <TableRow><TableCell>Buttermilk or fruit juice</TableCell><TableCell>Natural energy</TableCell></TableRow>
                        <TableRow><TableCell>1 banana or trail mix</TableCell><TableCell>Potassium + carbs</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30 PM: Dinner</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow><TableHead>Item</TableHead><TableHead>Notes</TableHead></TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow><TableCell>Mixed dal + roti / brown rice</TableCell><TableCell>Light yet nutritious</TableCell></TableRow>
                        <TableRow><TableCell>Steamed veggies</TableCell><TableCell>Fiber & vitamins</TableCell></TableRow>
                        <TableRow><TableCell>Herbal tea (optional)</TableCell><TableCell>Relaxation aid</TableCell></TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> 9:30 PM: Pre-Sleep</CardTitle>
            </CardHeader>
            <CardContent>
                 <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Milk + pinch turmeric + 1 fig or 2 almonds</p>
            </CardContent>
        </Card>
    </div>
);

export const TableTennisNutritionPlan = () => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Table Tennis Player – Daily Nutrition Plan</CardTitle>
            <CardDescription>Focus on fast energy, mental sharpness, and quick recovery.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> 6:30 AM – Hydration (Start Fresh)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                    <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> 500 ml water + lemon + pinch of salt</p>
                    <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> 4 soaked almonds + 1 fig</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30 AM – Pre-Training Breakfast</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Why?</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Oats + banana + milk</TableCell>
                                <TableCell>1 bowl</TableCell>
                                <TableCell>Slow-release carbs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>2 boiled eggs / tofu slices</TableCell>
                                <TableCell>2–3 pcs</TableCell>
                                <TableCell>Protein & amino acids</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>1 slice multigrain toast + peanut butter</TableCell>
                                <TableCell>Optional</TableCell>
                                <TableCell>Energy & healthy fats</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Green tea or black coffee</TableCell>
                                <TableCell>1 cup</TableCell>
                                <TableCell>Optional alertness</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> 9:00–10:30 AM – During Practice / Match</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                    <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Water every 15–20 mins (small sips)</p>
                    <p className="flex items-center gap-2"><Droplets className="h-4 w-4 text-accent"/> Coconut water or lemon water (natural electrolytes)</p>
                    <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Optional: Dates (2–3) or a banana mid-session</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 12:30 PM – Post-Training Lunch</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Why?</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Grilled chicken / paneer / lentils</TableCell>
                                <TableCell>150–200g</TableCell>
                                <TableCell>Muscle repair</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Brown rice / roti / quinoa</TableCell>
                                <TableCell>1–2 servings</TableCell>
                                <TableCell>Carb replenishment</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Steamed vegetables</TableCell>
                                <TableCell>1 bowl</TableCell>
                                <TableCell>Fiber, vitamins</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Yogurt or buttermilk</TableCell>
                                <TableCell>1 cup</TableCell>
                                <TableCell>Gut health & cooling</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Papaya / pomegranate</TableCell>
                                <TableCell>1 serving</TableCell>
                                <TableCell>Antioxidants</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 4:00 PM – Evening Snack</CardTitle>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Why?</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Protein smoothie (milk + banana + whey)</TableCell>
                                <TableCell>1 glass</TableCell>
                                <TableCell>Energy & recovery</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Boiled egg / Greek yogurt</TableCell>
                                <TableCell>1</TableCell>
                                <TableCell>Light protein</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Trail mix or 5–6 almonds</TableCell>
                                <TableCell>1 handful</TableCell>
                                <TableCell>Brain fuel (omega-3s)</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> 7:30 PM – Dinner</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Why?</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Stir-fried tofu / fish / dal</TableCell>
                                <TableCell>150–200g</TableCell>
                                <TableCell>Light, high protein</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Sweet potato / 1 chapati</TableCell>
                                <TableCell>Small</TableCell>
                                <TableCell>Light carbs for glycogen</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Cucumber/beetroot salad</TableCell>
                                <TableCell>1 bowl</TableCell>
                                <TableCell>Hydration & minerals</TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell>Herbal tea (optional)</TableCell>
                                <TableCell>1 cup</TableCell>
                                <TableCell>Relaxation & digestion</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> 9:30 PM – Pre-Sleep</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                    <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Low-fat warm milk + turmeric</p>
                    <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> 2 almonds / 1 dried fig</p>
                    <p className="flex items-center gap-2"><Utensils className="h-4 w-4 text-accent"/> Optional: Casein protein (for overnight repair)</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Lightbulb className="text-primary"/> Extra Tips for Table Tennis Players</CardTitle>
                </CardHeader>
                 <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                        <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Hydration:</strong> Emphasize hydration: 2.5–3.5L per day.</p>
                    </div>
                     <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                        <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Brain Health:</strong> Boost with Omega-3s, walnuts, and seeds.</p>
                    </div>
                     <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                        <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Focus & Reflexes:</strong> Include dark chocolate (small), blueberries, and green tea.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent mt-1 shrink-0"/>
                        <p className="text-muted-foreground"><strong className="font-semibold text-foreground">Avoid:</strong> Heavy, oily, or high-sugar meals before practice or competition.</p>
                    </div>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

export const SexualWellnessNutritionPlan = () => (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline">Daily Diet Plan to Boost Sexual Stamina & Performance</CardTitle>
            <CardDescription>
                Focus Areas: Increase blood flow, enhance testosterone & libido, reduce fatigue, and support hormone health.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Sun className="text-primary"/> Morning Routine (6:30–7:00 AM)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p><strong>Hydration:</strong> 500 ml warm water + lemon + pinch of pink salt</p>
                    <div>
                        <p className="font-semibold">Superfood Shot (optional):</p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                            <li>1 tsp ashwagandha powder</li>
                            <li>1 tsp honey</li>
                            <li>3–4 soaked almonds + 1 date</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> Breakfast (7:30–8:00 AM)</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Food</TableHead><TableHead>Quantity</TableHead><TableHead>Benefit</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Boiled eggs or scrambled eggs</TableCell><TableCell>2–3</TableCell><TableCell>Zinc + protein + cholesterol (testosterone base)</TableCell></TableRow>
                            <TableRow><TableCell>Whole oats + banana + flaxseeds</TableCell><TableCell>1 bowl</TableCell><TableCell>L-arginine + magnesium (blood flow + stamina)</TableCell></TableRow>
                            <TableRow><TableCell>Watermelon / pomegranate juice</TableCell><TableCell>1 glass</TableCell><TableCell>Boost nitric oxide (natural Viagra effect)</TableCell></TableRow>
                            <TableRow><TableCell>Green tea or black coffee</TableCell><TableCell>1 cup</TableCell><TableCell>Circulation + antioxidant</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> Optional Pre-Workout (10:00 AM)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                    <p><strong>Banana + black coffee</strong> – for natural energy and blood flow</p>
                    <p><strong>Beetroot juice (60 ml)</strong> – boosts stamina and nitric oxide</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> Lunch (1:00 PM)</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Food</TableHead><TableHead>Quantity</TableHead><TableHead>Benefit</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Grilled chicken / tofu / paneer</TableCell><TableCell>150g</TableCell><TableCell>Protein + amino acids</TableCell></TableRow>
                            <TableRow><TableCell>Brown rice / quinoa / chapati</TableCell><TableCell>1–2 servings</TableCell><TableCell>Energy and hormone fuel</TableCell></TableRow>
                            <TableRow><TableCell>Spinach / kale salad (olive oil + lemon)</TableCell><TableCell>1 bowl</TableCell><TableCell>Zinc, folate, blood circulation</TableCell></TableRow>
                            <TableRow><TableCell>Yogurt / curd</TableCell><TableCell>1 cup</TableCell><TableCell>Gut health + vitamin B12</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> Evening Snack (4:30 PM)</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                         <TableHeader><TableRow><TableHead>Food</TableHead><TableHead>Quantity</TableHead><TableHead>Benefit</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Pumpkin seeds or mixed nuts</TableCell><TableCell>1 handful</TableCell><TableCell>Zinc, omega-3, testosterone support</TableCell></TableRow>
                            <TableRow><TableCell>Dark chocolate (70–85% cocoa)</TableCell><TableCell>1–2 squares</TableCell><TableCell>Dopamine + nitric oxide boost</TableCell></TableRow>
                            <TableRow><TableCell>Herbal tea (ginseng / ashwagandha)</TableCell><TableCell>1 cup</TableCell><TableCell>Libido + stress reduction</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Utensils className="text-primary"/> Dinner (7:30–8:00 PM)</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Food</TableHead><TableHead>Quantity</TableHead><TableHead>Benefit</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Lentil soup / fish curry / egg curry</TableCell><TableCell>1 bowl</TableCell><TableCell>Protein + arginine</TableCell></TableRow>
                            <TableRow><TableCell>Steamed vegetables (broccoli, carrots, beetroot)</TableCell><TableCell>1 bowl</TableCell><TableCell>Circulation and hormonal balance</TableCell></TableRow>
                            <TableRow><TableCell>1 chapati / small serving sweet potato</TableCell><TableCell>Optional carbs</TableCell><TableCell></TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-headline"><Moon className="text-primary"/> Pre-Sleep (9:30 PM)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-muted-foreground">
                    <p>Warm milk + pinch of nutmeg + 1 tsp honey → Boosts serotonin, sleep, and natural testosterone</p>
                    <p>Optional: 2 soaked figs or walnuts (libido + stamina)</p>
                </CardContent>
            </Card>
            <Card className="bg-muted/50 border-primary/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold"><Flame className="h-5 w-5 text-primary"/> Sexual Health Superfoods</CardTitle>
                    <CardDescription>Include Daily/Weekly</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Food</TableHead><TableHead>Why?</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Pomegranate</TableCell><TableCell>Boosts testosterone & sperm quality</TableCell></TableRow>
                            <TableRow><TableCell>Watermelon</TableCell><TableCell>Contains citrulline (natural Viagra)</TableCell></TableRow>
                            <TableRow><TableCell>Pumpkin seeds</TableCell><TableCell>Rich in zinc, critical for libido</TableCell></TableRow>
                            <TableRow><TableCell>Beetroot</TableCell><TableCell>Increases blood flow & endurance</TableCell></TableRow>
                            <TableRow><TableCell>Ashwagandha</TableCell><TableCell>Adaptogen – boosts T-levels & reduces anxiety</TableCell></TableRow>
                            <TableRow><TableCell>Avocado</TableCell><TableCell>Healthy fats + vitamin E for hormones</TableCell></TableRow>
                            <TableRow><TableCell>Dark chocolate</TableCell><TableCell>Improves mood & blood circulation</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card className="bg-destructive/10 border-destructive/20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold"><X className="h-5 w-5 text-destructive"/> Avoid These (Libido Killers)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                    <ul className="list-disc space-y-1 pl-5">
                        <li>Excess alcohol</li>
                        <li>Deep-fried/junk food</li>
                        <li>Sugary drinks</li>
                        <li>Smoking (major blood flow inhibitor)</li>
                        <li>Chronic stress (kills testosterone)</li>
                    </ul>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);
