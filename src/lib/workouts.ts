
export interface ExerciseDetails {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  sets?: string;
  reps?: string;
  rest?: string;
  gifUrl?: string;
}

export interface DayWorkout {
  focus: string;
  exercises: ExerciseDetails[];
}

export interface WorkoutSplit {
  [day: string]: DayWorkout;
}

const defaultExerciseProps = {
  type: "",
  muscle: "",
  equipment: "",
  difficulty: "",
  instructions: "",
  gifUrl: "",
};


export const MASTER_EXERCISE_DATA: { [key: string]: Partial<ExerciseDetails> } = {
    "Jumping Jacks": { type: 'cardio', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg' },
    "Wrist Roll": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg' },
    "Elbow Circles": { type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/hRXNZ1xg/Whats-App-Image-2025-07-03-at-00-03-02.jpg' },
    "Arm Circles": { type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg' },
    "Bar Hanging": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/Z6WFkXTN/Whats-App-Image-2025-07-02-at-23-58-36.jpg' },
    "Plank": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg' },
    "Quad Stretch": { type: 'flexibility', muscle: 'Quads', gifUrl: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg' },
    "Hamstring Stretch": { type: 'flexibility', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg' },
    "Chest Stretch": { type: 'flexibility', muscle: 'Chest', gifUrl: 'https://i.ibb.co/fYGrr0Fj/Whats-App-Image-2025-07-03-at-13-58-47-1.jpg' },
    "Shoulder Stretch": { type: 'flexibility', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/93CV7cS8/Whats-App-Image-2025-07-03-at-13-58-48-1.jpg' },
    "Triceps Stretch": { type: 'flexibility', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/G4D1MJjZ/Whats-App-Image-2025-07-03-at-13-58-47-2.jpg' },
    "Child's Pose": { type: 'flexibility', muscle: 'Back', gifUrl: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg' },
    "Bench Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg' },
    "Incline Bench Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg' },
    "Decline / Cable Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg' },
    "Seated Machine Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg' },
    "triceps pushdown": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Triceps Pushdown": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Overhead Extension (Cable or Dumbbell)": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg' },
    "Underhand triceps pushdown": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/SDbc5gcv/Whats-App-Image-2025-07-03-at-12-31-16.jpg' },
    "Lat Pulldowns": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg' },
    "Seated Cable Row": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Barbell Rows": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg' },
    "Dumbbell Curl": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg' },
    "Hammer Curl": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg' },
    "Chin-Ups (BONUS)": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg' },
    "Lateral Raises": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/XrFK5j6Y/Whats-App-Image-2025-07-03-at-16-00-53-1.jpg' },
    "Face Pulls": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg' },
    "Shrugs": { type: 'strength', muscle: 'Traps', gifUrl: 'https://i.ibb.co/7JSJPxXK/Whats-App-Image-2025-07-03-at-16-00-50.jpg' },
    "Barbell Back Squats": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Romanian Deadlifts": { type: 'strength', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/bpSJMbn/Whats-App-Image-2025-07-03-at-16-00-51-1.jpg' },
    "Dumbbell Walking Lunges": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Calf Raises": { type: 'strength', muscle: 'Calves', gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg' },
    "Planks (BONUS)": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg' },
    "Cable Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg' },
    "Overhead Extension": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg' },
    "Tricep Pushdowns": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Russian Twists": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/xSXDQC20/Whats-App-Image-2025-07-03-at-16-10-31-1.jpg' },
    "Hanging Leg Raises": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/xR5JGJK/Whats-App-Image-2025-07-03-at-16-11-55.jpg' },
    "Incline Dumbbell Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/cK0yY5bV/Whats-App-Image-2025-07-03-at-16-15-47.jpg' },
    "Reverse Curls": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/5h7c98Bt/Whats-App-Image-2025-07-03-at-16-15-48.jpg' },
    "Leg Extension": { type: 'strength', muscle: 'Quads', gifUrl: 'https://i.ibb.co/BKL3cFsx/Whats-App-Image-2025-07-03-at-16-21-32-2.jpg' },
    "Leg Press": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/dJWfvdxG/Whats-App-Image-2025-07-03-at-16-21-32-1.jpg' },
    "Reverse Crunches": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/Mxzwj8qK/Whats-App-Image-2025-07-03-at-16-21-30-2.jpg' },
    "Plank Side Holds": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/zHDgB2gG/Whats-App-Image-2025-07-03-at-16-21-30-1.jpg' },
    "Incline Walk": { type: 'cardio', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/Xr1DG70z/Whats-App-Image-2025-07-03-at-16-21-30.jpg' },
    "Stretching / Foam rolling": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Optional: Yoga class": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Incline Push-Ups": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/CpGNvnrD/Whats-App-Image-2025-07-04-at-00-11-52.jpg' },
    "Diamond Push-Ups": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/fVbL4CzR/Whats-App-Image-2025-07-04-at-00-11-51-1.jpg' },
    "Chair Dips": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg' },
    "Triceps Dips": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg' },
    "Close-Grip Push-Ups": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/tMfwHjRG/Whats-App-Image-2025-07-04-at-00-11-50.jpg' },
    "Overhead Triceps Extensions": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/N6jhFqDG/Whats-App-Image-2025-07-04-at-00-23-31.jpg' },
    "Superman Hold": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Towel Rows": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/WWDNXwwW/Whats-App-Image-2025-07-04-at-00-30-31.jpg' },
    "Reverse Snow Angels": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/67xPNLRS/Whats-App-Image-2025-07-04-at-00-30-31-1.jpg' },
    "Biceps Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg' },
    "Chin-Ups": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg' },
    "Squats": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Lunges": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Wall Sit": { type: 'strength', muscle: 'Quads', gifUrl: 'https://i.ibb.co/vvHxBPm6/Whats-App-Image-2025-07-04-at-01-01-38.jpg' },
    "Pike Push-ups": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/pBYjvDDB/Whats-App-Image-2025-07-04-at-00-50-56.jpg' },
    "Leg Raises": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/p6jkkjXD/Whats-App-Image-2025-07-03-at-16-10-31.jpg' },
    "Superman Pulls": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Isometric Hold": { type: 'strength', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Wrist Curls": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/mC49v0fJ/Whats-App-Image-2025-07-04-at-01-01-37-1.jpg' },
    "Forearm Squeeze": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/RTb9xfTS/Whats-App-Image-2025-07-04-at-01-02-19.jpg' },
    "Jump Squats": { type: 'plyometrics', muscle: 'Legs', gifUrl: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg' },
    "Walking Lunges": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Plank to Push-Up": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/LwPZSSd/Whats-App-Image-2025-07-04-at-00-46-07.jpg' },
    "Heel Touches": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/DDBfhrN9/Whats-App-Image-2025-07-04-at-00-46-07-1.jpg' },
    "Light Yoga": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Stretching": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/mpNwFbg/Whats-App-Image-2025-07-04-at-00-11-52-1.jpg' },
    "20-30 min walk": { type: 'cardio', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/Jj676tFt/Whats-App-Image-2025-07-04-at-01-06-44.jpg' },
    "Incline Chest Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg' },
    "Chest Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg' },
    "Overhead DB Triceps Extension": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/fVBpV0rm/Whats-App-Image-2025-07-04-at-01-14-03.jpg' },
    "Lat Pulldown": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg' },
    "Seated Row": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Assisted Pull-Ups": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/9kDwhDf9/Whats-App-Image-2025-07-03-at-12-26-30.jpg' },
    "Dumbbell Bicep Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg' },
    "Cable Bicep Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/5g9SsNy4/Whats-App-Image-2025-07-04-at-01-15-54.jpg' },
    "Smith Squats": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/pj4JJ6F0/Whats-App-Image-2025-07-04-at-01-14-02-2.jpg' },
    "Flat DB Bench": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/PzPn1krF/Whats-App-Image-2025-07-03-at-16-08-20.jpg' },
    "Skull Crushers": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/Jjwkx5mN/Whats-App-Image-2025-07-04-at-01-14-02-1.jpg' },
    "Plank Hold": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg' },
    "Cable Oblique Twists": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/1YgzSh0f/Whats-App-Image-2025-07-04-at-00-46-06.jpg' },
    "T-Bar Rows": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/Xk7sWWfN/Whats-App-Image-2025-07-04-at-01-14-02.jpg' },
    "Wide Lat Pulldown": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg' },
    "Concentration Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/HDVZMPrL/Whats-App-Image-2025-07-04-at-01-27-45.jpg' },
    "Wrist Curls & Ext": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/8D4Gwmpg/Whats-App-Image-2025-07-04-at-01-27-44-1.jpg' },
    "Hip Thrusts": { type: 'strength', muscle: 'Glutes', gifUrl: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg' },
    "Bulgarian Split Squats": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/RfXtscD/Whats-App-Image-2025-07-04-at-01-27-44-2.jpg' },
    "Leg Curls": { type: 'strength', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/8nZBdF2F/Whats-App-Image-2025-07-04-at-01-27-43.jpg' },
    "Arnold Press": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/xSZ3hvGJ/Whats-App-Image-2025-07-04-at-01-27-43-1.jpg' },
    "Front Raises": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/ymFP6jxM/Whats-App-Image-2025-07-04-at-01-27-44.jpg' },
    "Cable Crunch + Twists": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/bjPCJH2J/Whats-App-Image-2025-07-04-at-01-27-42-1.jpg' },
    "Stretch / Foam Roll": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Yoga (Optional)": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Knee Push-Ups": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/LdMXZT9P/Whats-App-Image-2025-07-04-at-01-27-42-2.jpg' },
    "Wall Push-Ups": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/SwvXMJNX/Whats-App-Image-2025-07-04-at-01-27-42.jpg' },
    "Triceps Kickbacks": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/jkkHz5db/Whats-App-Image-2025-07-04-at-01-27-41-1.jpg' },
    "Superwoman Hold": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/fZmXBhb/Whats-App-Image-2025-07-04-at-00-30-30.jpg' },
    "Snow Angels": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/67xPNLRS/Whats-App-Image-2025-07-04-at-00-30-31-1.jpg' },
    "Wall Angels": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/W4cm1QDC/Whats-App-Image-2025-07-04-at-01-27-40.jpg' },
    "Side-Lying Leg Raises": { type: 'strength', muscle: 'Glutes', gifUrl: 'https://i.ibb.co/5WxH8vXQ/Whats-App-Image-2025-07-04-at-01-27-41.jpg' },
    "Donkey Kicks": { type: 'strength', muscle: 'Glutes', gifUrl: 'https://i.ibb.co/TD90Nxym/Whats-App-Image-2025-07-04-at-11-22-44.jpg' },
    "Sumo Squats": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/7tNpVLWf/Whats-App-Image-2025-07-08-at-00-38-55-1.jpg' },
    "Step-Ups": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/xKxZwJJF/Whats-App-Image-2025-07-04-at-11-17-56-1.jpg' },
    "Bird Dog": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/JRHQZBgd/Whats-App-Image-2025-07-04-at-11-17-59.jpg' },
    "Active Recovery": { type: 'flexibility', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/RkBjkBKk/Whats-App-Image-2025-07-04-at-11-17-58-2.jpg' },
    "Walk 20-30 mins": { type: 'cardio', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/ZjYgP7q/Whats-App-Image-2025-07-04-at-11-21-18.jpg' },
    "Flat Barbell Bench Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg' },
    "Incline Dumbbell Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/99Vx8WnL/Whats-App-Image-2025-07-04-at-11-17-56.jpg' },
    "Decline Bench Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/jvV98wSb/Whats-App-Image-2025-07-04-at-11-17-58-1.jpg' },
    "Cable Crossover": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg' },
    "Chest Press Machine": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/v6XWYbZq/Whats-App-Image-2025-07-04-at-11-17-55.jpg' },
    "Dumbbell Pullover": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/7J7stSff/Whats-App-Image-2025-07-04-at-11-17-58.jpg' },
    "Wide Arm Push-Ups": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/GvRKj35Y/Whats-App-Image-2025-07-04-at-11-17-57.jpg' },
    "Chest Dips (Chair)": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/3yhVfG9q/Whats-App-Image-2025-07-08-at-00-38-54.jpg' },
    "Explosive Push-Ups": { type: 'plyometrics', muscle: 'Chest', gifUrl: 'https://i.ibb.co/399WH0XR/Whats-App-Image-2025-07-08-at-00-38-55-2.jpg' },
    "Incline Chest Press (Machine or DB)": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/99Vx8WnL/Whats-App-Image-2025-07-04-at-11-17-56.jpg' },
    "Pec Deck Machine": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/S7yvJQVD/Whats-App-Image-2025-07-08-at-00-38-56.jpg' },
    "Flat Dumbbell Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg' },
    "Incline Cable Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/jvNqZn2f/Whats-App-Image-2025-07-08-at-00-38-55.jpg' },
    "Chest Squeeze (with Towel)": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/1tWtV8BM/Whats-App-Image-2025-07-08-at-00-38-57.jpg' },
    "Deadlifts": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/Xr92tBGB/Whats-App-Image-2025-07-08-at-00-38-57-1.jpg' },
    "Pull-Ups": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/Y7CB82ds/Whats-App-Image-2025-07-08-at-00-38-57-2.jpg' },
    "Inverted Rows (using table)": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/rR13k6p3/Whats-App-Image-2025-07-08-at-00-38-58.jpg' },
    "Prone Cobra": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/LXfTHS7B/Whats-App-Image-2025-07-08-at-00-38-58-1.jpg' },
    "Single Arm Dumbbell Row": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/9k6mj2vY/Whats-App-Image-2025-07-08-at-00-38-58-2.jpg' },
    "Back Extensions (Hyperextensions)": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/8gjvYf0g/Whats-App-Image-2025-07-08-at-00-52-17.jpg' },
    "Bent Over Dumbbell Reverse Flys": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/9H0L6dCw/Whats-App-Image-2025-07-08-at-00-55-09.jpg' },
    "Prone Arm Lifts (Y-T-W)": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/FLYzjRMp/Whats-App-Image-2025-07-08-at-00-38-59-1.jpg' },
    "Cat-Cow Stretch": { type: 'flexibility', muscle: 'Back', gifUrl: 'https://i.ibb.co/prz247Qc/Whats-App-Image-2025-07-08-at-00-38-59.jpg' },
    "Overhead Cable Extension": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg' },
    "Overhead Triceps Extensions (Backpack/Weight)": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/jPbgRD1J/Whats-App-Image-2025-07-08-at-12-33-41-1.jpg' },
    "Hammer Curls (Water Bottles/Dumbbells)": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg' },
    "Wrist Squeezes (Towel/Stress Ball)": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/W4NFD4Kq/Whats-App-Image-2025-07-08-at-12-33-40-3.jpg' },
    "Cable Triceps Pushdowns": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Incline Hammer Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/qXCR6Hq/Whats-App-Image-2025-07-08-at-12-33-41.jpg' },
    "Overhead Water Bottle Extensions": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/0jXXd3Zm/Whats-App-Image-2025-07-08-at-12-33-40-2.jpg' },
    "Hammer Curls (Water Bottles)": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/jZgfBGV7/Whats-App-Image-2025-07-08-at-12-33-40-1.jpg' },
    "Reverse Band Curls": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/B2zq7cDd/Whats-App-Image-2025-07-08-at-12-33-39-1.jpg' },
    "Roman Chair Sit-Ups": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/dws8NYjZ/Whats-App-Image-2025-07-08-at-12-33-39.jpg' },
    "Weighted Russian Twists": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/8L4WJjh4/Whats-App-Image-2025-07-08-at-12-33-38-1.jpg' },
    "Decline Crunch": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/LhnG5tTv/Whats-App-Image-2025-07-08-at-12-33-38.jpg' },
    "Hanging Knee Tucks": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/bRbTWhr6/Whats-App-Image-2025-07-08-at-12-33-37.jpg' },
    "Bicycle Crunches": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/XfB6z3zn/Whats-App-Image-2025-07-08-at-12-33-36-1.jpg' },
    "Russian Twists (Bodyweight)": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/NgC5Y270/Whats-App-Image-2025-07-08-at-13-55-50.jpg' },
    "Side Plank (Both Sides)": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/CKrM0cZQ/Whats-App-Image-2025-07-08-at-12-33-36.jpg' },
    "Mountain Climbers": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/5hyRj49s/Whats-App-Image-2025-07-08-at-12-33-35.jpg' },
    "Cable Rope Crunch": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/bjPCJH2J/Whats-App-Image-2025-07-04-at-01-27-42-1.jpg' },
    "Seated Ab Machine Crunch": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/bgQ7dKMG/Whats-App-Image-2025-07-08-at-12-33-33.jpg' },
    "Decline Sit-Ups": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/LhnG5tTv/Whats-App-Image-2025-07-08-at-12-33-38.jpg' },
    "Stability Ball Pass": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/qM4bJ2bz/Whats-App-Image-2025-07-08-at-12-33-31.jpg' },
    "Flutter Kicks": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/N6fzd9Nq/Whats-App-Image-2025-07-08-at-12-33-30.jpg' },
    "Side Plank Hip Dips": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/ccQ8Jdyh/Whats-App-Image-2025-07-08-at-12-33-29-1.jpg' },
    "Face Pulls (Cable or Bands)": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg' },
    "Lateral Arm Circles (Small + Big)": { type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg' },
    "Elevated Pike Hold": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/NgcrMYfw/Whats-App-Image-2025-07-08-at-12-33-29.jpg' },
    "Wall Walks": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/67nP5X0W/Whats-App-Image-2025-07-08-at-12-33-28-1.jpg' },
    "Lateral Arm Raises (Using Water Bottles/Bands)": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/YF9BhmGT/Whats-App-Image-2025-07-08-at-12-33-28.jpg' },
    "Rear Delt Pulses (Bodyweight or Light Weights)": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/99h3WjHV/Whats-App-Image-2025-07-08-at-13-55-53.jpg' },
    "Front Raises (Bottles/Bands)": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/nWQ6vqm/Whats-App-Image-2025-07-08-at-13-55-56.jpg' },
    "Leg Curl Machine": { type: 'strength', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/60022232/Whats-App-Image-2025-07-08-at-14-05-02.jpg' },
    "Single-Leg Calf Raises": { type: 'strength', muscle: 'Calves', gifUrl: 'https://i.ibb.co/Dfx7KZCX/Whats-App-Image-2025-07-08-at-13-55-55.jpg' },
    "Cable Kickbacks": { type: 'strength', muscle: 'Glutes', gifUrl: 'https://i.ibb.co/dwrt0hm7/Whats-App-Image-2025-07-08-at-13-55-54.jpg' },
    "Seated Calf Raises": { type: 'strength', muscle: 'Calves', gifUrl: 'https://i.ibb.co/DPdFPhzP/Whats-App-Image-2025-07-08-at-13-55-51-1.jpg' },
    "Glute Bridge March": { type: 'strength', muscle: 'Glutes', gifUrl: 'https://i.ibb.co/wZdy7TyW/Whats-App-Image-2025-07-08-at-13-55-51.jpg' },
    "Jawline Sharper (Massage Along Jaw)": { muscle: 'Jaw', gifUrl: 'https://i.ibb.co/1YP4s5K1/Whats-App-Image-2025-07-08-at-13-55-49.jpg' },
    'Vowel Mouth Stretch ("O"-"E")': { muscle: 'Face', gifUrl: 'https://i.ibb.co/Vpwgk2zR/Whats-App-Image-2025-07-08-at-13-55-46.jpg' },
    "Lion's Breath": { muscle: 'Face', gifUrl: 'https://i.ibb.co/spj68dzS/Whats-App-Image-2025-07-08-at-13-55-47.jpg' },
    "Chin Tuck": { muscle: 'Neck', gifUrl: 'https://i.ibb.co/tPp8qBmB/Whats-App-Image-2025-07-08-at-13-55-46-1.jpg' },
    "Jaw Unlocker": { muscle: 'Jaw', gifUrl: 'https://i.ibb.co/5hVXx63z/Whats-App-Image-2025-07-08-at-13-55-45-1.jpg' },
    "Cheek & Jawline Lifter": { muscle: 'Cheeks', gifUrl: 'https://i.ibb.co/ymsZN99p/Whats-App-Image-2025-07-08-at-13-55-45.jpg' },
    'Kiss the Ceiling / "Whistler"': { muscle: 'Neck', gifUrl: 'https://i.ibb.co/GfSzxmgF/Whats-App-Image-2025-07-08-at-14-49-33-1.jpg' },
    "Lip Trills": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/rG6h1bZ6/Whats-App-Image-2025-07-08-at-14-49-33.jpg' },
    "Humming Warm-Up": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/DfxL9gdx/Whats-App-Image-2025-07-08-at-18-34-16.jpg' },
    "Sirens (Low to High Pitch Glide)": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/rKKpRQvf/Whats-App-Image-2025-07-08-at-14-49-32.jpg' },
    "Sustain Note (Deep Chest Voice)": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/MyPYMLS7/Whats-App-Image-2025-07-09-at-12-40-49-1.jpg' },
    "Consonant Articulation (P-T-K-B-D-G)": { muscle: 'Lips, Tongue', gifUrl: 'https://i.ibb.co/B5kY1sJK/Whats-App-Image-2025-07-09-at-12-40-49.jpg' },
    "Breath Control (Inhale 4s – Hold – Exhale 8s)": { muscle: 'Diaphragm', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Deep 'Ahh' Vowel Projection": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/60TjkX1G/Whats-App-Image-2025-07-09-at-12-59-24-1.jpg' },
    "Lip Bubbles (Trills with Sound)": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/B23YBjcS/Whats-App-Image-2025-07-09-at-12-59-24.jpg' },
    "Humming Glide (Nasal Resonance)": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/8gd4SbVH/Whats-App-Image-2025-07-09-at-12-48-22.jpg' },
    "Octave Sirens (Smooth Pitch Slide)": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/sd0rhPJm/Whats-App-Image-2025-07-09-at-12-40-50.jpg' },
    "Sustain 'Ee' / 'Oo' Notes": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/whDd72FD/Whats-App-Image-2025-07-09-at-12-40-51-1.jpg' },
    "Vowel Chains (AEIOU transitions)": { muscle: 'Lips, Tongue', gifUrl: 'https://i.ibb.co/Xf0VjGpG/Whats-App-Image-2025-07-09-at-12-40-51.jpg' },
    "Breath Support Drill (4-4-8 breathing)": { muscle: 'Diaphragm', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Vocal Stretch (Soft Yawns + 'Haa')": { muscle: 'Vocal Cords', gifUrl: 'https://i.ibb.co/kszvM7Nt/Whats-App-Image-2025-07-09-at-12-40-50-1.jpg' },
    "Wall Slides": { muscle: 'Shoulders, Back', gifUrl: 'https://i.ibb.co/bMYB9BjD/Whats-App-Image-2025-07-08-at-14-38-25.jpg' },
    "Glute Kickbacks (Bodyweight or Band)": { muscle: 'Glutes', gifUrl: 'https://i.ibb.co/jvgdkR5g/Whats-App-Image-2025-07-08-at-14-38-25-1.jpg' },
    "Reverse Snow Angels (on floor)": { muscle: 'Back', gifUrl: 'https://i.ibb.co/b5SVVGTh/Whats-App-Image-2025-07-08-at-14-38-26.jpg' },
    "Seated Chin Tucks": { muscle: 'Neck', gifUrl: 'https://i.ibb.co/JjnwYmjr/Whats-App-Image-2025-07-08-at-14-38-26-1.jpg' },
    "Child’s Pose with Reach": { muscle: 'Back, Shoulders', gifUrl: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg' },
    "Butterfly Stretch": { muscle: 'Hips', gifUrl: 'https://i.ibb.co/gbrmsCqZ/Whats-App-Image-2025-07-08-at-14-38-26-2.jpg' },
    "Cable Pull-Throughs": { muscle: 'Glutes, Hamstrings', gifUrl: 'https://i.ibb.co/gMKz8FmX/Whats-App-Image-2025-07-08-at-14-38-27.jpg' },
    "Barbell Hip Thrusts": { muscle: 'Glutes', gifUrl: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg' },
    "Kettlebell Swings": { muscle: 'Glutes, Hamstrings', gifUrl: 'https://i.ibb.co/NgDtX0C8/Whats-App-Image-2025-07-08-at-14-38-27-1.jpg' },
    "Standing Cable Hip Flexion": { muscle: 'Hips', gifUrl: 'https://i.ibb.co/QgdQTxY/Whats-App-Image-2025-07-08-at-14-38-27-2.jpg' },
    "Controlled Box Jumps": { muscle: 'Legs', gifUrl: 'https://i.ibb.co/HpKMB3pL/Whats-App-Image-2025-07-08-at-14-38-28.jpg' },
    "Bodyweight Glute Bridges": { muscle: 'Glutes', gifUrl: 'https://i.ibb.co/sdtdhVxd/Whats-App-Image-2025-07-08-at-14-38-28-1.jpg' },
    "Pelvic Tilts": { muscle: 'Core, Pelvic Floor', gifUrl: 'https://i.ibb.co/tMYtLwjk/Whats-App-Image-2025-07-08-at-14-38-28-2.jpg' },
    "Sumo Deadlifts": { muscle: 'Glutes, Hamstrings, Quads', gifUrl: 'https://i.ibb.co/PvnNpwqV/Whats-App-Image-2025-07-08-at-16-51-05-1.jpg' },
    "Cable Abductions": { muscle: 'Hips, Glutes', gifUrl: 'https://i.ibb.co/V0d4cQcf/Whats-App-Image-2025-07-08-at-16-51-05.jpg' },
    "Weighted Glute Bridges": { muscle: 'Glutes', gifUrl: 'https://i.ibb.co/Qg3WGqL/Whats-App-Image-2025-07-03-at-16-21-32.jpg' },
    "Stability Ball Plank": { muscle: 'Core', gifUrl: 'https://i.ibb.co/spnSW8Rx/Whats-App-Image-2025-07-08-at-16-51-04-1.jpg' },
    "Fire Hydrants": { muscle: 'Hips, Glutes', gifUrl: 'https://i.ibb.co/8GkMK00/Whats-App-Image-2025-07-08-at-16-51-04.jpg' },
    "High Knees": { muscle: 'Legs', type: 'cardio', gifUrl: 'https://i.ibb.co/Q4GGNQZ/Whats-App-Image-2025-07-08-at-16-51-03-2.jpg' },
    "Skater Hops": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/vx5dsg9b/Whats-App-Image-2025-07-08-at-16-51-03.jpg' },
    "Fast Feet": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/0VrL3Zmj/Whats-App-Image-2025-07-08-at-16-51-02.jpg' },
    "Hip Mobility": { muscle: 'Hips', type: 'flexibility', gifUrl: 'https://i.ibb.co/wZSMS7Fy/Whats-App-Image-2025-07-09-at-02-35-04-2.jpg' },
    "Shadow Batting (No Bat)": { muscle: 'Full Body', type: 'skill', gifUrl: 'https://i.ibb.co/pjNcXLk6/Whats-App-Image-2025-07-08-at-16-50-57.jpg' },
    "Sprint Drills": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/TMVntGmK/Whats-App-Image-2025-07-08-at-16-50-56.jpg' },
    "Side-to-Side Bounds": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/7t1Ft2x6/Whats-App-Image-2025-07-08-at-16-51-01.jpg' },
    "Reaction Ball or Wall Catch": { muscle: 'Full Body', type: 'coordination', gifUrl: 'https://i.ibb.co/JRV5JSC7/Whats-App-Image-2025-07-08-at-16-50-59.jpg' },
    "Yoga Flow": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Breathing Work": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Box Jumps": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/HpKMB3pL/Whats-App-Image-2025-07-08-at-14-38-28.jpg' },
    "Medicine Ball Slams": { muscle: 'Full Body', type: 'power', gifUrl: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg' },
    "Treadmill Sprints (Interval)": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Full-Body Dynamic Stretch": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Resistance Band Mobility": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/20G3MWmB/Whats-App-Image-2025-07-09-at-10-45-18-1.jpg' },
    "Incline Walk or Cycling": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/Xr1DG70z/Whats-App-Image-2025-07-03-at-16-21-30.jpg' },
    "Cool Down Stretch": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Shadow Batting": { muscle: 'Full Body', type: 'skill', gifUrl: 'https://i.ibb.co/pjNcXLk6/Whats-App-Image-2025-07-08-at-16-50-57.jpg' },
    "Wall Sprints": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/F4TNMkDg/Whats-App-Image-2025-07-08-at-17-24-17-1.jpg' },
    "Jog in Place": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/zT0bDP08/Whats-App-Image-2025-07-08-at-17-24-17.jpg' },
    "Foam Rolling (or Stretch Flow)": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Squat to Press (w/ bottles)": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/d0LYPFrm/Whats-App-Image-2025-07-08-at-17-24-15.jpg' },
    "Breathing / Mobility Flow": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Ladder Drills": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/VpH7trNv/Whats-App-Image-2025-07-08-at-17-24-14.jpg' },
    "Ab Crunch Machine": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/bgQ7dKMG/Whats-App-Image-2025-07-08-at-12-33-33.jpg' },
    "Bike Intervals": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/S43WX6vN/Whats-App-Image-2025-07-08-at-17-24-13.jpg' },
    "Neck & Shoulder Rolls": { muscle: 'Shoulders', type: 'flexibility', gifUrl: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg' },
    "Walking or Rowing Machine": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg' },
    "Rowing Machine": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/HfYFHM3R/Whats-App-Image-2025-07-08-at-17-24-12.jpg' },
    "Yoga or Stretch Class": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Split Lunges": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/sp9JjZ9Z/Whats-App-Image-2025-07-09-at-01-06-46.jpg' },
    "Ankle Rolls": { muscle: 'Ankles', type: 'flexibility', gifUrl: 'https://i.ibb.co/Pvh6gq2w/Whats-App-Image-2025-07-09-at-01-06-45-1.jpg' },
    "Lateral Quick Steps": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Jump Rope": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/hxhMRZ02/Whats-App-Image-2025-07-09-at-01-06-44-1.jpg' },
    "Wall Ball Catch Drill": { muscle: 'Full Body', type: 'coordination', gifUrl: 'https://i.ibb.co/N6Rd48zG/Whats-App-Image-2025-07-09-at-01-06-44.jpg' },
    "Jump Lunges": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/39N7mFKV/Whats-App-Image-2025-07-09-at-01-22-26.jpg' },
    "Static Stretching": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/BH5PHX74/Whats-App-Image-2025-07-09-at-01-22-25.jpg' },
    "Brisk Walking": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "BOSU Ball Balance Hold": { muscle: 'Full Body', type: 'balance', gifUrl: 'https://i.ibb.co/mrBSmqSF/Whats-App-Image-2025-07-09-at-01-06-43.jpg' },
    "Ab Roller": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/DHyfpGKy/Whats-App-Image-2025-07-09-at-01-06-42-1.jpg' },
    "Agility Ladder Drills": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/VpH7trNv/Whats-App-Image-2025-07-08-at-17-24-14.jpg' },
    "Cone Sprints (Short Distance)": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/YT8fyxvx/Whats-App-Image-2025-07-09-at-01-06-42.jpg' },
    "Cable Lateral Steps": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/pBTtcxhT/Whats-App-Image-2025-07-09-at-01-51-50.jpg' },
    "Core Twists with Medicine Ball": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/xKty0kqX/Whats-App-Image-2025-07-09-at-01-06-41-1.jpg' },
    "Barbell Push Press": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q3P4xxdk/Whats-App-Image-2025-07-09-at-01-35-18.jpg' },
    "Assault Bike Intervals": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/LhYYSMDJ/Whats-App-Image-2025-07-09-at-01-06-41.jpg' },
    "Rower (Cardio)": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/hxR5FKM4/Whats-App-Image-2025-07-09-at-01-35-58.jpg' },
    "Glute Activation (Bands)": { muscle: 'Glutes', type: 'strength', gifUrl: 'https://i.ibb.co/CsT4SQh8/Whats-App-Image-2025-07-09-at-01-36-20.jpg' },
    "Shadow Footwork": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg' },
    "Squat to Jump": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg' },
    "Stretching Cooldown": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Dead Bug": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/n85N42j6/Whats-App-Image-2025-07-09-at-01-55-01.jpg' },
    "Toe Touches": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/VK5wNJ8/Whats-App-Image-2025-07-09-at-01-55-03.jpg' },
    "Tuck Jumps": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/LdhB9Tcm/Whats-App-Image-2025-07-09-at-01-55-02-1.jpg' },
    "Broad Jumps": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/xKh1n9Sb/Whats-App-Image-2025-07-09-at-01-55-02.jpg' },
    "Lateral Bounds": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Quick Step Drills": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/Zz2Qt4g6/Whats-App-Image-2025-07-09-at-01-58-25.jpg' },
    "Shadow Reaction Footwork": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg' },
    "Yoga or Mobility Flow": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Neck & Ankle Mobility": { muscle: 'Ankles', type: 'flexibility', gifUrl: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg' },
    "Light Elliptical / Walk": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Full Rest or Light Walk": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Walking or Swimming": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/CKz7bMLM/Whats-App-Image-2025-07-09-at-02-06-33.jpg' },
    "Stretch or Yoga": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Side Shuffles": { muscle: 'Legs', type: 'agility', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Skater Jumps": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/vx5dsg9b/Whats-App-Image-2025-07-08-at-16-51-03.jpg' },
    "Lateral Cone Hops": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/dHQ5KZ4/Whats-App-Image-2025-07-09-at-02-11-24.jpg' },
    "Farmer Carries (Dumbbells)": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/s9QHzsVQ/Whats-App-Image-2025-07-09-at-02-11-23.jpg' },
    "Dumbbell Snatch": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/3yGyhp1F/Whats-App-Image-2025-07-09-at-02-11-22-1.jpg' },
    "Tire Flips or Sled Push (if available)": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/0p66btKX/Whats-App-Image-2025-07-09-at-02-11-22.jpg' },
    "Resistance Band Shoulder Mobility": { muscle: 'Shoulders', type: 'flexibility', gifUrl: 'https://i.ibb.co/pvDbmSrH/Whats-App-Image-2025-07-08-at-17-24-18.jpg' },
    "Walking or Light Cycling": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "Light Cycling/ Walking": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "Dumbbell Floor Press (If available)": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/WNkLdC77/Whats-App-Image-2025-07-09-at-02-21-36-1.jpg' },
    "Split Jump Lunges": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/39N7mFKV/Whats-App-Image-2025-07-09-at-01-22-26.jpg' },
    "Shadow Dribbling": { muscle: 'Full Body', type: 'skill', gifUrl: 'https://i.ibb.co/F4zLFWdt/Whats-App-Image-2025-07-09-at-02-21-37.jpg' },
    "Wall Push Holds": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/0yZzp44n/Whats-App-Image-2025-07-09-at-02-21-38-1.jpg' },
    "Single-leg Reach": { muscle: 'Legs', type: 'balance', gifUrl: 'https://i.ibb.co/FkmRZZ71/Whats-App-Image-2025-07-09-at-02-53-39.jpg' },
    "Hip Mobility Flow": { muscle: 'Hips', type: 'flexibility', gifUrl: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg' },
    "Gentle Stretching": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Jog or Dance": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/3YQBCNvp/Whats-App-Image-2025-07-09-at-02-35-04-1.jpg' },
    "Deep Stretch Routine": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Yoga Flow for Athletes": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Foam Rolling Legs & Back": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/b5cch8xZ/Whats-App-Image-2025-07-09-at-23-56-42.jpg' },
    "Dynamic Hip Stretching": { muscle: 'Hips', type: 'flexibility', gifUrl: 'https://i.ibb.co/sdH0sVgn/Whats-App-Image-2025-07-08-at-17-24-10.jpg' },
    "Neck & Shoulder Release": { muscle: 'Shoulders', type: 'flexibility', gifUrl: 'https://i.ibb.co/S7nhWyVN/Whats-App-Image-2025-07-09-at-02-35-04.jpg' },
    "Guided Breathing / Stretch": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Towel External Rotations": { muscle: 'Shoulders', type: 'flexibility', gifUrl: 'https://i.ibb.co/fVKffQNp/Whats-App-Image-2025-07-09-at-02-35-03.jpg' },
    "Wall Calf Stretch": { muscle: 'Calves', type: 'flexibility', gifUrl: 'https://i.ibb.co/wNkLKpMC/Whats-App-Image-2025-07-09-at-02-35-02-1.jpg' },
    "Brisk Walking": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/vCPQ3pxD/Whats-App-Image-2025-07-09-at-02-35-02.jpg' },
    "Deadlifts (Conventional or Trap Bar)": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/PvnNpwqV/Whats-App-Image-2025-07-08-at-16-51-05-1.jpg' },
    "Power Cleans": { muscle: 'Full Body', type: 'power', gifUrl: 'https://i.ibb.co/nvR7M7D/Whats-App-Image-2025-07-09-at-02-35-01-1.jpg' },
    "Dumbbell Step-Ups": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/s9T84rjq/Whats-App-Image-2025-07-09-at-02-35-01.jpg' },
    "Ankle Mobility Drills": { muscle: 'Ankles', type: 'flexibility', gifUrl: 'https://i.ibb.co/Pvh6gq2w/Whats-App-Image-2025-07-09-at-01-06-45-1.jpg' },
    "Reverse Pec Deck or Rear Delt Flys": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/NdZbkrYw/Whats-App-Image-2025-07-09-at-02-53-43.jpg' },
    "External Rotator Band Pulls": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Pz0W9CRm/Whats-App-Image-2025-07-09-at-02-53-42-1.jpg' },
    "Scapular Push-Ups": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/jPJ3W79K/Whats-App-Image-2025-07-09-at-02-53-42.jpg' },
    "Elliptical or Light Jog": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/3YQBCNvp/Whats-App-Image-2025-07-09-at-02-35-04-1.jpg' },
    "Stretch & Breathing": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Wall Rows": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/hJcM7Zws/Whats-App-Image-2025-07-09-at-02-53-41-2.jpg' },
    "Side Lunges": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/5hrhJ4rk/Whats-App-Image-2025-07-09-at-02-53-41-1.jpg' },
    "Foot Fire Drill": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/wNVPddbF/Whats-App-Image-2025-07-09-at-02-53-41.jpg' },
    "Knee Rolls": { muscle: 'Core', type: 'flexibility', gifUrl: 'https://i.ibb.co/JRPTFJnC/Whats-App-Image-2025-07-09-at-02-53-40-2.jpg' },
    "Quick Ball Taps (Hand-Eye Coordination)": { muscle: 'Full Body', type: 'coordination', gifUrl: 'https://i.ibb.co/tMGWcNkF/Whats-App-Image-2025-07-09-at-02-53-40-1.jpg' },
    "Line Hops (Front/Back)": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/S442T7yG/Whats-App-Image-2025-07-09-at-02-53-40.jpg' },
    "Lateral Shuffle Drill": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Balance Reach": { muscle: 'Legs', type: 'balance', gifUrl: 'https://i.ibb.co/FkmRZZ71/Whats-App-Image-2025-07-09-at-02-53-39.jpg' },
    "Deep Breathing & Stretch": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Foam Roll Substitute (Tennis Ball)": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Breathing Meditation": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/4gKQRV9x/Whats-App-Image-2025-07-04-at-00-11-53.jpg' },
    "Breathing Exercise": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Forearm Rollers": { muscle: 'Forearms', type: 'strength', gifUrl: 'https://i.ibb.co/d0Yq0L1s/Whats-App-Image-2025-07-09-at-10-45-20-1.jpg' },
    "Reaction Ball Drill": { muscle: 'Full Body', type: 'coordination', gifUrl: 'https://i.ibb.co/fVRbczDQ/Whats-App-Image-2025-07-09-at-10-45-20.jpg' },
    "Side-to-Side Box Jumps": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/JjcQ2sLs/Whats-App-Image-2025-07-09-at-10-45-19-1.jpg' },
    "Balance Board Squats": { muscle: 'Legs', type: 'balance', gifUrl: 'https://i.ibb.co/gbp16p6K/Whats-App-Image-2025-07-09-at-10-45-42.jpg' },
    "Single-Leg Deadlifts": { muscle: 'Hamstrings', type: 'strength', gifUrl: 'https://i.ibb.co/Cszw4VFP/Whats-App-Image-2025-07-09-at-10-45-19.jpg' },
    "Lateral Band Walks": { muscle: 'Glutes', type: 'strength', gifUrl: 'https://i.ibb.co/20G3MWmB/Whats-App-Image-2025-07-09-at-10-45-18-1.jpg' },
    "Medicine Ball Twists": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/xKty0kqX/Whats-App-Image-2025-07-09-at-01-06-41-1.jpg' },
    "Swiss Ball Crunch": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/ZRQN3fmx/Whats-App-Image-2025-07-09-at-10-45-18.jpg' },
    "Wrist Roller": { muscle: 'Forearms', type: 'strength', gifUrl: 'https://i.ibb.co/d0Yq0L1s/Whats-App-Image-2025-07-09-at-10-45-20-1.jpg' },
    "Explosive Pull-ups": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/4w2fB48c/Whats-App-Image-2025-07-03-at-12-17-06.jpg' },
    "Straight Bar Dips": { muscle: 'Triceps', type: 'strength', gifUrl: 'https://i.ibb.co/0jrfrf5X/Whats-App-Image-2025-07-03-at-12-17-06-1.jpg' },
    "Negative Muscle-ups": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/SX1kdmvX/Whats-App-Image-2025-07-03-at-12-17-07.jpg' },
    "Banded Muscle-ups": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/9kDwhDf9/Whats-App-Image-2025-07-03-at-12-26-30.jpg' },
    "The Full Muscle-up": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/YFNT9VQZ/Whats-App-Image-2025-07-01-at-13-32-53.jpg' },
    "Pseudo Planche Push-ups": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/0btRhYp/Whats-App-Image-2025-07-09-at-10-56-24.jpg' },
    "Tuck Planche Hold": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/vCgVc4dc/Whats-App-Image-2025-07-09-at-10-56-23-2.jpg' },
    "Advanced Tuck Planche": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/PsPzmk7y/Whats-App-Image-2025-07-09-at-11-06-28.jpg' },
    "Straddle Planche": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/QF6rf7pm/Whats-App-Image-2025-07-09-at-10-56-23.jpg' },
    "Full Planche": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/x8XdCk8y/Whats-App-Image-2025-07-01-at-13-32-53.jpg' },
    "Tuck Front Lever Hold": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/sJXWpHsj/Whats-App-Image-2025-07-09-at-11-14-34.jpg' },
    "Advanced Tuck Front Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/0y0FKcGY/Whats-App-Image-2025-07-09-at-11-14-34-1.jpg' },
    "One-Leg Front Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/4ZFSDzj7/Whats-App-Image-2025-07-09-at-11-14-35.jpg' },
    "Straddle Front Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/Z6zwJdhf/Whats-App-Image-2025-07-09-at-11-17-32.jpg' },
    "Full Front Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/PvZCqRW9/Whats-App-Image-2025-07-01-at-13-32-43.jpg' },
    "Tuck Back Lever Hold": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/fV1dTqcW/Whats-App-Image-2025-07-09-at-11-25-59.jpg' },
    "Advanced Tuck Back Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/jZ1kcRvQ/Whats-App-Image-2025-07-09-at-11-25-59-2.jpg' },
    "One-Leg Back Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/v6HQ6bD1/Whats-App-Image-2025-07-09-at-11-25-59-1.jpg' },
    "Straddle Back Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/Tp4dQ4T/Whats-App-Image-2025-07-09-at-11-25-58.jpg' },
    "Full Back Lever": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/wZC9qP7R/Whats-App-Image-2025-07-01-at-13-32-43-1.jpg' },
    "Assisted Pistol Squats": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/fYw7Wxhx/Whats-App-Image-2025-07-09-at-11-39-51.jpg' },
    "Negative Pistol Squats": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/BbR5mmh/Whats-App-Image-2025-07-09-at-11-39-50-1.jpg' },
    "Pistol Squat to a Box/Bench": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/MkSJ4w1F/Whats-App-Image-2025-07-09-at-11-39-51-1.jpg' },
    "Counterweight Pistol Squats": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/gZPzLTZp/Whats-App-Image-2025-07-09-at-11-39-50.jpg' },
    "Full Pistol Squat": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/gMf2PcWB/Whats-App-Image-2025-07-01-at-13-32-51.jpg' },
    "Elevated Pike Push-ups": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/JFFYfTR5/Whats-App-Image-2025-07-09-at-11-58-57.jpg' },
    "Wall Handstand Hold": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/bgyhPnLm/Whats-App-Image-2025-07-09-at-11-58-58-2.jpg' },
    "Negative Handstand Push-ups": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/xS8b35nX/Whats-App-Image-2025-07-09-at-11-58-58-1.jpg' },
    "Partial Range of Motion HSPU": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Yd4Bw5jW/Whats-App-Image-2025-07-09-at-11-58-58.jpg' },
    "Wall Handstand Push-up": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/GQksT9Hd/Whats-App-Image-2025-07-01-at-13-32-51-1.jpg' },
    "L-Sit Hold": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/5hQNhyPs/Whats-App-Image-2025-07-09-at-12-04-19.jpg' },
    "Tuck V-Sit": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/zVLZ6Rpj/Whats-App-Image-2025-07-09-at-12-04-20-1.jpg' },
    "Bent-Knee V-Sit": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/YBsHPNPh/Whats-App-Image-2025-07-09-at-12-04-20.jpg' },
    "Single-Leg V-Sit Extensions": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/TMrmJZnR/Whats-App-Image-2025-07-09-at-12-04-21.jpg' },
    "Full V-Sit": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/bjyX0SMK/Whats-App-Image-2025-07-01-at-13-32-52.jpg' },
    "Straight arm Lat Pulldowns": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/tMhvBWfy/Whats-App-Image-2025-07-03-at-15-32-22-1.jpg' },
    "Ez Barbell Curl": { muscle: 'Biceps', type: 'strength', gifUrl: 'https://i.ibb.co/ndTWcyc/Whats-App-Image-2025-07-03-at-15-32-23-3.jpg' },
    "Barbell Curl": { muscle: 'Biceps', type: 'strength', gifUrl: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg' },
    "Barbell Curls": { muscle: 'Biceps', type: 'strength', gifUrl: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg' },
    "Bench Dips": { muscle: 'Triceps', type: 'strength', gifUrl: 'https://i.ibb.co/hFgYc7SD/Whats-App-Image-2025-07-04-at-01-01-39.jpg' },
    "Gua Sha or Facial Massage (Jawline)": { muscle: 'Jaw', gifUrl: 'https://i.ibb.co/VY6kCK63/Whats-App-Image-2025-07-08-at-13-55-44.jpg' },
    "Cable Woodchoppers": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/ZpJpcPCc/Whats-App-Image-2025-07-09-at-16-54-26-1.jpg' },
    "Sled Push": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/Y7LdNRNZ/Whats-App-Image-2025-07-09-at-23-45-30.jpg' },
    "Plank with Arm Reach": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/ZzrXdmtG/Whats-App-Image-2025-07-09-at-23-45-31.jpg' },
    "Plank Shoulder Taps": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/kVVdJdTK/Whats-App-Image-2025-07-09-at-16-54-26.jpg' },
    "Shadow Badminton": { muscle: 'Full Body', type: 'skill', gifUrl: 'https://i.ibb.co/ccfJytfV/Whats-App-Image-2025-07-09-at-01-06-39.jpg' },
    "Foam Rolling": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Walking": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fVk47RrS/Whats-App-Image-2025-07-08-at-17-24-18-1.jpg' },
    "Lateral Shuffle": { muscle: 'Legs', type: 'agility', gifUrl: 'https://i.ibb.co/9mYSthxZ/Whats-App-Image-2025-07-09-at-01-06-45.jpg' },
    "Dynamic Stretching": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/XrFKsD83/Whats-App-Image-2025-07-08-at-17-29-05.jpg' },
    "Battle Ropes": { muscle: 'Full Body', type: 'conditioning', gifUrl: 'https://i.ibb.co/QFQnqgSq/Whats-App-Image-2025-07-08-at-16-51-32.jpg' },
    "Wrist Circles": { muscle: 'Forearms', type: 'warmup', gifUrl: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg' },
    "Overhead Press": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Overhead Press (Barbell or Dumbbell)": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Triceps Rope Pushdown": { muscle: 'Triceps', type: 'strength', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Triceps Rope Pushdowns": { muscle: 'Triceps', type: 'strength', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Triceps Pushdowns (Rope)": { muscle: 'Triceps', type: 'strength', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg' },
    "Push-Up (Chest Focus)": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg' },
    "Push-Ups": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg' },
    "Wide Grip Push-Ups": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/Z6WkgWt6/Whats-App-Image-2025-07-11-at-03-21-17.jpg' },
    "Dumbbell Shoulder Press": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Dumbbell Bench Press": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg' },
    "Dumbbell Chest Press": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/7dcsTSMy/Whats-App-Image-2025-07-08-at-00-38-56-1.jpg' },
    "Standing Calf Raises": { muscle: 'Calves', type: 'strength', gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg' },
    "Goblet Squats": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/JWzdB4TF/Whats-App-Image-2025-07-11-at-03-18-37-1.jpg' },
    "Crunches": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/xSXDQC20/Whats-App-Image-2025-07-03-at-16-10-31-1.jpg' },
    "Resistance Band Curls": { muscle: 'Biceps', type: 'strength', gifUrl: 'https://i.ibb.co/k244BdtD/Whats-App-Image-2025-07-11-at-03-18-37.jpg' },
    "Glute Bridges": { muscle: 'Glutes', type: 'strength', gifUrl: 'https://i.ibb.co/sdtdhVxd/Whats-App-Image-2025-07-08-at-14-38-28-1.jpg' },
    "Shoulder Mobility": { muscle: 'Shoulders', type: 'flexibility', gifUrl: 'https://i.ibb.co/pvDbmSrH/Whats-App-Image-2025-07-08-at-17-24-18.jpg' },
    "Resistance Band Rows": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/vKthML3/Whats-App-Image-2025-07-04-at-01-01-39-1.jpg' },
    "Shoulder Press (Barbell or Dumbbell)": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Shoulder Press": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "DB Shoulder Press": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/Q7LZJTWP/Whats-App-Image-2025-07-03-at-16-00-54.jpg' },
    "Decline Push-Ups": { muscle: 'Chest', type: 'strength', gifUrl: 'https://i.ibb.co/KkndC0W/Whats-App-Image-2025-07-13-at-00-03-36.jpg' },
    "Lunges (Bodyweight)": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg' },
    "Side Plank (each side)": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/zHDgB2gG/Whats-App-Image-2025-07-03-at-16-21-30-1.jpg' },
    "Toe Taps": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/VK5wNJ8/Whats-App-Image-2025-07-09-at-01-55-03.jpg' },
    "V-Ups": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/bjyX0SMK/Whats-App-Image-2025-07-01-at-13-32-52.jpg' },
    "Sprint-in-Place": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/TMVntGmK/Whats-App-Image-2025-07-08-at-16-50-56.jpg' },
    "Cobra Stretch": { muscle: 'Back', type: 'flexibility', gifUrl: 'https://i.ibb.co/LXfTHS7B/Whats-App-Image-2025-07-08-at-00-38-58-1.jpg' },
    "Neck Rolls": { muscle: 'Neck', type: 'flexibility', gifUrl: 'https://i.ibb.co/Vc02yS6m/Whats-App-Image-2025-07-08-at-17-24-11-1.jpg' },
    "Forward Fold Hold": { muscle: 'Hamstrings', type: 'flexibility', gifUrl: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg' },
    "Wall-Sit to Jump": { muscle: 'Legs', type: 'plyometrics', gifUrl: 'https://i.ibb.co/Qjd6Mh4D/Whats-App-Image-2025-07-04-at-01-01-37.jpg' },
    "Bulgarian Split Squats (Chair)": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/RfXtscD/Whats-App-Image-2025-07-04-at-01-27-44-2.jpg' },
    "Single-Leg Glute Bridge": { muscle: 'Glutes', type: 'strength', gifUrl: 'https://i.ibb.co/wZdy7TyW/Whats-App-Image-2025-07-08-at-13-55-51.jpg' },
    "Duck Walks": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Squat Pulses": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Heel Raise Holds": { muscle: 'Calves', type: 'strength', gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg' },
    "Clap Push-Ups": { muscle: 'Chest', type: 'plyometrics', gifUrl: 'https://i.ibb.co/399WH0XR/Whats-App-Image-2025-07-08-at-00-38-55-2.jpg' },
    "Bear Crawls": { muscle: 'Full Body', type: 'strength', gifUrl: 'https://i.ibb.co/0yZzp44n/Whats-App-Image-2025-07-09-at-02-21-38-1.jpg' },
    "Star Jumps": { muscle: 'Full Body', type: 'plyometrics', gifUrl: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg' },
    "Shadow Ball Throws (mimic)": { muscle: 'Full Body', type: 'skill', gifUrl: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg' },
    "Side-to-Side Taps": { muscle: 'Full Body', type: 'agility', gifUrl: 'https://i.ibb.co/S442T7yG/Whats-App-Image-2025-07-09-at-02-53-40.jpg' },
    "Foam Rolling (or DIY)": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/d4P7nNvh/Whats-App-Image-2025-07-08-at-17-24-16-1.jpg' },
    "Hip Flexor Stretch": { muscle: 'Hips', type: 'flexibility', gifUrl: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg' },
    "Breathing Drills": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/3YyMVG2s/Whats-App-Image-2025-07-08-at-16-51-00.jpg' },
    "Medicine Ball Rotational Slams": { muscle: 'Core', type: 'power', gifUrl: 'https://i.ibb.co/G49pzj70/Whats-App-Image-2025-07-08-at-16-50-59-1.jpg' },
    "Plank with Shoulder Taps": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/kVVdJdTK/Whats-App-Image-2025-07-09-at-16-54-26.jpg' },
    "Russian Twists (Weighted)": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/8L4WJjh4/Whats-App-Image-2025-07-08-at-12-33-38-1.jpg' },
    "Cable Row": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Front Squats": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg' },
    "Leg Press Machine": { muscle: 'Legs', type: 'strength', gifUrl: 'https://i.ibb.co/dJWfvdxG/Whats-App-Image-2025-07-03-at-16-21-32-1.jpg' },
    "Hamstring Curls": { muscle: 'Hamstrings', type: 'strength', gifUrl: 'https://i.ibb.co/8nZBdF2F/Whats-App-Image-2025-07-04-at-01-27-43.jpg' },
    "One-Arm Cable Row": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Barbell Bicep Curls": { muscle: 'Biceps', type: 'strength', gifUrl: 'https://i.ibb.co/0RGq1nDr/Whats-App-Image-2025-07-09-at-16-54-27.jpg' },
    "Stability Ball Rollouts": { muscle: 'Core', type: 'strength', gifUrl: 'https://i.ibb.co/spnSW8Rx/Whats-App-Image-2025-07-08-at-16-51-04-1.jpg' },
    "Bent Over Rows": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg' },
    "Reverse Flys": { muscle: 'Shoulders', type: 'strength', gifUrl: 'https://i.ibb.co/9H0L6dCw/Whats-App-Image-2025-07-08-at-00-55-09.jpg' },
    "Seated Row Machine": { muscle: 'Back', type: 'strength', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg' },
    "Swimming / Cycling": { muscle: 'Full Body', type: 'cardio', gifUrl: 'https://i.ibb.co/fffXnjz/Whats-App-Image-2025-07-09-at-01-24-01.jpg' },
    "Deep Stretch + Breathe": { muscle: 'Full Body', type: 'flexibility', gifUrl: 'https://i.ibb.co/pvh5pQWq/Whats-App-Image-2025-07-08-at-17-24-11.jpg' },
    "Serving Practice": { type: 'skill', muscle: 'Full Body' },
    "Defensive Drills": { type: 'skill', muscle: 'Full Body' },
    "Spiking Practice": { type: 'skill', muscle: 'Full Body' },
    "Serving Drills": { type: 'skill', muscle: 'Full Body' },
    "Spiking Footwork": { type: 'skill', muscle: 'Legs' },
    "Defensive Shuffle": { type: 'skill', muscle: 'Legs' },
    "Dribble Sprints": { type: 'skill', muscle: 'Full Body' },
    "Shooting Drills": { type: 'skill', muscle: 'Full Body' },
    "Layup Drills": { type: 'skill', muscle: 'Full Body' },
    "Shooting Form Drills": { type: 'skill', muscle: 'Full Body' }
};

export const MALE_CHEST_GYM: DayWorkout = {
  focus: "Chest (Gym)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Flat Barbell Bench Press"], name: "Flat Barbell Bench Press", sets: "4", reps: "8-10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"], name: "Incline Dumbbell Press", sets: "4", reps: "10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline Bench Press"], name: "Decline Bench Press", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Crossover", sets: "3", reps: "12-15", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Press Machine"], name: "Chest Press Machine", sets: "3", reps: "10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Pullover"], name: "Dumbbell Pullover", sets: "3", reps: "12", rest: "60s" },
  ]
};

export const MALE_CHEST_HOME: DayWorkout = {
  focus: "Chest (Home)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Up (Chest Focus)"], name: "Push-Up (Chest Focus)", sets: "4", reps: "15-20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline Push-Ups"], name: "Decline Push-Ups", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wide Arm Push-Ups"], name: "Wide Arm Push-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Dips (Chair)"], name: "Chest Dips (Chair)", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Explosive Push-Ups"], name: "Explosive Push-Ups", sets: "2", reps: "10", rest: "60s" },
  ]
};

export const FEMALE_CHEST_GYM: DayWorkout = {
  focus: "Chest (Gym)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press (Machine or DB)"], name: "Incline Chest Press (Machine or DB)", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pec Deck Machine"], name: "Pec Deck Machine", sets: "3", reps: "12-15", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Flat Dumbbell Press"], name: "Flat Dumbbell Press", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Fly"], name: "Cable Fly", sets: "3", reps: "15", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Press Machine"], name: "Chest Press Machine", sets: "3", reps: "10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Cable Fly"], name: "Incline Cable Fly", sets: "3", reps: "12-15", rest: "45s" },
  ]
};

export const FEMALE_CHEST_HOME: DayWorkout = {
  focus: "Chest (Home)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Push-Ups"], name: "Wall Push-Ups", sets: "3", reps: "20", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups (Bench/Chair)"], name: "Incline Push-Ups (Bench/Chair)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Floor Press (If available)"], name: "Dumbbell Floor Press (If available)", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Squeeze (with Towel)"], name: "Chest Squeeze (with Towel)", sets: "3", reps: "15", rest: "45s" },
  ]
};

export const GENERAL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Bench Press"], name: "Incline Bench Press", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline / Cable Fly"], name: "Decline / Cable Fly", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Machine Fly"], name: "Seated Machine Fly", sets: "3", reps: "15", rest: "45s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["triceps pushdown"], name: "triceps pushdown", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Extension (Cable or Dumbbell)"], name: "Overhead Extension (Cable or Dumbbell)", sets: "3", reps: "12-15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Underhand triceps pushdown"], name: "Underhand triceps pushdown", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "2", reps: "Max", rest: "60s" },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "4", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Rows"], name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"], name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Dumbbell Curl", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ez Barbell Curl"], name: "Ez Barbell Curl", sets: "3", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: "Chin-Ups", sets: "2", reps: "Max", rest: "60s" },
    ]
  },
  Wednesday: {
      focus: "Legs & Shoulder",
      exercises: [
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Shoulder Press", sets: "3", reps: "10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15 each", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shrugs"], name: "Shrugs", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "3", reps: "10-12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "10-12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"], name: "Dumbbell Walking Lunges", sets: "3", reps: "20", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "Max", rest: "60s" },
      ]
  },
  Thursday: {
      focus: "Chest, Triceps & Core",
      exercises: [
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "3", reps: "10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Bench Press"], name: "Incline Bench Press", sets: "3", reps: "10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Fly"], name: "Cable Fly", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Chest Press"], name: "Dumbbell Chest Press", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Extension"], name: "Overhead Extension", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tricep Pushdowns"], name: "Tricep Pushdowns", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "25", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "20 reps & 30s hold", rest: "60s" },
      ]
  },
  Friday: {
      focus: "Back, Biceps & Forearms",
      exercises: [
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "4", reps: "10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Rows"], name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "8-10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"], name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Curls"], name: "Incline Dumbbell Curls", sets: "3", reps: "8-10", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Dumbbell Curl", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Curls"], name: "Reverse Curls", sets: "3", reps: "20", rest: "60s" },
      ]
  },
  Saturday: {
      focus: "Legs, Shoulder & Core",
      exercises: [
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Shoulder Press", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15 each", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Extension"], name: "Leg Extension", sets: "3", reps: "15", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "12", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Crunches"], name: "Reverse Crunches", sets: "3", reps: "25", rest: "60s" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Side Holds"], name: "Plank Side Holds", sets: "3", reps: "20 reps & 30-60s hold both side", rest: "60s" },
      ]
  },
  Sunday: {
      focus: "Rest or Light Cardio",
      exercises: [
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Walk"], name: "Incline Walk", sets: "1", reps: "20-30 mins", rest: "N/A" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching / Foam rolling"], name: "Stretching / Foam rolling", sets: "1", reps: "10-15 mins", rest: "N/A" },
          { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Optional: Yoga class"], name: "Optional: Yoga class", sets: "1", reps: "As desired", rest: "N/A" },
      ]
  }
};

export const GENERAL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "12-15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Diamond Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Dips"], name: "Triceps Dips", sets: "4", reps: "10-15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Close-Grip Push-Ups"], name: "Close-Grip Push-Ups", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Triceps Extensions"], name: "Overhead Triceps Extensions", sets: "3", reps: "12", rest: "60s" },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "4", reps: "30 sec", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", sets: "4", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Snow Angels"], name: "Reverse Snow Angels", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: "Biceps Curls", sets: "4", reps: "12-15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: "Chin-Ups", sets: "3", reps: "Max", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "60s" },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "4", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lunges", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Sit"], name: "Wall Sit", sets: "3", reps: "45 sec", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20", rest: "60s" },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Diamond Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "45 sec", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20", rest: "60s" },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Pulls"], name: "Superman Pulls", sets: "4", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: "Resistance Band Rows", sets: "4", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Isometric Hold"], name: "Isometric Hold", sets: "3", reps: "30 sec", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: "Biceps Curls", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "4", reps: "20", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Forearm Squeeze"], name: "Forearm Squeeze", sets: "4", reps: "30 sec", rest: "60s" },
    ]
  },
  Saturday: {
    focus: "Legs, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "10 each leg", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Plank to Push-Up", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Heel Touches"], name: "Heel Touches", sets: "3", reps: "20", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30 sec", rest: "60s" },
    ]
  },
  Sunday: {
    focus: "Rest or Light Cardio",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Yoga"], name: "Light Yoga", sets: "1", reps: "15 mins", rest: "N/A" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", sets: "1", reps: "15 mins", rest: "N/A" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["20-30 min walk"], name: "20-30 min walk", sets: "1", reps: "As desired", rest: "N/A" },
    ]
  }
};

export const GENERAL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: "Incline Chest Press", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Fly"], name: "Chest Fly", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Rope Pushdown"], name: "Triceps Rope Pushdown", sets: "3", reps: "12-15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead DB Triceps Extension"], name: "Overhead DB Triceps Extension", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Dips"], name: "Triceps Dips", sets: "3", reps: "10-12", rest: "60s" },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldown"], name: "Lat Pulldown", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "6-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"], name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Bicep Curls"], name: "Cable Bicep Curls", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "60s" },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Smith Squats"], name: "Smith Squats", sets: "4", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"], name: "Dumbbell Walking Lunges", sets: "3", reps: "12 steps", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["DB Shoulder Press"], name: "DB Shoulder Press", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20", rest: "60s" },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Flat DB Bench"], name: "Flat DB Bench", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Fly"], name: "Cable Fly", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skull Crushers"], name: "Skull Crushers", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Hold"], name: "Plank Hold", sets: "3", reps: "45s", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Oblique Twists"], name: "Cable Oblique Twists", sets: "3", reps: "20", rest: "60s" },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["T-Bar Rows"], name: "T-Bar Rows", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wide Lat Pulldown"], name: "Wide Lat Pulldown", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Bicep Curls"], name: "Cable Bicep Curls", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Concentration Curls"], name: "Concentration Curls", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Curls"], name: "Reverse Curls", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls & Ext"], name: "Wrist Curls & Ext", sets: "3", reps: "15", rest: "60s" },
    ]
  },
  Saturday: {
    focus: "Glutes, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "4", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats", sets: "3", reps: "10/leg", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Curls"], name: "Leg Curls", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Arnold Press"], name: "Arnold Press", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Front Raises"], name: "Front Raises", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crunch + Twists"], name: "Cable Crunch + Twists", sets: "3", reps: "15 + 20", rest: "60s" },
    ]
  },
  Sunday: {
    focus: "Rest or Light Cardio",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Walk"], name: "Incline Walk", sets: "1", reps: "20-30 min", rest: "N/A" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretch / Foam Roll"], name: "Stretch / Foam Roll", sets: "1", reps: "As desired", rest: "N/A" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga (Optional)"], name: "Yoga (Optional)", sets: "1", reps: "As desired", rest: "N/A" },
    ]
  }
};

export const GENERAL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", sets: "4", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Push-Ups"], name: "Wall Push-Ups", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Dips"], name: "Bench Dips", sets: "3", reps: "10-12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Kickbacks"], name: "Triceps Kickbacks", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Stretch"], name: "Triceps Stretch", sets: "3", reps: "30s", rest: "60s" },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superwoman Hold"], name: "Superwoman Hold", sets: "4", reps: "30s", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", sets: "4", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Snow Angels"], name: "Snow Angels", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: "Biceps Curls", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Angels"], name: "Wall Angels", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curls"], name: "Hammer Curls", sets: "3", reps: "12", rest: "60s" },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "4", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lunges", sets: "3", reps: "10/leg", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Sit"], name: "Wall Sit", sets: "3", reps: "45s", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Arm Circles"], name: "Arm Circles", sets: "3", reps: "30s", rest: "60s" },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Diamond Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Dips"], name: "Bench Dips", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Forearm Plank"], name: "Forearm Plank", sets: "3", reps: "30-45s", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20", rest: "60s" },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Pulls"], name: "Superman Pulls", sets: "4", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", sets: "4", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"], name: "Bent Over Dumbbell Reverse Flys", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: "Biceps Curls", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Circles"], name: "Wrist Circles", sets: "3", reps: "30s", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Forearm Squeeze"], name: "Forearm Squeeze", sets: "3", reps: "30s", rest: "60s" },
    ]
  },
  Saturday: {
    focus: "Glutes, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sumo Squats"], name: "Sumo Squats", sets: "4", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Step-Ups"], name: "Step-Ups", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Donkey Kicks"], name: "Donkey Kicks", sets: "3", reps: "15/leg", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Heel Touches"], name: "Heel Touches", sets: "3", reps: "20", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "10/side", rest: "60s" },
    ]
  },
  Sunday: {
    focus: "Active Recovery",
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga (Optional)"], name: "Yoga (Optional)", sets: "1", reps: "As desired", rest: "N/A" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", sets: "1", reps: "As desired", rest: "N/A" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walk 20-30 mins"], name: "Walk 20-30 mins", sets: "1", reps: "As desired", rest: "N/A" },
    ]
  }
};
export const MALE_BACK_GYM: DayWorkout = {
  focus: "Back",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: "Deadlifts", sets: "4", reps: "6-8", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "4", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Rows"], name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"], name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s" },
  ]
};

export const MALE_BACK_HOME: DayWorkout = {
  focus: "Back (Home)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "4", reps: "Max", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "45s", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows (using table)", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Prone Cobra"], name: "Prone Cobra", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "60s" },
  ]
};

export const FEMALE_BACK_GYM: DayWorkout = {
  focus: "Back (Gym)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single Arm Dumbbell Row"], name: "Single Arm Dumbbell Row", sets: "3", reps: "12/arm", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Back Extensions (Hyperextensions)"], name: "Back Extensions (Hyperextensions)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15-20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"], name: "Bent Over Dumbbell Reverse Flys", sets: "3", reps: "15", rest: "60s" },
  ]
};

export const FEMALE_BACK_HOME: DayWorkout = {
  focus: "Back (Home)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "4", reps: "30s", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "12/side", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Prone Arm Lifts (Y-T-W)"], name: "Prone Arm Lifts (Y-T-W)", sets: "3", reps: "10 each", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cat-Cow Stretch"], name: "Cat-Cow Stretch", sets: "2", reps: "30s flow", rest: "60s" },
  ]
};

export const MALE_ARMS_GYM: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Curls"], name: "Barbell Curls", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Curls"], name: "Incline Dumbbell Curls", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tricep Pushdowns"], name: "Tricep Pushdowns", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Cable Extension"], name: "Overhead Cable Extension", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Curls"], name: "Reverse Curls", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "60s" },
  ]
};

export const MALE_ARMS_HOME: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Curls"], name: "Resistance Band Curls", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Dips"], name: "Triceps Dips", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Triceps Extensions (Backpack/Weight)"], name: "Overhead Triceps Extensions (Backpack/Weight)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles/Dumbbells)"], name: "Hammer Curls (Water Bottles/Dumbbells)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Squeezes (Towel/Stress Ball)"], name: "Wrist Squeezes (Towel/Stress Ball)", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Diamond Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Curls"], name: "Reverse Curls", sets: "3", reps: "15", rest: "60s" },
  ]
};

export const FEMALE_ARMS_GYM: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"], name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Triceps Pushdowns"], name: "Cable Triceps Pushdowns", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Hammer Curls"], name: "Incline Hammer Curls", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead DB Triceps Extension"], name: "Overhead DB Triceps Extension", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Curls"], name: "Reverse Curls", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "60s" },
  ]
};

export const FEMALE_ARMS_HOME: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Curls"], name: "Resistance Band Curls", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Water Bottle Extensions"], name: "Overhead Water Bottle Extensions", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"], name: "Hammer Curls (Water Bottles)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Squeezes (Towel/Stress Ball)"], name: "Wrist Squeezes (Towel or Ball)", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Diamond Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Band Curls"], name: "Reverse Band Curls", sets: "3", reps: "15", rest: "60s" },
  ]
};

export const MALE_ABS_GYM: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Rope Crunch"], name: "Cable Rope Crunch", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Roman Chair Sit-Ups"], name: "Roman Chair Sit-Ups", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Weighted Russian Twists"], name: "Weighted Russian Twists", sets: "3", reps: "20 total", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline Crunch"], name: "Decline Crunch", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Hold"], name: "Plank Hold", sets: "3", reps: "1 min", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Tucks"], name: "Hanging Knee Tucks", sets: "3", reps: "15", rest: "60s" },
  ]
};

export const MALE_ABS_HOME: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Crunches"], name: "Crunches", sets: "4", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bicycle Crunches"], name: "Bicycle Crunches", sets: "3", reps: "30 total", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20 total", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Plank to Push-Up", sets: "3", reps: "10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank (Both Sides)", sets: "3", reps: "30 sec each", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "30 sec", rest: "60s" },
  ]
};

export const FEMALE_ABS_GYM: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Rope Crunch"], name: "Cable Rope Crunch", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Ab Machine Crunch"], name: "Seated Ab Machine Crunch", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Weighted Russian Twists"], name: "Weighted Russian Twists", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Hold"], name: "Plank Hold", sets: "3", reps: "60 sec", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline Sit-Ups"], name: "Decline Sit-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stability Ball Pass"], name: "Stability Ball Pass", sets: "3", reps: "15", rest: "60s" },
  ]
};

export const FEMALE_ABS_HOME: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Crunches"], name: "Crunches", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Flutter Kicks"], name: "Flutter Kicks", sets: "3", reps: "30 sec", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "1 min", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank Hip Dips"], name: "Side Plank Hip Dips", sets: "3", reps: "12 each side", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "30 sec", rest: "60s" },
  ]
};

export const MALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
  focus: "Shoulders (Front, Side, Rear)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press (Barbell or Dumbbell)"], name: "Shoulder Press (Barbell or Dumbbell)", sets: "4", reps: "8–10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Arnold Press"], name: "Arnold Press", sets: "3", reps: "10–12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Front Raises"], name: "Front Raises", sets: "3", reps: "12–15", rest: "60s" },
  ]
};

export const MALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
  focus: "Shoulders (Front, Side, Rear)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Arm Circles (Small + Big)"], name: "Lateral Arm Circles (Small + Big)", sets: "3", reps: "40 sec", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Snow Angels"], name: "Reverse Snow Angels", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Elevated Pike Hold"], name: "Elevated Pike Hold", sets: "3", reps: "30 sec", rest: "60s" },
  ]
};

export const FEMALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
  focus: "Shoulders (Sculpting & Strength)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "10–12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Arnold Press"], name: "Arnold Press", sets: "3", reps: "10–12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Front Raises"], name: "Front Raises", sets: "3", reps: "12–15", rest: "60s" },
  ]
};

export const FEMALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
  focus: "Shoulders (Toning & Balance)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Walks"], name: "Wall Walks", sets: "3", reps: "8–10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "8–10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Arm Raises (Using Water Bottles/Bands)"], name: "Lateral Arm Raises (Using Water Bottles/Bands)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Rear Delt Pulses (Bodyweight or Light Weights)"], name: "Rear Delt Pulses (Bodyweight or Light Weights)", sets: "3", reps: "15–20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Front Raises (Bottles/Bands)"], name: "Front Raises (Bottles/Bands)", sets: "3", reps: "15", rest: "60s" },
  ]
};

export const MALE_LEG_GYM_WORKOUT: DayWorkout = {
  focus: "Legs (Strength & Power)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "4", reps: "8–10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "10–12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "10 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Curl Machine"], name: "Leg Curl Machine", sets: "3", reps: "12–15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Standing Calf Raises"], name: "Standing Calf Raises", sets: "4", reps: "20", rest: "60s" },
  ]
};

export const MALE_LEG_HOME_WORKOUT: DayWorkout = {
  focus: "Legs (Bodyweight Strength)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Sit"], name: "Wall Sit", sets: "3", reps: "45 sec", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Crunches"], name: "Reverse Crunches", sets: "3", reps: "12 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Donkey Kicks"], name: "Donkey Kicks", sets: "3", reps: "15 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single-Leg Calf Raises"], name: "Single-Leg Calf Raises", sets: "3", reps: "15 each leg", rest: "60s" },
  ]
};

export const FEMALE_LEG_GYM_WORKOUT: DayWorkout = {
  focus: "Legs (Tone & Strength)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Smith Squats"], name: "Smith Squats", sets: "4", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Kickbacks"], name: "Cable Kickbacks", sets: "3", reps: "15 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "3", reps: "12–15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Calf Raises"], name: "Seated Calf Raises", sets: "3", reps: "20", rest: "60s" },
  ]
};

export const FEMALE_LEG_HOME_WORKOUT: DayWorkout = {
  focus: "Legs (Bodyweight Tone)",
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "4", reps: "20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side-Lying Leg Raises"], name: "Side-Lying Leg Raises", sets: "3", reps: "15 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Donkey Kicks"], name: "Donkey Kicks", sets: "3", reps: "15 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridge March"], name: "Glute Bridge March", sets: "3", reps: "10 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Step-Ups"], name: "Step-Ups", sets: "3", reps: "12 each leg", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Standing Calf Raises"], name: "Standing Calf Raises", sets: "3", reps: "20", rest: "60s" },
  ]
};

export const MALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
  Daily: {
    focus: "Jawline Definition & Facial Muscle Toning",
    exercises: [
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Jawline Sharper (Massage Along Jaw)"],
        name: "Jawline Sharper (Massage Along Jaw)",
        sets: "3",
        reps: "15 strokes each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA['Vowel Mouth Stretch ("O"-"E")'],
        name: 'Vowel Mouth Stretch ("O"-"E")',
        sets: "3",
        reps: "10 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Lion's Breath"],
        name: "Lion's Breath",
        sets: "3",
        reps: "3 deep breaths",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Chin Tuck"],
        name: "Chin Tuck",
        sets: "3",
        reps: "15 seconds hold",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Jaw Unlocker"],
        name: "Jaw Unlocker",
        sets: "3",
        reps: "10 slow open-close",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Cheek & Jawline Lifter"],
        name: "Cheek & Jawline Lifter",
        sets: "3",
        reps: "10 lifts each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Gua Sha or Facial Massage (Jawline)"],
        name: "Gua Sha or Facial Massage (Jawline)",
        sets: "2",
        reps: "2 min each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA['Kiss the Ceiling / "Whistler"'],
        name: 'Kiss the Ceiling / "Whistler"',
        sets: "3",
        reps: "10-15 second hold",
      },
    ],
  },
};
export const FEMALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
  Daily: {
    focus: "Jawline Definition & Facial Muscle Toning",
    exercises: [
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Jawline Sharper (Massage Along Jaw)"],
        name: "Jawline Sharper (Massage Along Jaw)",
        sets: "3",
        reps: "15 strokes each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA['Vowel Mouth Stretch ("O"-"E")'],
        name: 'Vowel Mouth Stretch ("O"-"E")',
        sets: "3",
        reps: "10 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Lion's Breath"],
        name: "Lion's Breath",
        sets: "3",
        reps: "3 deep breaths",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Chin Tuck"],
        name: "Chin Tuck",
        sets: "3",
        reps: "15 seconds hold",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Jaw Unlocker"],
        name: "Jaw Unlocker",
        sets: "3",
        reps: "10 slow open-close",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Cheek & Jawline Lifter"],
        name: "Cheek & Jawline Lifter",
        sets: "3",
        reps: "10 lifts each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Gua Sha or Facial Massage (Jawline)"],
        name: "Gua Sha or Facial Massage (Jawline)",
        sets: "2",
        reps: "2 min each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA['Kiss the Ceiling / "Whistler"'],
        name: 'Kiss the Ceiling / "Whistler"',
        sets: "3",
        reps: "10-15 second hold",
      },
    ],
  },
};
export const MALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
  Daily: {
    focus: "Voice Strength & Range Expansion",
    exercises: [
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Lip Trills"],
        name: "Lip Trills",
        sets: "3",
        reps: "30 sec each",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Humming Warm-Up"],
        name: "Humming Warm-Up",
        sets: "3",
        reps: "1 min each",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Sirens (Low to High Pitch Glide)"],
        name: "Sirens (Low to High Pitch Glide)",
        sets: "3",
        reps: "10 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Sustain Note (Deep Chest Voice)"],
        name: "Sustain Note (Deep Chest Voice)",
        sets: "3",
        reps: "10-15 sec each",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Consonant Articulation (P-T-K-B-D-G)"],
        name: "Consonant Articulation (P-T-K-B-D-G)",
        sets: "2",
        reps: "1 min each",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Breath Control (Inhale 4s – Hold – Exhale 8s)"],
        name: "Breath Control (Inhale 4s – Hold – Exhale 8s)",
        sets: "4",
        reps: "10 cycles",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Deep 'Ahh' Vowel Projection"],
        name: "Deep 'Ahh' Vowel Projection",
        sets: "3",
        reps: "10 reps",
      },
    ],
  },
};
export const FEMALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
  Daily: {
    focus: "Vocal Clarity & Pitch Flexibility",
    exercises: [
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Lip Bubbles (Trills with Sound)"],
        name: "Lip Bubbles (Trills with Sound)",
        sets: "3",
        reps: "30 sec each",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Humming Glide (Nasal Resonance)"],
        name: "Humming Glide (Nasal Resonance)",
        sets: "3",
        reps: "1 min each",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Octave Sirens (Smooth Pitch Slide)"],
        name: "Octave Sirens (Smooth Pitch Slide)",
        sets: "3",
        reps: "10 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Sustain 'Ee' / 'Oo' Notes"],
        name: "Sustain 'Ee' / 'Oo' Notes",
        sets: "3",
        reps: "10-15 sec hold",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Vowel Chains (AEIOU transitions)"],
        name: "Vowel Chains (AEIOU transitions)",
        sets: "3",
        reps: "5 cycles",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Breath Support Drill (4-4-8 breathing)"],
        name: "Breath Support Drill (4-4-8 breathing)",
        sets: "4",
        reps: "10 cycles",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Vocal Stretch (Soft Yawns + 'Haa')"],
        name: "Vocal Stretch (Soft Yawns + 'Haa')",
        sets: "3",
        reps: "10 reps",
      },
    ],
  },
};
export const MALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = {
  Daily: {
    focus: "Posture Correction & Upper Back Strength",
    exercises: [
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Wall Slides"],
        name: "Wall Slides",
        sets: "3",
        reps: "15 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Glute Kickbacks (Bodyweight or Band)"],
        name: "Glute Kickbacks (Bodyweight or Band)",
        sets: "3",
        reps: "15 reps each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Reverse Snow Angels (on floor)"],
        name: "Reverse Snow Angels (on floor)",
        sets: "3",
        reps: "15 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Seated Chin Tucks"],
        name: "Seated Chin Tucks",
        sets: "4",
        reps: "15 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Child’s Pose with Reach"],
        name: "Child’s Pose with Reach",
        sets: "2",
        reps: "30 sec hold each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Butterfly Stretch"],
        name: "Butterfly Stretch",
        sets: "2",
        reps: "30 sec hold",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Plank"],
        name: "Plank",
        sets: "3",
        reps: "45-60 sec hold",
      },
    ],
  },
};
export const FEMALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = {
  Daily: {
    focus: "Posture Correction & Upper Back Strength",
    exercises: [
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Wall Slides"],
        name: "Wall Slides",
        sets: "3",
        reps: "15 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Glute Kickbacks (Bodyweight or Band)"],
        name: "Glute Kickbacks (Bodyweight or Band)",
        sets: "3",
        reps: "15 reps each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Reverse Snow Angels (on floor)"],
        name: "Reverse Snow Angels (on floor)",
        sets: "3",
        reps: "15 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Seated Chin Tucks"],
        name: "Seated Chin Tucks",
        sets: "4",
        reps: "15 reps",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Child’s Pose with Reach"],
        name: "Child’s Pose with Reach",
        sets: "2",
        reps: "30 sec hold each side",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Butterfly Stretch"],
        name: "Butterfly Stretch",
        sets: "2",
        reps: "30 sec hold",
      },
      {
        ...defaultExerciseProps,
        ...MASTER_EXERCISE_DATA["Plank"],
        name: "Plank",
        sets: "3",
        reps: "45-60 sec hold",
      },
    ],
  },
};
export const MALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
  focus: "Blood Flow, Testosterone & Stamina",
  exercises: [
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Barbell Hip Thrusts"],
      name: "Barbell Hip Thrusts",
      sets: "4",
      reps: "10-12 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Cable Pull-Throughs"],
      name: "Cable Pull-Throughs",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Kettlebell Swings"],
      name: "Kettlebell Swings",
      sets: "4",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Standing Cable Hip Flexion"],
      name: "Standing Cable Hip Flexion",
      sets: "3",
      reps: "12 reps each leg",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Barbell Back Squats"],
      name: "Barbell Back Squats",
      sets: "3",
      reps: "10 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Controlled Box Jumps"],
      name: "Controlled Box Jumps",
      sets: "3",
      reps: "8-10 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Hanging Leg Raises"],
      name: "Hanging Leg Raises",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Plank"],
      name: "Plank",
      sets: "3",
      reps: "1 min hold",
    },
  ],
};
export const MALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
  focus: "Blood Flow, Testosterone & Stamina",
  exercises: [
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Bodyweight Glute Bridges"],
      name: "Bodyweight Glute Bridges",
      sets: "4",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Pelvic Tilts"],
      name: "Pelvic Tilts",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Glute Kickbacks (Bodyweight or Band)"],
      name: "Glute Kickbacks (Bodyweight or Band)",
      sets: "3",
      reps: "15 reps each leg",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Squats"],
      name: "Squats",
      sets: "4",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Fire Hydrants"],
      name: "Fire Hydrants",
      sets: "3",
      reps: "15 reps each leg",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Kettlebell Swings"],
      name: "Kettlebell Swings",
      sets: "3",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Leg Raises"],
      name: "Leg Raises",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Plank"],
      name: "Plank",
      sets: "3",
      reps: "1 min hold",
    },
  ],
};
export const FEMALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
  focus: "Pelvic Floor, Stamina & Hormonal Balance",
  exercises: [
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Sumo Deadlifts"],
      name: "Sumo Deadlifts",
      sets: "4",
      reps: "10-12 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Cable Abductions"],
      name: "Cable Abductions",
      sets: "3",
      reps: "15 reps each leg",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Weighted Glute Bridges"],
      name: "Weighted Glute Bridges",
      sets: "4",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Cable Pull-Throughs"],
      name: "Cable Pull-Throughs",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Stability Ball Plank"],
      name: "Stability Ball Plank",
      sets: "3",
      reps: "45 sec hold",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Kettlebell Swings"],
      name: "Kettlebell Swings",
      sets: "3",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Cable Abductions"],
      name: "Cable Abductions",
      sets: "3",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Plank"],
      name: "Plank",
      sets: "3",
      reps: "1 min hold",
    },
  ],
};
export const FEMALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
  focus: "Pelvic Floor, Stamina & Hormonal Balance",
  exercises: [
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Glute Bridges"],
      name: "Glute Bridges",
      sets: "4",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Pelvic Tilts"],
      name: "Pelvic Tilts",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Fire Hydrants"],
      name: "Fire Hydrants",
      sets: "3",
      reps: "15 reps each leg",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Sumo Squats"],
      name: "Sumo Squats",
      sets: "4",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Kettlebell Swings"],
      name: "Kettlebell Swings",
      sets: "3",
      reps: "20 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Leg Raises"],
      name: "Leg Raises",
      sets: "3",
      reps: "15 reps",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Plank"],
      name: "Plank",
      sets: "3",
      reps: "1 min hold",
    },
    {
      ...defaultExerciseProps,
      ...MASTER_EXERCISE_DATA["Butterfly Stretch"],
      name: "Butterfly Stretch",
      sets: "2",
      reps: "30 sec hold",
    },
  ],
};

export const CRICKET_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Lower Body Strength & Power", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", "sets": "4", "reps": "6-8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", "sets": "3", "reps": "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", "sets": "3", "reps": "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges with Dumbbells"], name: "Walking Lunges with Dumbbells", "sets": "3", "reps": "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", "sets": "4", "reps": "15" } ] }, "Tuesday": { "focus": "Upper Body Push & Core", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", "sets": "4", "reps": "6-8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Press (Dumbbells)"], name: "Overhead Press (Dumbbells)", "sets": "3", "reps": "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Pushdowns (Rope)"], name: "Triceps Pushdowns (Rope)", "sets": "3", "reps": "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Rotational Slams"], name: "Medicine Ball Rotational Slams", "sets": "3", "reps": "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", "sets": "3", "reps": "60s hold" } ] }, "Wednesday": { "focus": "Active Recovery & Mobility", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"], name: "Foam Rolling (Full Body)", "sets": "1", "reps": "10-15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow (Hamstrings + Back)"], name: "Yoga Flow (Hamstrings + Back)", "sets": "1", "reps": "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Rowing"], name: "Light Rowing", "sets": "1", "reps": "10 min" } ] }, "Thursday": { "focus": "Lower Body Agility & Speed", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", "sets": "3", "reps": "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", "sets": "5", "reps": "2 runs each" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single-Leg Deadlifts"], name: "Single-Leg Deadlifts", "sets": "3", "reps": "10/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", "sets": "4", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Treadmill Sprints", "sets": "6", "reps": "30s sprint, 60s rest" } ] }, "Friday": { "focus": "Upper Body Pull & Power", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups (Weighted if possible)"], name: "Pull-Ups (Weighted if possible)", "sets": "4", "reps": "6-8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bent Over Rows"], name: "Bent Over Rows", "sets": "3", "reps": "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", "sets": "4", "reps": "30s on, 30s off" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Dumbbell Curl", "sets": "3", "reps": "10-12" } ] }, "Saturday": { "focus": "Full Body Conditioning", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Thrusters"], name: "Dumbbell Thrusters", "sets": "3", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", "sets": "4", "reps": "20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Rollouts"], name: "Ab Rollouts", "sets": "3", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Farmer's Carry"], name: "Farmer's Carry", "sets": "3", "reps": "30m" } ] }, "Sunday": { "focus": "Complete Rest", "exercises": [] } };
export const CRICKET_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Lower Body Strength & Glutes", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", "sets": "4", "reps": "10-12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", "sets": "3", "reps": "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Band Walks"], name: "Lateral Band Walks", "sets": "3", "reps": "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Curls"], name: "Leg Curls", "sets": "3", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", "sets": "4", "reps": "15" } ] }, "Tuesday": { "focus": "Upper Body Push & Core", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"], name: "Incline Dumbbell Press", "sets": "3", "reps": "10-12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["DB Shoulder Press"], name: "DB Shoulder Press", "sets": "3", "reps": "10-12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Rope Pushdowns"], name: "Triceps Rope Pushdowns", "sets": "3", "reps": "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", "sets": "3", "reps": "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", "sets": "3", "reps": "60s hold" } ] }, "Wednesday": { "focus": "Active Recovery & Mobility", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"], name: "Foam Rolling (Full Body)", "sets": "1", "reps": "10-15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow (Pigeon, Down Dog, Cobra)"], name: "Yoga Flow (Pigeon, Down Dog, Cobra)", "sets": "1", "reps": "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Cycling/ Walking"], name: "Light Cycling/ Walking", "sets": "1", "reps": "15 min" } ] }, "Thursday": { "focus": "Lower Body Power & Agility", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", "sets": "4", "reps": "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", "sets": "3", "reps": "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", "sets": "5", "reps": "2 runs each" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", "sets": "3", "reps": "12" } ] }, "Friday": { "focus": "Upper Body Pull & Back", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldown"], name: "Lat Pulldown", "sets": "3", "reps": "10-12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single Arm Dumbbell Row"], name: "Single Arm Dumbbell Row", "sets": "3", "reps": "12/arm" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", "sets": "3", "reps": "Max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bicep Curls"], name: "Bicep Curls", "sets": "3", "reps": "12-15" } ] }, "Saturday": { "focus": "Full Body Conditioning", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", "sets": "4", "reps": "30s on, 30s off" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"], name: "Dumbbell Walking Lunges", "sets": "3", "reps": "20 steps" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Ball Throws"], name: "Wall Ball Throws", "sets": "3", "reps": "15" } ] }, "Sunday": { "focus": "Complete Rest", "exercises": [] } };
export const CRICKET_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Lower Body Power", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", "sets": "4", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", "sets": "3", "reps": "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single-Leg Calf Raises"], name: "Single-Leg Calf Raises", "sets": "4", "reps": "15/leg" } ] }, "Tuesday": { "focus": "Upper Body Push & Core", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", "sets": "4", "reps": "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Dips (Chair)"], name: "Triceps Dips (Chair)", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Plank to Push-Up", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", "sets": "3", "reps": "20" } ] }, "Wednesday": { "focus": "Agility & Fielding Drills", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder (Simulated)"], name: "Agility Ladder (Simulated)", "sets": "5", "reps": "30s each drill" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side-to-Side Bounds"], name: "Side-to-Side Bounds", "sets": "3", "reps": "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reaction Ball or Wall Catch"], name: "Reaction Ball or Wall Catch", "sets": "5", "reps": "10 catches" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shadow Fielding"], name: "Shadow Fielding", "sets": "3", "reps": "10 dives/stops" } ] }, "Thursday": { "focus": "Lower Body Endurance", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bodyweight Squats"], name: "Bodyweight Squats", "sets": "3", "reps": "30" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Sit"], name: "Wall Sit", "sets": "3", "reps": "60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Lunges"], name: "Reverse Lunges", "sets": "3", "reps": "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", "sets": "3", "reps": "45s" } ] }, "Friday": { "focus": "Upper Body Pull & Grip", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", "sets": "4", "reps": "Max" }, { ...defaultExerciseProps, name: "Towel Rows", "sets": "3", "reps": "15", ...MASTER_EXERCISE_DATA["Towel Rows"] }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", "sets": "3", "reps": "45s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls (with bottles/cans)"], name: "Wrist Curls (with bottles/cans)", "sets": "3", "reps": "20" } ] }, "Saturday": { "focus": "Full Body HIIT", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", "sets": "5", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", "sets": "3", "reps": "45s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", "sets": "3", "reps": "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", "sets": "3", "reps": "15" } ] }, "Sunday": { "focus": "Rest & Recovery", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Full Body Stretch"], name: "Full Body Stretch", "sets": "1", "reps": "10-15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Easy Walking"], name: "Easy Walking", "sets": "1", "reps": "20-30 min" } ] } };
export const CRICKET_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Lower Body Strength", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", "sets": "4", "reps": "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Alternating Lunges"], name: "Alternating Lunges", "sets": "3", "reps": "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Sit"], name: "Wall Sit", "sets": "3", "reps": "45-60s" } ] }, "Tuesday": { "focus": "Upper Body Push & Core", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", "sets": "4", "reps": "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Dips (Chair)"], name: "Triceps Dips (Chair)", "sets": "3", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Shoulder Taps"], name: "Plank Shoulder Taps", "sets": "3", "reps": "20 total" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bicycle Crunches"], name: "Bicycle Crunches", "sets": "3", "reps": "20/side" } ] }, "Wednesday": { "focus": "Agility & Coordination", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder (Simulated)"], name: "Agility Ladder (Simulated)", "sets": "5", "reps": "30s each drill" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: "Skater Hops", "sets": "3", "reps": "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reaction Ball or Wall Catch"], name: "Reaction Ball or Wall Catch", "sets": "5", "reps": "10 catches" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", "sets": "3", "reps": "15/side" } ] }, "Thursday": { "focus": "Lower Body & Cardio", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Lunges"], name: "Side Lunges", "sets": "3", "reps": "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", "sets": "4", "reps": "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Butt Kicks"], name: "Butt Kicks", "sets": "4", "reps": "30s" } ] }, "Friday": { "focus": "Upper Body Pull & Back", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", "sets": "4", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", "sets": "3", "reps": "45s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Pull-Aparts"], name: "Resistance Band Pull-Aparts", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Angels"], name: "Wall Angels", "sets": "3", "reps": "15" } ] }, "Saturday": { "focus": "Full Body Circuit", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", "sets": "3", "reps": "45s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", "sets": "3", "reps": "60s" } ] }, "Sunday": { "focus": "Rest & Recovery", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Full Body Stretch"], name: "Full Body Stretch", "sets": "1", "reps": "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Routine"], name: "Yoga Routine", "sets": "1", "reps": "15-20 min" } ] } };
export const BADMINTON_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Leg Power & Agility", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", "sets": "4", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", "sets": "3", "reps": "20 (10/leg)" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", "sets": "3", "reps": "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", "sets": "4", "reps": "20" } ] }, "Tuesday": { "focus": "Core & Rotational Strength", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", "sets": "3", "reps": "60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", "sets": "3", "reps": "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bicycle Crunches"], name: "Bicycle Crunches", "sets": "3", "reps": "40 total" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", "sets": "3", "reps": "45s hold" } ] }, "Wednesday": { "focus": "Upper Body Endurance & Shoulders", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", "sets": "4", "reps": "Max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", "sets": "3", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Dips (Chair)"], name: "Triceps Dips (Chair)", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Arm Circles"], name: "Arm Circles", "sets": "2", "reps": "30s forward/back" } ] }, "Thursday": { "focus": "Footwork & Speed Drills", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder (Simulated)"], name: "Agility Ladder (Simulated)", "sets": "5", "reps": "30s each pattern" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shuttle Ghosting"], name: "Shuttle Ghosting", "sets": "4", "reps": "6 points, 45s rest" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope (imaginary)", "sets": "5", "reps": "60s on, 30s off" } ] }, "Friday": { "focus": "Full Body Explosiveness", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", "sets": "4", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", "sets": "3", "reps": "12" } ] }, "Saturday": { "focus": "Active Recovery", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: "Light Jog/Walk", "sets": "1", "reps": "20-30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Full Body Stretch"], name: "Full Body Stretch", "sets": "1", "reps": "15 min" } ] }, "Sunday": { "focus": "Rest", "exercises": [] } };
export const BADMINTON_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": { "focus": "Leg Power & Strength", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", "sets": "4", "reps": "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Lunges"], name: "Dumbbell Lunges", "sets": "3", "reps": "10/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", "sets": "3", "reps": "12" } ] },
    "Tuesday": { "focus": "Core & Rotational Power", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", "sets": "3", "reps": "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Weighted Russian Twists"], name: "Weighted Russian Twists", "sets": "3", "reps": "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Roller"], name: "Ab Roller", "sets": "3", "reps": "12" } ] },
    "Wednesday": { "focus": "Upper Body Endurance & Shoulders", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Press (Dumbbells)"], name: "Overhead Press (Dumbbells)", "sets": "4", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", "sets": "3", "reps": "10" } ] },
    "Thursday": { "focus": "Speed & Agility", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", "sets": "5", "reps": "2 runs each" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Sprints (Short Distance)", "sets": "6", "reps": "Start/Stop sprints" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprint Intervals"], name: "Treadmill Sprint Intervals", "sets": "8", "reps": "20s on, 40s off" } ] },
    "Friday": { "focus": "Full Body Explosiveness", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Power Cleans (if trained)"], name: "Power Cleans (if trained)", "sets": "4", "reps": "5" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", "sets": "4", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", "sets": "3", "reps": "30s" } ] },
    "Saturday": { "focus": "Active Recovery", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Rowing Machine"], name: "Rowing Machine", "sets": "1", "reps": "15-20 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling & Stretch", "sets": "1", "reps": "15 min" } ] },
    "Sunday": { "focus": "Rest", "exercises": [] }
};
export const BADMINTON_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": { "focus": "Leg & Glute Strength", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", "sets": "4", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Lunges"], name: "Side Lunges", "sets": "3", "reps": "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", "sets": "4", "reps": "20" } ] },
    "Tuesday": { "focus": "Core Stability", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", "sets": "3", "reps": "45-60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", "sets": "3", "reps": "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Heel Touches"], name: "Heel Touches", "sets": "3", "reps": "20/side" } ] },
    "Wednesday": { "focus": "Upper Body & Shoulder Tone", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", "sets": "4", "reps": "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Pull-Aparts"], name: "Resistance Band Pull-Aparts", "sets": "3", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Angels"], name: "Wall Angels", "sets": "3", "reps": "15" } ] },
    "Thursday": { "focus": "Footwork & Coordination", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder (Simulated)"], name: "Agility Ladder (Simulated)", "sets": "5", "reps": "30s each pattern" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shuttle Ghosting"], name: "Shuttle Ghosting", "sets": "4", "reps": "4 corners, 45s rest" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope (imaginary)", "sets": "5", "reps": "45s on, 30s off" } ] },
    "Friday": { "focus": "Cardio & Conditioning", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", "sets": "3", "reps": "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", "sets": "3", "reps": "45s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", "sets": "3", "reps": "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", "sets": "3", "reps": "45s" } ] },
    "Saturday": { "focus": "Active Recovery", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Routine"], name: "Yoga Routine", "sets": "1", "reps": "20-30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", "sets": "1", "reps": "10 min" } ] },
    "Sunday": { "focus": "Rest", "exercises": [] }
};
export const BADMINTON_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    "Monday": { "focus": "Leg & Glute Development", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", "sets": "4", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts (Dumbbells)"], name: "Romanian Deadlifts (Dumbbells)", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Kickbacks"], name: "Cable Kickbacks", "sets": "3", "reps": "15/leg" } ] },
    "Tuesday": { "focus": "Core & Stability", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Hold"], name: "Plank Hold", "sets": "3", "reps": "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", "sets": "3", "reps": "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Tucks"], name: "Hanging Knee Tucks", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Back Extensions (Hyperextensions)"], name: "Back Extensions", "sets": "3", "reps": "15" } ] },
    "Wednesday": { "focus": "Upper Body Strength & Tone", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["DB Shoulder Press"], name: "DB Shoulder Press", "sets": "4", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldown"], name: "Lat Pulldown", "sets": "3", "reps": "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Lateral Raises"], name: "Cable Lateral Raises", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Rope Pushdowns"], name: "Triceps Rope Pushdowns", "sets": "3", "reps": "15" } ] },
    "Thursday": { "focus": "Agility & Speed", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", "sets": "5", "reps": "2 runs each" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Hurdle Hops"], name: "Lateral Hurdle Hops", "sets": "3", "reps": "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprint Intervals"], name: "Treadmill Sprint Intervals", "sets": "8", "reps": "20s on, 40s off" } ] },
    "Friday": { "focus": "Full Body Conditioning", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", "sets": "4", "reps": "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"], name: "Dumbbell Walking Lunges", "sets": "3", "reps": "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Ball Throws"], name: "Wall Ball Throws", "sets": "3", "reps": "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Rowing Machine Sprint"], name: "Rowing Machine Sprint", "sets": "5", "reps": "150m" } ] },
    "Saturday": { "focus": "Active Recovery", "exercises": [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Elliptical / Walk"], name: "Light Elliptical / Walk", "sets": "1", "reps": "20-30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling & Stretch", "sets": "1", "reps": "15 min" } ] },
    "Sunday": { "focus": "Rest", "exercises": [] }
};

export const FOOTBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Squats"], name: 'Barbell Squats', sets: '4', reps: '8–10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: 'Walking Lunges', sets: '3', reps: '12 steps' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: 'Leg Press', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: 'Romanian Deadlift', sets: '3', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: 'Calf Raises', sets: '4', reps: '20' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: 'Sled Push', sets: '4', reps: '20m' } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: 'Bench Press', sets: '4', reps: '8–10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: 'Pull-Ups', sets: '3', reps: 'max' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: 'Seated Row', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: 'Shoulder Press', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: 'Face Pulls', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: 'Plank', sets: '3', reps: '60s' } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: 'Box Jumps', sets: '4', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: 'Lateral Bounds', sets: '3', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint Intervals', sets: '10', reps: '30m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: 'Battle Ropes', sets: '4', reps: '20s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: 'Agility Ladder', sets: '5', reps: 'rounds' } ] }, Thursday: { focus: "Core & Mobility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: 'Hanging Leg Raises', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: 'Cable Woodchoppers', sets: '3', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Rollouts"], name: 'Ab Wheel Rollouts', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: 'Side Plank', sets: '3', reps: '30s/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: 'Hip Mobility Drills', sets: '1', reps: '10 mins' } ] }, Friday: { focus: "Full Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: 'Deadlift', sets: '4', reps: '8' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: 'Push Press', sets: '3', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: 'Chin-Ups', sets: '3', reps: 'max' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Bench"], name: 'Incline DB Bench', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Farmer's Carry"], name: 'Farmer’s Carry', sets: '3', reps: '30m' } ] }, Saturday: { focus: "Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: 'Sled Push/Pull', sets: '6', reps: '20m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: 'Kettlebell Swings', sets: '4', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint Intervals', sets: '8', reps: '40m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Rowing Machine"], name: 'Rowing Machine', sets: '4', reps: '250m' } ] }, Sunday: { focus: "Rest / Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: 'Light Jog 20 mins' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: 'Stretching' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: 'Foam Rolling' } ] } };
export const FOOTBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: 'Jump Squats', sets: '4', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: 'Walking Lunges', sets: '3', reps: '12/leg' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: 'Glute Bridges', sets: '4', reps: '20' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: 'Calf Raises', sets: '4', reps: '25' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: 'Broad Jumps', sets: '3', reps: '10' } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: 'Push-Ups', sets: '4', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: 'Inverted Rows (table)', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: 'Pike Push-Ups', sets: '3', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: 'Banded Rows', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: 'Plank', sets: '3', reps: '60s' } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: 'High Knees', sets: '5', reps: '30s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: 'Lateral Bounds', sets: '4', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint in Place', sets: '5', reps: '20s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: 'Burpees', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: 'Agility Ladder (improv)', sets: '5', reps: 'rounds' } ] }, Thursday: { focus: "Core & Mobility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: 'Leg Raises', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: 'Side Plank', sets: '3', reps: '30s/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: 'Russian Twists', sets: '3', reps: '20' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: 'Superman Hold', sets: '3', reps: '30s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: 'Hip Circles', sets: '3', reps: '10' } ] }, Friday: { focus: "Full Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: 'Burpee Push-Ups', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: 'Squat to Press (bands/bottles)', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: 'Chin-Up Hold (door frame)', sets: '3', reps: 'max' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: 'Lunge Jumps', sets: '3', reps: '12' } ] }, Saturday: { focus: "Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint Intervals', sets: '10', reps: '20m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: 'Skater Jumps', sets: '4', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: 'Mountain Climbers', sets: '4', reps: '30s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: 'Jump Rope', sets: '4', reps: '1 min' } ] }, Sunday: { focus: "Rest / Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: 'Light Jog 20 mins' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: 'Stretching' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: 'Foam Rolling' } ] } };
export const FOOTBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Squats"], name: 'Barbell Squats', sets: '4', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: 'Walking Lunges', sets: '3', reps: '12 steps' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: 'Leg Press', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: 'Hip Thrusts', sets: '4', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: 'Calf Raises', sets: '4', reps: '20' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: 'Sled Push', sets: '4', reps: '20m' } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Bench"], name: 'Incline DB Bench', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldown"], name: 'Lat Pulldown', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: 'Seated Row', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: 'Shoulder Press', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: 'Face Pulls', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: 'Plank', sets: '3', reps: '45s' } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: 'Box Jumps', sets: '4', reps: '8' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: 'Lateral Bounds', sets: '3', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint Intervals', sets: '8', reps: '30m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: 'Battle Ropes', sets: '4', reps: '20s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: 'Ladder Drills', sets: '5', reps: 'rounds' } ] }, Thursday: { focus: "Core & Mobility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: 'Hanging Knee Raises', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: 'Cable Woodchoppers', sets: '3', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Shoulder Taps"], name: 'Plank with Shoulder Tap', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: 'Side Plank', sets: '3', reps: '30s/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: 'Hip Mobility', sets: '1', reps: '10 mins' } ] }, Friday: { focus: "Full Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: 'Deadlift', sets: '4', reps: '8' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: 'Push Press', sets: '3', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: 'Pull-Ups (assisted)', sets: '3', reps: 'max' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Press"], name: 'Incline DB Press', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Farmer's Carry"], name: 'Farmer’s Carry', sets: '3', reps: '30m' } ] }, Saturday: { focus: "Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: 'Sled Push/Pull', sets: '6', reps: '20m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: 'Kettlebell Swings', sets: '4', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint Intervals', sets: '6', reps: '40m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Rowing Machine"], name: 'Rowing', sets: '4', reps: '250m' } ] }, Sunday: { focus: "Rest / Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: 'Walk or Light Jog', sets: '1', reps: '20 mins' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: 'Stretching' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga (Optional)"], name: 'Yoga' } ] } };
export const FOOTBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: 'Jump Squats', sets: '4', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: 'Walking Lunges', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: 'Glute Bridges', sets: '4', reps: '20' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: 'Calf Raises', sets: '4', reps: '25' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: 'Broad Jumps', sets: '3', reps: '10' } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: 'Knee Push-Ups', sets: '4', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: 'Banded Rows', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: 'Pike Push-Ups', sets: '3', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: 'Chair Dips', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: 'Plank', sets: '3', reps: '45s' } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: 'High Knees', sets: '5', reps: '30s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: 'Lateral Bounds', sets: '4', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint in Place', sets: '5', reps: '20s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: 'Burpees', sets: '3', reps: '12' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: 'Ladder Drills', sets: '5', reps: 'rounds' } ] }, Thursday: { focus: "Core & Mobility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: 'Leg Raises', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: 'Side Plank', sets: '3', reps: '30s/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: 'Russian Twists', sets: '3', reps: '20' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: 'Superman Hold', sets: '3', reps: '30s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: 'Hip Circles', sets: '3', reps: '10' } ] }, Friday: { focus: "Full Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: 'Burpee Push-Ups', sets: '3', reps: '10' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: 'Squat to Press (bands/bottles)', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: 'Bicep Curls', sets: '3', reps: '15' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: 'Lunge Jumps', sets: '3', reps: '12' } ] }, Saturday: { focus: "Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: 'Sprint Intervals', sets: '8', reps: '20m' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: 'Skater Jumps', sets: '4', reps: '12/side' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: 'Mountain Climbers', sets: '4', reps: '30s' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: 'Jump Rope', sets: '4', reps: '1 min' } ] }, Sunday: { focus: "Rest / Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: 'Light Jog', sets: '1', reps: '20 mins' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: 'Stretching' }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: 'Foam Rolling' } ] } };

export const BASKETBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power & Jumping", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Squats", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12 steps" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats", sets: "3", reps: "10/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "8–10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Press (Dumbbells)"], name: "Overhead Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Ladder Drills", sets: "6", reps: "rounds" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint Intervals", sets: "10", reps: "20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Drills", sets: "5", reps: "rounds" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Shoulder Taps"], name: "Plank to Shoulder Tap", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Rollouts"], name: "Stability Ball Rollouts", sets: "3", reps: "12" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: "Deadlift", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: "Push Press", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: "Chin-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Bench"], name: "Incline DB Bench", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", sets: "4", reps: "20m" } ] }, Saturday: { focus: "Conditioning & Skills", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dribble Sprints"], name: "Dribble Sprints", sets: "5", reps: "full court" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope", sets: "5", reps: "1 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shooting Drills"], name: "Shooting Drills", reps: "30 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Layup Drills"], name: "Layup Drills", reps: "20 reps each side" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: "Light Jog", reps: "15–20 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };
export const BASKETBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power & Jumping", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: "Skater Jumps", sets: "3", reps: "12/side" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows (table)", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-Ups", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: "Banded Rows", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "5", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "4", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint in Place", sets: "5", reps: "20s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Ladder Drills (improv)", sets: "5", reps: "rounds" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "10/side" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpee Jump", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squat to Press (bands/bottles)", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Lunge Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Push-Up to Plank Jack", sets: "3", reps: "12" } ] }, Saturday: { focus: "Conditioning & Skills", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dribble Sprints"], name: "Dribble Sprints", reps: "10x20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope", sets: "4", reps: "1 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shooting Form Drills"], name: "Shooting Form Drills", reps: "20 mins" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walk 20-30 mins"], name: "Walk 20 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };
export const BASKETBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power & Jumping", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Squats", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12 steps" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "8" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Bench"], name: "Incline DB Bench", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldown"], name: "Lat Pulldown", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Shoulder Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Ladder Drills", sets: "6", reps: "rounds" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint Intervals", sets: "8", reps: "20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Drills", sets: "5", reps: "rounds" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Shoulder Taps"], name: "Plank to Shoulder Tap", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Rollouts"], name: "Stability Ball Rollouts", sets: "3", reps: "12" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: "Deadlift", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: "Push Press", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Press"], name: "Incline DB Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", sets: "4", reps: "20m" } ] }, Saturday: { focus: "Conditioning & Skills", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dribble Sprints"], name: "Dribble Sprints", sets: "5", reps: "full court" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope", sets: "4", reps: "1 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shooting Drills"], name: "Shooting Drills", reps: "25 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Layup Drills"], name: "Layup Drills", reps: "20 reps each side" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: "Light Jog", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };
export const BASKETBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power & Jumping", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: "Skater Jumps", sets: "3", reps: "12/side" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: "Banded Rows", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-Ups", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "45s" } ] }, Wednesday: { focus: "Agility & Speed", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "5", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "4", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint in Place", sets: "5", reps: "20s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Ladder Drills", sets: "5", reps: "rounds" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "10/side" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpee Jump", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squat to Press (bands/bottles)", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Lunge Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Push-Up to Plank Jack", sets: "3", reps: "10" } ] }, Saturday: { focus: "Conditioning & Skills", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dribble Sprints"], name: "Dribble Sprints", reps: "8x20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope", sets: "4", reps: "1 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shooting Form Drills"], name: "Shooting Form Drills", reps: "15 mins" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walk 20-30 mins"], name: "Walk 20 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };

export const VOLLEYBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Squats", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats", sets: "3", reps: "10/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "8" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "8–10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Press (Dumbbells)"], name: "Overhead Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] }, Wednesday: { focus: "Jump Training & Agility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Depth Jumps", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint Intervals", sets: "8", reps: "20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Drills", sets: "5", reps: "rounds" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Shoulder Taps"], name: "Plank to Shoulder Tap", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Rollouts"], name: "Stability Ball Rollouts", sets: "3", reps: "12" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: "Deadlift", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: "Push Press", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: "Chin-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Bench"], name: "Incline DB Bench", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", sets: "4", reps: "20m" } ] }, Saturday: { focus: "Skills & Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Serving Practice"], name: "Serving Practice", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Spiking Practice"], name: "Spiking Practice", reps: "20 reps each side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Defensive Drills"], name: "Defensive Drills", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope", sets: "5", reps: "1 min" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: "Light Jog", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };
export const VOLLEYBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: "Skater Jumps", sets: "3", reps: "12/side" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-Ups", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: "Banded Rows", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" } ] }, Wednesday: { focus: "Jump Training & Agility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "5", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "4", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint in Place", sets: "5", reps: "20s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Ladder Drills", sets: "5", reps: "rounds" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "10/side" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpee Jump", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squat to Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Lunge Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Push-Up to Plank Jack", sets: "3", reps: "12" } ] }, Saturday: { focus: "Skills & Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Serving Drills"], name: "Serving Drills", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Spiking Footwork"], name: "Spiking Footwork", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Defensive Shuffle"], name: "Defensive Shuffle", reps: "10 rounds" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walk 20-30 mins"], name: "Walk 20 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };
export const VOLLEYBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Squats", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "6" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Bench"], name: "Incline DB Bench", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldown"], name: "Lat Pulldown", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Shoulder Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] }, Wednesday: { focus: "Jump Training & Agility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Depth Jumps", sets: "3", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint Intervals", sets: "8", reps: "20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Drills", sets: "5", reps: "rounds" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank Shoulder Taps"], name: "Plank to Shoulder Tap", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Rollouts"], name: "Stability Ball Rollouts", sets: "3", reps: "12" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Deadlifts"], name: "Deadlift", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Chest Press"], name: "Push Press", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline DB Press"], name: "Incline DB Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", sets: "4", reps: "20m" } ] }, Saturday: { focus: "Skills & Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Serving Practice"], name: "Serving Practice", reps: "10 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Spiking Practice"], name: "Spiking Practice", reps: "15 reps each side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Defensive Drills"], name: "Defensive Drills", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope (imaginary)"], name: "Jump Rope", sets: "4", reps: "1 min" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Light Jog/Walk"], name: "Light Jog", reps: "15 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };
export const VOLLEYBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = { Monday: { focus: "Lower Body Power", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Skater Hops"], name: "Skater Jumps", sets: "3", reps: "12/side" } ] }, Tuesday: { focus: "Upper Body Strength", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: "Banded Rows", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-Ups", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "45s" } ] }, Wednesday: { focus: "Jump Training & Agility", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "5", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Bounds"], name: "Lateral Bounds", sets: "4", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Sprint in Place", sets: "5", reps: "20s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Ladder Drills", sets: "5", reps: "rounds" } ] }, Thursday: { focus: "Core & Stability", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"], name: "Side Plank", sets: "3", reps: "30s/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "10/side" } ] }, Friday: { focus: "Full Body Explosiveness", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpee Jump", sets: "3", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squat to Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Lunge Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank to Push-Up"], name: "Push-Up to Plank Jack", sets: "3", reps: "10" } ] }, Saturday: { focus: "Skills & Conditioning", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Serving Drills"], name: "Serving Drills", reps: "10 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Spiking Footwork"], name: "Spiking Footwork", reps: "10 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Defensive Shuffle"], name: "Defensive Shuffle", reps: "10 rounds" } ] }, Sunday: { focus: "Active Recovery", exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walk 20-30 mins"], name: "Walk 20 mins" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling & Stretch"], name: "Foam Rolling" } ] } };

export const TABLE_TENNIS_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Placeholder", "exercises": [] }, "Tuesday": { "focus": "Placeholder", "exercises": [] }, "Wednesday": { "focus": "Placeholder", "exercises": [] }, "Thursday": { "focus": "Placeholder", "exercises": [] }, "Friday": { "focus": "Placeholder", "exercises": [] }, "Saturday": { "focus": "Placeholder", "exercises": [] }, "Sunday": { "focus": "Placeholder", "exercises": [] } };
export const TABLE_TENNIS_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Placeholder", "exercises": [] }, "Tuesday": { "focus": "Placeholder", "exercises": [] }, "Wednesday": { "focus": "Placeholder", "exercises": [] }, "Thursday": { "focus": "Placeholder", "exercises": [] }, "Friday": { "focus": "Placeholder", "exercises": [] }, "Saturday": { "focus": "Placeholder", "exercises": [] }, "Sunday": { "focus": "Placeholder", "exercises": [] } };
export const TABLE_TENNIS_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Placeholder", "exercises": [] }, "Tuesday": { "focus": "Placeholder", "exercises": [] }, "Wednesday": { "focus": "Placeholder", "exercises": [] }, "Thursday": { "focus": "Placeholder", "exercises": [] }, "Friday": { "focus": "Placeholder", "exercises": [] }, "Saturday": { "focus": "Placeholder", "exercises": [] }, "Sunday": { "focus": "Placeholder", "exercises": [] } };
export const TABLE_TENNIS_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = { "Monday": { "focus": "Placeholder", "exercises": [] }, "Tuesday": { "focus": "Placeholder", "exercises": [] }, "Wednesday": { "focus": "Placeholder", "exercises": [] }, "Thursday": { "focus": "Placeholder", "exercises": [] }, "Friday": { "focus": "Placeholder", "exercises": [] }, "Saturday": { "focus": "Placeholder", "exercises": [] }, "Sunday": { "focus": "Placeholder", "exercises": [] } };

    
