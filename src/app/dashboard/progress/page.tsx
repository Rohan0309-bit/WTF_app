import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Calendar, Award, Share2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function ProgressPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline">Your Progress</h1>
        <p className="text-muted-foreground">
          Track your journey, celebrate milestones, and stay motivated.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Workout Streak</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14 Days</div>
            <p className="text-xs text-muted-foreground">Keep it up! You're on fire 🔥</p>
            <Progress value={70} className="mt-4" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">New badge: "Consistent Freak"</p>
             <div className="flex space-x-2 mt-4">
                <span className="text-2xl">🏅</span>
                <span className="text-2xl">🏆</span>
                <span className="text-2xl">💪</span>
                <span className="text-2xl">🔥</span>
                <span className="text-2xl">🌟</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Lift Progress: Bench Press</CardTitle>
          <CardDescription>Visual representation of your strength gains over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] bg-secondary rounded-lg flex items-center justify-center">
            <BarChart className="h-16 w-16 text-muted-foreground" />
            <p className="ml-4 text-muted-foreground">Chart data coming soon</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-headline">Share & Export</CardTitle>
            <CardDescription>Download your workout plan or share it with friends.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
              <Button>Download PDF</Button>
              <Button variant="outline">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Routine
              </Button>
          </CardContent>
      </Card>
    </div>
  );
}
