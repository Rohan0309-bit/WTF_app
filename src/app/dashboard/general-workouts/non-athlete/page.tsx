
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NON_ATHLETE_WORKOUTS } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function NonAthleteWorkoutsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">General Fitness Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Workout plans for all fitness levels. Browse our categories.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {NON_ATHLETE_WORKOUTS.map((category) => (
          <Link href={category.href} key={category.name} className={category.comingSoon ? "pointer-events-none" : ""}>
            <Card className="overflow-hidden group w-full h-full block hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-bold text-white">{category.name} Plan</h3>
                    {category.comingSoon && <p className="text-sm text-white/80">Coming Soon</p>}
                 </div>
              </div>
               <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
