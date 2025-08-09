
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function NonAthleteWorkoutsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">General Fitness Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Workout plans for all fitness levels are on their way. Please check back soon!
        </p>
      </div>
       <Card className="mt-6">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            We are building a library of workout plans for various fitness goals.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
