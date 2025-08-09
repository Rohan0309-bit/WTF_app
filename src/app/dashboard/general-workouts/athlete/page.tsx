
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AthleteWorkoutsPage() {
  return (
    <div className="container mx-auto p-4">
       <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Athlete Workout Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sport-specific programs coming soon. Check back later!
        </p>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
           <CardDescription>
            We are currently developing specialized workout plans for various sports.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
