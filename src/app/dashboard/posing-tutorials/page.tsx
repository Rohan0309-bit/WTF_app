import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const poses = [
  { name: 'Front Double Biceps', hint: 'male bodybuilder pose' },
  { name: 'Front Lat Spread', hint: 'bodybuilder lat spread' },
  { name: 'Side Chest', hint: 'side chest pose' },
  { name: 'Back Double Biceps', hint: 'back biceps pose' },
  { name: 'Rear Lat Spread', hint: 'bodybuilder back pose' },
  { name: 'Side Triceps', hint: 'tricep pose' },
  { name: 'Abs and Thigh', hint: 'abs pose' },
  { name: 'Most Muscular', hint: 'muscular pose' },
];

export default function PosingTutorialsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Posing Tutorials</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Perfect your presentation for the stage or for the camera. Learn to showcase your physique with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {poses.map((pose) => (
          <Card key={pose.name} className="overflow-hidden group">
            <div className="relative">
              <Image
                src={`https://placehold.co/400x600.png`}
                data-ai-hint={pose.hint}
                alt={pose.name}
                width={400}
                height={600}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <CardTitle className="font-headline text-lg text-white">{pose.name}</CardTitle>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
