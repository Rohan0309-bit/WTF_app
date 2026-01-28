
import { MASTER_EXERCISE_DATA, type ExerciseDetails } from '@/lib/workouts';
import ExerciseLibraryClient from './exercise-library-client';

const allExercises: ExerciseDetails[] = Object.entries(MASTER_EXERCISE_DATA).map(([name, details]) => ({
  name,
  type: details.type || 'N/A',
  muscle: details.muscle || 'N/A',
  equipment: details.equipment || 'N/A',
  difficulty: details.difficulty || 'N/A',
  instructions: details.instructions || 'No instructions available.',
  gifUrl: details.gifUrl || `https://placehold.co/400x300.png`,
})).sort((a, b) => a.name.localeCompare(b.name));

const muscleGroups = ['all', ...Array.from(new Set(allExercises.map(ex => ex.muscle).filter(m => m !== 'N/A'))).sort()];

export default function ExerciseLibraryPage() {
  return <ExerciseLibraryClient allExercises={allExercises} muscleGroups={muscleGroups} />;
}
