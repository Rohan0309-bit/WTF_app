
'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MASTER_EXERCISE_DATA, ExerciseDetails } from '@/lib/workouts';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const allExercises: ExerciseDetails[] = Object.entries(MASTER_EXERCISE_DATA).map(([name, details]) => ({
  name,
  type: details.type || 'N/A',
  muscle: details.muscle || 'N/A',
  equipment: details.equipment || 'N/A',
  difficulty: details.difficulty || 'N/A',
  instructions: details.instructions || 'No instructions available.',
  gifUrl: details.gifUrl || `https://placehold.co/400x300.png`,
})).sort((a, b) => a.name.localeCompare(b.name));

export default function ExerciseLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [muscleFilter, setMuscleFilter] = useState('all');

  const muscleGroups = useMemo(() => {
    const muscles = new Set(allExercises.map(ex => ex.muscle).filter(m => m !== 'N/A'));
    return ['all', ...Array.from(muscles).sort()];
  }, []);

  const filteredExercises = useMemo(() => {
    return allExercises.filter(exercise => {
      const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMuscle = muscleFilter === 'all' || exercise.muscle === muscleFilter;
      return matchesSearch && matchesMuscle;
    });
  }, [searchTerm, muscleFilter]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline">Exercise Library</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse our extensive library of exercises to build your perfect workout.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <Input
          placeholder="Search for an exercise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={muscleFilter} onValueChange={setMuscleFilter}>
          <SelectTrigger className="max-w-sm">
            <SelectValue placeholder="Filter by muscle group" />
          </SelectTrigger>
          <SelectContent>
            {muscleGroups.map(muscle => (
              <SelectItem key={muscle} value={muscle} className="capitalize">{muscle}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredExercises.map((exercise, index) => (
          <Card key={index} className="overflow-hidden group h-full flex flex-col">
            <div className="relative aspect-square">
              <Image
                src={exercise.gifUrl!}
                data-ai-hint={`${exercise.muscle} exercise`}
                alt={exercise.name}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
             <CardContent className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-bold font-headline flex-grow">{exercise.name}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary" className="capitalize">{exercise.muscle}</Badge>
                {exercise.difficulty !== 'N/A' && <Badge variant="outline" className="capitalize">{exercise.difficulty}</Badge>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
       {filteredExercises.length === 0 && (
          <div className="text-center col-span-full py-16">
            <p className="text-lg font-semibold">No exercises found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          </div>
        )}
    </div>
  );
}
