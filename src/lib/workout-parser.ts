export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}

export interface DailyWorkout {
  day: string;
  title: string;
  exercises: Exercise[];
}

function parseSingleExercise(line: string): Exercise | null {
  const exerciseRegex = /^\d+\.\s*(.*?):\s*(?:(\d+)\s*sets.*?\s*(\d+[-/a-z\s]*?)\s*reps|(\d+x\d+))\s*\((.*?)\)/i;
  const match = line.match(exerciseRegex);

  if (match) {
    if (match[4]) { // Matched "3x10" format
      const [sets, reps] = match[4].split('x');
      return {
        name: match[1].trim(),
        sets: sets.trim(),
        reps: reps.trim(),
        rest: match[5].trim().replace(/^Rest:\s*/i, ''),
      };
    }
    return {
      name: match[1].trim(),
      sets: match[2].trim(),
      reps: match[3].trim(),
      rest: match[5].trim().replace(/^Rest:\s*/i, ''),
    };
  }
  return null;
}

export function parseWeeklyWorkoutPlan(plan: string): DailyWorkout[] {
  const weeklyPlan: DailyWorkout[] = [];
  const lines = plan.split('\n');
  let currentDay: DailyWorkout | null = null;

  const dayRegex = /^(Day\s*\d+)\s*:\s*(.*)/i;

  for (const line of lines) {
    const dayMatch = line.match(dayRegex);

    if (dayMatch) {
      if (currentDay) {
        weeklyPlan.push(currentDay);
      }
      currentDay = {
        day: dayMatch[1].trim(),
        title: dayMatch[2].trim(),
        exercises: [],
      };
    } else if (currentDay && line.trim().length > 0) {
        const exercise = parseSingleExercise(line.trim());
        if (exercise) {
            currentDay.exercises.push(exercise);
        } else if (line.toLowerCase().includes('rest day')) {
            // This is a rest day, exercises array will be empty.
        }
    }
  }

  if (currentDay) {
    weeklyPlan.push(currentDay);
  }

  return weeklyPlan;
}

export function parseWorkoutPlan(plan: string): Exercise[] {
  // This function is now a legacy parser for single day plans if needed elsewhere.
  // For weekly plans, use parseWeeklyWorkoutPlan.
  const exercises: Exercise[] = [];
  const lines = plan.split('\n').filter(line => line.trim() !== '');

  for (const line of lines) {
    const exercise = parseSingleExercise(line);
    if(exercise) {
        exercises.push(exercise);
    }
  }

  return exercises;
}
