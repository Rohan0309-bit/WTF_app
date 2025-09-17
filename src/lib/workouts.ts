

export interface ExerciseDetails {
  name: string;
  type?: string;
  muscle?: string;
  equipment?: string;
  difficulty?: string;
  instructions?: string;
  injury_prevention?: string;
  sets?: string;
  reps?: string;
  rest?: string;
  image: string; 
  hint: string;
  gifUrl?: string;
}

export interface DayWorkout {
  focus: string;
  exercises: ExerciseDetails[];
  gender?: 'male' | 'female';
  location?: 'gym' | 'home';
  day?: string;
}

export interface WorkoutSplit {
  [day: string]: DayWorkout;
}

export interface CustomWorkoutPlan {
  id: string;
  name:string;
  description: string;
  days: Record<string, CustomExercise[]>;
}

export interface CustomExercise extends ExerciseDetails {
  customSets: string;
  customReps: string;
  customRest: string;
}

export const MASTER_EXERCISE_DATA: Record<string, Partial<ExerciseDetails>> = {
    "Jumping Jacks": { image: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg', hint: 'jumping jacks', type: 'cardio', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg' },
    "Wrist Roll": { image: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg', hint: 'wrist roll', type: 'warmup', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg' },
    "Elbow Circles": { image: 'https://i.ibb.co/hRXNZ1xg/Whats-App-Image-2025-07-03-at-00-03-02.jpg', hint: 'elbow circles', type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/hRXNZ1xg/Whats-App-Image-2025-07-03-at-00-03-02.jpg' },
    "Arm Circles": { image: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg', hint: 'arm circles', type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg' },
    "Bar Hanging": { image: 'https://i.ibb.co/Z6WFkXTN/Whats-App-Image-2025-07-02-at-23-58-36.jpg', hint: 'bar hang', type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/Z6WFkXTN/Whats-App-Image-2025-07-02-at-23-58-36.jpg' },
    "Plank": { image: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg', hint: 'plank exercise', type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg' },
    "Quad Stretch": { image: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg', hint: 'quad stretch', type: 'flexibility', muscle: 'Quads', gifUrl: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg' },
    "Hamstring Stretch": { image: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg', hint: 'hamstring stretch', type: 'flexibility', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg' },
    "Chest Stretch": { image: 'https://i.ibb.co/fYGrr0Fj/Whats-App-Image-2025-07-03-at-13-58-47-1.jpg', hint: 'chest stretch', type: 'flexibility', muscle: 'Chest', gifUrl: 'https://i.ibb.co/fYGrr0Fj/Whats-App-Image-2025-07-03-at-13-58-47-1.jpg' },
    "Shoulder Stretch": { image: 'https://i.ibb.co/93CV7cS8/Whats-App-Image-2025-07-03-at-13-58-48-1.jpg', hint: 'shoulder stretch', type: 'flexibility', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/93CV7cS8/Whats-App-Image-2025-07-03-at-13-58-48-1.jpg' },
    "Triceps Stretch": { image: 'https://i.ibb.co/G4D1MJjZ/Whats-App-Image-2025-07-03-at-13-58-47-2.jpg', hint: 'triceps stretch', type: 'flexibility', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/G4D1MJjZ/Whats-App-Image-2025-07-03-at-13-58-47-2.jpg' },
    "Child's Pose": { image: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg', hint: 'child pose', type: 'flexibility', muscle: 'Back', gifUrl: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg' },
    "Bench Press": { image: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg', hint: 'bench press' , type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg' },
    "Incline Bench Press": { image: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg', hint: 'incline press' , type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg' },
    "Decline / Cable Fly": { image: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg', hint: 'cable fly', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg' },
    "Seated Machine Fly": { image: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg', hint: 'machine fly', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg' },
    "Triceps Pushdown": { image: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', hint: 'Triceps Pushdown', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Overhead Extension (Cable or Dumbbell)": { image: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg', hint: 'overhead extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg' },
    "Underhand triceps pushdown": { image: 'https://i.ibb.co/SDbc5gcv/Whats-App-Image-2025-07-03-at-12-31-16.jpg', hint: 'triceps pushdown', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/SDbc5gcv/Whats-App-Image-2025-07-03-at-12-31-16.jpg' },
    "Lat Pulldowns": { image: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg', hint: 'lat pulldown', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg' },
    "Seated Cable Row": { image: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg', hint: 'seated row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Barbell Rows": { image: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg', hint: 'barbell row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg' },
    "Dumbbell Curl": { image: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg', hint: 'dumbbell curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg' },
    "Hammer Curl": { image: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg', hint: 'hammer curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg' },
    "Chin-Ups (BONUS)": { image: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg', hint: 'chinup bonus', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg' },
    "Lateral Raises": { image: 'https://i.ibb.co/XrFK5j6Y/Whats-App-Image-2025-07-03-at-16-00-53-1.jpg', hint: 'lateral raise', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/XrFK5j6Y/Whats-App-Image-2025-07-03-at-16-00-53-1.jpg' },
    "Face Pulls": { image: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg', hint: 'face pull', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg' },
    "Shrugs": { image: 'https://i.ibb.co/7JSJPxXK/Whats-App-Image-2025-07-03-at-16-00-50.jpg', hint: 'shrugs', type: "strength", muscle: "Traps", gifUrl: 'https://i.ibb.co/7JSJPxXK/Whats-App-Image-2025-07-03-at-16-00-50.jpg' },
    "Barbell Back Squats": { image: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg', hint: 'barbell squat', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Romanian Deadlifts": { image: 'https://i.ibb.co/bpSJMbn/Whats-App-Image-2025-07-03-at-16-00-51-1.jpg', hint: 'romanian deadlift', type: "strength", muscle: "Hamstrings", gifUrl: 'https://i.ibb.co/bpSJMbn/Whats-App-Image-2025-07-03-at-16-00-51-1.jpg' },
    "Dumbbell Walking Lunges": { image: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg', hint: 'dumbbell lunge', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Calf Raises": { image: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg', hint: 'calf raise', type: "strength", muscle: "Calves", gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg' },
    "Planks (BONUS)": { image: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg', hint: 'plank bonus', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg' },
    "Cable Fly": { image: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg', hint: 'cable fly', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg' },
    "Overhead Extension": { image: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg', hint: 'overhead extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg' },
    "Tricep Pushdowns": { image: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', hint: 'tricep pushdown', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Russian Twists": { image: 'https://i.ibb.co/xSXDQC20/Whats-App-Image-2025-07-03-at-16-10-31-1.jpg', hint: 'russian twist', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/xSXDQC20/Whats-App-Image-2025-07-03-at-16-10-31-1.jpg' },
    "Hanging Leg Raises": { image: 'https://i.ibb.co/xR5JGJK/Whats-App-Image-2025-07-03-at-16-11-55.jpg', hint: 'leg raise', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/xR5JGJK/Whats-App-Image-2025-07-03-at-16-11-55.jpg' },
    "Incline Dumbbell Curls": { image: 'https://i.ibb.co/cK0yY5bV/Whats-App-Image-2025-07-03-at-16-15-47.jpg', hint: 'incline curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/cK0yY5bV/Whats-App-Image-2025-07-03-at-16-15-47.jpg' },
    "Reverse Curls": { image: 'https://i.ibb.co/5h7c98Bt/Whats-App-Image-2025-07-03-at-16-15-48.jpg', hint: 'reverse curl', type: "strength", muscle: "Forearms", gifUrl: 'https://i.ibb.co/5h7c98Bt/Whats-App-Image-2025-07-03-at-16-15-48.jpg' },
    "Leg Extension": { image: 'https://i.ibb.co/BKL3cFsx/Whats-App-Image-2025-07-03-at-16-21-32-2.jpg', hint: 'leg extension', type: "strength", muscle: "Quads", gifUrl: 'https://i.ibb.co/BKL3cFsx/Whats-App-Image-2025-07-03-at-16-21-32-2.jpg' },
    "Leg Press": { image: 'https://i.ibb.co/dJWfvdxG/Whats-App-Image-2025-07-03-at-16-21-32-1.jpg', hint: 'leg press', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/dJWfvdxG/Whats-App-Image-2025-07-03-at-16-21-32-1.jpg' },
    "Reverse Crunches": { image: 'https://i.ibb.co/Mxzwj8qK/Whats-App-Image-2025-07-03-at-16-21-30-2.jpg', hint: 'reverse crunch', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/Mxzwj8qK/Whats-App-Image-2025-07-03-at-16-21-30-2.jpg' },
    "Plank Side Holds": { image: 'https://i.ibb.co/zHDgB2gG/Whats-App-Image-2025-07-03-at-16-21-30-1.jpg', hint: 'side plank', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/zHDgB2gG/Whats-App-Image-2025-07-03-at-16-21-30-1.jpg' },
    "Incline Walk": { image: 'https://i.ibb.co/Xr1DG70z/Whats-App-Image-2025-07-03-at-16-21-30.jpg', hint: 'incline walk', type: "cardio", muscle: "Full Body", gifUrl: 'https://i.ibb.co/Xr1DG70z/Whats-App-Image-2025-07-03-at-16-21-30.jpg' },
    "Stretching / Foam rolling": { image: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg', hint: 'stretching foam', type: "flexibility", muscle: "Full Body", gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Optional: Yoga class": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga class', type: "flexibility", muscle: "Full Body", gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Incline Push-Ups": { image: 'https://i.ibb.co/CpGNvnrD/Whats-App-Image-2025-07-04-at-00-11-52.jpg', hint: 'incline pushup', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/CpGNvnrD/Whats-App-Image-2025-07-04-at-00-11-52.jpg' },
    "Diamond Push-Ups": { image: 'https://i.ibb.co/fVbL4CzR/Whats-App-Image-2025-07-04-at-00-11-51-1.jpg', hint: 'diamond pushup', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/fVbL4CzR/Whats-App-Image-2025-07-04-at-00-11-51-1.jpg' },
    "Chair Dips": { image: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg', hint: "chair dip", type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg' },
    "Triceps Dips": { image: "https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg", hint: "chair dip", type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg' },
    "Close-Grip Push-Ups": { image: 'https://i.ibb.co/tMfwHjRG/Whats-App-Image-2025-07-04-at-00-11-50.jpg', hint: 'close pushup', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/tMfwHjRG/Whats-App-Image-2025-07-04-at-00-11-50.jpg' },
    "Overhead Triceps Extensions": { image: 'https://i.ibb.co/N6jhFqDG/Whats-App-Image-2025-07-04-at-00-23-31.jpg', hint: 'overhead extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/N6jhFqDG/Whats-App-Image-2025-07-04-at-00-23-31.jpg' },
    "Superman Hold": { image: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg', hint: 'superman hold', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Towel Rows": { image: 'https://i.ibb.co/WWDNXwwW/Whats-App-Image-2025-07-04-at-00-30-31.jpg', hint: 'towel row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/WWDNXwwW/Whats-App-Image-2025-07-04-at-00-30-31.jpg' },
    "Reverse Snow Angels": { image: 'https://i.ibb.co/67xPNLRS/Whats-App-Image-2025-07-04-at-00-30-31-1.jpg', hint: 'reverse snow', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/67xPNLRS/Whats-App-Image-2025-07-04-at-00-30-31-1.jpg' },
    "Biceps Curls": { image: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg', hint: 'bicep curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg' },
    "Chin-Ups": { image: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg', hint: 'chin up', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg' },
    "Squats": { image: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg', hint: 'squat', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Lunges": { image: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg', hint: 'lunge', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Wall Sit": { image: 'https://i.ibb.co/vvHxBPm6/Whats-App-Image-2025-07-04-at-01-01-38.jpg', hint: 'wall sit', type: "strength", muscle: "Quads", gifUrl: 'https://i.ibb.co/vvHxBPm6/Whats-App-Image-2025-07-04-at-01-01-38.jpg' },
    "Pike Push-ups": { image: 'https://i.ibb.co/pBYjvDDB/Whats-App-Image-2025-07-04-at-00-50-56.jpg', hint: 'pike pushup', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/pBYjvDDB/Whats-App-Image-2025-07-04-at-00-50-56.jpg' },
    "Leg Raises": { image: 'https://i.ibb.co/p6jkkjXD/Whats-App-Image-2025-07-03-at-16-10-31.jpg', hint: 'leg raise', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/p6jkkjXD/Whats-App-Image-2025-07-03-at-16-10-31.jpg' },
    "Superman Pulls": { image: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg', hint: 'superman pull', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Isometric Hold": { image: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg', hint: 'isometric hold', type: "strength", muscle: "Full Body", gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Wrist Curls": { image: 'https://i.ibb.co/mC49v0fJ/Whats-App-Image-2025-07-04-at-01-01-37-1.jpg', hint: 'wrist curl', type: "strength", muscle: "Forearms", gifUrl: 'https://i.ibb.co/mC49v0fJ/Whats-App-Image-2025-07-04-at-01-01-37-1.jpg' },
    "Forearm Squeeze": { image: 'https://i.ibb.co/RTb9xfTS/Whats-App-Image-2025-07-04-at-01-02-19.jpg', hint: 'forearm squeeze', type: "strength", muscle: "Forearms", gifUrl: 'https://i.ibb.co/RTb9xfTS/Whats-App-Image-2025-07-04-at-01-02-19.jpg' },
    "Jump Squats": { image: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg', hint: 'jump squat', type: "plyometrics", muscle: "Legs", gifUrl: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg' },
    "Walking Lunges": { image: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg', hint: 'walking lunge', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Plank to Push-Up": { image: 'https://i.ibb.co/LwPZSSd/Whats-App-Image-2025-07-04-at-00-46-07.jpg', hint: 'plank pushup', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/LwPZSSd/Whats-App-Image-2025-07-04-at-00-46-07.jpg' },
    "Heel Touches": { image: 'https://i.ibb.co/DDBfhrN9/Whats-App-Image-2025-07-04-at-00-46-07-1.jpg', hint: 'heel touch', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/DDBfhrN9/Whats-App-Image-2025-07-04-at-00-46-07-1.jpg' },
    "Light Yoga": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'light yoga', type: "flexibility", muscle: "Full Body", gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Stretching": { image: 'https://i.ibb.co/mpNwFbg/Whats-App-Image-2025-07-04-at-00-11-52-1.jpg', hint: 'stretching', type: "flexibility", muscle: "Full Body", gifUrl: 'https://i.ibb.co/mpNwFbg/Whats-App-Image-2025-07-04-at-00-11-52-1.jpg' },
    "20-30 min walk": { image: 'https://i.ibb.co/Jj676tFt/Whats-App-Image-2025-07-04-at-01-06-44.jpg', hint: 'walking person', type: "cardio", muscle: "Full Body", gifUrl: 'https://i.ibb.co/Jj676tFt/Whats-App-Image-2025-07-04-at-01-06-44.jpg' },
    "Incline Chest Press": { image: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg', hint: 'incline press', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg' },
    "Chest Fly": { image: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg', hint: 'chest fly', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg' },
    "Overhead DB Triceps Extension": { image: 'https://i.ibb.co/fVBpV0rm/Whats-App-Image-2025-07-04-at-01-14-03.jpg', hint: 'overhead extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/fVBpV0rm/Whats-App-Image-2025-07-04-at-01-14-03.jpg' },
    "Lat Pulldown": { image: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg', hint: 'lat pulldown', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg' },
    "Seated Row": { image: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg', hint: 'seated row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Assisted Pull-Ups": { image: 'https://i.ibb.co/9kDwhDf9/Whats-App-Image-2025-07-03-at-12-26-30.jpg', hint: 'assisted pullup', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/9kDwhDf9/Whats-App-Image-2025-07-03-at-12-26-30.jpg' },
    "Dumbbell Bicep Curls": { image: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg', hint: 'bicep curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg' },
    "Cable Bicep Curls": { image: 'https://i.ibb.co/5g9SsNy4/Whats-App-Image-2025-07-04-at-01-15-54.jpg', hint: 'cable curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/5g9SsNy4/Whats-App-Image-2025-07-04-at-01-15-54.jpg' },
    "Smith Squats": { image: 'https://i.ibb.co/pj4JJ6F0/Whats-App-Image-2025-07-04-at-01-14-02-2.jpg', hint: 'smith squat', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/pj4JJ6F0/Whats-App-Image-2025-07-04-at-01-14-02-2.jpg' },
    "Flat DB Bench": { image: 'https://i.ibb.co/PzPn1krF/Whats-App-Image-2025-07-03-at-16-08-20.jpg', hint: 'dumbbell press', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/PzPn1krF/Whats-App-Image-2025-07-03-at-16-08-20.jpg' },
    "Skull Crushers": { image: 'https://i.ibb.co/Jjwkx5mN/Whats-App-Image-2025-07-04-at-01-14-02-1.jpg', hint: 'skull crusher', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/Jjwkx5mN/Whats-App-Image-2025-07-04-at-01-14-02-1.jpg' },
    "Plank Hold": { image: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg', hint: 'plank hold', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg' },
    "Cable Oblique Twists": { image: 'https://i.ibb.co/1YgzSh0f/Whats-App-Image-2025-07-04-at-00-46-06.jpg', hint: 'oblique twist', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/1YgzSh0f/Whats-App-Image-2025-07-04-at-00-46-06.jpg' },
    "T-Bar Rows": { image: 'https://i.ibb.co/Xk7sWWfN/Whats-App-Image-2025-07-04-at-01-14-02.jpg', hint: 't-bar row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/Xk7sWWfN/Whats-App-Image-2025-07-04-at-01-14-02.jpg' },
    "Wide Lat Pulldown": { image: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg', hint: 'lat pulldown', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg' },
    "Concentration Curls": { image: 'https://i.ibb.co/HDVZMPrL/Whats-App-Image-2025-07-04-at-01-27-45.jpg', hint: 'concentration curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/HDVZMPrL/Whats-App-Image-2025-07-04-at-01-27-45.jpg' },
    "Wrist Curls & Ext": { image: 'https://i.ibb.co/8D4Gwmpg/Whats-App-Image-2025-07-04-at-01-27-44-1.jpg', hint: 'wrist curl', type: "strength", muscle: "Forearms", gifUrl: 'https://i.ibb.co/8D4Gwmpg/Whats-App-Image-2025-07-04-at-01-27-44-1.jpg' },
    "Hip Thrusts": { image: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg', hint: 'hip thrust', type: "strength", muscle: "Glutes", gifUrl: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg' },
    "Bulgarian Split Squats": { image: 'https://i.ibb.co/RfXtscD/Whats-App-Image-2025-07-04-at-01-27-44-2.jpg', hint: 'split squat', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/RfXtscD/Whats-App-Image-2025-07-04-at-01-27-44-2.jpg' },
    "Leg Curls": { image: 'https://i.ibb.co/8nZBdF2F/Whats-App-Image-2025-07-04-at-01-27-43.jpg', hint: 'leg curl', type: "strength", muscle: "Hamstrings", gifUrl: 'https://i.ibb.co/8nZBdF2F/Whats-App-Image-2025-07-04-at-01-27-43.jpg' },
    "Arnold Press": { image: 'https://i.ibb.co/xSZ3hvGJ/Whats-App-Image-2025-07-04-at-01-27-43-1.jpg', hint: 'arnold press', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/xSZ3hvGJ/Whats-App-Image-2025-07-04-at-01-27-43-1.jpg' },
    "Front Raises": { image: 'https://i.ibb.co/ymFP6jxM/Whats-App-Image-2025-07-04-at-01-27-44.jpg', hint: 'front raise', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/ymFP6jxM/Whats-App-Image-2025-07-04-at-01-27-44.jpg' },
    "Cable Crunch + Twists": { image: 'https://i.ibb.co/bjPCJH2J/Whats-App-Image-2025-07-04-at-01-27-42-1.jpg', hint: 'cable crunch', gifUrl: 'https://i.ibb.co/bjPCJH2J/Whats-App-Image-2025-07-04-at-01-27-42-1.jpg' },
    "Stretch / Foam Roll": { image: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg', hint: 'stretching', type: "flexibility", muscle: "Full Body", gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Yoga (Optional)": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga', type: "flexibility", muscle: "Full Body", gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Knee Push-Ups": { image: 'https://i.ibb.co/LdMXZT9P/Whats-App-Image-2025-07-04-at-01-27-42-2.jpg', hint: 'knee pushup', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/LdMXZT9P/Whats-App-Image-2025-07-04-at-01-27-42-2.jpg' },
    "Wall Push-Ups": { image: 'https://i.ibb.co/SwvXMJNX/Whats-App-Image-2025-07-04-at-01-27-42.jpg', hint: 'wall pushup', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/SwvXMJNX/Whats-App-Image-2025-07-04-at-01-27-42.jpg' },
    "Triceps Kickbacks": { image: 'https://i.ibb.co/jkkHz5db/Whats-App-Image-2025-07-04-at-01-27-41-1.jpg', hint: 'tricep kickback', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/jkkHz5db/Whats-App-Image-2025-07-04-at-01-27-41-1.jpg' },
    "Superwoman Hold": { image: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg', hint: 'superwoman hold', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Snow Angels": { image: 'https://i.ibb.co/67xPNLRS/Whats-App-Image-2025-07-04-at-00-30-31-1.jpg', hint: 'snow angel', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/67xPNLRS/Whats-App-Image-2025-07-04-at-00-30-31-1.jpg' },
    "Wall Angels": { image: 'https://i.ibb.co/W4cm1QDC/Whats-App-Image-2025-07-04-at-01-27-40.jpg', hint: 'wall angel', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/W4cm1QDC/Whats-App-Image-2025-07-04-at-01-27-40.jpg' },
    "Side-Lying Leg Raises": { image: 'https://i.ibb.co/5WxH8vXQ/Whats-App-Image-2025-07-04-at-01-27-41.jpg', hint: 'leg raise', type: "strength", muscle: "Glutes", gifUrl: 'https://i.ibb.co/5WxH8vXQ/Whats-App-Image-2025-07-04-at-01-27-41.jpg' },
    "Donkey Kicks": { image: 'https://i.ibb.co/TD90Nxym/Whats-App-Image-2025-07-04-at-11-22-44.jpg', hint: 'donkey kick', type: "strength", muscle: "Glutes", gifUrl: 'https://i.ibb.co/TD90Nxym/Whats-App-Image-2025-07-04-at-11-22-44.jpg' },
    "Sumo Squats": { image: 'https://i.ibb.co/7tNpVLWf/Whats-App-Image-2025-07-08-at-00-38-55-1.jpg', hint: 'sumo squat', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/7tNpVLWf/Whats-App-Image-2025-07-08-at-00-38-55-1.jpg' },
    "Step-Ups": { image: 'https://i.ibb.co/xKxZwJJF/Whats-App-Image-2025-07-04-at-11-17-56-1.jpg', hint: 'step up', type: "strength", muscle: "Legs", gifUrl: 'https://i.ibb.co/xKxZwJJF/Whats-App-Image-2025-07-04-at-11-17-56-1.jpg' },
    "Bird Dog": { image: 'https://i.ibb.co/JRHQZBgd/Whats-App-Image-2025-07-04-at-11-17-59.jpg', hint: 'bird dog', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/JRHQZBgd/Whats-App-Image-2025-07-04-at-11-17-59.jpg' },
    "Active Recovery": { image: 'https://i.ibb.co/RkBjkBKk/Whats-App-Image-2025-07-04-at-11-17-58-2.jpg', hint: 'recovery', type: "cardio", muscle: "Full Body", gifUrl: 'https://i.ibb.co/RkBjkBKk/Whats-App-Image-2025-07-04-at-11-17-58-2.jpg' },
    "Walk 20-30 mins": { image: 'https://i.ibb.co/ZjYgP7q/Whats-App-Image-2025-07-04-at-11-21-18.jpg', hint: 'walking person', type: "cardio", muscle: "Full Body", gifUrl: 'https://i.ibb.co/ZjYgP7q/Whats-App-Image-2025-07-04-at-11-21-18.jpg' },
    "Flat Barbell Bench Press": { image: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg', hint: 'barbell benchpress', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg' },
    "Incline Dumbbell Press": { image: 'https://i.ibb.co/99Vx8WnL/Whats-App-Image-2025-07-04-at-11-17-56.jpg', hint: 'incline press', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/99Vx8WnL/Whats-App-Image-2025-07-04-at-11-17-56.jpg' },
    "Decline Bench Press": { image: 'https://i.ibb.co/jvV98wSb/Whats-App-Image-2025-07-04-at-11-17-58-1.jpg', hint: 'decline press', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/jvV98wSb/Whats-App-Image-2025-07-04-at-11-17-58-1.jpg' },
    "Cable Crossover": { image: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg', hint: 'cable crossover', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg' },
    "Chest Press Machine": { image: 'https://i.ibb.co/v6XWYbZq/Whats-App-Image-2025-07-04-at-11-17-55.jpg', hint: 'chest machine', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/v6XWYbZq/Whats-App-Image-2025-07-04-at-11-17-55.jpg' },
    "Dumbbell Pullover": { image: 'https://i.ibb.co/7J7stSff/Whats-App-Image-2025-07-04-at-11-17-58.jpg', hint: 'dumbbell pullover', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/7J7stSff/Whats-App-Image-2025-07-04-at-11-17-58.jpg' },
    "Wide Arm Push-Ups": { image: 'https://i.ibb.co/GvRKj35Y/Whats-App-Image-2025-07-04-at-11-17-57.jpg', hint: 'wide pushup', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/GvRKj35Y/Whats-App-Image-2025-07-04-at-11-17-57.jpg' },
    "Chest Dips (Chair)": { image: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg', hint: 'chair dip', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg' },
    "Explosive Push-Ups": { image: 'https://i.ibb.co/399WH0XR/Whats-App-Image-2025-07-08-at-00-38-55-2.jpg', hint: 'explosive pushup', type: "plyometrics", muscle: "Chest", gifUrl: 'https://i.ibb.co/399WH0XR/Whats-App-Image-2025-07-08-at-00-38-55-2.jpg' },
    "Incline Chest Press (Machine or DB)": { image: 'https://i.ibb.co/99Vx8WnL/Whats-App-Image-2025-07-04-at-11-17-56.jpg', hint: 'incline press', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/99Vx8WnL/Whats-App-Image-2025-07-04-at-11-17-56.jpg' },
    "Pec Deck Machine": { image: 'https://i.ibb.co/S7yvJQVD/Whats-App-Image-2025-07-08-at-00-38-56.jpg', hint: 'pec deck', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/S7yvJQVD/Whats-App-Image-2025-07-08-at-00-38-56.jpg' },
    "Flat Dumbbell Press": { image: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg', hint: 'dumbbell press', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg' },
    "Incline Cable Fly": { image: 'https://i.ibb.co/jvNqZn2f/Whats-App-Image-2025-07-08-at-00-38-55.jpg', hint: 'incline fly', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/jvNqZn2f/Whats-App-Image-2025-07-08-at-00-38-55.jpg' },
    "Chest Squeeze (with Towel)": { image: 'https://i.ibb.co/1tWtV8BM/Whats-App-Image-2025-07-08-at-00-38-57.jpg', hint: 'chest squeeze', type: "strength", muscle: "Chest", gifUrl: 'https://i.ibb.co/1tWtV8BM/Whats-App-Image-2025-07-08-at-00-38-57.jpg' },
    "Deadlifts": { image: 'https://i.ibb.co/Xr92tBGB/Whats-App-Image-2025-07-08-at-00-38-57-1.jpg', hint: 'deadlift', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/Xr92tBGB/Whats-App-Image-2025-07-08-at-00-38-57-1.jpg' },
    "Pull-Ups": { image: 'https://i.ibb.co/Y7CB82ds/Whats-App-Image-2025-07-08-at-00-38-57-2.jpg', hint: 'pull up', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/Y7CB82ds/Whats-App-Image-2025-07-08-at-00-38-57-2.jpg' },
    "Inverted Rows (using table)": { image: 'https://i.ibb.co/rR13k6p3/Whats-App-Image-2025-07-08-at-00-38-58.jpg', hint: 'inverted row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/rR13k6p3/Whats-App-Image-2025-07-08-at-00-38-58.jpg' },
    "Prone Cobra": { image: 'https://i.ibb.co/LXfTHS7B/Whats-App-Image-2025-07-08-at-00-38-58-1.jpg', hint: 'prone cobra', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/LXfTHS7B/Whats-App-Image-2025-07-08-at-00-38-58-1.jpg' },
    "Single Arm Dumbbell Row": { image: 'https://i.ibb.co/9k6mj2vY/Whats-App-Image-2025-07-08-at-00-38-58-2.jpg', hint: 'dumbbell row', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/9k6mj2vY/Whats-App-Image-2025-07-08-at-00-38-58-2.jpg' },
    "Back Extensions (Hyperextensions)": { image: 'https://i.ibb.co/8gjvYf0g/Whats-App-Image-2025-07-08-at-00-52-17.jpg', hint: 'back extension', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/8gjvYf0g/Whats-App-Image-2025-07-08-at-00-52-17.jpg' },
    "Bent Over Dumbbell Reverse Flys": { image: 'https://i.ibb.co/9H0L6dCw/Whats-App-Image-2025-07-08-at-00-55-09.jpg', hint: 'reverse fly', type: "strength", muscle: "Shoulders", gifUrl: 'https://i.ibb.co/9H0L6dCw/Whats-App-Image-2025-07-08-at-00-55-09.jpg' },
    "Prone Arm Lifts (Y-T-W)": { image: 'https://i.ibb.co/FLYzjRMp/Whats-App-Image-2025-07-08-at-00-38-59-1.jpg', hint: 'Y-T-W lift', type: "strength", muscle: "Back", gifUrl: 'https://i.ibb.co/FLYzjRMp/Whats-App-Image-2025-07-08-at-00-38-59-1.jpg' },
    "Cat-Cow Stretch": { image: 'https://i.ibb.co/prz247Qc/Whats-App-Image-2025-07-08-at-00-38-59.jpg', hint: 'cat cow', type: "flexibility", muscle: "Back", gifUrl: 'https://i.ibb.co/prz247Qc/Whats-App-Image-2025-07-08-at-00-38-59.jpg' },
    "Overhead Cable Extension": { image: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg', hint: 'cable extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg' },
    "Overhead Triceps Extensions (Backpack/Weight)": { image: 'https://i.ibb.co/jPbgRD1J/Whats-App-Image-2025-07-08-at-12-33-41-1.jpg', hint: 'overhead extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/jPbgRD1J/Whats-App-Image-2025-07-08-at-12-33-41-1.jpg' },
    "Hammer Curls (Water Bottles/Dumbbells)": { image: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg', hint: 'hammer curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg' },
    "Wrist Squeezes (Towel/Stress Ball)": { image: 'https://i.ibb.co/W4NFD4Kq/Whats-App-Image-2025-07-08-at-12-33-40-3.jpg', hint: 'wrist squeeze', type: "strength", muscle: "Forearms", gifUrl: 'https://i.ibb.co/W4NFD4Kq/Whats-App-Image-2025-07-08-at-12-33-40-3.jpg' },
    "Cable Triceps Pushdowns": { image: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', hint: 'tricep pushdown', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Incline Hammer Curls": { image: 'https://i.ibb.co/qXCR6Hq/Whats-App-Image-2025-07-08-at-12-33-41.jpg', hint: 'incline curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/qXCR6Hq/Whats-App-Image-2025-07-08-at-12-33-41.jpg' },
    "Overhead Water Bottle Extensions": { image: 'https://i.ibb.co/0jXXd3Zm/Whats-App-Image-2025-07-08-at-12-33-40-2.jpg', hint: 'overhead extension', type: "strength", muscle: "Triceps", gifUrl: 'https://i.ibb.co/0jXXd3Zm/Whats-App-Image-2025-07-08-at-12-33-40-2.jpg' },
    "Hammer Curls (Water Bottles)": { image: 'https://i.ibb.co/jZgfBGV7/Whats-App-Image-2025-07-08-at-12-33-40-1.jpg', hint: 'hammer curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/jZgfBGV7/Whats-App-Image-2025-07-08-at-12-33-40-1.jpg' },
    "Reverse Band Curls": { image: 'https://i.ibb.co/B2zq7cDd/Whats-App-Image-2025-07-08-at-12-33-39-1.jpg', hint: 'band curl', type: "strength", muscle: "Biceps", gifUrl: 'https://i.ibb.co/B2zq7cDd/Whats-App-Image-2025-07-08-at-12-33-39-1.jpg' },
    "Roman Chair Sit-Ups": { image: 'https://i.ibb.co/dws8NYjZ/Whats-App-Image-2025-07-08-at-12-33-39.jpg', hint: 'roman chair', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/dws8NYjZ/Whats-App-Image-2025-07-08-at-12-33-39.jpg' },
    "Weighted Russian Twists": { image: 'https://i.ibb.co/8L4WJjh4/Whats-App-Image-2025-07-08-at-12-33-38-1.jpg', hint: 'weighted twist', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/8L4WJjh4/Whats-App-Image-2025-07-08-at-12-33-38-1.jpg' },
    "Decline Crunch": { image: 'https://i.ibb.co/LhnG5tTv/Whats-App-Image-2025-07-08-at-12-33-38.jpg', hint: 'decline crunch', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/LhnG5tTv/Whats-App-Image-2025-07-08-at-12-33-38.jpg' },
    "Hanging Knee Tucks": { image: 'https://i.ibb.co/bRbTWhr6/Whats-App-Image-2025-07-08-at-12-33-37.jpg', hint: 'knee tuck', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/bRbTWhr6/Whats-App-Image-2025-07-08-at-12-33-37.jpg' },
    "Bicycle Crunches": { image: 'https://i.ibb.co/XfB6z3zn/Whats-App-Image-2025-07-08-at-12-33-36-1.jpg', hint: 'bicycle crunch', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/XfB6z3zn/Whats-App-Image-2025-07-08-at-12-33-36-1.jpg' },
    "Russian Twists (Bodyweight)": { image: 'https://i.ibb.co/NgC5Y270/Whats-App-Image-2025-07-08-at-13-55-50.jpg', hint: 'russian twist', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/NgC5Y270/Whats-App-Image-2025-07-08-at-13-55-50.jpg' },
    "Side Plank (Both Sides)": { image: 'https://i.ibb.co/CKrM0cZQ/Whats-App-Image-2025-07-08-at-12-33-36.jpg', hint: 'side plank', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/CKrM0cZQ/Whats-App-Image-2025-07-08-at-12-33-36.jpg' },
    "Mountain Climbers": { image: 'https://i.ibb.co/5hyRj49s/Whats-App-Image-2025-07-08-at-12-33-35.jpg', hint: 'mountain climber', type: "strength", muscle: "Core", gifUrl: 'https://i.ibb.co/5hyRj49s/Whats-App-Image-2025-07-08-at-12-33-35.jpg' },
    "Cable Rope Crunch": { image: 'https://i.ibb.co/bjPCJH2J/Whats-App-Image-2025-07-04-at-01-27-42-1.jpg', hint: 'rope crunch', gifUrl: 'https://i.ibb.co/bjPCJH2J/Whats-App-Image-2025-07-04-at-01-27-42-1.jpg' },
    "Seated Ab Machine Crunch": { image: 'https://i.ibb.co/bgQ7dKMG/Whats-App-Image-2025-07-08-at-12-33-33.jpg', hint: 'ab machine', gifUrl: 'https://i.ibb.co/bgQ7dKMG/Whats-App-Image-2025-07-08-at-12-33-33.jpg' },
    "Decline Sit-Ups": { image: 'https://i.ibb.co/LhnG5tTv/Whats-App-Image-2025-07-08-at-12-33-38.jpg', hint: 'decline situp', gifUrl: 'https://i.ibb.co/LhnG5tTv/Whats-App-Image-2025-07-08-at-12-33-38.jpg' },
    "Stability Ball Pass": { image: 'https://i.ibb.co/qM4bJ2bz/Whats-App-Image-2025-07-08-at-12-33-31.jpg', hint: 'ball pass', gifUrl: 'https://i.ibb.co/qM4bJ2bz/Whats-App-Image-2025-07-08-at-12-33-31.jpg' },
    "Flutter Kicks": { image: 'https://i.ibb.co/N6fzd9Nq/Whats-App-Image-2025-07-08-at-12-33-30.jpg', hint: 'flutter kick', gifUrl: 'https://i.ibb.co/N6fzd9Nq/Whats-App-Image-2025-07-08-at-12-33-30.jpg' },
    "Side Plank Hip Dips": { image: 'https://i.ibb.co/ccQ8Jdyh/Whats-App-Image-2025-07-08-at-12-33-29-1.jpg', hint: 'side plank dip', gifUrl: 'https://i.ibb.co/ccQ8Jdyh/Whats-App-Image-2025-07-08-at-12-33-29-1.jpg' },
    "Face Pulls (Cable or Bands)": { image: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg', hint: 'face pull', gifUrl: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg' },
    "Lateral Arm Circles (Small + Big)": { image: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg', hint: 'arm circles', gifUrl: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg' },
    "Elevated Pike Hold": { image: 'https://i.ibb.co/NgcrMYfw/Whats-App-Image-2025-07-08-at-12-33-29.jpg', hint: 'pike hold', gifUrl: 'https://i.ibb.co/NgcrMYfw/Whats-App-Image-2025-07-08-at-12-33-29.jpg' },
    "Wall Walks": { image: 'https://i.ibb.co/67nP5X0W/Whats-App-Image-2025-07-08-at-12-33-28-1.jpg', hint: 'wall walk', gifUrl: 'https://i.ibb.co/67nP5X0W/Whats-App-Image-2025-07-08-at-12-33-28-1.jpg' },
    "Lateral Arm Raises (Using Water Bottles/Bands)": { image: 'https://i.ibb.co/YF9BhmGT/Whats-App-Image-2025-07-08-at-12-33-28.jpg', hint: 'lateral raise', gifUrl: 'https://i.ibb.co/YF9BhmGT/Whats-App-Image-2025-07-08-at-12-33-28.jpg' },
    "Rear Delt Pulses (Bodyweight or Light Weights)": { image: 'https://i.ibb.co/99h3WjHV/Whats-App-Image-2025-07-08-at-13-55-53.jpg', hint: 'rear delt pulse', gifUrl: 'https://i.ibb.co/99h3WjHV/Whats-App-Image-2025-07-08-at-13-55-53.jpg' },
    "Front Raises (Bottles/Bands)": { image: 'https://i.ibb.co/nWQ6vqm/Whats-App-Image-2025-07-08-at-13-55-56.jpg', hint: 'front raise', gifUrl: 'https://i.ibb.co/nWQ6vqm/Whats-App-Image-2025-07-08-at-13-55-56.jpg' },
    "Leg Curl Machine": { image: 'https://i.ibb.co/60022232/Whats-App-Image-2025-07-08-at-14-05-02.jpg', hint: 'leg curl machine', gifUrl: 'https://i.ibb.co/60022232/Whats-App-Image-2025-07-08-at-14-05-02.jpg' },
    "Single-Leg Calf Raises": { image: 'https://i.ibb.co/Dfx7KZCX/Whats-App-Image-2025-07-08-at-13-55-55.jpg', hint: 'calf raise', gifUrl: 'https://i.ibb.co/Dfx7KZCX/Whats-App-Image-2025-07-08-at-13-55-55.jpg' },
    "Cable Kickbacks": { image: 'https://i.ibb.co/dwrt0hm7/Whats-App-Image-2025-07-08-at-13-55-54.jpg', hint: 'cable kickback', gifUrl: 'https://i.ibb.co/dwrt0hm7/Whats-App-Image-2025-07-08-at-13-55-54.jpg' },
    "Seated Calf Raises": { image: 'https://i.ibb.co/DPdFPhzP/Whats-App-Image-2025-07-08-at-13-55-51-1.jpg', hint: 'seated calf raise', gifUrl: 'https://i.ibb.co/DPdFPhzP/Whats-App-Image-2025-07-08-at-13-55-51-1.jpg' },
    "Glute Bridge March": { image: 'https://i.ibb.co/wZdy7TyW/Whats-App-Image-2025-07-08-at-13-55-51.jpg', hint: 'glute march', gifUrl: 'https://i.ibb.co/wZdy7TyW/Whats-App-Image-2025-07-08-at-13-55-51.jpg' },
    "Jawline Sharper (Massage Along Jaw)": { image: 'https://i.ibb.co/1YP4s5K1/Whats-App-Image-2025-07-08-at-13-55-49.jpg', hint: 'jawline massage', gifUrl: 'https://i.ibb.co/1YP4s5K1/Whats-App-Image-2025-07-08-at-13-55-49.jpg' },
    "Vowel Mouth Stretch (\"O\"-\"E\")": { image: 'https://i.ibb.co/Vpwgk2zR/Whats-App-Image-2025-07-08-at-13-55-46.jpg', hint: 'mouth stretch', gifUrl: 'https://i.ibb.co/Vpwgk2zR/Whats-App-Image-2025-07-08-at-13-55-46.jpg' },
    "Lion's Breath": { image: 'https://i.ibb.co/spj68dzS/Whats-App-Image-2025-07-08-at-13-55-47.jpg', hint: 'lion breath', gifUrl: 'https://i.ibb.co/spj68dzS/Whats-App-Image-2025-07-08-at-13-55-47.jpg' },
    "Chin Tuck": { image: 'https://i.ibb.co/tPp8qBmB/Whats-App-Image-2025-07-08-at-13-55-46-1.jpg', hint: 'chin tuck', gifUrl: 'https://i.ibb.co/tPp8qBmB/Whats-App-Image-2025-07-08-at-13-55-46-1.jpg' },
    "Jaw Unlocker": { image: 'https://i.ibb.co/5hVXx63z/Whats-App-Image-2025-07-08-at-13-55-45-1.jpg', hint: 'jaw unlock', gifUrl: 'https://i.ibb.co/5hVXx63z/Whats-App-Image-2025-07-08-at-13-55-45-1.jpg' },
    "Cheek & Jawline Lifter": { image: 'https://i.ibb.co/ymsZN99p/Whats-App-Image-2025-07-08-at-13-55-45.jpg', hint: 'cheek lift', gifUrl: 'https://i.ibb.co/ymsZN99p/Whats-App-Image-2025-07-08-at-13-55-45.jpg' },
    "Kiss the Ceiling / \"Whistler\"": { image: 'https://i.ibb.co/GfSzxmgF/Whats-App-Image-2025-07-08-at-14-49-33-1.jpg', hint: 'face exercise', gifUrl: 'https://i.ibb.co/GfSzxmgF/Whats-App-Image-2025-07-08-at-14-49-33-1.jpg' },
    "Lip Trills": { image: 'https://i.ibb.co/rG6h1bZ6/Whats-App-Image-2025-07-08-at-14-49-33.jpg', hint: 'lip trill', gifUrl: 'https://i.ibb.co/rG6h1bZ6/Whats-App-Image-2025-07-08-at-14-49-33.jpg' },
    "Humming Warm-Up": { image: 'https://i.ibb.co/DfxL9gdx/Whats-App-Image-2025-07-08-at-18-34-16.jpg', hint: 'vocal warmup', gifUrl: 'https://i.ibb.co/DfxL9gdx/Whats-App-Image-2025-07-08-at-18-34-16.jpg' },
    "Sirens (Low to High Pitch Glide)": { image: 'https://i.ibb.co/rKKpRQvf/Whats-App-Image-2025-07-08-at-14-49-32.jpg', hint: 'vocal siren', gifUrl: 'https://i.ibb.co/rKKpRQvf/Whats-App-Image-2025-07-08-at-14-49-32.jpg' },
    "Sustain Note (Deep Chest Voice)": { image: 'https://i.ibb.co/MyPYMLS7/Whats-App-Image-2025-07-09-at-12-40-49-1.jpg', hint: 'vocal note', gifUrl: 'https://i.ibb.co/MyPYMLS7/Whats-App-Image-2025-07-09-at-12-40-49-1.jpg' },
    "Consonant Articulation (P-T-K-B-D-G)": { image: 'https://i.ibb.co/B5kY1sJK/Whats-App-Image-2025-07-09-at-12-40-49.jpg', hint: 'articulation', gifUrl: 'https://i.ibb.co/B5kY1sJK/Whats-App-Image-2025-07-09-at-12-40-49.jpg' },
    "Breath Control (Inhale 4s – Hold – Exhale 8s)": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'breath control', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Deep 'Ahh' Vowel Projection": { image: 'https://i.ibb.co/60TjkX1G/Whats-App-Image-2025-07-09-at-12-59-24-1.jpg', hint: 'vowel projection', gifUrl: 'https://i.ibb.co/60TjkX1G/Whats-App-Image-2025-07-09-at-12-59-24-1.jpg' },
    "Lip Bubbles (Trills with Sound)": { image: 'https://i.ibb.co/B23YBjcS/Whats-App-Image-2025-07-09-at-12-59-24.jpg', hint: 'lip bubble', gifUrl: 'https://i.ibb.co/B23YBjcS/Whats-App-Image-2025-07-09-at-12-59-24.jpg' },
    "Humming Glide (Nasal Resonance)": { image: 'https://i.ibb.co/8gd4SbVH/Whats-App-Image-2025-07-09-at-12-48-22.jpg', hint: 'humming glide', gifUrl: 'https://i.ibb.co/8gd4SbVH/Whats-App-Image-2025-07-09-at-12-48-22.jpg' },
    "Octave Sirens (Smooth Pitch Slide)": { image: 'https://i.ibb.co/sd0rhPJm/Whats-App-Image-2025-07-09-at-12-40-50.jpg', hint: 'octave siren', gifUrl: 'https://i.ibb.co/sd0rhPJm/Whats-App-Image-2025-07-09-at-12-40-50.jpg' },
    "Sustain 'Ee' / 'Oo' Notes": { image: 'https://i.ibb.co/whDd72FD/Whats-App-Image-2025-07-09-at-12-40-51-1.jpg', hint: 'vowel sustain', gifUrl: 'https://i.ibb.co/whDd72FD/Whats-App-Image-2025-07-09-at-12-40-51-1.jpg' },
    "Vowel Chains (AEIOU transitions)": { image: 'https://i.ibb.co/Xf0VjGpG/Whats-App-Image-2025-07-09-at-12-40-51.jpg', hint: 'vowel chain', gifUrl: 'https://i.ibb.co/Xf0VjGpG/Whats-App-Image-2025-07-09-at-12-40-51.jpg' },
    "Breath Support Drill (4-4-8 breathing)": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'breath drill', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Vocal Stretch (Soft Yawns + 'Haa')": { image: "https://i.ibb.co/kszvM7Nt/Whats-App-Image-2025-07-09-at-12-40-50-1.jpg", hint: 'vocal stretch', gifUrl: 'https://i.ibb.co/kszvM7Nt/Whats-App-Image-2025-07-09-at-12-40-50-1.jpg' },
    "Wall Slides": { image: 'https://i.ibb.co/bMYB9BjD/Whats-App-Image-2025-07-08-at-14-38-25.jpg', hint: 'wall slide', gifUrl: 'https://i.ibb.co/bMYB9BjD/Whats-App-Image-2025-07-08-at-14-38-25.jpg' },
    "Glute Kickbacks (Bodyweight or Band)": { image: 'https://i.ibb.co/jvgdkR5g/Whats-App-Image-2025-07-08-at-14-38-25-1.jpg', hint: 'glute kickback', gifUrl: 'https://i.ibb.co/jvgdkR5g/Whats-App-Image-2025-07-08-at-14-38-25-1.jpg' },
    "Reverse Snow Angels (on floor)": { image: 'https://i.ibb.co/b5SVVGTh/Whats-App-Image-2025-07-08-at-14-38-26.jpg', hint: 'reverse snow angel', gifUrl: 'https://i.ibb.co/b5SVVGTh/Whats-App-Image-2025-07-08-at-14-38-26.jpg' },
    "Seated Chin Tucks": { image: 'https://i.ibb.co/JjnwYmjr/Whats-App-Image-2025-07-08-at-14-38-26-1.jpg', hint: 'chin tuck', gifUrl: 'https://i.ibb.co/JjnwYmjr/Whats-App-Image-2025-07-08-at-14-38-26-1.jpg' },
    "Child’s Pose with Reach": { image: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg', hint: 'child pose', gifUrl: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg' },
    "Butterfly Stretch": { image: 'https://i.ibb.co/gbrmsCqZ/Whats-App-Image-2025-07-08-at-14-38-26-2.jpg', hint: 'butterfly stretch', gifUrl: 'https://i.ibb.co/gbrmsCqZ/Whats-App-Image-2025-07-08-at-14-38-26-2.jpg' },
    "Cable Pull-Throughs": { image: 'https://i.ibb.co/gMKz8FmX/Whats-App-Image-2025-07-08-at-14-38-27.jpg', hint: 'cable pull through', gifUrl: 'https://i.ibb.co/gMKz8FmX/Whats-App-Image-2025-07-08-at-14-38-27.jpg' },
    "Barbell Hip Thrusts": { image: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg', hint: 'hip thrust', gifUrl: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg' },
    "Kettlebell Swings": { image: 'https://i.ibb.co/NgDtX0C8/Whats-App-Image-2025-07-08-at-14-38-27-1.jpg', hint: 'kettlebell swing', gifUrl: 'https://i.ibb.co/NgDtX0C8/Whats-App-Image-2025-07-08-at-14-38-27-1.jpg' },
    "Standing Cable Hip Flexion": { image: 'https://i.ibb.co/QgdQTxY/Whats-App-Image-2025-07-08-at-14-38-27-2.jpg', hint: 'hip flexion', gifUrl: 'https://i.ibb.co/QgdQTxY/Whats-App-Image-2025-07-08-at-14-38-27-2.jpg' },
    "Controlled Box Jumps": { image: 'https://i.ibb.co/HpKMB3pL/Whats-App-Image-2025-07-08-at-14-38-28.jpg', hint: 'box jump', gifUrl: 'https://i.ibb.co/HpKMB3pL/Whats-App-Image-2025-07-08-at-14-38-28.jpg' },
    "Bodyweight Glute Bridges": { image: 'https://i.ibb.co/sdtdhVxd/Whats-App-Image-2025-07-08-at-14-38-28-1.jpg', hint: 'glute bridge', gifUrl: 'https://i.ibb.co/sdtdhVxd/Whats-App-Image-2025-07-08-at-14-38-28-1.jpg' },
    "Pelvic Tilts": { image: 'https://i.ibb.co/tMYtLwjk/Whats-App-Image-2025-07-08-at-14-38-28-2.jpg', hint: 'pelvic tilt', gifUrl: 'https://i.ibb.co/tMYtLwjk/Whats-App-Image-2025-07-08-at-14-38-28-2.jpg' },
    "Sumo Deadlifts": { image: 'https://i.ibb.co/PvnNpwqV/Whats-App-Image-2025-07-08-at-16-51-05-1.jpg', hint: 'sumo deadlift', gifUrl: 'https://i.ibb.co/PvnNpwqV/Whats-App-Image-2025-07-08-at-16-51-05-1.jpg' },
    "Cable Abductions": { image: 'https://i.ibb.co/V0d4cQcf/Whats-App-Image-2025-07-08-at-16-51-05.jpg', hint: 'cable abduction', gifUrl: 'https://i.ibb.co/V0d4cQcf/Whats-App-Image-2025-07-08-at-16-51-05.jpg' },
    "Weighted Glute Bridges": { image: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg', hint: 'weighted bridge', gifUrl: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg' },
    "Stability Ball Plank": { image: 'https://i.ibb.co/spnSW8Rx/Whats-App-Image-2025-07-08-at-16-51-04-1.jpg', hint: 'ball plank', gifUrl: 'https://i.ibb.co/spnSW8Rx/Whats-App-Image-2025-07-08-at-16-51-04-1.jpg' },
    "Fire Hydrants": { image: 'https://i.ibb.co/8GkMK00/Whats-App-Image-2025-07-08-at-16-51-04.jpg', hint: 'fire hydrant', gifUrl: 'https://i.ibb.co/8GkMK00/Whats-App-Image-2025-07-08-at-16-51-04.jpg' },
    "High Knees": { image: 'https://i.ibb.co/Q4GGNQZ/Whats-App-Image-2025-07-08-at-16-51-03-2.jpg', hint: 'high knees', gifUrl: 'https://i.ibb.co/Q4GGNQZ/Whats-App-Image-2025-07-08-at-16-51-03-2.jpg' },
    "Skater Hops": { image: 'https://i.ibb.co/vx5dsg9b/Whats-App-Image-2025-07-08-at-16-51-03.jpg', hint: 'skater hop', gifUrl: 'https://i.ibb.co/vx5dsg9b/Whats-App-Image-2025-07-08-at-16-51-03.jpg' },
    "Fast Feet": { image: 'https://i.ibb.co/0VrL3Zmj/Whats-App-Image-2025-07-08-at-16-51-02.jpg', hint: 'fast feet', gifUrl: 'https://i.ibb.co/0VrL3Zmj/Whats-App-Image-2025-07-08-at-16-51-02.jpg' },
    "Hip Mobility": { image: 'https://i.ibb.co/wZSMS7Fy/Whats-App-Image-2025-07-09-at-02-35-04-2.jpg', hint: 'hip mobility', gifUrl: 'https://i.ibb.co/wZSMS7Fy/Whats-App-Image-2025-07-09-at-02-35-04-2.jpg' },
    "Shadow Batting (No Bat)": { image: 'https://i.ibb.co/pjNcXLk6/Whats-App-Image-2025-07-08-at-16-50-57.jpg', hint: 'shadow batting', gifUrl: 'https://i.ibb.co/pjNcXLk6/Whats-App-Image-2025-07-08-at-16-50-57.jpg' },
    "Sprint Drills": { image: 'https://i.ibb.co/TMVntGmK/Whats-App-Image-2025-07-08-at-16-50-56.jpg', hint: 'sprint drill', gifUrl: 'https://i.ibb.co/TMVntGmK/Whats-App-Image-2025-07-08-at-16-50-56.jpg' },
    "Side-to-Side Bounds": { image: 'https://i.ibb.co/7t1Ft2x6/Whats-App-Image-2025-07-08-at-16-51-01.jpg', hint: 'side bound', gifUrl: 'https://i.ibb.co/7t1Ft2x6/Whats-App-Image-2025-07-08-at-16-51-01.jpg' },
    "Reaction Ball or Wall Catch": { image: 'https://i.ibb.co/JRV5JSC7/Whats-App-Image-2025-07-08-at-16-50-59.jpg', hint: 'reaction ball', gifUrl: 'https://i.ibb.co/JRV5JSC7/Whats-App-Image-2025-07-08-at-16-50-59.jpg' },
    "Yoga Flow": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga flow', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Breathing Work": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'breathing', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Box Jumps": { image: 'https://i.ibb.co/HpKMB3pL/Whats-App-Image-2025-07-08-at-14-38-28.jpg', hint: 'box jump', gifUrl: 'https://i.ibb.co/HpKMB3pL/Whats-App-Image-2025-07-08-at-14-38-28.jpg' },
    "Medicine Ball Slams": { image: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg', hint: 'ball slam', gifUrl: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg' },
    "Treadmill Sprints (Interval)": { image: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg', hint: 'treadmill sprint', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Full-Body Dynamic Stretch": { image: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg', hint: 'dynamic stretch', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Resistance Band Mobility": { image: 'https://i.ibb.co/20G3MWmB/Whats-App-Image-2025-07-09-at-10-45-18-1.jpg', hint: 'band mobility', gifUrl: 'https://i.ibb.co/20G3MWmB/Whats-App-Image-2025-07-09-at-10-45-18-1.jpg' },
    "Incline Walk or Cycling": { image: 'https://i.ibb.co/Xr1DG70z/Whats-App-Image-2025-07-03-at-16-21-30.jpg', hint: 'incline walk', gifUrl: 'https://i.ibb.co/Xr1DG70z/Whats-App-Image-2025-07-03-at-16-21-30.jpg' },
    "Cool Down Stretch": { image: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg', hint: 'cool down', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Shadow Batting": { image: 'https://i.ibb.co/pjNcXLk6/Whats-App-Image-2025-07-08-at-16-50-57.jpg', hint: 'shadow batting', gifUrl: 'https://i.ibb.co/pjNcXLk6/Whats-App-Image-2025-07-08-at-16-50-57.jpg' },
    "Wall Sprints": { image: 'https://i.ibb.co/F4TNMkDg/Whats-App-Image-2025-07-08-at-17-24-17-1.jpg', hint: 'wall sprint', gifUrl: 'https://i.ibb.co/F4TNMkDg/Whats-App-Image-2025-07-08-at-17-24-17-1.jpg' },
    "Jog in Place": { image: 'https://i.ibb.co/zT0bDP08/Whats-App-Image-2025-07-08-at-17-24-17.jpg', hint: 'jogging', gifUrl: 'https://i.ibb.co/zT0bDP08/Whats-App-Image-2025-07-08-at-17-24-17.jpg' },
    "Foam Rolling (or Stretch Flow)": { image: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg', hint: 'foam roll', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Squat to Press (w/ bottles)": { image: 'https://i.ibb.co/d0LYPFrm/Whats-App-Image-2025-07-08-at-17-24-15.jpg', hint: 'squat press', gifUrl: 'https://i.ibb.co/d0LYPFrm/Whats-App-Image-2025-07-08-at-17-24-15.jpg' },
    "Breathing / Mobility Flow": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'breathing flow', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Ladder Drills": { image: 'https://i.ibb.co/VpH7trNv/Whats-App-Image-2025-07-08-at-17-24-14.jpg', hint: 'ladder drill', gifUrl: 'https://i.ibb.co/VpH7trNv/Whats-App-Image-2025-07-08-at-17-24-14.jpg' },
    "Ab Crunch Machine": { image: 'https://i.ibb.co/bgQ7dKMG/Whats-App-Image-2025-07-08-at-12-33-33.jpg', hint: 'ab machine', gifUrl: 'https://i.ibb.co/bgQ7dKMG/Whats-App-Image-2025-07-08-at-12-33-33.jpg' },
    "Bike Intervals": { image: 'https://i.ibb.co/S43WX6vN/Whats-App-Image-2025-07-08-at-17-24-13.jpg', hint: 'bike interval', gifUrl: 'https://i.ibb.co/S43WX6vN/Whats-App-Image-2025-07-08-at-17-24-13.jpg' },
    "Neck & Shoulder Rolls": { image: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg', hint: 'shoulder roll', gifUrl: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg' },
    "Walking or Rowing Machine": { image: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg', hint: 'rowing machine', gifUrl: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg' },
    "Rowing Machine": { image: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg', hint: 'rowing machine', gifUrl: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg' },
    "Yoga or Stretch Class": { image: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg', hint: 'yoga class', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Split Lunges": { image: 'https://i.ibb.co/sp9JjZ9Z/Whats-App-Image-2025-07-09-at-01-06-46.jpg', hint: 'split lunge', gifUrl: 'https://i.ibb.co/sp9JjZ9Z/Whats-App-Image-2025-07-09-at-01-06-46.jpg' },
    "Ankle Rolls": { image: 'https://i.ibb.co/Pvh6gq2w/Whats-App-Image-2025-07-09-at-01-06-45-1.jpg', hint: 'ankle roll', gifUrl: 'https://i.ibb.co/Pvh6gq2w/Whats-App-Image-2025-07-09-at-01-06-45-1.jpg' },
    "Lateral Quick Steps": { image: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg', hint: 'quick steps', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Jump Rope": { image: 'https://i.ibb.co/hxhMRZ02/Whats-App-Image-2025-07-09-at-01-06-44-1.jpg', hint: 'jump rope', gifUrl: 'https://i.ibb.co/hxhMRZ02/Whats-App-Image-2025-07-09-at-01-06-44-1.jpg' },
    "Wall Ball Catch Drill": { image: 'https://i.ibb.co/N6Rd48zG/Whats-App-Image-2025-07-09-at-01-06-44.jpg', hint: 'wall ball', gifUrl: 'https://i.ibb.co/N6Rd48zG/Whats-App-Image-2025-07-09-at-01-06-44.jpg' },
    "Jump Lunges": { image: 'https://i.ibb.co/39N7mFKV/Whats-App-Image-2025-07-09-at-01-22-26.jpg', hint: 'jump lunge', gifUrl: 'https://i.ibb.co/39N7mFKV/Whats-App-Image-2025-07-09-at-01-22-26.jpg' },
    "Static Stretching": { image: 'https://i.ibb.co/BH5PHX74/Whats-App-Image-2025-07-09-at-01-22-25.jpg', hint: 'static stretch', gifUrl: 'https://i.ibb.co/BH5PHX74/Whats-App-Image-2025-07-09-at-01-22-25.jpg' },
    "Brisk Walking": { image: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg', hint: 'brisk walking', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "BOSU Ball Balance Hold": { image: 'https://i.ibb.co/mrBSmqSF/Whats-App-Image-2025-07-09-at-01-06-43.jpg', hint: 'bosu ball', gifUrl: 'https://i.ibb.co/mrBSmqSF/Whats-App-Image-2025-07-09-at-01-06-43.jpg' },
    "Ab Roller": { image: 'https://i.ibb.co/DHyfpGKy/Whats-App-Image-2025-07-09-at-01-06-42-1.jpg', hint: 'ab roller', gifUrl: 'https://i.ibb.co/DHyfpGKy/Whats-App-Image-2025-07-09-at-01-06-42-1.jpg' },
    "Agility Ladder Drills": { image: 'https://i.ibb.co/VpH7trNv/Whats-App-Image-2025-07-08-at-17-24-14.jpg', hint: 'agility ladder', gifUrl: 'https://i.ibb.co/VpH7trNv/Whats-App-Image-2025-07-08-at-17-24-14.jpg' },
    "Cone Sprints (Short Distance)": { image: 'https://i.ibb.co/YT8fyxvx/Whats-App-Image-2025-07-09-at-01-06-42.jpg', hint: 'cone sprint', gifUrl: 'https://i.ibb.co/YT8fyxvx/Whats-App-Image-2025-07-09-at-01-06-42.jpg' },
    "Cable Lateral Steps": { image: 'https://i.ibb.co/pBTtcxhT/Whats-App-Image-2025-07-09-at-01-51-50.jpg', hint: 'cable step', gifUrl: 'https://i.ibb.co/pBTtcxhT/Whats-App-Image-2025-07-09-at-01-51-50.jpg' },
    "Core Twists with Medicine Ball": { image: 'https://i.ibb.co/xKty0kqX/Whats-App-Image-2025-07-09-at-01-06-41-1.jpg', hint: 'ball twist', gifUrl: 'https://i.ibb.co/xKty0kqX/Whats-App-Image-2025-07-09-at-01-06-41-1.jpg' },
    "Barbell Push Press": { image: 'https://i.ibb.co/Q3P4xxdk/Whats-App-Image-2025-07-09-at-01-35-18.jpg', hint: 'push press', gifUrl: 'https://i.ibb.co/Q3P4xxdk/Whats-App-Image-2025-07-09-at-01-35-18.jpg' },
    "Assault Bike Intervals": { image: 'https://i.ibb.co/LhYYSMDJ/Whats-App-Image-2025-07-09-at-01-06-41.jpg', hint: 'assault bike', gifUrl: 'https://i.ibb.co/LhYYSMDJ/Whats-App-Image-2025-07-09-at-01-06-41.jpg' },
    "Rower (Cardio)": { image: 'https://i.ibb.co/hxR5FKM4/Whats-App-Image-2025-07-09-at-01-35-58.jpg', hint: 'rower', gifUrl: 'https://i.ibb.co/hxR5FKM4/Whats-App-Image-2025-07-09-at-01-35-58.jpg' },
    "Glute Activation (Bands)": { image: 'https://i.ibb.co/CsT4SQh8/Whats-App-Image-2025-07-09-at-01-36-20.jpg', hint: 'glute band', gifUrl: 'https://i.ibb.co/CsT4SQh8/Whats-App-Image-2025-07-09-at-01-36-20.jpg' },
    "Shadow Footwork": { image: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg', hint: 'shadow footwork', gifUrl: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg' },
    "Squat to Jump": { image: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg', hint: 'squat jump', gifUrl: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg' },
    "Stretching Cooldown": { image: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg', hint: 'stretching', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Dead Bug": { image: 'https://i.ibb.co/n85N42j6/Whats-App-Image-2025-07-09-at-01-55-01.jpg', hint: 'dead bug', gifUrl: 'https://i.ibb.co/n85N42j6/Whats-App-Image-2025-07-09-at-01-55-01.jpg' },
    "Toe Touches": { image: 'https://i.ibb.co/VK5wNJ8/Whats-App-Image-2025-07-09-at-01-55-03.jpg', hint: 'toe touch', gifUrl: 'https://i.ibb.co/VK5wNJ8/Whats-App-Image-2025-07-09-at-01-55-03.jpg' },
    "Tuck Jumps": { image: 'https://i.ibb.co/LdhB9Tcm/Whats-App-Image-2025-07-09-at-01-55-02-1.jpg', hint: 'tuck jump', gifUrl: 'https://i.ibb.co/LdhB9Tcm/Whats-App-Image-2025-07-09-at-01-55-02-1.jpg' },
    "Broad Jumps": { image: 'https://i.ibb.co/xKh1n9Sb/Whats-App-Image-2025-07-09-at-01-55-02.jpg', hint: 'broad jump', gifUrl: 'https://i.ibb.co/xKh1n9Sb/Whats-App-Image-2025-07-09-at-01-55-02.jpg' },
    "Lateral Bounds": { image: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg', hint: 'lateral bound', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Quick Step Drills": { image: 'https://i.ibb.co/Zz2Qt4g6/Whats-App-Image-2025-07-09-at-01-58-25.jpg', hint: 'quick step', gifUrl: 'https://i.ibb.co/Zz2Qt4g6/Whats-App-Image-2025-07-09-at-01-58-25.jpg' },
    "Shadow Reaction Footwork": { image: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg', hint: 'shadow reaction', gifUrl: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg' },
    "Yoga or Mobility Flow": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga flow', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Neck & Ankle Mobility": { image: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg', hint: 'neck ankle', gifUrl: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg' },
    "Light Elliptical / Walk": { image: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg', hint: 'elliptical walk', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Full Rest or Light Walk": { image: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg', hint: 'light walk', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Walking or Swimming": { image: 'https://i.ibb.co/CKz7bMLM/Whats-App-Image-2025-07-09-at-02-06-33.jpg', hint: 'swimming', gifUrl: 'https://i.ibb.co/CKz7bMLM/Whats-App-Image-2025-07-09-at-02-06-33.jpg' },
    "Stretch or Yoga": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga stretch', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Side Shuffles": { image: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg', hint: 'side shuffle', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Skater Jumps": { image: 'https://i.ibb.co/vx5dsg9b/Whats-App-Image-2025-07-08-at-16-51-03.jpg', hint: 'skater jump', gifUrl: 'https://i.ibb.co/vx5dsg9b/Whats-App-Image-2025-07-08-at-16-51-03.jpg' },
    "Lateral Cone Hops": { image: 'https://i.ibb.co/dHQ5KZ4/Whats-App-Image-2025-07-09-at-02-11-24.jpg', hint: 'cone hop', gifUrl: 'https://i.ibb.co/dHQ5KZ4/Whats-App-Image-2025-07-09-at-02-11-24.jpg' },
    "Farmer Carries (Dumbbells)": { image: 'https://i.ibb.co/s9QHzsVQ/Whats-App-Image-2025-07-09-at-02-11-23.jpg', hint: 'farmer carry', gifUrl: 'https://i.ibb.co/s9QHzsVQ/Whats-App-Image-2025-07-09-at-02-11-23.jpg' },
    "Dumbbell Snatch": { image: 'https://i.ibb.co/3yGyhp1F/Whats-App-Image-2025-07-09-at-02-11-22-1.jpg', hint: 'dumbbell snatch', gifUrl: 'https://i.ibb.co/3yGyhp1F/Whats-App-Image-2025-07-09-at-02-11-22-1.jpg' },
    "Tire Flips or Sled Push (if available)": { image: 'https://i.ibb.co/0p66btKX/Whats-App-Image-2025-07-09-at-02-11-22.jpg', hint: 'tire flip', gifUrl: 'https://i.ibb.co/0p66btKX/Whats-App-Image-2025-07-09-at-02-11-22.jpg' },
    "Resistance Band Shoulder Mobility": { image: 'https://i.ibb.co/pvDbmSrH/Whats-App-Image-2025-07-08-at-17-24-18.jpg', hint: 'shoulder band', gifUrl: 'https://i.ibb.co/pvDbmSrH/Whats-App-Image-2025-07-08-at-17-24-18.jpg' },
    "Walking or Light Cycling": { image: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg', hint: 'light cycling', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "Light Cycling/ Walking": { image: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg', hint: 'light cycling', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "Dumbbell Floor Press (If available)": { image: 'https://i.ibb.co/WNkLdC77/Whats-App-Image-2025-07-09-at-02-21-36-1.jpg', hint: 'floor press', gifUrl: 'https://i.ibb.co/WNkLdC77/Whats-App-Image-2025-07-09-at-02-21-36-1.jpg' },
    "Split Jump Lunges": { image: 'https://i.ibb.co/39N7mFKV/Whats-App-Image-2025-07-09-at-01-22-26.jpg', hint: 'split jump', gifUrl: 'https://i.ibb.co/39N7mFKV/Whats-App-Image-2025-07-09-at-01-22-26.jpg' },
    "Shadow Dribbling": { image: 'https://i.ibb.co/F4zLFWdt/Whats-App-Image-2025-07-09-at-02-21-37.jpg', hint: 'shadow dribbling', gifUrl: 'https://i.ibb.co/F4zLFWdt/Whats-App-Image-2025-07-09-at-02-21-37.jpg' },
    "Wall Push Holds": { image: 'https://i.ibb.co/0yZzp44n/Whats-App-Image-2025-07-09-at-02-21-38-1.jpg', hint: 'wall hold', gifUrl: 'https://i.ibb.co/0yZzp44n/Whats-App-Image-2025-07-09-at-02-21-38-1.jpg' },
    "Single-leg Reach": { image: 'https://i.ibb.co/FkmRZZ71/Whats-App-Image-2025-07-09-at-02-53-39.jpg', hint: 'single leg', gifUrl: 'https://i.ibb.co/FkmRZZ71/Whats-App-Image-2025-07-09-at-02-53-39.jpg' },
    "Hip Mobility Flow": { image: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg', hint: 'hip flow', gifUrl: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg' },
    "Gentle Stretching": { image: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg', hint: 'gentle stretch', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Jog or Dance": { image: 'https://i.ibb.co/3YQBCNvp/Whats-App-Image-2025-07-09-at-02-35-04-1.jpg', hint: 'dancing', gifUrl: 'https://i.ibb.co/3YQBCNvp/Whats-App-Image-2025-07-09-at-02-35-04-1.jpg' },
    "Deep Stretch Routine": { image: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg', hint: 'deep stretch', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Yoga Flow for Athletes": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga athlete', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Foam Rolling Legs & Back": { image: 'https://i.ibb.co/b5cch8xZ/Whats-App-Image-2025-07-09-at-23-56-42.jpg', hint: 'foam roll', gifUrl: 'https://i.ibb.co/b5cch8xZ/Whats-App-Image-2025-07-09-at-23-56-42.jpg' },
    "Dynamic Hip Stretching": { image: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg', hint: 'hip stretch', gifUrl: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg' },
    "Neck & Shoulder Release": { image: 'https://i.ibb.co/S7nhWyVN/Whats-App-Image-2025-07-09-at-02-35-04.jpg', hint: 'neck release', gifUrl: 'https://i.ibb.co/S7nhWyVN/Whats-App-Image-2025-07-09-at-02-35-04.jpg' },
    "Guided Breathing / Stretch": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'guided breathing', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Towel External Rotations": { image: 'https://i.ibb.co/fVKffQNp/Whats-App-Image-2025-07-09-at-02-35-03.jpg', hint: 'towel rotation', gifUrl: 'https://i.ibb.co/fVKffQNp/Whats-App-Image-2025-07-09-at-02-35-03.jpg' },
    "Wall Calf Stretch": { image: 'https://i.ibb.co/wNkLKpMC/Whats-App-Image-2025-07-09-at-02-35-02-1.jpg', hint: 'calf stretch', gifUrl: 'https://i.ibb.co/wNkLKpMC/Whats-App-Image-2025-07-09-at-02-35-02-1.jpg' },
    "Brisk Walking": { image: 'https://i.ibb.co/vCPQ3pxD/Whats-App-Image-2025-07-09-at-02-35-02.jpg', hint: 'brisk walk', gifUrl: 'https://i.ibb.co/vCPQ3pxD/Whats-App-Image-2025-07-09-at-02-35-02.jpg' },
    "Deadlifts (Conventional or Trap Bar)": { image: 'https://i.ibb.co/PvnNpwqV/Whats-App-Image-2025-07-08-at-16-51-05-1.jpg', hint: 'deadlift', gifUrl: 'https://i.ibb.co/PvnNpwqV/Whats-App-Image-2025-07-08-at-16-51-05-1.jpg' },
    "Power Cleans": { image: 'https://i.ibb.co/nvR7M7D/Whats-App-Image-2025-07-09-at-02-35-01-1.jpg', hint: 'power clean', gifUrl: 'https://i.ibb.co/nvR7M7D/Whats-App-Image-2025-07-09-at-02-35-01-1.jpg' },
    "Dumbbell Step-Ups": { image: 'https://i.ibb.co/s9T84rjq/Whats-App-Image-2025-07-09-at-02-35-01.jpg', hint: 'dumbbell stepup', gifUrl: 'https://i.ibb.co/s9T84rjq/Whats-App-Image-2025-07-09-at-02-35-01.jpg' },
    "Ankle Mobility Drills": { image: 'https://i.ibb.co/Pvh6gq2w/Whats-App-Image-2025-07-09-at-01-06-45-1.jpg', hint: 'ankle mobility', gifUrl: 'https://i.ibb.co/Pvh6gq2w/Whats-App-Image-2025-07-09-at-01-06-45-1.jpg' },
    "Reverse Pec Deck or Rear Delt Flys": { image: 'https://i.ibb.co/NdZbkrYw/Whats-App-Image-2025-07-09-at-02-53-43.jpg', hint: 'reverse pec deck', gifUrl: 'https://i.ibb.co/NdZbkrYw/Whats-App-Image-2025-07-09-at-02-53-43.jpg' },
    "External Rotator Band Pulls": { image: 'https://i.ibb.co/Pz0W9CRm/Whats-App-Image-2025-07-09-at-02-53-42-1.jpg', hint: 'band pull', gifUrl: 'https://i.ibb.co/Pz0W9CRm/Whats-App-Image-2025-07-09-at-02-53-42-1.jpg' },
    "Scapular Push-Ups": { image: 'https://i.ibb.co/jPJ3W79K/Whats-App-Image-2025-07-09-at-02-53-42.jpg', hint: 'scapular pushup', gifUrl: 'https://i.ibb.co/jPJ3W79K/Whats-App-Image-2025-07-09-at-02-53-42.jpg' },
    "Elliptical or Light Jog": { image: 'https://i.ibb.co/3YQBCNvp/Whats-App-Image-2025-07-09-at-02-35-04-1.jpg', hint: 'elliptical', gifUrl: 'https://i.ibb.co/3YQBCNvp/Whats-App-Image-2025-07-09-at-02-35-04-1.jpg' },
    "Stretch & Breathing": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'stretch breathing', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Wall Rows": { image: 'https://i.ibb.co/hJcM7Zws/Whats-App-Image-2025-07-09-at-02-53-41-2.jpg', hint: 'wall row', gifUrl: 'https://i.ibb.co/hJcM7Zws/Whats-App-Image-2025-07-09-at-02-53-41-2.jpg' },
    "Side Lunges": { image: 'https://i.ibb.co/5hrhJ4rk/Whats-App-Image-2025-07-09-at-02-53-41-1.jpg', hint: 'side lunge', gifUrl: 'https://i.ibb.co/5hrhJ4rk/Whats-App-Image-2025-07-09-at-02-53-41-1.jpg' },
    "Foot Fire Drill": { image: 'https://i.ibb.co/wNVPddbF/Whats-App-Image-2025-07-09-at-02-53-41.jpg', hint: 'foot fire', gifUrl: 'https://i.ibb.co/wNVPddbF/Whats-App-Image-2025-07-09-at-02-53-41.jpg' },
    "Knee Rolls": { image: 'https://i.ibb.co/JRPTFJnC/Whats-App-Image-2025-07-09-at-02-53-40-2.jpg', hint: 'knee roll', gifUrl: 'https://i.ibb.co/JRPTFJnC/Whats-App-Image-2025-07-09-at-02-53-40-2.jpg' },
    "Quick Ball Taps (Hand-Eye Coordination)": { image: 'https://i.ibb.co/tMGWcNkF/Whats-App-Image-2025-07-09-at-02-53-40-1.jpg', hint: 'ball tap', gifUrl: 'https://i.ibb.co/tMGWcNkF/Whats-App-Image-2025-07-09-at-02-53-40-1.jpg' },
    "Line Hops (Front/Back)": { image: 'https://i.ibb.co/S442T7yG/Whats-App-Image-2025-07-09-at-02-53-40.jpg', hint: 'line hop', gifUrl: 'https://i.ibb.co/S442T7yG/Whats-App-Image-2025-07-09-at-02-53-40.jpg' },
    "Lateral Shuffle Drill": { image: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg', hint: 'shuffle drill', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Balance Reach": { image: 'https://i.ibb.co/FkmRZZ71/Whats-App-Image-2025-07-09-at-02-53-39.jpg', hint: 'balance reach', gifUrl: 'https://i.ibb.co/FkmRZZ71/Whats-App-Image-2025-07-09-at-02-53-39.jpg' },
    "Deep Breathing & Stretch": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'deep breathing', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Foam Roll Substitute (Tennis Ball)": { image: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg', hint: 'tennis ball roll', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Breathing Meditation": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'meditation', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Breathing Exercise": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'breathing', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Forearm Rollers": { image: 'https://i.ibb.co/d0Yq0L1s/Whats-App-Image-2025-07-09-at-10-45-20-1.jpg', hint: 'forearm roller', gifUrl: 'https://i.ibb.co/d0Yq0L1s/Whats-App-Image-2025-07-09-at-10-45-20-1.jpg' },
    "Reaction Ball Drill": { image: 'https://i.ibb.co/fVRbczDQ/Whats-App-Image-2025-07-09-at-10-45-20.jpg', hint: 'reaction drill', gifUrl: 'https://i.ibb.co/fVRbczDQ/Whats-App-Image-2025-07-09-at-10-45-20.jpg' },
    "Side-to-Side Box Jumps": { image: 'https://i.ibb.co/JjcQ2sLs/Whats-App-Image-2025-07-09-at-10-45-19-1.jpg', hint: 'box jump', gifUrl: 'https://i.ibb.co/JjcQ2sLs/Whats-App-Image-2025-07-09-at-10-45-19-1.jpg' },
    "Balance Board Squats": { image: 'https://i.ibb.co/gbp16p6K/Whats-App-Image-2025-07-09-at-10-45-42.jpg', hint: 'balance board', gifUrl: 'https://i.ibb.co/gbp16p6K/Whats-App-Image-2025-07-09-at-10-45-42.jpg' },
    "Single-Leg Deadlifts": { image: 'https://i.ibb.co/Cszw4VFP/Whats-App-Image-2025-07-09-at-10-45-19.jpg', hint: 'single deadlift', gifUrl: 'https://i.ibb.co/Cszw4VFP/Whats-App-Image-2025-07-09-at-10-45-19.jpg' },
    "Lateral Band Walks": { image: 'https://i.ibb.co/20G3MWmB/Whats-App-Image-2025-07-09-at-10-45-18-1.jpg', hint: 'band walk', gifUrl: 'https://i.ibb.co/20G3MWmB/Whats-App-Image-2025-07-09-at-10-45-18-1.jpg' },
    "Medicine Ball Twists": { image: 'https://i.ibb.co/xKty0kqX/Whats-App-Image-2025-07-09-at-01-06-41-1.jpg', hint: 'ball twist', gifUrl: 'https://i.ibb.co/xKty0kqX/Whats-App-Image-2025-07-09-at-01-06-41-1.jpg' },
    "Swiss Ball Crunch": { image: 'https://i.ibb.co/ZRQN3fmx/Whats-App-Image-2025-07-09-at-10-45-18.jpg', hint: 'swiss ball', gifUrl: 'https://i.ibb.co/ZRQN3fmx/Whats-App-Image-2025-07-09-at-10-45-18.jpg' },
    "Wrist Roller": { image: 'https://i.ibb.co/d0Yq0L1s/Whats-App-Image-2025-07-09-at-10-45-20-1.jpg', hint: 'wrist roller', gifUrl: 'https://i.ibb.co/d0Yq0L1s/Whats-App-Image-2025-07-09-at-10-45-20-1.jpg' },
    "Explosive Pull-ups": { image: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg', hint: 'explosive pullup', gifUrl: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg' },
    "Straight Bar Dips": { image: 'https://i.ibb.co/0jrfrf5X/Whats-App-Image-2025-07-03-at-12-17-06-1.jpg', hint: 'bar dip', gifUrl: 'https://i.ibb.co/0jrfrf5X/Whats-App-Image-2025-07-03-at-12-17-06-1.jpg' },
    "Negative Muscle-ups": { image: 'https://i.ibb.co/SX1kdmvX/Whats-App-Image-2025-07-03-at-12-17-07.jpg', hint: 'muscle up negative', gifUrl: 'https://i.ibb.co/SX1kdmvX/Whats-App-Image-2025-07-03-at-12-17-07.jpg' },
    "Banded Muscle-ups": { image: 'https://i.ibb.co/9kDwhDf9/Whats-App-Image-2025-07-03-at-12-26-30.jpg', hint: 'banded muscle up', gifUrl: 'https://i.ibb.co/9kDwhDf9/Whats-App-Image-2025-07-03-at-12-26-30.jpg' },
    "The Full Muscle-up": { image: 'https://i.ibb.co/YFNT9VQZ/Whats-App-Image-2025-07-01-at-13-32-53.jpg', hint: 'calisthenics muscle up', gifUrl: 'https://i.ibb.co/YFNT9VQZ/Whats-App-Image-2025-07-01-at-13-32-53.jpg' },
    "Pseudo Planche Push-ups": { image: 'https://i.ibb.co/0btRhYp/Whats-App-Image-2025-07-09-at-10-56-24.jpg', hint: 'planche pushup', gifUrl: 'https://i.ibb.co/0btRhYp/Whats-App-Image-2025-07-09-at-10-56-24.jpg' },
    "Tuck Planche Hold": { image: 'https://i.ibb.co/vCgVc4dc/Whats-App-Image-2025-07-09-at-10-56-23-2.jpg', hint: 'tuck planche', gifUrl: 'https://i.ibb.co/vCgVc4dc/Whats-App-Image-2025-07-09-at-10-56-23-2.jpg' },
    "Advanced Tuck Planche": { image: 'https://i.ibb.co/PsPzmk7y/Whats-App-Image-2025-07-09-at-11-06-28.jpg', hint: 'advanced tuck planche', gifUrl: 'https://i.ibb.co/PsPzmk7y/Whats-App-Image-2025-07-09-at-11-06-28.jpg' },
    "Straddle Planche": { image: 'https://i.ibb.co/QF6rf7pm/Whats-App-Image-2025-07-09-at-10-56-23.jpg', hint: 'straddle planche', gifUrl: 'https://i.ibb.co/QF6rf7pm/Whats-App-Image-2025-07-09-at-10-56-23.jpg' },
    "Full Planche": { image: 'https://i.ibb.co/x8XdCk8y/Whats-App-Image-2025-07-01-at-13-32-53.jpg', hint: 'full planche', gifUrl: 'https://i.ibb.co/x8XdCk8y/Whats-App-Image-2025-07-01-at-13-32-53.jpg' },
    "Tuck Front Lever Hold": { image: 'https://i.ibb.co/sJXWpHsj/Whats-App-Image-2025-07-09-at-11-14-34.jpg', hint: 'tuck front lever', gifUrl: 'https://i.ibb.co/sJXWpHsj/Whats-App-Image-2025-07-09-at-11-14-34.jpg' },
    "Advanced Tuck Front Lever": { image: 'https://i.ibb.co/0y0FKcGY/Whats-App-Image-2025-07-09-at-11-14-34-1.jpg', hint: 'advanced tuck front lever', gifUrl: 'https://i.ibb.co/0y0FKcGY/Whats-App-Image-2025-07-09-at-11-14-34-1.jpg' },
    "One-Leg Front Lever": { image: 'https://i.ibb.co/4ZFSDzj7/Whats-App-Image-2025-07-09-at-11-14-35.jpg', hint: 'one leg front lever', gifUrl: 'https://i.ibb.co/4ZFSDzj7/Whats-App-Image-2025-07-09-at-11-14-35.jpg' },
    "Straddle Front Lever": { image: 'https://i.ibb.co/Z6zwJdhf/Whats-App-Image-2025-07-09-at-11-17-32.jpg', hint: 'straddle front lever', gifUrl: 'https://i.ibb.co/Z6zwJdhf/Whats-App-Image-2025-07-09-at-11-17-32.jpg' },
    "Full Front Lever": { image: 'https://i.ibb.co/PvZCqRW9/Whats-App-Image-2025-07-01-at-13-32-43.jpg', hint: 'full front lever', gifUrl: 'https://i.ibb.co/PvZCqRW9/Whats-App-Image-2025-07-01-at-13-32-43.jpg' },
    "Tuck Back Lever Hold": { image: 'https://i.ibb.co/fV1dTqcW/Whats-App-Image-2025-07-09-at-11-25-59.jpg', hint: 'tuck back lever', gifUrl: 'https://i.ibb.co/fV1dTqcW/Whats-App-Image-2025-07-09-at-11-25-59.jpg' },
    "Advanced Tuck Back Lever": { image: 'https://i.ibb.co/jZ1kcRvQ/Whats-App-Image-2025-07-09-at-11-25-59-2.jpg', hint: 'advanced tuck back lever', gifUrl: 'https://i.ibb.co/jZ1kcRvQ/Whats-App-Image-2025-07-09-at-11-25-59-2.jpg' },
    "One-Leg Back Lever": { image: 'https://i.ibb.co/v6HQ6bD1/Whats-App-Image-2025-07-09-at-11-25-59-1.jpg', hint: 'one leg back lever', gifUrl: 'https://i.ibb.co/v6HQ6bD1/Whats-App-Image-2025-07-09-at-11-25-59-1.jpg' },
    "Straddle Back Lever": { image: 'https://i.ibb.co/Tp4dQ4T/Whats-App-Image-2025-07-09-at-11-25-58.jpg', hint: 'straddle back lever', gifUrl: 'https://i.ibb.co/Tp4dQ4T/Whats-App-Image-2025-07-09-at-11-25-58.jpg' },
    "Full Back Lever": { image: 'https://i.ibb.co/wZC9qP7R/Whats-App-Image-2025-07-01-at-13-32-43-1.jpg', hint: 'full back lever', gifUrl: 'https://i.ibb.co/wZC9qP7R/Whats-App-Image-2025-07-01-at-13-32-43-1.jpg' },
    "Assisted Pistol Squats": { image: 'https://i.ibb.co/fYw7Wxhx/Whats-App-Image-2025-07-09-at-11-39-51.jpg', hint: 'assisted squat', gifUrl: 'https://i.ibb.co/fYw7Wxhx/Whats-App-Image-2025-07-09-at-11-39-51.jpg' },
    "Negative Pistol Squats": { image: 'https://i.ibb.co/BbR5mmh/Whats-App-Image-2025-07-09-at-11-39-50-1.jpg', hint: 'single leg squat', gifUrl: 'https://i.ibb.co/BbR5mmh/Whats-App-Image-2025-07-09-at-11-39-50-1.jpg' },
    "Pistol Squat to a Box/Bench": { image: 'https://i.ibb.co/MkSJ4w1F/Whats-App-Image-2025-07-09-at-11-39-51-1.jpg', hint: 'box squat', gifUrl: 'https://i.ibb.co/MkSJ4w1F/Whats-App-Image-2025-07-09-at-11-39-51-1.jpg' },
    "Counterweight Pistol Squats": { image: 'https://i.ibb.co/gZPzLTZp/Whats-App-Image-2025-07-09-at-11-39-50.jpg', hint: 'goblet squat', gifUrl: 'https://i.ibb.co/gZPzLTZp/Whats-App-Image-2025-07-09-at-11-39-50.jpg' },
    "Full Pistol Squat": { image: 'https://i.ibb.co/gMf2PcWB/Whats-App-Image-2025-07-01-at-13-32-51.jpg', hint: 'pistol squat', gifUrl: 'https://i.ibb.co/gMf2PcWB/Whats-App-Image-2025-07-01-at-13-32-51.jpg' },
    "Elevated Pike Push-ups": { image: 'https://i.ibb.co/JFFYfTR5/Whats-App-Image-2025-07-09-at-11-58-57.jpg', hint: 'elevated pike pushup', gifUrl: 'https://i.ibb.co/JFFYfTR5/Whats-App-Image-2025-07-09-at-11-58-57.jpg' },
    "Wall Handstand Hold": { image: 'https://i.ibb.co/bgyhPnLm/Whats-App-Image-2025-07-09-at-11-58-58-2.jpg', hint: 'handstand wall', gifUrl: 'https://i.ibb.co/bgyhPnLm/Whats-App-Image-2025-07-09-at-11-58-58-2.jpg' },
    "Negative Handstand Push-ups": { image: 'https://i.ibb.co/xS8b35nX/Whats-App-Image-2025-07-09-at-11-58-58-1.jpg', hint: 'handstand training', gifUrl: 'https://i.ibb.co/xS8b35nX/Whats-App-Image-2025-07-09-at-11-58-58-1.jpg' },
    "Partial Range of Motion HSPU": { image: 'https://i.ibb.co/Yd4Bw5jW/Whats-App-Image-2025-07-09-at-11-58-58.jpg', hint: 'partial handstand pushup', gifUrl: 'https://i.ibb.co/Yd4Bw5jW/Whats-App-Image-2025-07-09-at-11-58-58.jpg' },
    "Wall Handstand Push-up": { image: 'https://i.ibb.co/GQksT9Hd/Whats-App-Image-2025-07-01-at-13-32-51-1.jpg', hint: 'handstand pushup wall', gifUrl: 'https://i.ibb.co/GQksT9Hd/Whats-App-Image-2025-07-01-at-13-32-51-1.jpg' },
    "L-Sit Hold": { image: 'https://i.ibb.co/5hQNhyPs/Whats-App-Image-2025-07-09-at-12-04-19.jpg', hint: 'L-sit hold', gifUrl: 'https://i.ibb.co/5hQNhyPs/Whats-App-Image-2025-07-09-at-12-04-19.jpg' },
    "Tuck V-Sit": { image: 'https://i.ibb.co/zVLZ6Rpj/Whats-App-Image-2025-07-09-at-12-04-20-1.jpg', hint: 'tuck sit', gifUrl: 'https://i.ibb.co/zVLZ6Rpj/Whats-App-Image-2025-07-09-at-12-04-20-1.jpg' },
    "Bent-Knee V-Sit": { image: 'https://i.ibb.co/YBsHPNPh/Whats-App-Image-2025-07-09-at-12-04-20.jpg', hint: 'yoga pose', gifUrl: 'https://i.ibb.co/YBsHPNPh/Whats-App-Image-2025-07-09-at-12-04-20.jpg' },
    "Single-Leg V-Sit Extensions": { image: 'https://i.ibb.co/TMrmJZnR/Whats-App-Image-2025-07-09-at-12-04-21.jpg', hint: 'core exercise', gifUrl: 'https://i.ibb.co/TMrmJZnR/Whats-App-Image-2025-07-09-at-12-04-21.jpg' },
    "Full V-Sit": { image: 'https://i.ibb.co/bjyX0SMK/Whats-App-Image-2025-07-01-at-13-32-52.jpg', hint: 'V-sit gymnastics', gifUrl: 'https://i.ibb.co/bjyX0SMK/Whats-App-Image-2025-07-01-at-13-32-52.jpg' },
    "Straight arm Lat Pulldowns": { image: "https://i.ibb.co/tMhvBWfy/Whats-App-Image-2025-07-03-at-15-32-22-1.jpg", hint: "lat pulldown", gifUrl: 'https://i.ibb.co/tMhvBWfy/Whats-App-Image-2025-07-03-at-15-32-22-1.jpg' },
    "Ez Barbell Curl": { image: "https://i.ibb.co/ndTWcyc/Whats-App-Image-2025-07-03-at-15-32-23-3.jpg", hint: "barbell curl", gifUrl: 'https://i.ibb.co/ndTWcyc/Whats-App-Image-2025-07-03-at-15-32-23-3.jpg' },
    "Barbell Curl": { image: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg', hint: 'barbell curl', gifUrl: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg' },
    "Barbell Curls": { image: "https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg", hint: 'barbell curl', gifUrl: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg' },
    "Bench Dips": { image: "https://i.ibb.co/hFgYc7SD/Whats-App-Image-2025-07-04-at-01-01-39.jpg", hint: "chair dip", gifUrl: 'https://i.ibb.co/hFgYc7SD/Whats-App-Image-2025-07-04-at-01-01-39.jpg' },
    "Gua Sha or Facial Massage (Jawline)": { image: 'https://i.ibb.co/VY6kCK63/Whats-App-Image-2025-07-08-at-13-55-44.jpg', hint: 'gua sha', gifUrl: 'https://i.ibb.co/VY6kCK63/Whats-App-Image-2025-07-08-at-13-55-44.jpg' },
    "Cable Woodchoppers": { image: 'https://i.ibb.co/ZpJpcPCc/Whats-App-Image-2025-07-09-at-16-54-26-1.jpg', hint: 'cable woodchopper', gifUrl: 'https://i.ibb.co/ZpJpcPCc/Whats-App-Image-2025-07-09-at-16-54-26-1.jpg' },
    "Sled Push": { image: 'https://i.ibb.co/Y7LdNRNZ/Whats-App-Image-2025-07-09-at-23-45-30.jpg', hint: 'sled push', gifUrl: 'https://i.ibb.co/Y7LdNRNZ/Whats-App-Image-2025-07-09-at-23-45-30.jpg' },
    "Plank with Arm Reach": { image: 'https://i.ibb.co/ZzrXdmtG/Whats-App-Image-2025-07-09-at-23-45-31.jpg', hint: 'plank reach', gifUrl: 'https://i.ibb.co/ZzrXdmtG/Whats-App-Image-2025-07-09-at-23-45-31.jpg' },
    "Plank Shoulder Taps": { image: 'https://i.ibb.co/kVVdJdTK/Whats-App-Image-2025-07-09-at-16-54-26.jpg', hint: 'plank taps', gifUrl: 'https://i.ibb.co/kVVdJdTK/Whats-App-Image-2025-07-09-at-16-54-26.jpg' },
    "Shadow Badminton": { image: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg', hint: 'shadow badminton', gifUrl: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg' },
    "Foam Rolling": { image: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg', hint: 'foam rolling', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Walking": { image: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg', hint: 'walking', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Lateral Shuffle": { image: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg', hint: 'lateral shuffle', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Dynamic Stretching": { image: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg', hint: 'dynamic stretching', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Battle Ropes": { image: 'https://i.ibb.co/QFQnqgSq/Whats-App-Image-2025-07-08-at-16-51-32.jpg', hint: 'battle rope', gifUrl: 'https://i.ibb.co/QFQnqgSq/Whats-App-Image-2025-07-08-at-16-51-32.jpg' },
    "Wrist Circles": { image: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg', hint: 'wrist circles', gifUrl: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg' },
    "Overhead Press": { image: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg', hint: 'overhead press', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Overhead Press (Barbell or Dumbbell)": { image: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg', hint: 'overhead press', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Triceps Rope Pushdown": { image: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', hint: 'tricep pushdown', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Triceps Rope Pushdowns": { image: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', hint: 'tricep pushdown', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Triceps Pushdowns (Rope)": { image: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', hint: 'tricep pushdown', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Push-Up (Chest Focus)": { image: 'https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg', hint: 'chest pushup', gifUrl: 'https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg' },
    "Push-Ups": { image: "https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg", hint: "push up", gifUrl: 'https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg' },
    "Burpees": { image: "https://i.ibb.co/1JdtVJBy/Whats-App-Image-2025-07-08-at-17-24-16.jpg", hint: "push up", gifUrl: 'https://i.ibb.co/1JdtVJBy/Whats-App-Image-2025-07-08-at-17-24-16.jpg' },
    "Wide Grip Push-Ups": { image: "https://i.ibb.co/Z6WkgWt6/Whats-App-Image-2025-07-11-at-03-21-17.jpg", hint: "wide pushup", gifUrl: 'https://i.ibb.co/Z6WkgWt6/Whats-App-Image-2025-07-11-at-03-21-17.jpg' },
    "Dumbbell Shoulder Press": { image: "https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg", hint: "shoulder press", gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Dumbbell Bench Press": { image: "https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg", hint: "dumbbell press", gifUrl: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg' },
    "Dumbbell Chest Press": { image: "https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg", hint: "dumbbell press", gifUrl: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg' },
    "Standing Calf Raises": { image: "https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg", hint: "calf raise", gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg' },
    "Goblet Squats": { image: "https://i.ibb.co/JWzdB4TF/Whats-App-Image-2025-07-11-at-03-18-37-1.jpg", hint: "goblet squat", gifUrl: 'https://i.ibb.co/JWzdB4TF/Whats-App-Image-2025-07-11-at-03-18-37-1.jpg' },
    "Crunches": { image: "https://i.ibb.co/xSXDQC20/Whats-App-Image-2025-07-03-at-16-10-31-1.jpg", hint: "ab crunch", gifUrl: 'https://i.ibb.co/xSXDQC20/Whats-App-Image-2025-07-03-at-16-10-31-1.jpg' },
    "Resistance Band Curls": { image: "https://i.ibb.co/k244BdtD/Whats-App-Image-2025-07-11-at-03-18-37.jpg", hint: "band curls", gifUrl: 'https://i.ibb.co/k244BdtD/Whats-App-Image-2025-07-11-at-03-18-37.jpg' },
    "Glute Bridges": { image: "https://i.ibb.co/sdtdhVxd/Whats-App-Image-2025-07-08-at-14-38-28-1.jpg", hint: "glute bridge", gifUrl: 'https://i.ibb.co/sdtdhVxd/Whats-App-Image-2025-07-08-at-14-38-28-1.jpg' },
    "Shoulder Mobility": { image: "https://i.ibb.co/pvDbmSrH/Whats-App-Image-2025-07-08-at-17-24-18.jpg", hint: "shoulder mobility", gifUrl: 'https://i.ibb.co/pvDbmSrH/Whats-App-Image-2025-07-08-at-17-24-18.jpg' },
    "Resistance Band Rows": { image: "https://i.ibb.co/vKthML3/Whats-App-Image-2025-07-04-at-01-01-39-1.jpg", hint: "band rows", gifUrl: 'https://i.ibb.co/vKthML3/Whats-App-Image-2025-07-04-at-01-01-39-1.jpg' },
    "Shoulder Press (Barbell or Dumbbell)": { image: "https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg", hint: "shoulder press", gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Shoulder Press": { image: "https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg", hint: "shoulder press", gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "DB Shoulder Press": { image: "https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg", hint: "shoulder press", gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Dumbbell Shoulder Press": { image: "https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg", hint: "dumbbell press", gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Decline Push-Ups": { image: "https://i.ibb.co/KkndC0W/Whats-App-Image-2025-07-13-at-00-03-36.jpg", hint: "push up", gifUrl: 'https://i.ibb.co/KkndC0W/Whats-App-Image-2025-07-13-at-00-03-36.jpg' },
    "Lunges (Bodyweight)": { image: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg', hint: 'lunge', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Side Plank (each side)": { image: 'https://i.ibb.co/zHDgB2gG/Whats-App-Image-2025-07-03-at-16-21-30-1.jpg', hint: 'side plank', gifUrl: 'https://i.ibb.co/zHDgB2gG/Whats-App-Image-2025-07-03-at-16-21-30-1.jpg' },
    "Toe Taps": { image: 'https://i.ibb.co/VK5wNJ8/Whats-App-Image-2025-07-09-at-01-55-03.jpg', hint: 'toe tap', gifUrl: 'https://i.ibb.co/VK5wNJ8/Whats-App-Image-2025-07-09-at-01-55-03.jpg' },
    "V-Ups": { image: 'https://i.ibb.co/bjyX0SMK/Whats-App-Image-2025-07-01-at-13-32-52.jpg', hint: 'v-up', gifUrl: 'https://i.ibb.co/bjyX0SMK/Whats-App-Image-2025-07-01-at-13-32-52.jpg' },
    "Sprint-in-Place": { image: 'https://i.ibb.co/TMVntGmK/Whats-App-Image-2025-07-08-at-16-50-56.jpg', hint: 'sprint in place', gifUrl: 'https://i.ibb.co/TMVntGmK/Whats-App-Image-2025-07-08-at-16-50-56.jpg' },
    "Hip Circles": { image: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg', hint: 'hip circles', gifUrl: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg' },
    "Cobra Stretch": { image: 'https://i.ibb.co/LXfTHS7B/Whats-App-Image-2025-07-08-at-00-38-58-1.jpg', hint: 'cobra stretch', gifUrl: 'https://i.ibb.co/LXfTHS7B/Whats-App-Image-2025-07-08-at-00-38-58-1.jpg' },
    "Neck Rolls": { image: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg', hint: 'neck rolls', gifUrl: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg' },
    "Forward Fold Hold": { image: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg', hint: 'forward fold', gifUrl: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg' },
    "Wall-Sit to Jump": { image: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg', hint: 'wall sit jump', gifUrl: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg' },
    "Bulgarian Split Squats (Chair)": { image: 'https://i.ibb.co/RfXtscD/Whats-App-Image-2025-07-04-at-01-27-44-2.jpg', hint: 'split squat', gifUrl: 'https://i.ibb.co/RfXtscD/Whats-App-Image-2025-07-04-at-01-27-44-2.jpg' },
    "Single-Leg Glute Bridge": { image: 'https://i.ibb.co/wZdy7TyW/Whats-App-Image-2025-07-08-at-13-55-51.jpg', hint: 'glute bridge', gifUrl: 'https://i.ibb.co/wZdy7TyW/Whats-App-Image-2025-07-08-at-13-55-51.jpg' },
    "Duck Walks": { image: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg', hint: 'duck walk', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Squat Pulses": { image: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg', hint: 'squat pulse', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Heel Raise Holds": { image: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg', hint: 'heel raise', gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg' },
    "Clap Push-Ups": { image: 'https://i.ibb.co/399WH0XR/Whats-App-Image-2025-07-08-at-00-38-55-2.jpg', hint: 'clap pushup', gifUrl: 'https://i.ibb.co/399WH0XR/Whats-App-Image-2025-07-08-at-00-38-55-2.jpg' },
    "Bear Crawls": { image: 'https://i.ibb.co/0yZzp44n/Whats-App-Image-2025-07-09-at-02-21-38-1.jpg', hint: 'bear crawl', gifUrl: 'https://i.ibb.co/0yZzp44n/Whats-App-Image-2025-07-09-at-02-21-38-1.jpg' },
    "Star Jumps": { image: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg', hint: 'star jump', gifUrl: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg' },
    "Shadow Ball Throws (mimic)": { image: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg', hint: 'shadow throw', gifUrl: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg' },
    "Side-to-Side Taps": { image: 'https://i.ibb.co/S442T7yG/Whats-App-Image-2025-07-09-at-02-53-40.jpg', hint: 'side taps', gifUrl: 'https://i.ibb.co/S442T7yG/Whats-App-Image-2025-07-09-at-02-53-40.jpg' },
    "Foam Rolling (or DIY)": { image: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg', hint: 'foam rolling', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Hip Flexor Stretch": { image: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg', hint: 'hip stretch', gifUrl: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg' },
    "Breathing Drills": { image: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg', hint: 'breathing drill', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Medicine Ball Rotational Slams": { image: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg', hint: 'rotational slam', gifUrl: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg' },
    "Plank with Shoulder Taps": { image: 'https://i.ibb.co/kVVdJdTK/Whats-App-Image-2025-07-09-at-16-54-26.jpg', hint: 'plank taps', gifUrl: 'https://i.ibb.co/kVVdJdTK/Whats-App-Image-2025-07-09-at-16-54-26.jpg' },
    "Russian Twists (Weighted)": { image: 'https://i.ibb.co/8L4WJjh4/Whats-App-Image-2025-07-08-at-12-33-38-1.jpg', hint: 'weighted twist', gifUrl: 'https://i.ibb.co/8L4WJjh4/Whats-App-Image-2025-07-08-at-12-33-38-1.jpg' },
    "Cable Row": { image: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg', hint: 'cable row', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Front Squats": { image: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg', hint: 'front squat', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Walking Lunges with Dumbbells": { image: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg', hint: 'dumbbell lunge', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Leg Press Machine": { image: 'https://i.ibb.co/dJWfvdxG/Whats-App-Image-2025-07-03-at-16-21-32-1.jpg', hint: 'leg press', gifUrl: 'https://i.ibb.co/dJWfvdxG/Whats-App-Image-2025-07-03-at-16-21-32-1.jpg' },
    "Hamstring Curls": { image: 'https://i.ibb.co/8nZBdF2F/Whats-App-Image-2025-07-04-at-01-27-43.jpg', hint: 'hamstring curl', gifUrl: 'https://i.ibb.co/8nZBdF2F/Whats-App-Image-2025-07-04-at-01-27-43.jpg' },
    "Hip Mobility Drills": { image: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg', hint: 'hip mobility', gifUrl: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg' },
    "One-Arm Cable Row": { image: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg', hint: 'cable row', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Barbell Bicep Curls": { image: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg', hint: 'barbell curl', gifUrl: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg' },
    "Stability Ball Rollouts": { image: 'https://i.ibb.co/spnSW8Rx/Whats-App-Image-2025-07-08-at-16-51-04-1.jpg', hint: 'ball rollout', gifUrl: 'https://i.ibb.co/spnSW8Rx/Whats-App-Image-2025-07-08-at-16-51-04-1.jpg' },
    "Bent Over Rows": { image: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg', hint: 'bent row', gifUrl: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg' },
    "Reverse Flys": { image: 'https://i.ibb.co/9H0L6dCw/Whats-App-Image-2025-07-08-at-00-55-09.jpg', hint: 'reverse fly', gifUrl: 'https://i.ibb.co/9H0L6dCw/Whats-App-Image-2025-07-08-at-00-55-09.jpg' },
    "Seated Row Machine": { image: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg', hint: 'rowing machine', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Foam Rolling (Full Body)": { image: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg', hint: 'foam rolling', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Yoga Flow (Hamstrings + Back)": { image: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg', hint: 'yoga flow', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Light Rowing": { image: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg', hint: 'light rowing', gifUrl: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg' },
    "Swimming / Cycling": { image: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg', hint: 'swimming cycling', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "Deep Stretch + Breathe": { image: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg', hint: 'deep stretch', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' }
};

export const WARMUP_EXERCISES: ExerciseDetails[] = [
    { name: "Jumping Jacks", sets: "1", reps: "30-60s", rest: "30s", muscle: 'Full Body', image: MASTER_EXERCISE_DATA["Jumping Jacks"].image!, hint: 'jumping jacks', gifUrl: MASTER_EXERCISE_DATA["Jumping Jacks"].gifUrl! },
    { name: "Arm Circles", sets: "1", reps: "15 each way", rest: "30s", muscle: 'Shoulders', image: MASTER_EXERCISE_DATA["Arm Circles"].image!, hint: 'arm circles', gifUrl: MASTER_EXERCISE_DATA["Arm Circles"].gifUrl! },
    { name: "Hip Circles", sets: "1", reps: "15 each way", rest: "30s", muscle: 'Hips', image: MASTER_EXERCISE_DATA["Hip Circles"].image!, hint: 'hip circles', gifUrl: MASTER_EXERCISE_DATA["Hip Circles"].gifUrl! },
    { name: "Leg Swings", sets: "1", reps: "15 each leg", rest: "30s", muscle: 'Legs', image: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg', hint: 'leg swings', gifUrl: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg' },
    { name: "Cat-Cow Stretch", sets: "1", reps: "10", rest: "30s", muscle: 'Back', image: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image!, hint: 'cat cow', gifUrl: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].gifUrl! },
];

export const COOLDOWN_EXERCISES: ExerciseDetails[] = [
    { name: "Quad Stretch", sets: "1", reps: "30s each side", rest: "15s", muscle: 'Quads', image: MASTER_EXERCISE_DATA["Quad Stretch"].image!, hint: 'quad stretch', gifUrl: MASTER_EXERCISE_DATA["Quad Stretch"].gifUrl! },
    { name: "Hamstring Stretch", sets: "1", reps: "30s each side", rest: "15s", muscle: 'Hamstrings', image: MASTER_EXERCISE_DATA["Hamstring Stretch"].image!, hint: 'hamstring stretch', gifUrl: MASTER_EXERCISE_DATA["Hamstring Stretch"].gifUrl! },
    { name: "Chest Stretch", sets: "1", reps: "30s", rest: "15s", muscle: 'Chest', image: MASTER_EXERCISE_DATA["Chest Stretch"].image!, hint: 'chest stretch', gifUrl: MASTER_EXERCISE_DATA["Chest Stretch"].gifUrl! },
    { name: "Triceps Stretch", sets: "1", reps: "30s each side", rest: "15s", muscle: 'Triceps', image: MASTER_EXERCISE_DATA["Triceps Stretch"].image!, hint: 'triceps stretch', gifUrl: MASTER_EXERCISE_DATA["Triceps Stretch"].gifUrl! },
    { name: "Child's Pose", sets: "1", reps: "60s", rest: "15s", muscle: 'Back', image: MASTER_EXERCISE_DATA["Child's Pose"].image!, hint: 'child pose', gifUrl: MASTER_EXERCISE_DATA["Child's Pose"].gifUrl! },
];

// *************** GENERAL NON-ATHLETE WORKOUTS ***************

// ========== MALE GYM ==========
export const MALE_CHEST_GYM: DayWorkout = {
    focus: "Chest & Triceps (Male, Gym)",
    exercises: [
        { name: "Bench Press", sets: "4", reps: "8-12", rest: "90s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Bench Press"].image!, hint: 'bench press', gifUrl: MASTER_EXERCISE_DATA["Bench Press"].image! },
        { name: "Incline Bench Press", sets: "3", reps: "10-12", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Bench Press"].image!, hint: 'incline press', gifUrl: MASTER_EXERCISE_DATA["Incline Bench Press"].image! },
        { name: "Decline / Cable Fly", sets: "3", reps: "12-15", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Decline / Cable Fly"].image!, hint: 'cable fly', gifUrl: MASTER_EXERCISE_DATA["Decline / Cable Fly"].image! },
        { name: "Seated Machine Fly", sets: "3", reps: "12-15", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Seated Machine Fly"].image!, hint: 'machine fly', gifUrl: MASTER_EXERCISE_DATA["Seated Machine Fly"].image! },
        { name: "Triceps Pushdown", sets: "4", reps: "10-12", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Pushdown"].image!, hint: 'triceps pushdown', gifUrl: MASTER_EXERCISE_DATA["Triceps Pushdown"].image! },
        { name: "Overhead Extension (Cable or Dumbbell)", sets: "3", reps: "12-15", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Overhead Extension (Cable or Dumbbell)"].image!, hint: 'overhead extension', gifUrl: MASTER_EXERCISE_DATA["Overhead Extension (Cable or Dumbbell)"].image! },
        { name: "Underhand triceps pushdown", sets: "3", reps: "10-12", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Underhand triceps pushdown"].image!, hint: 'triceps pushdown', gifUrl: MASTER_EXERCISE_DATA["Underhand triceps pushdown"].image! },
        { name: "Push-Ups", sets: "3", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Push-Ups"].image!, hint: 'push ups', gifUrl: MASTER_EXERCISE_DATA["Push-Ups"].image! },
    ]
};

export const MALE_BACK_GYM: DayWorkout = {
    focus: "Back & Biceps (Male, Gym)",
    exercises: [
        { name: "Lat Pulldowns", sets: "4", reps: "10-12", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Lat Pulldowns"].image!, hint: 'lat pulldown', gifUrl: MASTER_EXERCISE_DATA["Lat Pulldowns"].image! },
        { name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Seated Cable Row"].image!, hint: 'seated row', gifUrl: MASTER_EXERCISE_DATA["Seated Cable Row"].image! },
        { name: "Barbell Rows", sets: "3", reps: "8-10", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Barbell Rows"].image!, hint: 'barbell row', gifUrl: MASTER_EXERCISE_DATA["Barbell Rows"].image! },
        { name: "Straight arm Lat Pulldowns", sets: "3", reps: "12-15", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"].image!, hint: 'lat pulldown', gifUrl: MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"].image! },
        { name: "Dumbbell Curl", sets: "4", reps: "10-12", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Dumbbell Curl"].image!, hint: 'dumbbell curl', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Curl"].image! },
        { name: "Ez Barbell Curl", sets: "3", reps: "10-12", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Ez Barbell Curl"].image!, hint: 'ez curl', gifUrl: MASTER_EXERCISE_DATA["Ez Barbell Curl"].image! },
        { name: "Hammer Curl", sets: "3", reps: "12-15", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Hammer Curl"].image!, hint: 'hammer curl', gifUrl: MASTER_EXERCISE_DATA["Hammer Curl"].image! },
        { name: "Chin-Ups (BONUS)", sets: "3", reps: "To Failure", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Chin-Ups (BONUS)"].image!, hint: 'chinup bonus', gifUrl: MASTER_EXERCISE_DATA["Chin-Ups (BONUS)"].image! },
    ]
};

export const MALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
    focus: "Shoulders, Traps & Abs (Male, Gym)",
    exercises: [
        { name: "Shoulder Press", sets: "4", reps: "8-12", rest: "90s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Shoulder Press"].image!, hint: 'shoulder press', gifUrl: MASTER_EXERCISE_DATA["Shoulder Press"].image! },
        { name: "Lateral Raises", sets: "3", reps: "12-15", rest: "60s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Lateral Raises"].image!, hint: 'lateral raise', gifUrl: MASTER_EXERCISE_DATA["Lateral Raises"].image! },
        { name: "Face Pulls", sets: "3", reps: "15-20", rest: "60s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Face Pulls"].image!, hint: 'face pull', gifUrl: MASTER_EXERCISE_DATA["Face Pulls"].image! },
        { name: "Shrugs", sets: "4", reps: "10-12", rest: "60s", muscle: "Traps", image: MASTER_EXERCISE_DATA["Shrugs"].image!, hint: 'shrugs', gifUrl: MASTER_EXERCISE_DATA["Shrugs"].image! },
        { name: "Hanging Leg Raises", sets: "3", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Hanging Leg Raises"].image!, hint: 'leg raise', gifUrl: MASTER_EXERCISE_DATA["Hanging Leg Raises"].image! },
        { name: "Cable Crunch + Twists", sets: "3", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Cable Crunch + Twists"].image!, hint: 'cable crunch', gifUrl: MASTER_EXERCISE_DATA["Cable Crunch + Twists"].image! },
        { name: "Planks (BONUS)", sets: "3", reps: "To Failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Planks (BONUS)"].image!, hint: 'plank bonus', gifUrl: MASTER_EXERCISE_DATA["Planks (BONUS)"].image! },
    ]
};

export const MALE_LEG_GYM_WORKOUT: DayWorkout = {
    focus: "Leg Day (Male, Gym)",
    exercises: [
        { name: "Barbell Back Squats", sets: "4", reps: "8-12", rest: "90s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Barbell Back Squats"].image!, hint: 'barbell squat', gifUrl: MASTER_EXERCISE_DATA["Barbell Back Squats"].image! },
        { name: "Leg Press", sets: "3", reps: "10-12", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Leg Press"].image!, hint: 'leg press', gifUrl: MASTER_EXERCISE_DATA["Leg Press"].image! },
        { name: "Romanian Deadlifts", sets: "3", reps: "10-12", rest: "90s", muscle: "Hamstrings", image: MASTER_EXERCISE_DATA["Romanian Deadlifts"].image!, hint: 'romanian deadlift', gifUrl: MASTER_EXERCISE_DATA["Romanian Deadlifts"].image! },
        { name: "Leg Extension", sets: "3", reps: "12-15", rest: "60s", muscle: "Quads", image: MASTER_EXERCISE_DATA["Leg Extension"].image!, hint: 'leg extension', gifUrl: MASTER_EXERCISE_DATA["Leg Extension"].image! },
        { name: "Dumbbell Walking Lunges", sets: "3", reps: "12 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"].image!, hint: 'dumbbell lunge', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"].image! },
        { name: "Calf Raises", sets: "4", reps: "15-20", rest: "45s", muscle: "Calves", image: MASTER_EXERCISE_DATA["Calf Raises"].image!, hint: 'calf raise', gifUrl: MASTER_EXERCISE_DATA["Calf Raises"].image! },
        { name: "Plank", sets: "3", reps: "To Failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
    ]
};

export const MALE_ARMS_GYM: DayWorkout = {
    focus: "Arms & Forearms (Male, Gym)",
    exercises: [
        { name: "Dumbbell Curl", sets: "4", reps: "10-12", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Dumbbell Curl"].image!, hint: 'dumbbell curl', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Curl"].image! },
        { name: "Incline Dumbbell Curls", sets: "3", reps: "12-15", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Incline Dumbbell Curls"].image!, hint: 'incline curl', gifUrl: MASTER_EXERCISE_DATA["Incline Dumbbell Curls"].image! },
        { name: "Hammer Curl", sets: "3", reps: "10-12", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Hammer Curl"].image!, hint: 'hammer curl', gifUrl: MASTER_EXERCISE_DATA["Hammer Curl"].image! },
        { name: "Cable Triceps Pushdowns", sets: "4", reps: "10-12", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Cable Triceps Pushdowns"].image!, hint: 'tricep pushdown', gifUrl: MASTER_EXERCISE_DATA["Cable Triceps Pushdowns"].image! },
        { name: "Overhead Extension", sets: "3", reps: "12-15", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Overhead Extension"].image!, hint: 'overhead extension', gifUrl: MASTER_EXERCISE_DATA["Overhead Extension"].image! },
        { name: "Triceps Dips", sets: "3", reps: "To Failure", rest: "90s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Dips"].image!, hint: 'tricep dip', gifUrl: MASTER_EXERCISE_DATA["Triceps Dips"].image! },
        { name: "Reverse Curls", sets: "3", reps: "15-20", rest: "45s", muscle: "Forearms", image: MASTER_EXERCISE_DATA["Reverse Curls"].image!, hint: 'reverse curl', gifUrl: MASTER_EXERCISE_DATA["Reverse Curls"].image! },
        { name: "Wrist Curls", sets: "3", reps: "15-20", rest: "45s", muscle: "Forearms", image: MASTER_EXERCISE_DATA["Wrist Curls"].image!, hint: 'wrist curl', gifUrl: MASTER_EXERCISE_DATA["Wrist Curls"].image! },
    ]
};

export const MALE_ABS_GYM: DayWorkout = {
    focus: "Abs & Core (Male, Gym)",
    exercises: [
        { name: "Hanging Leg Raises", sets: "4", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Hanging Leg Raises"].image!, hint: 'leg raise', gifUrl: MASTER_EXERCISE_DATA["Hanging Leg Raises"].image! },
        { name: "Cable Rope Crunch", sets: "4", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Cable Rope Crunch"].image!, hint: 'rope crunch', gifUrl: MASTER_EXERCISE_DATA["Cable Rope Crunch"].image! },
        { name: "Weighted Russian Twists", sets: "3", reps: "20 each side", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Weighted Russian Twists"].image!, hint: 'weighted twist', gifUrl: MASTER_EXERCISE_DATA["Weighted Russian Twists"].image! },
        { name: "Decline Crunch", sets: "3", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Decline Crunch"].image!, hint: 'decline crunch', gifUrl: MASTER_EXERCISE_DATA["Decline Crunch"].image! },
        { name: "Plank Hold", sets: "4", reps: "60s", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank Hold"].image!, hint: 'plank hold', gifUrl: MASTER_EXERCISE_DATA["Plank Hold"].image! },
        { name: "Side Plank (each side)", sets: "3", reps: "45s", rest: "30s", muscle: "Core", image: MASTER_EXERCISE_DATA["Side Plank (each side)"].image!, hint: 'side plank', gifUrl: MASTER_EXERCISE_DATA["Side Plank (each side)"].image! },
    ]
};

export const MALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
    focus: "Sexual Wellness (Male, Gym)",
    exercises: [
        { name: "Barbell Hip Thrusts", sets: "4", reps: "10-12", rest: "90s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image!, hint: 'hip thrust', gifUrl: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image! },
        { name: "Cable Pull-Throughs", sets: "3", reps: "12-15", rest: "60s", muscle: "Glutes, Hamstrings", image: MASTER_EXERCISE_DATA["Cable Pull-Throughs"].image!, hint: 'cable pull through', gifUrl: MASTER_EXERCISE_DATA["Cable Pull-Throughs"].image! },
        { name: "Kettlebell Swings", sets: "4", reps: "15-20", rest: "60s", muscle: "Glutes, Hamstrings", image: MASTER_EXERCISE_DATA["Kettlebell Swings"].image!, hint: 'kettlebell swing', gifUrl: MASTER_EXERCISE_DATA["Kettlebell Swings"].image! },
        { name: "Hanging Leg Raises", sets: "3", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Hanging Leg Raises"].image!, hint: 'leg raise', gifUrl: MASTER_EXERCISE_DATA["Hanging Leg Raises"].image! },
        { name: "Standing Cable Hip Flexion", sets: "3", reps: "15 each leg", rest: "45s", muscle: "Hips", image: MASTER_EXERCISE_DATA["Standing Cable Hip Flexion"].image!, hint: 'hip flexion', gifUrl: MASTER_EXERCISE_DATA["Standing Cable Hip Flexion"].image! },
        { name: "Controlled Box Jumps", sets: "3", reps: "10", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Controlled Box Jumps"].image!, hint: 'box jump', gifUrl: MASTER_EXERCISE_DATA["Controlled Box Jumps"].image! },
    ]
};

// ========== FEMALE GYM ==========
export const FEMALE_CHEST_GYM: DayWorkout = {
    focus: "Chest & Triceps (Female, Gym)",
    exercises: [
        { name: "Incline Chest Press (Machine or DB)", sets: "4", reps: "10-12", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Chest Press (Machine or DB)"].image!, hint: 'incline press', gifUrl: MASTER_EXERCISE_DATA["Incline Chest Press (Machine or DB)"].image! },
        { name: "Pec Deck Machine", sets: "3", reps: "12-15", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Pec Deck Machine"].image!, hint: 'pec deck', gifUrl: MASTER_EXERCISE_DATA["Pec Deck Machine"].image! },
        { name: "Flat Dumbbell Press", sets: "4", reps: "10-12", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Flat Dumbbell Press"].image!, hint: 'dumbbell press', gifUrl: MASTER_EXERCISE_DATA["Flat Dumbbell Press"].image! },
        { name: "Incline Cable Fly", sets: "3", reps: "15-20", rest: "45s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Cable Fly"].image!, hint: 'incline fly', gifUrl: MASTER_EXERCISE_DATA["Incline Cable Fly"].image! },
        { name: "Triceps Rope Pushdown", sets: "4", reps: "12-15", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Rope Pushdown"].image!, hint: 'tricep pushdown', gifUrl: MASTER_EXERCISE_DATA["Triceps Rope Pushdown"].image! },
        { name: "Triceps Kickbacks", sets: "3", reps: "15 each arm", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image!, hint: 'tricep kickback', gifUrl: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image! },
        { name: "Bench Dips", sets: "3", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Bench Dips"].image!, hint: 'bench dip', gifUrl: MASTER_EXERCISE_DATA["Bench Dips"].image! },
    ]
};

export const FEMALE_BACK_GYM: DayWorkout = {
    focus: "Back & Biceps (Female, Gym)",
    exercises: [
        { name: "Assisted Pull-Ups", sets: "4", reps: "8-10", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Assisted Pull-Ups"].image!, hint: 'assisted pullup', gifUrl: MASTER_EXERCISE_DATA["Assisted Pull-Ups"].image! },
        { name: "Seated Row Machine", sets: "4", reps: "10-12", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Seated Row Machine"].image!, hint: 'rowing machine', gifUrl: MASTER_EXERCISE_DATA["Seated Row Machine"].image! },
        { name: "Lat Pulldown", sets: "3", reps: "12-15", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Lat Pulldown"].image!, hint: 'lat pulldown', gifUrl: MASTER_EXERCISE_DATA["Lat Pulldown"].image! },
        { name: "Back Extensions (Hyperextensions)", sets: "3", reps: "15", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Back Extensions (Hyperextensions)"].image!, hint: 'back extension', gifUrl: MASTER_EXERCISE_DATA["Back Extensions (Hyperextensions)"].image! },
        { name: "Dumbbell Bicep Curls", sets: "4", reps: "12-15", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"].image!, hint: 'bicep curl', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"].image! },
        { name: "Cable Bicep Curls", sets: "3", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Cable Bicep Curls"].image!, hint: 'cable curl', gifUrl: MASTER_EXERCISE_DATA["Cable Bicep Curls"].image! },
        { name: "Plank", sets: "3", reps: "To Failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
    ]
};

export const FEMALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
    focus: "Shoulders, Traps & Abs (Female, Gym)",
    exercises: [
        { name: "Dumbbell Shoulder Press", sets: "4", reps: "10-12", rest: "60s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"].image!, hint: 'shoulder press', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"].image! },
        { name: "Lateral Raises", sets: "4", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Lateral Raises"].image!, hint: 'lateral raise', gifUrl: MASTER_EXERCISE_DATA["Lateral Raises"].image! },
        { name: "Face Pulls", sets: "3", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Face Pulls"].image!, hint: 'face pull', gifUrl: MASTER_EXERCISE_DATA["Face Pulls"].image! },
        { name: "Bent Over Dumbbell Reverse Flys", sets: "3", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"].image!, hint: 'reverse fly', gifUrl: MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"].image! },
        { name: "Hanging Knee Tucks", sets: "3", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Hanging Knee Tucks"].image!, hint: 'knee tuck', gifUrl: MASTER_EXERCISE_DATA["Hanging Knee Tucks"].image! },
        { name: "Weighted Russian Twists", sets: "3", reps: "15 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Weighted Russian Twists"].image!, hint: 'weighted twist', gifUrl: MASTER_EXERCISE_DATA["Weighted Russian Twists"].image! },
    ]
};

export const FEMALE_LEG_GYM_WORKOUT: DayWorkout = {
    focus: "Leg Day (Female, Gym)",
    exercises: [
        { name: "Goblet Squats", sets: "4", reps: "12-15", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Goblet Squats"].image!, hint: 'goblet squat', gifUrl: MASTER_EXERCISE_DATA["Goblet Squats"].image! },
        { name: "Barbell Hip Thrusts", sets: "4", reps: "10-12", rest: "90s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image!, hint: 'hip thrust', gifUrl: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image! },
        { name: "Romanian Deadlifts", sets: "3", reps: "12-15", rest: "60s", muscle: "Hamstrings", image: MASTER_EXERCISE_DATA["Romanian Deadlifts"].image!, hint: 'romanian deadlift', gifUrl: MASTER_EXERCISE_DATA["Romanian Deadlifts"].image! },
        { name: "Bulgarian Split Squats", sets: "3", reps: "12 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Bulgarian Split Squats"].image!, hint: 'split squat', gifUrl: MASTER_EXERCISE_DATA["Bulgarian Split Squats"].image! },
        { name: "Leg Press", sets: "3", reps: "15-20", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Leg Press"].image!, hint: 'leg press', gifUrl: MASTER_EXERCISE_DATA["Leg Press"].image! },
        { name: "Seated Calf Raises", sets: "4", reps: "15-20", rest: "45s", muscle: "Calves", image: MASTER_EXERCISE_DATA["Seated Calf Raises"].image!, hint: 'seated calf raise', gifUrl: MASTER_EXERCISE_DATA["Seated Calf Raises"].image! },
    ]
};

export const FEMALE_ARMS_GYM: DayWorkout = {
    focus: "Arms & Forearms (Female, Gym)",
    exercises: [
        { name: "Dumbbell Bicep Curls", sets: "4", reps: "12-15", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"].image!, hint: 'bicep curl', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"].image! },
        { name: "Cable Hammer Curls", sets: "3", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Hammer Curl"].image!, hint: 'hammer curl', gifUrl: MASTER_EXERCISE_DATA["Hammer Curl"].image! },
        { name: "Triceps Rope Pushdowns", sets: "4", reps: "12-15", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Rope Pushdowns"].image!, hint: 'tricep pushdown', gifUrl: MASTER_EXERCISE_DATA["Triceps Rope Pushdowns"].image! },
        { name: "Triceps Kickbacks", sets: "3", reps: "15 each arm", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image!, hint: 'tricep kickback', gifUrl: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image! },
        { name: "Bench Dips", sets: "3", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Bench Dips"].image!, hint: 'bench dip', gifUrl: MASTER_EXERCISE_DATA["Bench Dips"].image! },
        { name: "Reverse Curls", sets: "3", reps: "15-20", rest: "45s", muscle: "Forearms", image: MASTER_EXERCISE_DATA["Reverse Curls"].image!, hint: 'reverse curl', gifUrl: MASTER_EXERCISE_DATA["Reverse Curls"].image! },
    ]
};

export const FEMALE_ABS_GYM: DayWorkout = {
    focus: "Abs & Core (Female, Gym)",
    exercises: [
        { name: "Hanging Knee Tucks", sets: "4", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Hanging Knee Tucks"].image!, hint: 'knee tuck', gifUrl: MASTER_EXERCISE_DATA["Hanging Knee Tucks"].image! },
        { name: "Ab Crunch Machine", sets: "4", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Ab Crunch Machine"].image!, hint: 'ab machine', gifUrl: MASTER_EXERCISE_DATA["Ab Crunch Machine"].image! },
        { name: "Cable Woodchoppers", sets: "3", reps: "15 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Cable Woodchoppers"].image!, hint: 'cable woodchopper', gifUrl: MASTER_EXERCISE_DATA["Cable Woodchoppers"].image! },
        { name: "Decline Sit-Ups", sets: "3", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Decline Sit-Ups"].image!, hint: 'decline situp', gifUrl: MASTER_EXERCISE_DATA["Decline Sit-Ups"].image! },
        { name: "Stability Ball Pass", sets: "3", reps: "15", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Stability Ball Pass"].image!, hint: 'ball pass', gifUrl: MASTER_EXERCISE_DATA["Stability Ball Pass"].image! },
    ]
};

export const FEMALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
    focus: "Sexual Wellness (Female, Gym)",
    exercises: [
        { name: "Sumo Deadlifts", sets: "4", reps: "8-10", rest: "90s", muscle: "Glutes, Hamstrings, Quads", image: MASTER_EXERCISE_DATA["Sumo Deadlifts"].image!, hint: 'sumo deadlift', gifUrl: MASTER_EXERCISE_DATA["Sumo Deadlifts"].image! },
        { name: "Barbell Hip Thrusts", sets: "4", reps: "10-12", rest: "60s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image!, hint: 'hip thrust', gifUrl: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image! },
        { name: "Cable Abductions", sets: "3", reps: "15 each side", rest: "45s", muscle: "Hips, Glutes", image: MASTER_EXERCISE_DATA["Cable Abductions"].image!, hint: 'cable abduction', gifUrl: MASTER_EXERCISE_DATA["Cable Abductions"].image! },
        { name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s", muscle: "Glutes, Hamstrings", image: MASTER_EXERCISE_DATA["Kettlebell Swings"].image!, hint: 'kettlebell swing', gifUrl: MASTER_EXERCISE_DATA["Kettlebell Swings"].image! },
        { name: "Weighted Glute Bridges", sets: "3", reps: "15", rest: "60s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Weighted Glute Bridges"].image!, hint: 'weighted bridge', gifUrl: MASTER_EXERCISE_DATA["Weighted Glute Bridges"].image! },
        { name: "Stability Ball Plank", sets: "3", reps: "60s", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Stability Ball Plank"].image!, hint: 'ball plank', gifUrl: MASTER_EXERCISE_DATA["Stability Ball Plank"].image! },
    ]
};

// ========== MALE HOME ==========
export const MALE_CHEST_HOME: DayWorkout = {
    focus: "Chest & Triceps (Male, Home)",
    exercises: [
        { name: "Decline Push-Ups", sets: "4", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Decline Push-Ups"].image!, hint: 'decline pushup', gifUrl: MASTER_EXERCISE_DATA["Decline Push-Ups"].image! },
        { name: "Push-Ups", sets: "4", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Push-Ups"].image!, hint: 'push ups', gifUrl: MASTER_EXERCISE_DATA["Push-Ups"].image! },
        { name: "Incline Push-Ups", sets: "4", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Push-Ups"].image!, hint: 'incline pushup', gifUrl: MASTER_EXERCISE_DATA["Incline Push-Ups"].image! },
        { name: "Diamond Push-Ups", sets: "3", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Diamond Push-Ups"].image!, hint: 'diamond pushup', gifUrl: MASTER_EXERCISE_DATA["Diamond Push-Ups"].image! },
        { name: "Chair Dips", sets: "4", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Chair Dips"].image!, hint: 'chair dip', gifUrl: MASTER_EXERCISE_DATA["Chair Dips"].image! },
        { name: "Close-Grip Push-Ups", sets: "3", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Close-Grip Push-Ups"].image!, hint: 'close pushup', gifUrl: MASTER_EXERCISE_DATA["Close-Grip Push-Ups"].image! },
        { name: "Overhead Triceps Extensions (Backpack/Weight)", sets: "3", reps: "12-15", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Overhead Triceps Extensions (Backpack/Weight)"].image!, hint: 'overhead extension', gifUrl: MASTER_EXERCISE_DATA["Overhead Triceps Extensions (Backpack/Weight)"].image! },
    ]
};

export const MALE_BACK_HOME: DayWorkout = {
    focus: "Back & Biceps (Male, Home)",
    exercises: [
        { name: "Pull-Ups (if you have a bar)", sets: "4", reps: "To Failure", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Pull-Ups"].image!, hint: 'pull up', gifUrl: MASTER_EXERCISE_DATA["Pull-Ups"].image! },
        { name: "Superman Hold", sets: "4", reps: "30s hold", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Superman Hold"].image!, hint: 'superman hold', gifUrl: MASTER_EXERCISE_DATA["Superman Hold"].image! },
        { name: "Towel Rows", sets: "4", reps: "15-20", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Towel Rows"].image!, hint: 'towel row', gifUrl: MASTER_EXERCISE_DATA["Towel Rows"].image! },
        { name: "Reverse Snow Angels", sets: "3", reps: "20", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Reverse Snow Angels"].image!, hint: 'reverse snow', gifUrl: MASTER_EXERCISE_DATA["Reverse Snow Angels"].image! },
        { name: "Biceps Curls (with backpack/resistance bands)", sets: "4", reps: "12-15", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Biceps Curls"].image!, hint: 'bicep curl', gifUrl: MASTER_EXERCISE_DATA["Biceps Curls"].image! },
        { name: "Chin-Ups", sets: "3", reps: "To Failure", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Chin-Ups"].image!, hint: 'chin up', gifUrl: MASTER_EXERCISE_DATA["Chin-Ups"].image! },
        { name: "Isometric Hold", sets: "3", reps: "30s", rest: "45s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Isometric Hold"].image!, hint: 'isometric hold', gifUrl: MASTER_EXERCISE_DATA["Isometric Hold"].image! },
    ]
};

export const MALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
    focus: "Shoulders, Traps & Abs (Male, Home)",
    exercises: [
        { name: "Pike Push-ups", sets: "4", reps: "To Failure", rest: "90s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Pike Push-ups"].image!, hint: 'pike pushup', gifUrl: MASTER_EXERCISE_DATA["Pike Push-ups"].image! },
        { name: "Lateral Arm Raises (Using Water Bottles/Bands)", sets: "4", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Lateral Arm Raises (Using Water Bottles/Bands)"].image!, hint: 'lateral raise', gifUrl: MASTER_EXERCISE_DATA["Lateral Arm Raises (Using Water Bottles/Bands)"].image! },
        { name: "Rear Delt Pulses (Bodyweight or Light Weights)", sets: "3", reps: "20-30", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Rear Delt Pulses (Bodyweight or Light Weights)"].image!, hint: 'rear delt pulse', gifUrl: MASTER_EXERCISE_DATA["Rear Delt Pulses (Bodyweight or Light Weights)"].image! },
        { name: "Front Raises (Bottles/Bands)", sets: "3", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Front Raises (Bottles/Bands)"].image!, hint: 'front raise', gifUrl: MASTER_EXERCISE_DATA["Front Raises (Bottles/Bands)"].image! },
        { name: "Leg Raises", sets: "4", reps: "20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Leg Raises"].image!, hint: 'leg raise', gifUrl: MASTER_EXERCISE_DATA["Leg Raises"].image! },
        { name: "Russian Twists", sets: "3", reps: "20 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Russian Twists"].image!, hint: 'russian twist', gifUrl: MASTER_EXERCISE_DATA["Russian Twists"].image! },
        { name: "Plank", sets: "3", reps: "To Failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
    ]
};

export const MALE_LEG_HOME_WORKOUT: DayWorkout = {
    focus: "Leg Day (Male, Home)",
    exercises: [
        { name: "Squats", sets: "4", reps: "20", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Squats"].image!, hint: 'squat', gifUrl: MASTER_EXERCISE_DATA["Squats"].image! },
        { name: "Lunges", sets: "3", reps: "15 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Lunges"].image!, hint: 'lunge', gifUrl: MASTER_EXERCISE_DATA["Lunges"].image! },
        { name: "Glute Bridges", sets: "4", reps: "20", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridge', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].image! },
        { name: "Wall Sit", sets: "3", reps: "To Failure", rest: "60s", muscle: "Quads", image: MASTER_EXERCISE_DATA["Wall Sit"].image!, hint: 'wall sit', gifUrl: MASTER_EXERCISE_DATA["Wall Sit"].image! },
        { name: "Jump Squats", sets: "3", reps: "15", rest: "90s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Jump Squats"].image!, hint: 'jump squat', gifUrl: MASTER_EXERCISE_DATA["Jump Squats"].image! },
        { name: "Calf Raises", sets: "5", reps: "25", rest: "30s", muscle: "Calves", image: MASTER_EXERCISE_DATA["Calf Raises"].image!, hint: 'calf raise', gifUrl: MASTER_EXERCISE_DATA["Calf Raises"].image! },
    ]
};

export const MALE_ARMS_HOME: DayWorkout = {
    focus: "Arms & Forearms (Male, Home)",
    exercises: [
        { name: "Resistance Band Curls", sets: "4", reps: "15-20", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Resistance Band Curls"].image!, hint: 'band curl', gifUrl: MASTER_EXERCISE_DATA["Resistance Band Curls"].image! },
        { name: "Overhead Triceps Extensions (Backpack/Weight)", sets: "4", reps: "15-20", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Overhead Triceps Extensions (Backpack/Weight)"].image!, hint: 'overhead extension', gifUrl: MASTER_EXERCISE_DATA["Overhead Triceps Extensions (Backpack/Weight)"].image! },
        { name: "Hammer Curls (Water Bottles)", sets: "3", reps: "15-20", rest: "60s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"].image!, hint: 'hammer curl', gifUrl: MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"].image! },
        { name: "Chair Dips", sets: "4", reps: "To Failure", rest: "90s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Chair Dips"].image!, hint: 'chair dip', gifUrl: MASTER_EXERCISE_DATA["Chair Dips"].image! },
        { name: "Reverse Band Curls", sets: "3", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Reverse Band Curls"].image!, hint: 'band curl', gifUrl: MASTER_EXERCISE_DATA["Reverse Band Curls"].image! },
        { name: "Wrist Curls", sets: "3", reps: "20-25", rest: "45s", muscle: "Forearms", image: MASTER_EXERCISE_DATA["Wrist Curls"].image!, hint: 'wrist curl', gifUrl: MASTER_EXERCISE_DATA["Wrist Curls"].image! },
        { name: "Forearm Squeeze", sets: "3", reps: "30s hold", rest: "45s", muscle: "Forearms", image: MASTER_EXERCISE_DATA["Forearm Squeeze"].image!, hint: 'forearm squeeze', gifUrl: MASTER_EXERCISE_DATA["Forearm Squeeze"].image! },
    ]
};

export const MALE_ABS_HOME: DayWorkout = {
    focus: "Abs & Core (Male, Home)",
    exercises: [
        { name: "Crunches", sets: "4", reps: "20-25", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Crunches"].image!, hint: 'ab crunch', gifUrl: MASTER_EXERCISE_DATA["Crunches"].image! },
        { name: "Leg Raises", sets: "4", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Leg Raises"].image!, hint: 'leg raise', gifUrl: MASTER_EXERCISE_DATA["Leg Raises"].image! },
        { name: "Bicycle Crunches", sets: "3", reps: "20 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Bicycle Crunches"].image!, hint: 'bicycle crunch', gifUrl: MASTER_EXERCISE_DATA["Bicycle Crunches"].image! },
        { name: "Russian Twists (Bodyweight)", sets: "3", reps: "20 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"].image!, hint: 'russian twist', gifUrl: MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"].image! },
        { name: "Plank", sets: "4", reps: "60s hold", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
        { name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s", muscle: "Core", image: MASTER_EXERCISE_DATA["Side Plank (each side)"].image!, hint: 'side plank', gifUrl: MASTER_EXERCISE_DATA["Side Plank (each side)"].image! },
        { name: "Mountain Climbers", sets: "3", reps: "45s", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Mountain Climbers"].image!, hint: 'mountain climber', gifUrl: MASTER_EXERCISE_DATA["Mountain Climbers"].image! },
    ]
};

export const MALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
    focus: "Sexual Wellness (Male, Home)",
    exercises: [
        { name: "Bodyweight Glute Bridges", sets: "4", reps: "20-25", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Bodyweight Glute Bridges"].image!, hint: 'glute bridge', gifUrl: MASTER_EXERCISE_DATA["Bodyweight Glute Bridges"].image! },
        { name: "Pelvic Tilts", sets: "3", reps: "20", rest: "30s", muscle: "Core, Pelvic Floor", image: MASTER_EXERCISE_DATA["Pelvic Tilts"].image!, hint: 'pelvic tilt', gifUrl: MASTER_EXERCISE_DATA["Pelvic Tilts"].image! },
        { name: "Fire Hydrants", sets: "3", reps: "15 each side", rest: "45s", muscle: "Hips, Glutes", image: MASTER_EXERCISE_DATA["Fire Hydrants"].image!, hint: 'fire hydrant', gifUrl: MASTER_EXERCISE_DATA["Fire Hydrants"].image! },
        { name: "Plank", sets: "4", reps: "60s hold", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
        { name: "Squats", sets: "4", reps: "15-20", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Squats"].image!, hint: 'squat', gifUrl: MASTER_EXERCISE_DATA["Squats"].image! },
        { name: "Lunges", sets: "3", reps: "12 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Lunges"].image!, hint: 'lunge', gifUrl: MASTER_EXERCISE_DATA["Lunges"].image! },
    ]
};


// ========== FEMALE HOME ==========
export const FEMALE_CHEST_HOME: DayWorkout = {
    focus: "Chest, Shoulders & Triceps (Female, Home)",
    exercises: [
        { name: "Knee Push-Ups", sets: "4", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Knee Push-Ups"].image!, hint: 'knee pushup', gifUrl: MASTER_EXERCISE_DATA["Knee Push-Ups"].image! },
        { name: "Incline Push-Ups (Bench/Chair)", sets: "4", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Push-Ups"].image!, hint: 'incline pushup', gifUrl: MASTER_EXERCISE_DATA["Incline Push-Ups"].image! },
        { name: "Wall Push-Ups", sets: "3", reps: "15-20", rest: "45s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Wall Push-Ups"].image!, hint: 'wall pushup', gifUrl: MASTER_EXERCISE_DATA["Wall Push-Ups"].image! },
        { name: "Pike Push-ups", sets: "3", reps: "To Failure", rest: "90s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Pike Push-ups"].image!, hint: 'pike pushup', gifUrl: MASTER_EXERCISE_DATA["Pike Push-ups"].image! },
        { name: "Chair Dips", sets: "4", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Chair Dips"].image!, hint: 'chair dip', gifUrl: MASTER_EXERCISE_DATA["Chair Dips"].image! },
        { name: "Triceps Kickbacks", sets: "3", reps: "15 each arm", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image!, hint: 'tricep kickback', gifUrl: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image! },
    ]
};

export const FEMALE_BACK_HOME: DayWorkout = {
    focus: "Back & Biceps (Female, Home)",
    exercises: [
        { name: "Superwoman Hold", sets: "4", reps: "30s hold", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Superman Hold"].image!, hint: 'superwoman hold', gifUrl: MASTER_EXERCISE_DATA["Superman Hold"].image! },
        { name: "Towel Rows", sets: "4", reps: "15-20", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Towel Rows"].image!, hint: 'towel row', gifUrl: MASTER_EXERCISE_DATA["Towel Rows"].image! },
        { name: "Snow Angels", sets: "3", reps: "20", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Snow Angels"].image!, hint: 'snow angel', gifUrl: MASTER_EXERCISE_DATA["Snow Angels"].image! },
        { name: "Wall Angels", sets: "3", reps: "15", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Wall Angels"].image!, hint: 'wall angel', gifUrl: MASTER_EXERCISE_DATA["Wall Angels"].image! },
        { name: "Resistance Band Curls", sets: "4", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Resistance Band Curls"].image!, hint: 'band curl', gifUrl: MASTER_EXERCISE_DATA["Resistance Band Curls"].image! },
        { name: "Hammer Curls (Water Bottles)", sets: "3", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"].image!, hint: 'hammer curl', gifUrl: MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"].image! },
    ]
};

export const FEMALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
    focus: "Shoulders & Posture (Female, Home)",
    exercises: [
        { name: "Pike Push-ups", sets: "3", reps: "To Failure", rest: "90s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Pike Push-ups"].image!, hint: 'pike pushup', gifUrl: MASTER_EXERCISE_DATA["Pike Push-ups"].image! },
        { name: "Wall Angels", sets: "4", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Wall Angels"].image!, hint: 'wall angel', gifUrl: MASTER_EXERCISE_DATA["Wall Angels"].image! },
        { name: "Lateral Arm Raises (Using Water Bottles/Bands)", sets: "4", reps: "15-20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Lateral Arm Raises (Using Water Bottles/Bands)"].image!, hint: 'lateral raise', gifUrl: MASTER_EXERCISE_DATA["Lateral Arm Raises (Using Water Bottles/Bands)"].image! },
        { name: "Reverse Snow Angels", sets: "3", reps: "20", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Reverse Snow Angels"].image!, hint: 'reverse snow', gifUrl: MASTER_EXERCISE_DATA["Reverse Snow Angels"].image! },
        { name: "Cat-Cow Stretch", sets: "3", reps: "15", rest: "30s", muscle: "Back", image: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image!, hint: 'cat cow', gifUrl: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image! },
    ]
};

export const FEMALE_LEG_HOME_WORKOUT: DayWorkout = {
    focus: "Legs & Glutes (Female, Home)",
    exercises: [
        { name: "Sumo Squats", sets: "4", reps: "15-20", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Sumo Squats"].image!, hint: 'sumo squat', gifUrl: MASTER_EXERCISE_DATA["Sumo Squats"].image! },
        { name: "Glute Bridges", sets: "4", reps: "20-25", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridge', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].image! },
        { name: "Walking Lunges", sets: "3", reps: "15 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Walking Lunges"].image!, hint: 'walking lunge', gifUrl: MASTER_EXERCISE_DATA["Walking Lunges"].image! },
        { name: "Step-Ups", sets: "3", reps: "15 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Step-Ups"].image!, hint: 'step up', gifUrl: MASTER_EXERCISE_DATA["Step-Ups"].image! },
        { name: "Donkey Kicks", sets: "3", reps: "20 each leg", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Donkey Kicks"].image!, hint: 'donkey kick', gifUrl: MASTER_EXERCISE_DATA["Donkey Kicks"].image! },
        { name: "Standing Calf Raises", sets: "4", reps: "20-25", rest: "30s", muscle: "Calves", image: MASTER_EXERCISE_DATA["Standing Calf Raises"].image!, hint: 'calf raise', gifUrl: MASTER_EXERCISE_DATA["Standing Calf Raises"].image! },
    ]
};

export const FEMALE_ARMS_HOME: DayWorkout = {
    focus: "Arms & Core (Female, Home)",
    exercises: [
        { name: "Biceps Curls", sets: "4", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Biceps Curls"].image!, hint: 'bicep curl', gifUrl: MASTER_EXERCISE_DATA["Biceps Curls"].image! },
        { name: "Triceps Kickbacks", sets: "4", reps: "15 each arm", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image!, hint: 'tricep kickback', gifUrl: MASTER_EXERCISE_DATA["Triceps Kickbacks"].image! },
        { name: "Chair Dips", sets: "3", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Chair Dips"].image!, hint: 'chair dip', gifUrl: MASTER_EXERCISE_DATA["Chair Dips"].image! },
        { name: "Hammer Curls (Water Bottles)", sets: "3", reps: "15-20", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"].image!, hint: 'hammer curl', gifUrl: MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"].image! },
        { name: "Plank", sets: "3", reps: "60s hold", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
        { name: "Bird Dog", sets: "3", reps: "12 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Bird Dog"].image!, hint: 'bird dog', gifUrl: MASTER_EXERCISE_DATA["Bird Dog"].image! },
    ]
};

export const FEMALE_ABS_HOME: DayWorkout = {
    focus: "Abs & Core (Female, Home)",
    exercises: [
        { name: "Crunches", sets: "4", reps: "20-25", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Crunches"].image!, hint: 'ab crunch', gifUrl: MASTER_EXERCISE_DATA["Crunches"].image! },
        { name: "Leg Raises", sets: "4", reps: "15-20", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Leg Raises"].image!, hint: 'leg raise', gifUrl: MASTER_EXERCISE_DATA["Leg Raises"].image! },
        { name: "Bicycle Crunches", sets: "3", reps: "20 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Bicycle Crunches"].image!, hint: 'bicycle crunch', gifUrl: MASTER_EXERCISE_DATA["Bicycle Crunches"].image! },
        { name: "Flutter Kicks", sets: "3", reps: "45s", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Flutter Kicks"].image!, hint: 'flutter kick', gifUrl: MASTER_EXERCISE_DATA["Flutter Kicks"].image! },
        { name: "Side Plank Hip Dips", sets: "3", reps: "15 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Side Plank Hip Dips"].image!, hint: 'side plank dip', gifUrl: MASTER_EXERCISE_DATA["Side Plank Hip Dips"].image! },
        { name: "Plank", sets: "3", reps: "To Failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
    ]
};

export const FEMALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
    focus: "Sexual Wellness (Female, Home)",
    exercises: [
        { name: "Glute Bridges", sets: "4", reps: "20-25", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridge', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].image! },
        { name: "Pelvic Tilts", sets: "3", reps: "20", rest: "30s", muscle: "Core, Pelvic Floor", image: MASTER_EXERCISE_DATA["Pelvic Tilts"].image!, hint: 'pelvic tilt', gifUrl: MASTER_EXERCISE_DATA["Pelvic Tilts"].image! },
        { name: "Fire Hydrants", sets: "3", reps: "15 each side", rest: "45s", muscle: "Hips, Glutes", image: MASTER_EXERCISE_DATA["Fire Hydrants"].image!, hint: 'fire hydrant', gifUrl: MASTER_EXERCISE_DATA["Fire Hydrants"].image! },
        { name: "Sumo Squats", sets: "4", reps: "15-20", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Sumo Squats"].image!, hint: 'sumo squat', gifUrl: MASTER_EXERCISE_DATA["Sumo Squats"].image! },
        { name: "Plank", sets: "4", reps: "60s hold", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
        { name: "Butterfly Stretch", sets: "1", reps: "60s", rest: "0s", muscle: "Hips", image: MASTER_EXERCISE_DATA["Butterfly Stretch"].image!, hint: 'butterfly stretch', gifUrl: MASTER_EXERCISE_DATA["Butterfly Stretch"].image! },
    ]
};

// ========== SPECIALTY WORKOUTS (Unisex) ==========
export const MALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = {
  "Daily": {
    focus: "Posture Correction (Male)",
    exercises: [
        { name: "Wall Slides", sets: "3", reps: "15", rest: "45s", muscle: "Shoulders, Back", image: MASTER_EXERCISE_DATA["Wall Slides"].image!, hint: 'wall slide', gifUrl: MASTER_EXERCISE_DATA["Wall Slides"].image! },
        { name: "Cat-Cow Stretch", sets: "3", reps: "10 cycles", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image!, hint: 'cat cow', gifUrl: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image! },
        { name: "Glute Bridges", sets: "3", reps: "15", rest: "60s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridge', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].image! },
        { name: "Plank", sets: "3", reps: "45-60s hold", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! },
        { name: "Reverse Snow Angels (on floor)", sets: "3", reps: "15", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Reverse Snow Angels (on floor)"].image!, hint: 'reverse snow angel', gifUrl: MASTER_EXERCISE_DATA["Reverse Snow Angels (on floor)"].image! },
        { name: "Seated Chin Tucks", sets: "3", reps: "15", rest: "30s", muscle: "Neck", image: MASTER_EXERCISE_DATA["Seated Chin Tucks"].image!, hint: 'chin tuck', gifUrl: MASTER_EXERCISE_DATA["Seated Chin Tucks"].image! },
        { name: "Child’s Pose with Reach", sets: "1", reps: "60s", rest: "0s", muscle: "Back, Shoulders", image: MASTER_EXERCISE_DATA["Child’s Pose with Reach"].image!, hint: 'child pose', gifUrl: MASTER_EXERCISE_DATA["Child’s Pose with Reach"].image! },
    ]
  }
};

export const FEMALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = {
  "Daily": {
    focus: "Posture Correction (Female)",
    exercises: [
        { name: "Wall Slides", sets: "3", reps: "15", rest: "45s", muscle: "Shoulders, Back", image: MASTER_EXERCISE_DATA["Wall Slides"].image!, hint: 'wall slide', gifUrl: MASTER_EXERCISE_DATA["Wall Slides"].image! },
        { name: "Cat-Cow Stretch", sets: "3", reps: "10 cycles", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image!, hint: 'cat cow', gifUrl: MASTER_EXERCISE_DATA["Cat-Cow Stretch"].image! },
        { name: "Glute Bridges", sets: "3", reps: "15", rest: "60s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridge', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].image! },
        { name: "Bird Dog", sets: "3", reps: "12 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Bird Dog"].image!, hint: 'bird dog', gifUrl: MASTER_EXERCISE_DATA["Bird Dog"].image! },
        { name: "Reverse Snow Angels (on floor)", sets: "3", reps: "15", rest: "45s", muscle: "Back", image: MASTER_EXERCISE_DATA["Reverse Snow Angels (on floor)"].image!, hint: 'reverse snow angel', gifUrl: MASTER_EXERCISE_DATA["Reverse Snow Angels (on floor)"].image! },
        { name: "Seated Chin Tucks", sets: "3", reps: "15", rest: "30s", muscle: "Neck", image: MASTER_EXERCISE_DATA["Seated Chin Tucks"].image!, hint: 'chin tuck', gifUrl: MASTER_EXERCISE_DATA["Seated Chin Tucks"].image! },
        { name: "Butterfly Stretch", sets: "1", reps: "60s", rest: "0s", muscle: "Hips", image: MASTER_EXERCISE_DATA["Butterfly Stretch"].image!, hint: 'butterfly stretch', gifUrl: MASTER_EXERCISE_DATA["Butterfly Stretch"].image! },
    ]
  }
};

export const MALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
  "Daily": {
    focus: "Facial Exercises (Male)",
    exercises: [
        { name: "Jawline Sharper (Massage Along Jaw)", sets: "2", reps: "2-3 mins", rest: "30s", muscle: 'Jaw', image: MASTER_EXERCISE_DATA["Jawline Sharper (Massage Along Jaw)"].image!, hint: 'jawline massage', gifUrl: MASTER_EXERCISE_DATA["Jawline Sharper (Massage Along Jaw)"].image! },
        { name: "Vowel Mouth Stretch (\"O\"-\"E\")", sets: "3", reps: "15", rest: "30s", muscle: 'Face', image: MASTER_EXERCISE_DATA["Vowel Mouth Stretch (\"O\"-\"E\")"].image!, hint: 'mouth stretch', gifUrl: MASTER_EXERCISE_DATA["Vowel Mouth Stretch (\"O\"-\"E\")"].image! },
        { name: "Lion's Breath", sets: "3", reps: "5", rest: "45s", muscle: 'Face', image: MASTER_EXERCISE_DATA["Lion's Breath"].image!, hint: 'lion breath', gifUrl: MASTER_EXERCISE_DATA["Lion's Breath"].image! },
        { name: "Chin Tuck", sets: "3", reps: "15", rest: "30s", muscle: 'Neck', image: MASTER_EXERCISE_DATA["Chin Tuck"].image!, hint: 'chin tuck', gifUrl: MASTER_EXERCISE_DATA["Chin Tuck"].image! },
        { name: "Jaw Unlocker", sets: "2", reps: "10 each side", rest: "30s", muscle: 'Jaw', image: MASTER_EXERCISE_DATA["Jaw Unlocker"].image!, hint: 'jaw unlock', gifUrl: MASTER_EXERCISE_DATA["Jaw Unlocker"].image! },
    ]
  }
};

export const FEMALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
  "Daily": {
    focus: "Facial Exercises (Female)",
    exercises: [
        { name: "Cheek & Jawline Lifter", sets: "3", reps: "15", rest: "30s", muscle: 'Cheeks', image: MASTER_EXERCISE_DATA["Cheek & Jawline Lifter"].image!, hint: 'cheek lift', gifUrl: MASTER_EXERCISE_DATA["Cheek & Jawline Lifter"].image! },
        { name: "Vowel Mouth Stretch (\"O\"-\"E\")", sets: "3", reps: "15", rest: "30s", muscle: 'Face', image: MASTER_EXERCISE_DATA["Vowel Mouth Stretch (\"O\"-\"E\")"].image!, hint: 'mouth stretch', gifUrl: MASTER_EXERCISE_DATA["Vowel Mouth Stretch (\"O\"-\"E\")"].image! },
        { name: "Kiss the Ceiling / \"Whistler\"", sets: "3", reps: "15", rest: "30s", muscle: 'Neck', image: MASTER_EXERCISE_DATA["Kiss the Ceiling / \"Whistler\""].image!, hint: 'face exercise', gifUrl: MASTER_EXERCISE_DATA["Kiss the Ceiling / \"Whistler\""].image! },
        { name: "Gua Sha or Facial Massage (Jawline)", sets: "1", reps: "3-5 mins", rest: "0s", muscle: 'Jaw', image: MASTER_EXERCISE_DATA["Gua Sha or Facial Massage (Jawline)"].image!, hint: 'gua sha', gifUrl: MASTER_EXERCISE_DATA["Gua Sha or Facial Massage (Jawline)"].image! },
    ]
  }
};

export const MALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
  "Daily": {
    focus: "Vocal Training (Male)",
    exercises: [
        { name: "Lip Trills", sets: "2", reps: "60s", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Lip Trills"].image!, hint: 'lip trill', gifUrl: MASTER_EXERCISE_DATA["Lip Trills"].image! },
        { name: "Humming Warm-Up", sets: "1", reps: "2-3 mins", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Humming Warm-Up"].image!, hint: 'vocal warmup', gifUrl: MASTER_EXERCISE_DATA["Humming Warm-Up"].image! },
        { name: "Sirens (Low to High Pitch Glide)", sets: "3", reps: "10", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Sirens (Low to High Pitch Glide)"].image!, hint: 'vocal siren', gifUrl: MASTER_EXERCISE_DATA["Sirens (Low to High Pitch Glide)"].image! },
        { name: "Sustain Note (Deep Chest Voice)", sets: "4", reps: "15s", rest: "45s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Sustain Note (Deep Chest Voice)"].image!, hint: 'vocal note', gifUrl: MASTER_EXERCISE_DATA["Sustain Note (Deep Chest Voice)"].image! },
        { name: "Consonant Articulation (P-T-K-B-D-G)", sets: "2", reps: "30s fast", rest: "30s", muscle: 'Lips, Tongue', image: MASTER_EXERCISE_DATA["Consonant Articulation (P-T-K-B-D-G)"].image!, hint: 'articulation', gifUrl: MASTER_EXERCISE_DATA["Consonant Articulation (P-T-K-B-D-G)"].image! },
        { name: "Breath Control (Inhale 4s – Hold – Exhale 8s)", sets: "1", reps: "5 cycles", rest: "0s", muscle: 'Diaphragm', image: MASTER_EXERCISE_DATA["Breath Control (Inhale 4s – Hold – Exhale 8s)"].image!, hint: 'breath control', gifUrl: MASTER_EXERCISE_DATA["Breath Control (Inhale 4s – Hold – Exhale 8s)"].image! },
        { name: "Deep 'Ahh' Vowel Projection", sets: "3", reps: "10s", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Deep 'Ahh' Vowel Projection"].image!, hint: 'vowel projection', gifUrl: MASTER_EXERCISE_DATA["Deep 'Ahh' Vowel Projection"].image! },
    ]
  }
};

export const FEMALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
  "Daily": {
    focus: "Vocal Training (Female)",
    exercises: [
        { name: "Lip Bubbles (Trills with Sound)", sets: "2", reps: "60s", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Lip Bubbles (Trills with Sound)"].image!, hint: 'lip bubble', gifUrl: MASTER_EXERCISE_DATA["Lip Bubbles (Trills with Sound)"].image! },
        { name: "Humming Glide (Nasal Resonance)", sets: "1", reps: "2-3 mins", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Humming Glide (Nasal Resonance)"].image!, hint: 'humming glide', gifUrl: MASTER_EXERCISE_DATA["Humming Glide (Nasal Resonance)"].image! },
        { name: "Octave Sirens (Smooth Pitch Slide)", sets: "3", reps: "10", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Octave Sirens (Smooth Pitch Slide)"].image!, hint: 'octave siren', gifUrl: MASTER_EXERCISE_DATA["Octave Sirens (Smooth Pitch Slide)"].image! },
        { name: "Sustain 'Ee' / 'Oo' Notes", sets: "4", reps: "15s", rest: "45s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Sustain 'Ee' / 'Oo' Notes"].image!, hint: 'vowel sustain', gifUrl: MASTER_EXERCISE_DATA["Sustain 'Ee' / 'Oo' Notes"].image! },
        { name: "Vowel Chains (AEIOU transitions)", sets: "2", reps: "30s", rest: "30s", muscle: 'Lips, Tongue', image: MASTER_EXERCISE_DATA["Vowel Chains (AEIOU transitions)"].image!, hint: 'vowel chain', gifUrl: MASTER_EXERCISE_DATA["Vowel Chains (AEIOU transitions)"].image! },
        { name: "Breath Support Drill (4-4-8 breathing)", sets: "1", reps: "5 cycles", rest: "0s", muscle: 'Diaphragm', image: MASTER_EXERCISE_DATA["Breath Support Drill (4-4-8 breathing)"].image!, hint: 'breath drill', gifUrl: MASTER_EXERCISE_DATA["Breath Support Drill (4-4-8 breathing)"].image! },
        { name: "Vocal Stretch (Soft Yawns + 'Haa')", sets: "3", reps: "5", rest: "30s", muscle: 'Vocal Cords', image: MASTER_EXERCISE_DATA["Vocal Stretch (Soft Yawns + 'Haa')"].image!, hint: 'vocal stretch', gifUrl: MASTER_EXERCISE_DATA["Vocal Stretch (Soft Yawns + 'Haa')"].image! },
    ]
  }
};

export const GENERAL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  "Monday": MALE_CHEST_GYM,
  "Tuesday": MALE_BACK_GYM,
  "Wednesday": MALE_LEG_GYM_WORKOUT,
  "Thursday": { focus: "Rest", exercises: [] },
  "Friday": MALE_SHOULDER_GYM_WORKOUT,
  "Saturday": MALE_ARMS_GYM,
  "Sunday": { focus: "Rest", exercises: [] }
};

export const GENERAL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  "Monday": MALE_CHEST_HOME,
  "Tuesday": MALE_BACK_HOME,
  "Wednesday": MALE_LEG_HOME_WORKOUT,
  "Thursday": { focus: "Rest", exercises: [] },
  "Friday": MALE_SHOULDER_HOME_WORKOUT,
  "Saturday": MALE_ARMS_HOME,
  "Sunday": { focus: "Rest", exercises: [] }
};

export const GENERAL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  "Monday": FEMALE_LEG_GYM_WORKOUT,
  "Tuesday": FEMALE_BACK_GYM,
  "Wednesday": FEMALE_CHEST_GYM,
  "Thursday": { focus: "Rest", exercises: [] },
  "Friday": FEMALE_SHOULDER_GYM_WORKOUT,
  "Saturday": FEMALE_ARMS_GYM,
  "Sunday": { focus: "Rest", exercises: [] }
};

export const GENERAL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  "Monday": FEMALE_LEG_HOME_WORKOUT,
  "Tuesday": FEMALE_BACK_HOME,
  "Wednesday": FEMALE_CHEST_HOME,
  "Thursday": { focus: "Rest", exercises: [] },
  "Friday": FEMALE_SHOULDER_HOME_WORKOUT,
  "Saturday": FEMALE_ARMS_HOME,
  "Sunday": { focus: "Rest", exercises: [] }
};


// *************** ATHLETE WORKOUTS ***************

// ========== CRICKET (MALE, GYM) ==========
export const CRICKET_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": {
        focus: "Strength & Power",
        exercises: [
            { name: "Deadlifts (Conventional or Trap Bar)", sets: "4", reps: "6-8", rest: "120s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Deadlifts (Conventional or Trap Bar)"].image!, hint: 'deadlift', gifUrl: MASTER_EXERCISE_DATA["Deadlifts (Conventional or Trap Bar)"].gifUrl },
            { name: "Barbell Push Press", sets: "3", reps: "8-10", rest: "90s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Barbell Push Press"].image!, hint: 'push press', gifUrl: MASTER_EXERCISE_DATA["Barbell Push Press"].gifUrl },
            { name: "Barbell Rows", sets: "3", reps: "8-10", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Barbell Rows"].image!, hint: 'barbell row', gifUrl: MASTER_EXERCISE_DATA["Barbell Rows"].gifUrl },
            { name: "Goblet Squats", sets: "3", reps: "10-12", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Goblet Squats"].image!, hint: 'goblet squat', gifUrl: MASTER_EXERCISE_DATA["Goblet Squats"].gifUrl },
            { name: "Cable Woodchoppers", sets: "3", reps: "12 each side", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Cable Woodchoppers"].image!, hint: 'cable crunch', gifUrl: MASTER_EXERCISE_DATA["Cable Woodchoppers"].gifUrl },
            { name: "Farmer Carries (Dumbbells)", sets: "3", reps: "40 yards", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Farmer Carries (Dumbbells)"].image!, hint: 'farmer carry', gifUrl: MASTER_EXERCISE_DATA["Farmer Carries (Dumbbells)"].gifUrl }
        ]
    },
    "Tuesday": {
        focus: "Active Recovery & Mobility",
        exercises: [
            { name: "Light Cycling/ Walking", sets: "1", reps: "20-30 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Light Cycling/ Walking"].image!, hint: 'light cycling', gifUrl: MASTER_EXERCISE_DATA["Light Cycling/ Walking"].gifUrl },
            { name: "Foam Rolling (Full Body)", sets: "1", reps: "10 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"].image!, hint: 'foam rolling', gifUrl: MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"].gifUrl },
            { name: "Yoga Flow (Hamstrings + Back)", sets: "1", reps: "15 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Yoga Flow (Hamstrings + Back)"].image!, hint: 'yoga flow', gifUrl: MASTER_EXERCISE_DATA["Yoga Flow (Hamstrings + Back)"].gifUrl }
        ]
    },
    "Wednesday": {
        focus: "Explosive Speed & Agility",
        exercises: [
            { name: "Box Jumps", sets: "5", reps: "5", rest: "90s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Box Jumps"].image!, hint: 'box jump', gifUrl: MASTER_EXERCISE_DATA["Box Jumps"].gifUrl },
            { name: "Medicine Ball Slams", sets: "4", reps: "10-12", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Medicine Ball Slams"].image!, hint: 'ball slam', gifUrl: MASTER_EXERCISE_DATA["Medicine Ball Slams"].gifUrl },
            { name: "Lateral Bounds", sets: "3", reps: "8 each side", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Lateral Bounds"].image!, hint: 'lateral bound', gifUrl: MASTER_EXERCISE_DATA["Lateral Bounds"].gifUrl },
            { name: "Agility Ladder Drills", sets: "5", reps: "various", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Agility Ladder Drills"].image!, hint: 'agility ladder', gifUrl: MASTER_EXERCISE_DATA["Agility Ladder Drills"].gifUrl },
            { name: "Single-Leg Deadlifts", sets: "3", reps: "10 each leg", rest: "60s", muscle: "Hamstrings", image: MASTER_EXERCISE_DATA["Single-Leg Deadlifts"].image!, hint: 'single deadlift', gifUrl: MASTER_EXERCISE_DATA["Single-Leg Deadlifts"].gifUrl },
            { name: "Treadmill Sprints (Interval)", sets: "6", reps: "15s sprint, 45s rest", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Treadmill Sprints (Interval)"].image!, hint: 'treadmill sprint', gifUrl: MASTER_EXERCISE_DATA["Treadmill Sprints (Interval)"].gifUrl }
        ]
    },
    "Thursday": {
        focus: "Upper Body Hypertrophy",
        exercises: [
            { name: "Pull-Ups", sets: "4", reps: "8-12", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Pull-Ups"].image!, hint: 'pull up', gifUrl: MASTER_EXERCISE_DATA["Pull-Ups"].gifUrl },
            { name: "Incline Dumbbell Press", sets: "4", reps: "10-12", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Dumbbell Press"].image!, hint: 'incline press', gifUrl: MASTER_EXERCISE_DATA["Incline Dumbbell Press"].gifUrl },
            { name: "Bent Over Rows", sets: "3", reps: "10-12", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Bent Over Rows"].image!, hint: 'bent row', gifUrl: MASTER_EXERCISE_DATA["Bent Over Rows"].gifUrl },
            { name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "60s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"].image!, hint: 'shoulder press', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"].gifUrl },
            { name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "45s", muscle: "Biceps", image: MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"].image!, hint: 'bicep curl', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"].image! },
            { name: "Triceps Rope Pushdown", sets: "3", reps: "12-15", rest: "45s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Triceps Rope Pushdown"].image!, hint: 'tricep pushdown', gifUrl: MASTER_EXERCISE_DATA["Triceps Rope Pushdown"].gifUrl },
        ]
    },
    "Friday": {
        focus: "Full-Body Conditioning",
        exercises: [
            { name: "Battle Ropes", sets: "5", reps: "30s work, 30s rest", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Battle Ropes"].image!, hint: 'battle rope', gifUrl: MASTER_EXERCISE_DATA["Battle Ropes"].gifUrl },
            { name: "Kettlebell Swings", sets: "4", reps: "15-20", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Kettlebell Swings"].image!, hint: 'kettlebell swing', gifUrl: MASTER_EXERCISE_DATA["Kettlebell Swings"].gifUrl },
            { name: "Sled Push", sets: "4", reps: "20 yards", rest: "90s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Sled Push"].image!, hint: 'sled push', gifUrl: MASTER_EXERCISE_DATA["Sled Push"].gifUrl },
            { name: "Ab Roller", sets: "3", reps: "10-15", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Ab Roller"].image!, hint: 'ab rollout', gifUrl: MASTER_EXERCISE_DATA["Ab Roller"].gifUrl },
        ]
    },
    "Saturday": {
        focus: "Skill & Prehab",
        exercises: [
            { name: "Shadow Batting", sets: "10", reps: "5 mins", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Shadow Batting"].image!, hint: 'shadow batting', gifUrl: MASTER_EXERCISE_DATA["Shadow Batting"].gifUrl },
            { name: "Reaction Ball or Wall Catch", sets: "5", reps: "1 min", rest: "45s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Reaction Ball or Wall Catch"].image!, hint: 'reaction ball', gifUrl: MASTER_EXERCISE_DATA["Reaction Ball or Wall Catch"].gifUrl },
            { name: "Face Pulls", sets: "3", reps: "20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Face Pulls"].image!, hint: 'face pull', gifUrl: MASTER_EXERCISE_DATA["Face Pulls"].image! },
            { name: "Lateral Band Walks", sets: "3", reps: "15 each side", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Lateral Band Walks"].image!, hint: 'band walk', gifUrl: MASTER_EXERCISE_DATA["Lateral Band Walks"].image! },
        ]
    },
    "Sunday": {
        focus: "Rest",
        exercises: []
    }
};

export const CRICKET_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": {
        focus: "Strength & Power",
        exercises: [
            { name: "Jump Squats", sets: "4", reps: "15", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Jump Squats"].image!, hint: 'jump squat', gifUrl: MASTER_EXERCISE_DATA["Jump Squats"].gifUrl },
            { name: "Explosive Push-Ups", sets: "4", reps: "10-12", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Explosive Push-Ups"].image!, hint: 'explosive pushup', gifUrl: MASTER_EXERCISE_DATA["Explosive Push-Ups"].gifUrl },
            { name: "Walking Lunges", sets: "3", reps: "20 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Walking Lunges"].image!, hint: 'walking lunge', gifUrl: MASTER_EXERCISE_DATA["Walking Lunges"].gifUrl },
            { name: "Burpees", sets: "4", reps: "10-12", rest: "90s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Burpees"].image!, hint: 'burpee', gifUrl: MASTER_EXERCISE_DATA["Burpees"].gifUrl },
        ]
    },
    "Tuesday": {
        focus: "Active Recovery & Mobility",
        exercises: [
            { name: "Yoga Flow", sets: "1", reps: "20 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Yoga Flow"].image!, hint: 'yoga flow', gifUrl: MASTER_EXERCISE_DATA["Yoga Flow"].gifUrl },
            { name: "Dynamic Stretching", sets: "1", reps: "10 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Dynamic Stretching"].image!, hint: 'dynamic stretching', gifUrl: MASTER_EXERCISE_DATA["Dynamic Stretching"].gifUrl },
        ]
    },
    "Wednesday": {
        focus: "Speed, Agility & Core",
        exercises: [
            { name: "Sprint Drills", sets: "6", reps: "30 yards", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Sprint Drills"].image!, hint: 'sprint drills', gifUrl: MASTER_EXERCISE_DATA["Sprint Drills"].gifUrl },
            { name: "Side Shuffles", sets: "4", reps: "20 yards each way", rest: "45s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Side Shuffles"].image!, hint: 'side shuffles', gifUrl: MASTER_EXERCISE_DATA["Side Shuffles"].gifUrl },
            { name: "Mountain Climbers", sets: "4", reps: "45s", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Mountain Climbers"].image!, hint: 'mountain climbers', gifUrl: MASTER_EXERCISE_DATA["Mountain Climbers"].gifUrl },
            { name: "Plank", sets: "4", reps: "60s", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].gifUrl },
        ]
    },
    "Thursday": {
        focus: "Upper Body Endurance",
        exercises: [
            { name: "Push-Ups", sets: "5", reps: "To Failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Push-Ups"].image!, hint: 'push ups', gifUrl: MASTER_EXERCISE_DATA["Push-Ups"].image! },
            { name: "Pull-Ups", sets: "5", reps: "To Failure", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Pull-Ups"].image!, hint: 'pull ups', gifUrl: MASTER_EXERCISE_DATA["Pull-Ups"].gifUrl },
            { name: "Chair Dips", sets: "4", reps: "To Failure", rest: "60s", muscle: "Triceps", image: MASTER_EXERCISE_DATA["Chair Dips"].image!, hint: 'chair dips', gifUrl: MASTER_EXERCISE_DATA["Chair Dips"].gifUrl },
        ]
    },
    "Friday": {
        focus: "Skill & Prehab",
        exercises: [
            { name: "Shadow Batting (No Bat)", sets: "10", reps: "5 mins", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Shadow Batting (No Bat)"].image!, hint: 'shadow batting', gifUrl: MASTER_EXERCISE_DATA["Shadow Batting (No Bat)"].gifUrl },
            { name: "Wall Ball Catch Drill", sets: "5", reps: "1 min", rest: "45s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Wall Ball Catch Drill"].image!, hint: 'wall ball', gifUrl: MASTER_EXERCISE_DATA["Wall Ball Catch Drill"].gifUrl },
            { name: "Wall Slides", sets: "3", reps: "20", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Wall Slides"].image!, hint: 'wall slides', gifUrl: MASTER_EXERCISE_DATA["Wall Slides"].gifUrl },
            { name: "Glute Bridges", sets: "3", reps: "20", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridges', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].gifUrl },
        ]
    },
    "Saturday": {
        focus: "Active Recovery",
        exercises: [
            { name: "Brisk Walking", sets: "1", reps: "30-45 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Brisk Walking"].image!, hint: 'brisk walking', gifUrl: MASTER_EXERCISE_DATA["Brisk Walking"].gifUrl },
            { name: "Stretching", sets: "1", reps: "15 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Stretching"].image!, hint: 'stretching', gifUrl: MASTER_EXERCISE_DATA["Stretching"].gifUrl },
        ]
    },
    "Sunday": {
        focus: "Rest",
        exercises: []
    }
};

export const CRICKET_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": {
        focus: "Full Body Strength",
        exercises: [
            { name: "Goblet Squats", sets: "4", reps: "10-12", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Goblet Squats"].image!, hint: 'goblet squat', gifUrl: MASTER_EXERCISE_DATA["Goblet Squats"].gifUrl },
            { name: "Dumbbell Bench Press", sets: "3", reps: "10-12", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Dumbbell Bench Press"].image!, hint: 'dumbbell press', gifUrl: MASTER_EXERCISE_DATA["Dumbbell Bench Press"].gifUrl },
            { name: "Single Arm Dumbbell Row", sets: "3", reps: "10-12 each arm", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Single Arm Dumbbell Row"].image!, hint: 'dumbbell row', gifUrl: MASTER_EXERCISE_DATA["Single Arm Dumbbell Row"].gifUrl },
            { name: "DB Shoulder Press", sets: "3", reps: "10-12", rest: "60s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["DB Shoulder Press"].image!, hint: 'shoulder press', gifUrl: MASTER_EXERCISE_DATA["DB Shoulder Press"].gifUrl },
            { name: "Plank", sets: "3", reps: "to failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].image! }
        ]
    },
    "Tuesday": {
        focus: "Agility & Fielding Skills",
        exercises: [
            { name: "Ladder Drills", sets: "5", reps: "2 sets each pattern", rest: "45s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Ladder Drills"].image!, hint: 'ladder drills', gifUrl: MASTER_EXERCISE_DATA["Ladder Drills"].gifUrl },
            { name: "Medicine Ball Slams", sets: "4", reps: "12", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Medicine Ball Slams"].image!, hint: 'ball slam', gifUrl: MASTER_EXERCISE_DATA["Medicine Ball Slams"].gifUrl },
            { name: "Cone Sprints (Short Distance)", sets: "6", reps: "various", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"].image!, hint: 'cone sprints', gifUrl: MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"].gifUrl }
        ]
    },
    "Wednesday": {
        focus: "Lower Body Power & Core",
        exercises: [
            { name: "Barbell Hip Thrusts", sets: "4", reps: "10-12", rest: "90s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].image!, hint: 'hip thrusts', gifUrl: MASTER_EXERCISE_DATA["Barbell Hip Thrusts"].gifUrl },
            { name: "Romanian Deadlifts", sets: "3", reps: "12", rest: "60s", muscle: "Hamstrings", image: MASTER_EXERCISE_DATA["Romanian Deadlifts"].image!, hint: 'romanian deadlifts', gifUrl: MASTER_EXERCISE_DATA["Romanian Deadlifts"].gifUrl },
            { name: "Bulgarian Split Squats", sets: "3", reps: "10 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Bulgarian Split Squats"].image!, hint: 'split squats', gifUrl: MASTER_EXERCISE_DATA["Bulgarian Split Squats"].gifUrl },
            { name: "Cable Oblique Twists", sets: "3", reps: "15 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Cable Oblique Twists"].image!, hint: 'oblique twists', gifUrl: MASTER_EXERCISE_DATA["Cable Oblique Twists"].gifUrl }
        ]
    },
    "Thursday": {
        focus: "Active Recovery or Rest",
        exercises: [
            { name: "Yoga or Stretch Class", sets: "1", reps: "45-60 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Yoga or Stretch Class"].image!, hint: 'yoga class', gifUrl: MASTER_EXERCISE_DATA["Yoga or Stretch Class"].gifUrl }
        ]
    },
    "Friday": {
        focus: "Upper Body Power & Conditioning",
        exercises: [
            { name: "Assisted Pull-Ups", sets: "4", reps: "8-10", rest: "90s", muscle: "Back", image: MASTER_EXERCISE_DATA["Assisted Pull-Ups"].image!, hint: 'assisted pullups', gifUrl: MASTER_EXERCISE_DATA["Assisted Pull-Ups"].gifUrl },
            { name: "Push-Ups", sets: "3", reps: "to failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Push-Ups"].image!, hint: 'push ups', gifUrl: MASTER_EXERCISE_DATA["Push-Ups"].gifUrl },
            { name: "Face Pulls", sets: "3", reps: "15", rest: "45s", muscle: "Shoulders", image: MASTER_EXERCISE_DATA["Face Pulls"].image!, hint: 'face pulls', gifUrl: MASTER_EXERCISE_DATA["Face Pulls"].gifUrl },
            { name: "Battle Ropes", sets: "5", reps: "30s work, 30s rest", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Battle Ropes"].image!, hint: 'battle ropes', gifUrl: MASTER_EXERCISE_DATA["Battle Ropes"].gifUrl }
        ]
    },
    "Saturday": {
        focus: "Skill Work & Mobility",
        exercises: [
            { name: "Shadow Batting", sets: "10", reps: "5 mins", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Shadow Batting"].image!, hint: 'shadow batting', gifUrl: MASTER_EXERCISE_DATA["Shadow Batting"].gifUrl },
            { name: "Hip Mobility Drills", sets: "1", reps: "10-15 min", rest: "N/A", muscle: "Hips", image: MASTER_EXERCISE_DATA["Hip Mobility Drills"].image!, hint: 'hip mobility', gifUrl: MASTER_EXERCISE_DATA["Hip Mobility Drills"].gifUrl },
            { name: "Reaction Ball or Wall Catch", sets: "5", reps: "1 min", rest: "45s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Reaction Ball or Wall Catch"].image!, hint: 'reaction ball', gifUrl: MASTER_EXERCISE_DATA["Reaction Ball or Wall Catch"].gifUrl },
        ]
    },
    "Sunday": {
        focus: "Rest",
        exercises: []
    }
};

export const CRICKET_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": {
        focus: "Full Body Strength",
        exercises: [
            { name: "Squats", sets: "4", reps: "15-20", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Squats"].image!, hint: 'squats', gifUrl: MASTER_EXERCISE_DATA["Squats"].gifUrl },
            { name: "Push-Ups", sets: "3", reps: "to failure", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Push-Ups"].image!, hint: 'push ups', gifUrl: MASTER_EXERCISE_DATA["Push-Ups"].gifUrl },
            { name: "Glute Bridges", sets: "4", reps: "20", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Glute Bridges"].image!, hint: 'glute bridges', gifUrl: MASTER_EXERCISE_DATA["Glute Bridges"].gifUrl },
            { name: "Plank", sets: "3", reps: "to failure", rest: "60s", muscle: "Core", image: MASTER_EXERCISE_DATA["Plank"].image!, hint: 'plank', gifUrl: MASTER_EXERCISE_DATA["Plank"].gifUrl },
            { name: "Burpees", sets: "3", reps: "10", rest: "90s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Burpees"].image!, hint: 'burpees', gifUrl: MASTER_EXERCISE_DATA["Burpees"].gifUrl }
        ]
    },
    "Tuesday": {
        focus: "Cardio & Core",
        exercises: [
            { name: "Jumping Jacks", sets: "5", reps: "45s work, 15s rest", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Jumping Jacks"].image!, hint: 'jumping jacks', gifUrl: MASTER_EXERCISE_DATA["Jumping Jacks"].gifUrl },
            { name: "Leg Raises", sets: "3", reps: "20", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Leg Raises"].image!, hint: 'leg raises', gifUrl: MASTER_EXERCISE_DATA["Leg Raises"].gifUrl },
            { name: "Bicycle Crunches", sets: "3", reps: "20 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Bicycle Crunches"].image!, hint: 'bicycle crunches', gifUrl: MASTER_EXERCISE_DATA["Bicycle Crunches"].gifUrl },
        ]
    },
    "Wednesday": {
        focus: "Lower Body & Agility",
        exercises: [
            { name: "Walking Lunges", sets: "4", reps: "15 each leg", rest: "60s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Walking Lunges"].image!, hint: 'walking lunges', gifUrl: MASTER_EXERCISE_DATA["Walking Lunges"].gifUrl },
            { name: "Side Shuffles", sets: "4", reps: "30s each way", rest: "45s", muscle: "Legs", image: MASTER_EXERCISE_DATA["Side Shuffles"].image!, hint: 'side shuffles', gifUrl: MASTER_EXERCISE_DATA["Side Shuffles"].gifUrl },
            { name: "Donkey Kicks", sets: "3", reps: "20 each leg", rest: "45s", muscle: "Glutes", image: MASTER_EXERCISE_DATA["Donkey Kicks"].image!, hint: 'donkey kicks', gifUrl: MASTER_EXERCISE_DATA["Donkey Kicks"].gifUrl },
        ]
    },
    "Thursday": {
        focus: "Rest or Light Activity",
        exercises: [
            { name: "Walking", sets: "1", reps: "30 min", rest: "N/A", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Walking"].image!, hint: 'walking', gifUrl: MASTER_EXERCISE_DATA["Walking"].gifUrl }
        ]
    },
    "Friday": {
        focus: "Upper Body & Rotational Power",
        exercises: [
            { name: "Incline Push-Ups", sets: "4", reps: "15-20", rest: "60s", muscle: "Chest", image: MASTER_EXERCISE_DATA["Incline Push-Ups"].image!, hint: 'incline pushups', gifUrl: MASTER_EXERCISE_DATA["Incline Push-Ups"].gifUrl },
            { name: "Towel Rows", sets: "4", reps: "15", rest: "60s", muscle: "Back", image: MASTER_EXERCISE_DATA["Towel Rows"].image!, hint: 'towel rows', gifUrl: MASTER_EXERCISE_DATA["Towel Rows"].gifUrl },
            { name: "Russian Twists (Bodyweight)", sets: "3", reps: "20 each side", rest: "45s", muscle: "Core", image: MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"].image!, hint: 'russian twists', gifUrl: MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"].gifUrl },
        ]
    },
    "Saturday": {
        focus: "Skill & Mobility",
        exercises: [
            { name: "Shadow Batting", sets: "10", reps: "5 mins", rest: "60s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Shadow Batting"].image!, hint: 'shadow batting', gifUrl: MASTER_EXERCISE_DATA["Shadow Batting"].gifUrl },
            { name: "Wall Ball Catch Drill", sets: "5", reps: "1 min", rest: "45s", muscle: "Full Body", image: MASTER_EXERCISE_DATA["Wall Ball Catch Drill"].image!, hint: 'wall ball', gifUrl: MASTER_EXERCISE_DATA["Wall Ball Catch Drill"].gifUrl },
            { name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A", muscle: "Hips", image: MASTER_EXERCISE_DATA["Hip Mobility Drills"].image!, hint: 'hip mobility', gifUrl: MASTER_EXERCISE_DATA["Hip Mobility Drills"].gifUrl },
        ]
    },
    "Sunday": {
        focus: "Rest",
        exercises: []
    }
};

export const BADMINTON_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const BADMINTON_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};
export const BADMINTON_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const BADMINTON_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};

export const BASKETBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const BASKETBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};
export const BASKETBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const BASKETBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};

export const FOOTBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const FOOTBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};
export const FOOTBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const FOOTBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};

export const TABLE_TENNIS_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const TABLE_TENNIS_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};
export const TABLE_TENNIS_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const TABLE_TENNIS_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};

export const VOLLEYBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const VOLLEYBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};
export const VOLLEYBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {};
export const VOLLEYBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {};

export const enum MuscleGroup {
  CORE = "Core",
  LEGS = "Legs",
  CHEST = "Chest",
  BACK = "Back",
  BICEPS = "Biceps",
  TRICEPS = "Triceps",
  SHOULDERS = "Shoulders",
  GLUTES = "Glutes",
  CALVES = "Calves",
  HAMSTRINGS = "Hamstrings",
  QUADS = "Quads",
  FOREARMS = "Forearms",
  FULL_BODY = "Full Body",
}

export const muscleGroups = [
    MuscleGroup.CORE,
    MuscleGroup.LEGS,
    MuscleGroup.CHEST,
    MuscleGroup.BACK,
    MuscleGroup.BICEPS,
    MuscleGroup.TRICEPS,
    MuscleGroup.SHOULDERS,
    MuscleGroup.GLUTES,
    MuscleGroup.CALVES,
    MuscleGroup.HAMSTRINGS,
    MuscleGroup.QUADS,
    MuscleGroup.FOREARMS,
    MuscleGroup.FULL_BODY
  ];

export const muscles = [
    'Traps',
    'Neck',
    'Hips',
    'Jaw',
    'Face',
    'Vocal Cords',
    'Diaphragm',
    "Shoulders, Back",
    "Neck",
    "Core, Pelvic Floor",
    "Hips, Glutes",
    "Glutes, Hamstrings, Quads",
    "Shoulders, Back",
    "Shoulders",
    "Cheeks",
    "Vocal Cords",
    "Lips, Tongue",
    "Diaphragm",
];
    
    

    
