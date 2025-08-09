export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  rest: string;
}

export function parseWorkoutPlan(plan: string): Exercise[] {
  const exercises: Exercise[] = [];
  const lines = plan.split('\n').filter(line => line.trim() !== '');

  // Regex to capture exercise name, sets, reps, and rest time
  const exerciseRegex = /^\d+\.\s*(.*?):\s*(\d+)\s*sets.*?\s*(\d+)\s*reps.*?\((.*?)\)/i;
  const exerciseRegexSimple = /^\d+\.\s*(.*?):\s*(\d+x\d+)\s*\((.*?)\)/i;
  const exerciseRegexColon = /^\d+\.\s*(.*?):\s*(.*?)$/i;


  for (const line of lines) {
    let match = line.match(exerciseRegex);
    if (match) {
      exercises.push({
        name: match[1].trim(),
        sets: match[2].trim(),
        reps: match[3].trim(),
        rest: match[4].trim().replace('Rest: ', ''),
      });
      continue;
    }

    match = line.match(exerciseRegexSimple);
    if (match) {
        const [sets, reps] = match[2].split('x');
        exercises.push({
            name: match[1].trim(),
            sets: sets.trim(),
            reps: reps.trim(),
            rest: match[3].trim().replace('Rest: ', ''),
        });
        continue;
    }

    match = line.match(exerciseRegexColon);
    if (match) {
        const name = match[1].trim();
        const details = match[2].trim();
        const setsMatch = details.match(/(\d+)\s*sets/i);
        const repsMatch = details.match(/(\d+)\s*reps/i);
        const restMatch = details.match(/rest\s*(\d+\s*sec)/i);
         exercises.push({
            name: name,
            sets: setsMatch ? setsMatch[1] : 'N/A',
            reps: repsMatch ? repsMatch[1] : 'N/A',
            rest: restMatch ? restMatch[1] : 'N/A',
        });
        continue;
    }

    // Fallback for less structured lines
    const parts = line.split(/[:\-,]/);
    if (parts.length > 1) {
       const namePart = parts[0].replace(/^\d+\.\s*/, '').trim();
       const detailsPart = parts.slice(1).join(', ');
       exercises.push({
         name: namePart,
         sets: 'Info',
         reps: 'in',
         rest: 'description',
       });
    }
  }

  return exercises;
}
