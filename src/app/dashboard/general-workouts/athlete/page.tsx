
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const athleteCategories = [
  { name: 'Cricket', href: '/dashboard/general-workouts/athlete/cricket', image: 'https://i.ibb.co/4xmZ9xN/Whats-App-Image-2025-06-30-at-01-09-32.jpg' },
  { name: 'Badminton', href: '/dashboard/general-workouts/athlete/badminton', image: 'https://i.ibb.co/j9mhkHHc/Whats-App-Image-2025-06-30-at-01-15-32.jpg' },
  { name: 'Football', href: '/dashboard/general-workouts/athlete/football', image: 'https://i.ibb.co/8LJ5VD3f/Whats-App-Image-2025-06-30-at-01-09-35.jpg' },
  { name: 'Basketball', href: '/dashboard/general-workouts/athlete/basketball', image: 'https://i.ibb.co/spj3dBqy/Whats-App-Image-2025-06-30-at-01-16-53.jpg' },
  { name: 'Volleyball', href: '/dashboard/general-workouts/athlete/volleyball', image: 'https://i.ibb.co/TJzVLM4/Whats-App-Image-2025-06-30-at-01-37-53.jpg' },
  { name: 'Table Tennis', href: '/dashboard/general-workouts/athlete/table-tennis', image: 'https://i.ibb.co/rfFLgQ1H/Whats-App-Image-2025-06-30-at-01-37-52.jpg' },
];

export default function AthleteWorkoutsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Athlete Workout Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sport-specific programs to maximize performance. Browse our upcoming categories.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {athleteCategories.map((category) => (
          <Link href={category.href} key={category.name}>
            <Card className="overflow-hidden group aspect-square hover:border-primary transition-all duration-300 hover:shadow-lg flex flex-col">
              <div className="relative h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 <div className="absolute bottom-0 p-4">
                    <h3 className="text-lg font-bold text-white">{category.name} Plan</h3>
                 </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
