import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';

const nutritionCategories = [
  { name: 'Cutting', hint: 'healthy salad' },
  { name: 'Bulking', hint: 'steak potatoes' },
  { name: 'Lean Muscle', hint: 'chicken rice' },
  { name: 'Sport: Cricket', hint: 'balanced meal' },
  { name: 'Sport: Football', hint: 'pasta meal' },
  { name: 'Sport: Basketball', hint: 'high protein meal' },
];

export default function NutritionPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Nutrition Plans</h1>
        <p className="text-muted-foreground">
          Fuel your body for peak performance. Find professional meal plans for your specific goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nutritionCategories.map((category) => (
          <Card key={category.name} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <Image
                src={`https://placehold.co/600x400.png`}
                data-ai-hint={category.hint}
                alt={category.name}
                width={600}
                height={400}
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
              <p className="text-muted-foreground mt-1">Full-day meal plans available.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
