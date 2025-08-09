
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


const MASTER_EXERCISE_DATA: { [key: string]: Partial<ExerciseDetails> } = {
  "Bench Press": { type: "strength", muscle: "Chest" },
  "Incline Bench Press": { type: "strength", muscle: "Chest" },
  "Decline / Cable Fly": { type: "strength", muscle: "Chest" },
  "Seated Machine Fly": { type: "strength", muscle: "Chest" },
  "triceps pushdown": { type: "strength", muscle: "Triceps" },
  "Overhead Extension (Cable or Dumbbell)": { type: "strength", muscle: "Triceps" },
  "Underhand triceps pushdown": { type: "strength", muscle: "Triceps" },
  "Push-Ups": { type: "strength", muscle: "Chest" },
  "Lat Pulldowns": { type: "strength", muscle: "Back" },
  "Seated Cable Row": { type: "strength", muscle: "Back" },
  "Barbell Rows": { type: "strength", muscle: "Back" },
  "Straight arm Lat Pulldowns": { type: "strength", muscle: "Back" },
  "Dumbbell Curl": { type: "strength", muscle: "Biceps" },
  "Ez Barbell Curl": { type: "strength", muscle: "Biceps" },
  "Hammer Curl": { type: "strength", muscle: "Biceps" },
  "Chin-Ups": { type: "strength", muscle: "Back" },
  "Shoulder Press": { type: "strength", muscle: "Shoulders" },
  "Lateral Raises": { type: "strength", muscle: "Shoulders" },
  "Face Pulls": { type: "strength", muscle: "Shoulders" },
  "Shrugs": { type: "strength", muscle: "Traps" },
  "Barbell Back Squats": { type: "strength", muscle: "Legs" },
  "Romanian Deadlifts": { type: "strength", muscle: "Hamstrings" },
  "Dumbbell Walking Lunges": { type: "strength", muscle: "Legs" },
  "Calf Raises": { type: "strength", muscle: "Calves" },
  "Plank": { type: "strength", muscle: "Core" },
  "Cable Fly": { type: "strength", muscle: "Chest" },
  "Dumbbell Chest Press": { type: "strength", muscle: "Chest" },
  "Overhead Extension": { type: "strength", muscle: "Triceps" },
  "Tricep Pushdowns": { type: "strength", muscle: "Triceps" },
  "Russian Twists": { type: "strength", muscle: "Core" },
  "Hanging Leg Raises": { type: "strength", muscle: "Core" },
  "Incline Dumbbell Curls": { type: "strength", muscle: "Biceps" },
  "Reverse Curls": { type: "strength", muscle: "Forearms" },
  "Leg Extension": { type: "strength", muscle: "Quads" },
  "Leg Press": { type: "strength", muscle: "Legs" },
  "Glute Bridges": { type: "strength", muscle: "Glutes" },
  "Reverse Crunches": { type: "strength", muscle: "Core" },
  "Plank Side Holds": { type: "strength", muscle: "Core" },
  "Incline Walk": { type: "cardio", muscle: "Full Body" },
  "Stretching / Foam rolling": { type: "flexibility", muscle: "Full Body" },
  "Optional: Yoga class": { type: "flexibility", muscle: "Full Body" },
  "Incline Push-Ups": { type: "strength", muscle: "Chest" },
  "Diamond Push-Ups": { type: "strength", muscle: "Triceps" },
  "Triceps Dips": { type: "strength", muscle: "Triceps" },
  "Close-Grip Push-Ups": { type: "strength", muscle: "Triceps" },
  "Overhead Triceps Extensions": { type: "strength", muscle: "Triceps" },
  "Superman Hold": { type: "strength", muscle: "Back" },
  "Towel Rows": { type: "strength", muscle: "Back" },
  "Reverse Snow Angels": { type: "strength", muscle: "Back" },
  "Biceps Curls": { type: "strength", muscle: "Biceps" },
  "Squats": { type: "strength", muscle: "Legs" },
  "Lunges": { type: "strength", muscle: "Legs" },
  "Wall Sit": { type: "strength", muscle: "Quads" },
  "Pike Push-ups": { type: "strength", muscle: "Shoulders" },
  "Chair Dips": { type: "strength", muscle: "Triceps" },
  "Leg Raises": { type: "strength", muscle: "Core" },
  "Superman Pulls": { type: "strength", muscle: "Back" },
  "Resistance Band Rows": { type: "strength", muscle: "Back" },
  "Isometric Hold": { type: "strength", muscle: "Full Body" },
  "Wrist Curls": { type: "strength", muscle: "Forearms" },
  "Forearm Squeeze": { type: "strength", muscle: "Forearms" },
  "Jump Squats": { type: "plyometrics", muscle: "Legs" },
  "Walking Lunges": { type: "strength", muscle: "Legs" },
  "Plank to Push-Up": { type: "strength", muscle: "Core" },
  "Heel Touches": { type: "strength", muscle: "Core" },
  "Light Yoga": { type: "flexibility", muscle: "Full Body" },
  "Stretching": { type: "flexibility", muscle: "Full Body" },
  "20-30 min walk": { type: "cardio", muscle: "Full Body" },
  "Incline Chest Press": { type: "strength", muscle: "Chest" },
  "Chest Fly": { type: "strength", muscle: "Chest" },
  "Triceps Rope Pushdown": { type: "strength", muscle: "Triceps" },
  "Overhead DB Triceps Extension": { type: "strength", muscle: "Triceps" },
  "Lat Pulldown": { type: "strength", muscle: "Back" },
  "Assisted Pull-Ups": { type: "strength", muscle: "Back" },
  "Dumbbell Bicep Curls": { type: "strength", muscle: "Biceps" },
  "Cable Bicep Curls": { type: "strength", muscle: "Biceps" },
  "Smith Squats": { type: "strength", muscle: "Legs" },
  "DB Shoulder Press": { type: "strength", muscle: "Shoulders" },
  "Flat DB Bench": { type: "strength", muscle: "Chest" },
  "Skull Crushers": { type: "strength", muscle: "Triceps" },
  "Plank Hold": { type: "strength", muscle: "Core" },
  "Cable Oblique Twists": { type: "strength", muscle: "Core" },
  "T-Bar Rows": { type: "strength", muscle: "Back" },
  "Wide Lat Pulldown": { type: "strength", muscle: "Back" },
  "Concentration Curls": { type: "strength", muscle: "Biceps" },
  "Wrist Curls & Ext": { type: "strength", muscle: "Forearms" },
  "Hip Thrusts": { type: "strength", muscle: "Glutes" },
  "Bulgarian Split Squats": { type: "strength", muscle: "Legs" },
  "Leg Curls": { type: "strength", muscle: "Hamstrings" },
  "Arnold Press": { type: "strength", muscle: "Shoulders" },
  "Front Raises": { type: "strength", muscle: "Shoulders" },
  "Cable Crunch + Twists": { type: "strength", muscle: "Core" },
  "Stretch / Foam Roll": { type: "flexibility", muscle: "Full Body" },
  "Yoga (Optional)": { type: "flexibility", muscle: "Full Body" },
  "Knee Push-Ups": { type: "strength", muscle: "Chest" },
  "Wall Push-Ups": { type: "strength", muscle: "Chest" },
  "Bench Dips": { type: "strength", muscle: "Triceps" },
  "Triceps Kickbacks": { type: "strength", muscle: "Triceps" },
  "Triceps Stretch": { type: "flexibility", muscle: "Triceps" },
  "Superwoman Hold": { type: "strength", muscle: "Back" },
  "Snow Angels": { type: "strength", muscle: "Back" },
  "Wall Angels": { type: "strength", muscle: "Shoulders" },
  "Arm Circles": { type: "warmup", muscle: "Shoulders" },
  "Forearm Plank": { type: "strength", muscle: "Core" },
  "Bent Over Dumbbell Reverse Flys": { type: "strength", muscle: "Shoulders" },
  "Wrist Circles": { type: "warmup", muscle: "Forearms" },
  "Sumo Squats": { type: "strength", muscle: "Legs" },
  "Step-Ups": { type: "strength", muscle: "Legs" },
  "Donkey Kicks": { type: "strength", muscle: "Glutes" },
  "Bird Dog": { type: "strength", muscle: "Core" },
  "Walk 20-30 mins": { type: "cardio", muscle: "Full Body" },
  "Flat Barbell Bench Press": { type: "strength", muscle: "Chest" },
  "Incline Dumbbell Press": { type: "strength", muscle: "Chest" },
  "Decline Bench Press": { type: "strength", muscle: "Chest" },
  "Cable Crossover": { type: "strength", muscle: "Chest" },
  "Chest Press Machine": { type: "strength", muscle: "Chest" },
  "Dumbbell Pullover": { type: "strength", muscle: "Chest" },
  "Push-Up (Chest Focus)": { type: "strength", muscle: "Chest" },
  "Decline Push-Ups": { type: "strength", muscle: "Chest" },
  "Wide Arm Push-Ups": { type: "strength", muscle: "Chest" },
  "Chest Dips (Chair)": { type: "strength", muscle: "Chest" },
  "Explosive Push-Ups": { type: "plyometrics", muscle: "Chest" },
  "Incline Chest Press (Machine or DB)": { type: "strength", muscle: "Chest" },
  "Pec Deck Machine": { type: "strength", muscle: "Chest" },
  "Flat Dumbbell Press": { type: "strength", muscle: "Chest" },
  "Incline Cable Fly": { type: "strength", muscle: "Chest" },
  "Incline Push-Ups (Bench/Chair)": { type: "strength", muscle: "Chest" },
  "Dumbbell Floor Press (If available)": { type: "strength", muscle: "Chest" },
  "Chest Squeeze (with Towel)": { type: "strength", muscle: "Chest" },
};

export const MALE_CHEST_GYM: DayWorkout = {
  focus: "Chest (Gym)",
  exercises: [
    { ...defaultExerciseProps, name: "Flat Barbell Bench Press", sets: "4", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Flat Barbell Bench Press"] },
    { ...defaultExerciseProps, name: "Incline Dumbbell Press", sets: "4", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"] },
    { ...defaultExerciseProps, name: "Decline Bench Press", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Decline Bench Press"] },
    { ...defaultExerciseProps, name: "Cable Crossover", sets: "3", reps: "12-15", rest: "45s", ...MASTER_EXERCISE_DATA["Cable Crossover"] },
    { ...defaultExerciseProps, name: "Chest Press Machine", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Chest Press Machine"] },
    { ...defaultExerciseProps, name: "Dumbbell Pullover", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Pullover"] },
  ]
};

export const MALE_CHEST_HOME: DayWorkout = {
  focus: "Chest (Home)",
  exercises: [
    { ...defaultExerciseProps, name: "Push-Up (Chest Focus)", sets: "4", reps: "15-20", rest: "60s", ...MASTER_EXERCISE_DATA["Push-Up (Chest Focus)"] },
    { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
    { ...defaultExerciseProps, name: "Decline Push-Ups", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Decline Push-Ups"] },
    { ...defaultExerciseProps, name: "Wide Arm Push-Ups", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Wide Arm Push-Ups"] },
    { ...defaultExerciseProps, name: "Chest Dips (Chair)", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Chest Dips (Chair)"] },
    { ...defaultExerciseProps, name: "Explosive Push-Ups", sets: "2", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Explosive Push-Ups"] },
  ]
};

export const FEMALE_CHEST_GYM: DayWorkout = {
  focus: "Chest (Gym)",
  exercises: [
    { ...defaultExerciseProps, name: "Incline Chest Press (Machine or DB)", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Chest Press (Machine or DB)"] },
    { ...defaultExerciseProps, name: "Pec Deck Machine", sets: "3", reps: "12-15", rest: "45s", ...MASTER_EXERCISE_DATA["Pec Deck Machine"] },
    { ...defaultExerciseProps, name: "Flat Dumbbell Press", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Flat Dumbbell Press"] },
    { ...defaultExerciseProps, name: "Cable Fly", sets: "3", reps: "15", rest: "45s", ...MASTER_EXERCISE_DATA["Cable Fly"] },
    { ...defaultExerciseProps, name: "Chest Press Machine", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Chest Press Machine"] },
    { ...defaultExerciseProps, name: "Incline Cable Fly", sets: "3", reps: "12-15", rest: "45s", ...MASTER_EXERCISE_DATA["Incline Cable Fly"] },
  ]
};

export const FEMALE_CHEST_HOME: DayWorkout = {
  focus: "Chest (Home)",
  exercises: [
    { ...defaultExerciseProps, name: "Wall Push-Ups", sets: "3", reps: "20", rest: "45s", ...MASTER_EXERCISE_DATA["Wall Push-Ups"] },
    { ...defaultExerciseProps, name: "Knee Push-Ups", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Knee Push-Ups"] },
    { ...defaultExerciseProps, name: "Incline Push-Ups (Bench/Chair)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Push-Ups (Bench/Chair)"] },
    { ...defaultExerciseProps, name: "Wide Grip Push-Ups", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Push-Ups"] },
    { ...defaultExerciseProps, name: "Dumbbell Floor Press (If available)", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Floor Press (If available)"] },
    { ...defaultExerciseProps, name: "Chest Squeeze (with Towel)", sets: "3", reps: "15", rest: "45s", ...MASTER_EXERCISE_DATA["Chest Squeeze (with Towel)"] },
  ]
};

export const GENERAL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Bench Press", sets: "3", reps: "8-10", ...MASTER_EXERCISE_DATA["Bench Press"] },
      { ...defaultExerciseProps, name: "Incline Bench Press", sets: "3", reps: "8-10", ...MASTER_EXERCISE_DATA["Incline Bench Press"] },
      { ...defaultExerciseProps, name: "Decline / Cable Fly", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Decline / Cable Fly"] },
      { ...defaultExerciseProps, name: "Seated Machine Fly", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Seated Machine Fly"] },
      { ...defaultExerciseProps, name: "triceps pushdown", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["triceps pushdown"] },
      { ...defaultExerciseProps, name: "Overhead Extension (Cable or Dumbbell)", sets: "3", reps: "12-15", ...MASTER_EXERCISE_DATA["Overhead Extension (Cable or Dumbbell)"] },
      { ...defaultExerciseProps, name: "Underhand triceps pushdown", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Underhand triceps pushdown"] },
      { ...defaultExerciseProps, name: "Push-Ups", sets: "2", reps: "Max", ...MASTER_EXERCISE_DATA["Push-Ups"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Lat Pulldowns", sets: "4", reps: "10-12", ...MASTER_EXERCISE_DATA["Lat Pulldowns"] },
      { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
      { ...defaultExerciseProps, name: "Barbell Rows", sets: "3", reps: "8-10", ...MASTER_EXERCISE_DATA["Barbell Rows"] },
      { ...defaultExerciseProps, name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"] },
      { ...defaultExerciseProps, name: "Dumbbell Curl", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Dumbbell Curl"] },
      { ...defaultExerciseProps, name: "Ez Barbell Curl", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Ez Barbell Curl"] },
      { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
      { ...defaultExerciseProps, name: "Chin-Ups", sets: "2", reps: "Max", ...MASTER_EXERCISE_DATA["Chin-Ups"] },
    ]
  },
  Wednesday: {
      focus: "Legs & Shoulder",
      exercises: [
          { ...defaultExerciseProps, name: "Shoulder Press", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Shoulder Press"] },
          { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
          { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15 each", ...MASTER_EXERCISE_DATA["Face Pulls"] },
          { ...defaultExerciseProps, name: "Shrugs", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Shrugs"] },
          { ...defaultExerciseProps, name: "Barbell Back Squats", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Barbell Back Squats"] },
          { ...defaultExerciseProps, name: "Romanian Deadlifts", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Romanian Deadlifts"] },
          { ...defaultExerciseProps, name: "Dumbbell Walking Lunges", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"] },
          { ...defaultExerciseProps, name: "Calf Raises", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Calf Raises"] },
          { ...defaultExerciseProps, name: "Plank", sets: "3", reps: "Max", ...MASTER_EXERCISE_DATA["Plank"] },
      ]
  },
  Thursday: {
      focus: "Chest, Triceps & Core",
      exercises: [
          { ...defaultExerciseProps, name: "Bench Press", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Bench Press"] },
          { ...defaultExerciseProps, name: "Incline Bench Press", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Incline Bench Press"] },
          { ...defaultExerciseProps, name: "Cable Fly", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Cable Fly"] },
          { ...defaultExerciseProps, name: "Dumbbell Chest Press", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Dumbbell Chest Press"] },
          { ...defaultExerciseProps, name: "Overhead Extension", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Overhead Extension"] },
          { ...defaultExerciseProps, name: "Tricep Pushdowns", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Tricep Pushdowns"] },
          { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "25", ...MASTER_EXERCISE_DATA["Russian Twists"] },
          { ...defaultExerciseProps, name: "Hanging Leg Raises", sets: "3", reps: "20 reps & 30s hold", ...MASTER_EXERCISE_DATA["Hanging Leg Raises"] },
      ]
  },
  Friday: {
      focus: "Back, Biceps & Forearms",
      exercises: [
          { ...defaultExerciseProps, name: "Lat Pulldowns", sets: "4", reps: "10", ...MASTER_EXERCISE_DATA["Lat Pulldowns"] },
          { ...defaultExerciseProps, name: "Barbell Rows", sets: "3", reps: "8-10", ...MASTER_EXERCISE_DATA["Barbell Rows"] },
          { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "8-10", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
          { ...defaultExerciseProps, name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"] },
          { ...defaultExerciseProps, name: "Incline Dumbbell Curls", sets: "3", reps: "8-10", ...MASTER_EXERCISE_DATA["Incline Dumbbell Curls"] },
          { ...defaultExerciseProps, name: "Dumbbell Curl", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Dumbbell Curl"] },
          { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
          { ...defaultExerciseProps, name: "Reverse Curls", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
      ]
  },
  Saturday: {
      focus: "Legs, Shoulder & Core",
      exercises: [
          { ...defaultExerciseProps, name: "Shoulder Press", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Shoulder Press"] },
          { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
          { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15 each", ...MASTER_EXERCISE_DATA["Face Pulls"] },
          { ...defaultExerciseProps, name: "Leg Extension", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Leg Extension"] },
          { ...defaultExerciseProps, name: "Leg Press", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Leg Press"] },
          { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
          { ...defaultExerciseProps, name: "Reverse Crunches", sets: "3", reps: "25", ...MASTER_EXERCISE_DATA["Reverse Crunches"] },
          { ...defaultExerciseProps, name: "Plank Side Holds", sets: "3", reps: "20 reps & 30-60s hold both side", ...MASTER_EXERCISE_DATA["Plank Side Holds"] },
      ]
  },
  Sunday: {
      focus: "Rest or Light Cardio",
      exercises: [
          { ...defaultExerciseProps, name: "Incline Walk", sets: "1", reps: "20-30 mins", ...MASTER_EXERCISE_DATA["Incline Walk"] },
          { ...defaultExerciseProps, name: "Stretching / Foam rolling", sets: "1", reps: "10-15 mins", ...MASTER_EXERCISE_DATA["Stretching / Foam rolling"] },
          { ...defaultExerciseProps, name: "Optional: Yoga class", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["Optional: Yoga class"] },
      ]
  }
};

export const GENERAL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Push-Ups", sets: "4", reps: "12-15", ...MASTER_EXERCISE_DATA["Push-Ups"] },
      { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
      { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
      { ...defaultExerciseProps, name: "Triceps Dips", sets: "4", reps: "10-15", ...MASTER_EXERCISE_DATA["Triceps Dips"] },
      { ...defaultExerciseProps, name: "Close-Grip Push-Ups", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Close-Grip Push-Ups"] },
      { ...defaultExerciseProps, name: "Overhead Triceps Extensions", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Overhead Triceps Extensions"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Superman Hold", sets: "4", reps: "30 sec", ...MASTER_EXERCISE_DATA["Superman Hold"] },
      { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "12", ...MASTER_EXERCISE_DATA["Towel Rows"] },
      { ...defaultExerciseProps, name: "Reverse Snow Angels", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Reverse Snow Angels"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "4", reps: "12-15", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Chin-Ups", sets: "3", reps: "Max", ...MASTER_EXERCISE_DATA["Chin-Ups"] },
      { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, name: "Squats", sets: "4", reps: "15", ...MASTER_EXERCISE_DATA["Squats"] },
      { ...defaultExerciseProps, name: "Lunges", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Lunges"] },
      { ...defaultExerciseProps, name: "Wall Sit", sets: "3", reps: "45 sec", ...MASTER_EXERCISE_DATA["Wall Sit"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "4", reps: "10", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
      { ...defaultExerciseProps, name: "Calf Raises", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Calf Raises"] },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Push-Ups", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Push-Ups"] },
      { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
      { ...defaultExerciseProps, name: "Chair Dips", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Chair Dips"] },
      { ...defaultExerciseProps, name: "Plank", sets: "3", reps: "45 sec", ...MASTER_EXERCISE_DATA["Plank"] },
      { ...defaultExerciseProps, name: "Leg Raises", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Leg Raises"] },
      { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Russian Twists"] },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, name: "Superman Pulls", sets: "4", reps: "12", ...MASTER_EXERCISE_DATA["Superman Pulls"] },
      { ...defaultExerciseProps, name: "Resistance Band Rows", sets: "4", reps: "15", ...MASTER_EXERCISE_DATA["Resistance Band Rows"] },
      { ...defaultExerciseProps, name: "Isometric Hold", sets: "3", reps: "30 sec", ...MASTER_EXERCISE_DATA["Isometric Hold"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Wrist Curls", sets: "4", reps: "20", ...MASTER_EXERCISE_DATA["Wrist Curls"] },
      { ...defaultExerciseProps, name: "Forearm Squeeze", sets: "4", reps: "30 sec", ...MASTER_EXERCISE_DATA["Forearm Squeeze"] },
    ]
  },
  Saturday: {
    focus: "Legs, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Jump Squats", sets: "4", reps: "15", ...MASTER_EXERCISE_DATA["Jump Squats"] },
      { ...defaultExerciseProps, name: "Walking Lunges", sets: "3", reps: "10 each leg", ...MASTER_EXERCISE_DATA["Walking Lunges"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "4", reps: "10-12", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Plank to Push-Up", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Plank to Push-Up"] },
      { ...defaultExerciseProps, name: "Heel Touches", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Heel Touches"] },
      { ...defaultExerciseProps, name: "Superman Hold", sets: "3", reps: "30 sec", ...MASTER_EXERCISE_DATA["Superman Hold"] },
    ]
  },
  Sunday: {
    focus: "Rest or Light Cardio",
    exercises: [
      { ...defaultExerciseProps, name: "Light Yoga", sets: "1", reps: "15 mins", ...MASTER_EXERCISE_DATA["Light Yoga"] },
      { ...defaultExerciseProps, name: "Stretching", sets: "1", reps: "15 mins", ...MASTER_EXERCISE_DATA["Stretching"] },
      { ...defaultExerciseProps, name: "20-30 min walk", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["20-30 min walk"] },
    ]
  }
};

export const GENERAL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Incline Chest Press", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Incline Chest Press"] },
      { ...defaultExerciseProps, name: "Chest Fly", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Chest Fly"] },
      { ...defaultExerciseProps, name: "Push-Ups", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Push-Ups"] },
      { ...defaultExerciseProps, name: "Triceps Rope Pushdown", sets: "3", reps: "12-15", ...MASTER_EXERCISE_DATA["Triceps Rope Pushdown"] },
      { ...defaultExerciseProps, name: "Overhead DB Triceps Extension", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Overhead DB Triceps Extension"] },
      { ...defaultExerciseProps, name: "Triceps Dips", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Triceps Dips"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Lat Pulldown", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Lat Pulldown"] },
      { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
      { ...defaultExerciseProps, name: "Assisted Pull-Ups", sets: "3", reps: "6-10", ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"] },
      { ...defaultExerciseProps, name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", ...MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"] },
      { ...defaultExerciseProps, name: "Cable Bicep Curls", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Cable Bicep Curls"] },
      { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, name: "Smith Squats", sets: "4", reps: "10-12", ...MASTER_EXERCISE_DATA["Smith Squats"] },
      { ...defaultExerciseProps, name: "Dumbbell Walking Lunges", sets: "3", reps: "12 steps", ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"] },
      { ...defaultExerciseProps, name: "Leg Press", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Leg Press"] },
      { ...defaultExerciseProps, name: "DB Shoulder Press", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["DB Shoulder Press"] },
      { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
      { ...defaultExerciseProps, name: "Calf Raises", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Calf Raises"] },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Flat DB Bench", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Flat DB Bench"] },
      { ...defaultExerciseProps, name: "Cable Fly", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Cable Fly"] },
      { ...defaultExerciseProps, name: "Skull Crushers", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Skull Crushers"] },
      { ...defaultExerciseProps, name: "Plank Hold", sets: "3", reps: "45s", ...MASTER_EXERCISE_DATA["Plank Hold"] },
      { ...defaultExerciseProps, name: "Hanging Leg Raises", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Hanging Leg Raises"] },
      { ...defaultExerciseProps, name: "Cable Oblique Twists", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Cable Oblique Twists"] },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, name: "T-Bar Rows", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["T-Bar Rows"] },
      { ...defaultExerciseProps, name: "Wide Lat Pulldown", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Wide Lat Pulldown"] },
      { ...defaultExerciseProps, name: "Cable Bicep Curls", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Cable Bicep Curls"] },
      { ...defaultExerciseProps, name: "Concentration Curls", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Concentration Curls"] },
      { ...defaultExerciseProps, name: "Reverse Curls", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
      { ...defaultExerciseProps, name: "Wrist Curls & Ext", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Wrist Curls & Ext"] },
    ]
  },
  Saturday: {
    focus: "Glutes, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Hip Thrusts", sets: "4", reps: "12", ...MASTER_EXERCISE_DATA["Hip Thrusts"] },
      { ...defaultExerciseProps, name: "Bulgarian Split Squats", sets: "3", reps: "10/leg", ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"] },
      { ...defaultExerciseProps, name: "Leg Curls", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Leg Curls"] },
      { ...defaultExerciseProps, name: "Arnold Press", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Arnold Press"] },
      { ...defaultExerciseProps, name: "Front Raises", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Front Raises"] },
      { ...defaultExerciseProps, name: "Cable Crunch + Twists", sets: "3", reps: "15 + 20", ...MASTER_EXERCISE_DATA["Cable Crunch + Twists"] },
    ]
  },
  Sunday: {
    focus: "Rest or Light Cardio",
    exercises: [
      { ...defaultExerciseProps, name: "Incline Walk", sets: "1", reps: "20-30 min", ...MASTER_EXERCISE_DATA["Incline Walk"] },
      { ...defaultExerciseProps, name: "Stretch / Foam Roll", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["Stretch / Foam Roll"] },
      { ...defaultExerciseProps, name: "Yoga (Optional)", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["Yoga (Optional)"] },
    ]
  }
};

export const GENERAL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Knee Push-Ups", sets: "4", reps: "10-12", ...MASTER_EXERCISE_DATA["Knee Push-Ups"] },
      { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
      { ...defaultExerciseProps, name: "Wall Push-Ups", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Wall Push-Ups"] },
      { ...defaultExerciseProps, name: "Bench Dips", sets: "3", reps: "10-12", ...MASTER_EXERCISE_DATA["Bench Dips"] },
      { ...defaultExerciseProps, name: "Triceps Kickbacks", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Triceps Kickbacks"] },
      { ...defaultExerciseProps, name: "Triceps Stretch", sets: "3", reps: "30s", ...MASTER_EXERCISE_DATA["Triceps Stretch"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Superwoman Hold", sets: "4", reps: "30s", ...MASTER_EXERCISE_DATA["Superwoman Hold"] },
      { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "12", ...MASTER_EXERCISE_DATA["Towel Rows"] },
      { ...defaultExerciseProps, name: "Snow Angels", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Snow Angels"] },
      { ...defaultExerciseProps, name: "Bicep Curls", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Wall Angels", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Wall Angels"] },
      { ...defaultExerciseProps, name: "Hammer Curls", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, name: "Squats", sets: "4", reps: "15", ...MASTER_EXERCISE_DATA["Squats"] },
      { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
      { ...defaultExerciseProps, name: "Lunges", sets: "3", reps: "10/leg", ...MASTER_EXERCISE_DATA["Lunges"] },
      { ...defaultExerciseProps, name: "Wall Sit", sets: "3", reps: "45s", ...MASTER_EXERCISE_DATA["Wall Sit"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Arm Circles", sets: "3", reps: "30s", ...MASTER_EXERCISE_DATA["Arm Circles"] },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
      { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
      { ...defaultExerciseProps, name: "Bench Dips", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Bench Dips"] },
      { ...defaultExerciseProps, name: "Forearm Plank", sets: "3", reps: "30-45s", ...MASTER_EXERCISE_DATA["Forearm Plank"] },
      { ...defaultExerciseProps, name: "Leg Raises", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Leg Raises"] },
      { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Russian Twists"] },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, name: "Superman Pulls", sets: "4", reps: "12", ...MASTER_EXERCISE_DATA["Superman Pulls"] },
      { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "12", ...MASTER_EXERCISE_DATA["Towel Rows"] },
      { ...defaultExerciseProps, name: "Bent Over Dumbbell Reverse Flys", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "3", reps: "15", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Wrist Circles", sets: "3", reps: "30s", ...MASTER_EXERCISE_DATA["Wrist Circles"] },
      { ...defaultExerciseProps, name: "Forearm Squeeze", sets: "3", reps: "30s", ...MASTER_EXERCISE_DATA["Forearm Squeeze"] },
    ]
  },
  Saturday: {
    focus: "Glutes, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Sumo Squats", sets: "4", reps: "15", ...MASTER_EXERCISE_DATA["Sumo Squats"] },
      { ...defaultExerciseProps, name: "Step-Ups", sets: "3", reps: "12", ...MASTER_EXERCISE_DATA["Step-Ups"] },
      { ...defaultExerciseProps, name: "Donkey Kicks", sets: "3", reps: "15/leg", ...MASTER_EXERCISE_DATA["Donkey Kicks"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "3", reps: "10", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Heel Touches", sets: "3", reps: "20", ...MASTER_EXERCISE_DATA["Heel Touches"] },
      { ...defaultExerciseProps, name: "Bird Dog", sets: "3", reps: "10/side", ...MASTER_EXERCISE_DATA["Bird Dog"] },
    ]
  },
  Sunday: {
    focus: "Active Recovery",
    exercises: [
      { ...defaultExerciseProps, name: "Yoga (Optional)", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["Yoga (Optional)"] },
      { ...defaultExerciseProps, name: "Stretching", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["Stretching"] },
      { ...defaultExerciseProps, name: "Walk 20-30 mins", sets: "1", reps: "As desired", ...MASTER_EXERCISE_DATA["Walk 20-30 mins"] },
    ]
  }
};
