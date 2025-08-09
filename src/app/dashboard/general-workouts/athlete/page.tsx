
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const athleteCategories = [
  { name: 'Cricket', href: '/dashboard/general-workouts/athlete/cricket', hint: 'cricket player' },
  { name: 'Badminton', href: '/dashboard/general-workouts/athlete/badminton', hint: 'badminton player' },
  { name: 'Football', href: '/dashboard/general-workouts/athlete/football', hint: 'football player' },
  { name: 'Basketball', href: '/dashboard/general-workouts/athlete/basketball', hint: 'basketball player' },
  { name: 'Volleyball', href: '/dashboard/general-workouts/athlete/volleyball', hint: 'volleyball player' },
  { name: 'Table Tennis', href: '/dashboard/general-workouts/athlete/table-tennis', hint: 'table tennis player' },
  { name: 'Calisthenics', href: '#', hint: 'calisthenics workout', comingSoon: true },
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
          <Link href={category.href} key={category.name} className={category.comingSoon ? "pointer-events-none" : ""}>
            <Card className="overflow-hidden group h-full hover:border-primary transition-all duration-300 hover:shadow-lg">
              <div className="relative">
                <Image
                  src={`https://placehold.co/400x300.png`}
                  data-ai-hint={category.hint}
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
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
