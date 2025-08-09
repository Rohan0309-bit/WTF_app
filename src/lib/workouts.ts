
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
  "Deadlifts": { type: "strength", muscle: "Back" },
  "Pull-Ups": { type: "strength", muscle: "Back" },
  "Inverted Rows (using table)": { type: "strength", muscle: "Back" },
  "Prone Cobra": { type: "strength", muscle: "Back" },
  "Single Arm Dumbbell Row": { type: "strength", muscle: "Back" },
  "Back Extensions (Hyperextensions)": { type: "strength", muscle: "Back" },
  "Prone Arm Lifts (Y-T-W)": { type: "strength", muscle: "Back" },
  "Cat-Cow Stretch": { type: "flexibility", muscle: "Back" },
  "Barbell Curls": { type: "strength", muscle: "Biceps" },
  "Overhead Cable Extension": { type: "strength", muscle: "Triceps" },
  "Resistance Band Curls": { type: "strength", muscle: "Biceps" },
  "Overhead Triceps Extensions (Backpack/Weight)": { type: "strength", muscle: "Triceps" },
  "Hammer Curls (Water Bottles/Dumbbells)": { type: "strength", muscle: "Biceps" },
  "Wrist Squeezes (Towel/Stress Ball)": { type: "strength", muscle: "Forearms" },
  "Cable Triceps Pushdowns": { type: "strength", muscle: "Triceps" },
  "Incline Hammer Curls": { type: "strength", muscle: "Biceps" },
  "Overhead Water Bottle Extensions": { type: "strength", muscle: "Triceps" },
  "Hammer Curls (Water Bottles)": { type: "strength", muscle: "Biceps" },
  "Reverse Band Curls": { type: "strength", muscle: "Biceps" },
  "Cable Rope Crunch": { type: "strength", muscle: "Core" },
  "Roman Chair Sit-Ups": { type: "strength", muscle: "Core" },
  "Weighted Russian Twists": { type: "strength", muscle: "Core" },
  "Decline Crunch": { type: "strength", muscle: "Core" },
  "Hanging Knee Tucks": { type: "strength", muscle: "Core" },
  "Crunches": { type: "strength", muscle: "Core" },
  "Bicycle Crunches": { type: "strength", muscle: "Core" },
  "Russian Twists (Bodyweight)": { type: "strength", muscle: "Core" },
  "Side Plank (Both Sides)": { type: "strength", muscle: "Core" },
  "Mountain Climbers": { type: "strength", muscle: "Core" },
  "Seated Ab Machine Crunch": { type: "strength", muscle: "Core" },
  "Decline Sit-Ups": { type: "strength", muscle: "Core" },
  "Stability Ball Pass": { type: "strength", muscle: "Core" },
  "Flutter Kicks": { type: "strength", muscle: "Core" },
  "Side Plank Hip Dips": { type: "strength", muscle: "Core" },
  "Shoulder Press (Barbell or Dumbbell)": { type: "strength", muscle: "Shoulders" },
  "Lateral Arm Circles (Small + Big)": { type: "warmup", muscle: "Shoulders" },
  "Elevated Pike Hold": { type: "strength", muscle: "Shoulders" },
  "Dumbbell Shoulder Press": { type: "strength", muscle: "Shoulders" },
  "Wall Walks": { type: "strength", muscle: "Shoulders" },
  "Lateral Arm Raises (Using Water Bottles/Bands)": { type: "strength", muscle: "Shoulders" },
  "Rear Delt Pulses (Bodyweight or Light Weights)": { type: "strength", muscle: "Shoulders" },
  "Front Raises (Bottles/Bands)": { type: "strength", muscle: "Shoulders" },
  "Leg Curl Machine": { type: "strength", muscle: "Hamstrings" },
  "Standing Calf Raises": { type: "strength", muscle: "Calves" },
  "Single-Leg Calf Raises": { type: "strength", muscle: "Calves" },
  "Cable Kickbacks": { type: "strength", muscle: "Glutes" },
  "Seated Calf Raises": { type: "strength", muscle: "Calves" },
  "Side-Lying Leg Raises": { type: "strength", muscle: "Glutes" },
  "Glute Bridge March": { type: "strength", muscle: "Glutes" },
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
      { ...defaultExerciseProps, name: "Bench Press", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Bench Press"] },
      { ...defaultExerciseProps, name: "Incline Bench Press", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Bench Press"] },
      { ...defaultExerciseProps, name: "Decline / Cable Fly", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Decline / Cable Fly"] },
      { ...defaultExerciseProps, name: "Seated Machine Fly", sets: "3", reps: "15", rest: "45s", ...MASTER_EXERCISE_DATA["Seated Machine Fly"] },
      { ...defaultExerciseProps, name: "triceps pushdown", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["triceps pushdown"] },
      { ...defaultExerciseProps, name: "Overhead Extension (Cable or Dumbbell)", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead Extension (Cable or Dumbbell)"] },
      { ...defaultExerciseProps, name: "Underhand triceps pushdown", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Underhand triceps pushdown"] },
      { ...defaultExerciseProps, name: "Push-Ups", sets: "2", reps: "Max", rest: "60s", ...MASTER_EXERCISE_DATA["Push-Ups"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Lat Pulldowns", sets: "4", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Lat Pulldowns"] },
      { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
      { ...defaultExerciseProps, name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Barbell Rows"] },
      { ...defaultExerciseProps, name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"] },
      { ...defaultExerciseProps, name: "Dumbbell Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Curl"] },
      { ...defaultExerciseProps, name: "Ez Barbell Curl", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Ez Barbell Curl"] },
      { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
      { ...defaultExerciseProps, name: "Chin-Ups", sets: "2", reps: "Max", rest: "60s", ...MASTER_EXERCISE_DATA["Chin-Ups"] },
    ]
  },
  Wednesday: {
      focus: "Legs & Shoulder",
      exercises: [
          { ...defaultExerciseProps, name: "Shoulder Press", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Shoulder Press"] },
          { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
          { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15 each", rest: "60s", ...MASTER_EXERCISE_DATA["Face Pulls"] },
          { ...defaultExerciseProps, name: "Shrugs", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Shrugs"] },
          { ...defaultExerciseProps, name: "Barbell Back Squats", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Barbell Back Squats"] },
          { ...defaultExerciseProps, name: "Romanian Deadlifts", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Romanian Deadlifts"] },
          { ...defaultExerciseProps, name: "Dumbbell Walking Lunges", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"] },
          { ...defaultExerciseProps, name: "Calf Raises", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Calf Raises"] },
          { ...defaultExerciseProps, name: "Plank", sets: "3", reps: "Max", rest: "60s", ...MASTER_EXERCISE_DATA["Plank"] },
      ]
  },
  Thursday: {
      focus: "Chest, Triceps & Core",
      exercises: [
          { ...defaultExerciseProps, name: "Bench Press", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Bench Press"] },
          { ...defaultExerciseProps, name: "Incline Bench Press", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Bench Press"] },
          { ...defaultExerciseProps, name: "Cable Fly", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Fly"] },
          { ...defaultExerciseProps, name: "Dumbbell Chest Press", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Chest Press"] },
          { ...defaultExerciseProps, name: "Overhead Extension", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead Extension"] },
          { ...defaultExerciseProps, name: "Tricep Pushdowns", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Tricep Pushdowns"] },
          { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "25", rest: "60s", ...MASTER_EXERCISE_DATA["Russian Twists"] },
          { ...defaultExerciseProps, name: "Hanging Leg Raises", sets: "3", reps: "20 reps & 30s hold", rest: "60s", ...MASTER_EXERCISE_DATA["Hanging Leg Raises"] },
      ]
  },
  Friday: {
      focus: "Back, Biceps & Forearms",
      exercises: [
          { ...defaultExerciseProps, name: "Lat Pulldowns", sets: "4", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Lat Pulldowns"] },
          { ...defaultExerciseProps, name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Barbell Rows"] },
          { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
          { ...defaultExerciseProps, name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"] },
          { ...defaultExerciseProps, name: "Incline Dumbbell Curls", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Dumbbell Curls"] },
          { ...defaultExerciseProps, name: "Dumbbell Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Curl"] },
          { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
          { ...defaultExerciseProps, name: "Reverse Curls", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
      ]
  },
  Saturday: {
      focus: "Legs, Shoulder & Core",
      exercises: [
          { ...defaultExerciseProps, name: "Shoulder Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Shoulder Press"] },
          { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
          { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15 each", rest: "60s", ...MASTER_EXERCISE_DATA["Face Pulls"] },
          { ...defaultExerciseProps, name: "Leg Extension", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Extension"] },
          { ...defaultExerciseProps, name: "Leg Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Press"] },
          { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
          { ...defaultExerciseProps, name: "Reverse Crunches", sets: "3", reps: "25", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Crunches"] },
          { ...defaultExerciseProps, name: "Plank Side Holds", sets: "3", reps: "20 reps & 30-60s hold both side", rest: "60s", ...MASTER_EXERCISE_DATA["Plank Side Holds"] },
      ]
  },
  Sunday: {
      focus: "Rest or Light Cardio",
      exercises: [
          { ...defaultExerciseProps, name: "Incline Walk", sets: "1", reps: "20-30 mins", rest: "N/A", ...MASTER_EXERCISE_DATA["Incline Walk"] },
          { ...defaultExerciseProps, name: "Stretching / Foam rolling", sets: "1", reps: "10-15 mins", rest: "N/A", ...MASTER_EXERCISE_DATA["Stretching / Foam rolling"] },
          { ...defaultExerciseProps, name: "Optional: Yoga class", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["Optional: Yoga class"] },
      ]
  }
};

export const GENERAL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Push-Ups", sets: "4", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Push-Ups"] },
      { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
      { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
      { ...defaultExerciseProps, name: "Triceps Dips", sets: "4", reps: "10-15", rest: "60s", ...MASTER_EXERCISE_DATA["Triceps Dips"] },
      { ...defaultExerciseProps, name: "Close-Grip Push-Ups", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Close-Grip Push-Ups"] },
      { ...defaultExerciseProps, name: "Overhead Triceps Extensions", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead Triceps Extensions"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Superman Hold", sets: "4", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Superman Hold"] },
      { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Towel Rows"] },
      { ...defaultExerciseProps, name: "Reverse Snow Angels", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Snow Angels"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "4", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Chin-Ups", sets: "3", reps: "Max", rest: "60s", ...MASTER_EXERCISE_DATA["Chin-Ups"] },
      { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, name: "Squats", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Squats"] },
      { ...defaultExerciseProps, name: "Lunges", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Lunges"] },
      { ...defaultExerciseProps, name: "Wall Sit", sets: "3", reps: "45 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Wall Sit"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "4", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
      { ...defaultExerciseProps, name: "Calf Raises", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Calf Raises"] },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Push-Ups", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Push-Ups"] },
      { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
      { ...defaultExerciseProps, name: "Chair Dips", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Chair Dips"] },
      { ...defaultExerciseProps, name: "Plank", sets: "3", reps: "45 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Plank"] },
      { ...defaultExerciseProps, name: "Leg Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Raises"] },
      { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Russian Twists"] },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, name: "Superman Pulls", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Superman Pulls"] },
      { ...defaultExerciseProps, name: "Resistance Band Rows", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Resistance Band Rows"] },
      { ...defaultExerciseProps, name: "Isometric Hold", sets: "3", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Isometric Hold"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Wrist Curls", sets: "4", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Curls"] },
      { ...defaultExerciseProps, name: "Forearm Squeeze", sets: "4", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Forearm Squeeze"] },
    ]
  },
  Saturday: {
    focus: "Legs, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Jump Squats", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Jump Squats"] },
      { ...defaultExerciseProps, name: "Walking Lunges", sets: "3", reps: "10 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Walking Lunges"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "4", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Plank to Push-Up", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Plank to Push-Up"] },
      { ...defaultExerciseProps, name: "Heel Touches", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Heel Touches"] },
      { ...defaultExerciseProps, name: "Superman Hold", sets: "3", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Superman Hold"] },
    ]
  },
  Sunday: {
    focus: "Rest or Light Cardio",
    exercises: [
      { ...defaultExerciseProps, name: "Light Yoga", sets: "1", reps: "15 mins", rest: "N/A", ...MASTER_EXERCISE_DATA["Light Yoga"] },
      { ...defaultExerciseProps, name: "Stretching", sets: "1", reps: "15 mins", rest: "N/A", ...MASTER_EXERCISE_DATA["Stretching"] },
      { ...defaultExerciseProps, name: "20-30 min walk", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["20-30 min walk"] },
    ]
  }
};

export const GENERAL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Incline Chest Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Chest Press"] },
      { ...defaultExerciseProps, name: "Chest Fly", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Chest Fly"] },
      { ...defaultExerciseProps, name: "Push-Ups", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Push-Ups"] },
      { ...defaultExerciseProps, name: "Triceps Rope Pushdown", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Triceps Rope Pushdown"] },
      { ...defaultExerciseProps, name: "Overhead DB Triceps Extension", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead DB Triceps Extension"] },
      { ...defaultExerciseProps, name: "Triceps Dips", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Triceps Dips"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Lat Pulldown", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Lat Pulldown"] },
      { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
      { ...defaultExerciseProps, name: "Assisted Pull-Ups", sets: "3", reps: "6-10", rest: "60s", ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"] },
      { ...defaultExerciseProps, name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"] },
      { ...defaultExerciseProps, name: "Cable Bicep Curls", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Bicep Curls"] },
      { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, name: "Smith Squats", sets: "4", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Smith Squats"] },
      { ...defaultExerciseProps, name: "Dumbbell Walking Lunges", sets: "3", reps: "12 steps", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"] },
      { ...defaultExerciseProps, name: "Leg Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Press"] },
      { ...defaultExerciseProps, name: "DB Shoulder Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["DB Shoulder Press"] },
      { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
      { ...defaultExerciseProps, name: "Calf Raises", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Calf Raises"] },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Flat DB Bench", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Flat DB Bench"] },
      { ...defaultExerciseProps, name: "Cable Fly", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Fly"] },
      { ...defaultExerciseProps, name: "Skull Crushers", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Skull Crushers"] },
      { ...defaultExerciseProps, name: "Plank Hold", sets: "3", reps: "45s", rest: "60s", ...MASTER_EXERCISE_DATA["Plank Hold"] },
      { ...defaultExerciseProps, name: "Hanging Leg Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Hanging Leg Raises"] },
      { ...defaultExerciseProps, name: "Cable Oblique Twists", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Oblique Twists"] },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, name: "T-Bar Rows", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["T-Bar Rows"] },
      { ...defaultExerciseProps, name: "Wide Lat Pulldown", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Wide Lat Pulldown"] },
      { ...defaultExerciseProps, name: "Cable Bicep Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Bicep Curls"] },
      { ...defaultExerciseProps, name: "Concentration Curls", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Concentration Curls"] },
      { ...defaultExerciseProps, name: "Reverse Curls", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
      { ...defaultExerciseProps, name: "Wrist Curls & Ext", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Curls & Ext"] },
    ]
  },
  Saturday: {
    focus: "Glutes, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Hip Thrusts", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hip Thrusts"] },
      { ...defaultExerciseProps, name: "Bulgarian Split Squats", sets: "3", reps: "10/leg", rest: "60s", ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"] },
      { ...defaultExerciseProps, name: "Leg Curls", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Curls"] },
      { ...defaultExerciseProps, name: "Arnold Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Arnold Press"] },
      { ...defaultExerciseProps, name: "Front Raises", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Front Raises"] },
      { ...defaultExerciseProps, name: "Cable Crunch + Twists", sets: "3", reps: "15 + 20", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Crunch + Twists"] },
    ]
  },
  Sunday: {
    focus: "Rest or Light Cardio",
    exercises: [
      { ...defaultExerciseProps, name: "Incline Walk", sets: "1", reps: "20-30 min", rest: "N/A", ...MASTER_EXERCISE_DATA["Incline Walk"] },
      { ...defaultExerciseProps, name: "Stretch / Foam Roll", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["Stretch / Foam Roll"] },
      { ...defaultExerciseProps, name: "Yoga (Optional)", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["Yoga (Optional)"] },
    ]
  }
};

export const GENERAL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps",
    exercises: [
      { ...defaultExerciseProps, name: "Knee Push-Ups", sets: "4", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Knee Push-Ups"] },
      { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
      { ...defaultExerciseProps, name: "Wall Push-Ups", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Wall Push-Ups"] },
      { ...defaultExerciseProps, name: "Bench Dips", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Bench Dips"] },
      { ...defaultExerciseProps, name: "Triceps Kickbacks", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Triceps Kickbacks"] },
      { ...defaultExerciseProps, name: "Triceps Stretch", sets: "3", reps: "30s", rest: "60s", ...MASTER_EXERCISE_DATA["Triceps Stretch"] },
    ]
  },
  Tuesday: {
    focus: "Back & Biceps",
    exercises: [
      { ...defaultExerciseProps, name: "Superwoman Hold", sets: "4", reps: "30s", rest: "60s", ...MASTER_EXERCISE_DATA["Superwoman Hold"] },
      { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Towel Rows"] },
      { ...defaultExerciseProps, name: "Snow Angels", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Snow Angels"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Wall Angels", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Wall Angels"] },
      { ...defaultExerciseProps, name: "Hammer Curls", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
    ]
  },
  Wednesday: {
    focus: "Legs & Shoulders",
    exercises: [
      { ...defaultExerciseProps, name: "Squats", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Squats"] },
      { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
      { ...defaultExerciseProps, name: "Lunges", sets: "3", reps: "10/leg", rest: "60s", ...MASTER_EXERCISE_DATA["Lunges"] },
      { ...defaultExerciseProps, name: "Wall Sit", sets: "3", reps: "45s", rest: "60s", ...MASTER_EXERCISE_DATA["Wall Sit"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Arm Circles", sets: "3", reps: "30s", rest: "60s", ...MASTER_EXERCISE_DATA["Arm Circles"] },
    ]
  },
  Thursday: {
    focus: "Chest, Triceps & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
      { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
      { ...defaultExerciseProps, name: "Bench Dips", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Bench Dips"] },
      { ...defaultExerciseProps, name: "Forearm Plank", sets: "3", reps: "30-45s", rest: "60s", ...MASTER_EXERCISE_DATA["Forearm Plank"] },
      { ...defaultExerciseProps, name: "Leg Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Raises"] },
      { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Russian Twists"] },
    ]
  },
  Friday: {
    focus: "Back, Biceps & Forearms",
    exercises: [
      { ...defaultExerciseProps, name: "Superman Pulls", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Superman Pulls"] },
      { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Towel Rows"] },
      { ...defaultExerciseProps, name: "Bent Over Dumbbell Reverse Flys", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"] },
      { ...defaultExerciseProps, name: "Biceps Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Biceps Curls"] },
      { ...defaultExerciseProps, name: "Wrist Circles", sets: "3", reps: "30s", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Circles"] },
      { ...defaultExerciseProps, name: "Forearm Squeeze", sets: "3", reps: "30s", rest: "60s", ...MASTER_EXERCISE_DATA["Forearm Squeeze"] },
    ]
  },
  Saturday: {
    focus: "Glutes, Shoulders & Core",
    exercises: [
      { ...defaultExerciseProps, name: "Sumo Squats", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Sumo Squats"] },
      { ...defaultExerciseProps, name: "Step-Ups", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Step-Ups"] },
      { ...defaultExerciseProps, name: "Donkey Kicks", sets: "3", reps: "15/leg", rest: "60s", ...MASTER_EXERCISE_DATA["Donkey Kicks"] },
      { ...defaultExerciseProps, name: "Pike Push-ups", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
      { ...defaultExerciseProps, name: "Heel Touches", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Heel Touches"] },
      { ...defaultExerciseProps, name: "Bird Dog", sets: "3", reps: "10/side", rest: "60s", ...MASTER_EXERCISE_DATA["Bird Dog"] },
    ]
  },
  Sunday: {
    focus: "Active Recovery",
    exercises: [
      { ...defaultExerciseProps, name: "Yoga (Optional)", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["Yoga (Optional)"] },
      { ...defaultExerciseProps, name: "Stretching", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["Stretching"] },
      { ...defaultExerciseProps, name: "Walk 20-30 mins", sets: "1", reps: "As desired", rest: "N/A", ...MASTER_EXERCISE_DATA["Walk 20-30 mins"] },
    ]
  }
};
export const MALE_BACK_GYM: DayWorkout = {
  focus: "Back",
  exercises: [
    { ...defaultExerciseProps, name: "Deadlifts", sets: "4", reps: "6-8", rest: "60s", ...MASTER_EXERCISE_DATA["Deadlifts"] },
    { ...defaultExerciseProps, name: "Lat Pulldowns", sets: "4", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Lat Pulldowns"] },
    { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
    { ...defaultExerciseProps, name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s", ...MASTER_EXERCISE_DATA["Barbell Rows"] },
    { ...defaultExerciseProps, name: "Straight arm Lat Pulldowns", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Straight arm Lat Pulldowns"] },
    { ...defaultExerciseProps, name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s", ...MASTER_EXERCISE_DATA["Pull-Ups"] },
  ]
};

export const MALE_BACK_HOME: DayWorkout = {
  focus: "Back (Home)",
  exercises: [
    { ...defaultExerciseProps, name: "Pull-Ups", sets: "4", reps: "Max", rest: "60s", ...MASTER_EXERCISE_DATA["Pull-Ups"] },
    { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Towel Rows"] },
    { ...defaultExerciseProps, name: "Superman Hold", sets: "3", reps: "45s", rest: "60s", ...MASTER_EXERCISE_DATA["Superman Hold"] },
    { ...defaultExerciseProps, name: "Inverted Rows (using table)", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"] },
    { ...defaultExerciseProps, name: "Prone Cobra", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Prone Cobra"] },
    { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
  ]
};

export const FEMALE_BACK_GYM: DayWorkout = {
  focus: "Back (Gym)",
  exercises: [
    { ...defaultExerciseProps, name: "Assisted Pull-Ups", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"] },
    { ...defaultExerciseProps, name: "Seated Cable Row", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Cable Row"] },
    { ...defaultExerciseProps, name: "Single Arm Dumbbell Row", sets: "3", reps: "12/arm", rest: "60s", ...MASTER_EXERCISE_DATA["Single Arm Dumbbell Row"] },
    { ...defaultExerciseProps, name: "Back Extensions (Hyperextensions)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Back Extensions (Hyperextensions)"] },
    { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15-20", rest: "60s", ...MASTER_EXERCISE_DATA["Face Pulls"] },
    { ...defaultExerciseProps, name: "Bent Over Dumbbell Reverse Flys", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Bent Over Dumbbell Reverse Flys"] },
  ]
};

export const FEMALE_BACK_HOME: DayWorkout = {
  focus: "Back (Home)",
  exercises: [
    { ...defaultExerciseProps, name: "Superman Hold", sets: "4", reps: "30s", rest: "60s", ...MASTER_EXERCISE_DATA["Superman Hold"] },
    { ...defaultExerciseProps, name: "Towel Rows", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Towel Rows"] },
    { ...defaultExerciseProps, name: "Bird Dog", sets: "3", reps: "12/side", rest: "60s", ...MASTER_EXERCISE_DATA["Bird Dog"] },
    { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
    { ...defaultExerciseProps, name: "Prone Arm Lifts (Y-T-W)", sets: "3", reps: "10 each", rest: "60s", ...MASTER_EXERCISE_DATA["Prone Arm Lifts (Y-T-W)"] },
    { ...defaultExerciseProps, name: "Cat-Cow Stretch", sets: "2", reps: "30s flow", rest: "60s", ...MASTER_EXERCISE_DATA["Cat-Cow Stretch"] },
  ]
};

export const MALE_ARMS_GYM: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, name: "Barbell Curls", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Barbell Curls"] },
    { ...defaultExerciseProps, name: "Incline Dumbbell Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Dumbbell Curls"] },
    { ...defaultExerciseProps, name: "Triceps Pushdown", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Tricep Pushdowns"] },
    { ...defaultExerciseProps, name: "Overhead Cable Extension", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead Cable Extension"] },
    { ...defaultExerciseProps, name: "Reverse Barbell Curl", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
    { ...defaultExerciseProps, name: "Wrist Curls (Barbell or Dumbbell)", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Curls"] },
    { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
  ]
};

export const MALE_ARMS_HOME: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, name: "Resistance Band Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Resistance Band Curls"] },
    { ...defaultExerciseProps, name: "Triceps Dips", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Triceps Dips"] },
    { ...defaultExerciseProps, name: "Overhead Triceps Extensions (Backpack/Weight)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead Triceps Extensions (Backpack/Weight)"] },
    { ...defaultExerciseProps, name: "Hammer Curls (Water Bottles/Dumbbells)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles/Dumbbells)"] },
    { ...defaultExerciseProps, name: "Wrist Squeezes (Towel/Stress Ball)", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Squeezes (Towel/Stress Ball)"] },
    { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
    { ...defaultExerciseProps, name: "Reverse Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
  ]
};

export const FEMALE_ARMS_GYM: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, name: "Dumbbell Bicep Curls", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Bicep Curls"] },
    { ...defaultExerciseProps, name: "Cable Triceps Pushdowns", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Triceps Pushdowns"] },
    { ...defaultExerciseProps, name: "Incline Hammer Curls", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Hammer Curls"] },
    { ...defaultExerciseProps, name: "Overhead Dumbbell Triceps Extension", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead DB Triceps Extension"] },
    { ...defaultExerciseProps, name: "Reverse Barbell Curl", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Curls"] },
    { ...defaultExerciseProps, name: "Wrist Curls", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Curls"] },
    { ...defaultExerciseProps, name: "Hammer Curl", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curl"] },
  ]
};

export const FEMALE_ARMS_HOME: DayWorkout = {
  focus: "Biceps, Triceps & Forearms",
  exercises: [
    { ...defaultExerciseProps, name: "Resistance Band Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Resistance Band Curls"] },
    { ...defaultExerciseProps, name: "Overhead Water Bottle Extensions", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Overhead Water Bottle Extensions"] },
    { ...defaultExerciseProps, name: "Chair Dips", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Chair Dips"] },
    { ...defaultExerciseProps, name: "Hammer Curls (Water Bottles)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Hammer Curls (Water Bottles)"] },
    { ...defaultExerciseProps, name: "Wrist Squeezes (Towel or Ball)", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Wrist Squeezes (Towel/Stress Ball)"] },
    { ...defaultExerciseProps, name: "Diamond Push-Ups", sets: "3", reps: "10-12", rest: "60s", ...MASTER_EXERCISE_DATA["Diamond Push-Ups"] },
    { ...defaultExerciseProps, name: "Reverse Band Curls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Band Curls"] },
  ]
};

export const MALE_ABS_GYM: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, name: "Cable Rope Crunch", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Rope Crunch"] },
    { ...defaultExerciseProps, name: "Hanging Leg Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Hanging Leg Raises"] },
    { ...defaultExerciseProps, name: "Roman Chair Sit-Ups", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Roman Chair Sit-Ups"] },
    { ...defaultExerciseProps, name: "Weighted Russian Twists", sets: "3", reps: "20 total", rest: "60s", ...MASTER_EXERCISE_DATA["Weighted Russian Twists"] },
    { ...defaultExerciseProps, name: "Decline Crunch", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Decline Crunch"] },
    { ...defaultExerciseProps, name: "Plank Hold", sets: "3", reps: "1 min", rest: "60s", ...MASTER_EXERCISE_DATA["Plank Hold"] },
    { ...defaultExerciseProps, name: "Hanging Knee Tucks", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Hanging Knee Tucks"] },
  ]
};

export const MALE_ABS_HOME: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, name: "Crunches", sets: "4", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Crunches"] },
    { ...defaultExerciseProps, name: "Leg Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Raises"] },
    { ...defaultExerciseProps, name: "Bicycle Crunches", sets: "3", reps: "30 total", rest: "60s", ...MASTER_EXERCISE_DATA["Bicycle Crunches"] },
    { ...defaultExerciseProps, name: "Russian Twists (Bodyweight)", sets: "3", reps: "20 total", rest: "60s", ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"] },
    { ...defaultExerciseProps, name: "Plank to Push-Up", sets: "3", reps: "10", rest: "60s", ...MASTER_EXERCISE_DATA["Plank to Push-Up"] },
    { ...defaultExerciseProps, name: "Side Plank (Both Sides)", sets: "3", reps: "30 sec each", rest: "60s", ...MASTER_EXERCISE_DATA["Side Plank (Both Sides)"] },
    { ...defaultExerciseProps, name: "Mountain Climbers", sets: "3", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Mountain Climbers"] },
  ]
};

export const FEMALE_ABS_GYM: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, name: "Cable Rope Crunch", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Rope Crunch"] },
    { ...defaultExerciseProps, name: "Hanging Leg Raises", sets: "3", reps: "12-15", rest: "60s", ...MASTER_EXERCISE_DATA["Hanging Leg Raises"] },
    { ...defaultExerciseProps, name: "Seated Ab Machine Crunch", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Ab Machine Crunch"] },
    { ...defaultExerciseProps, name: "Weighted Russian Twists", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Weighted Russian Twists"] },
    { ...defaultExerciseProps, name: "Plank Hold", sets: "3", reps: "60 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Plank Hold"] },
    { ...defaultExerciseProps, name: "Decline Sit-Ups", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Decline Sit-Ups"] },
    { ...defaultExerciseProps, name: "Stability Ball Pass", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Stability Ball Pass"] },
  ]
};

export const FEMALE_ABS_HOME: DayWorkout = {
  focus: "Core / Abs",
  exercises: [
    { ...defaultExerciseProps, name: "Crunches", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Crunches"] },
    { ...defaultExerciseProps, name: "Leg Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Raises"] },
    { ...defaultExerciseProps, name: "Flutter Kicks", sets: "3", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Flutter Kicks"] },
    { ...defaultExerciseProps, name: "Russian Twists", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Russian Twists"] },
    { ...defaultExerciseProps, name: "Plank", sets: "3", reps: "1 min", rest: "60s", ...MASTER_EXERCISE_DATA["Plank"] },
    { ...defaultExerciseProps, name: "Side Plank Hip Dips", sets: "3", reps: "12 each side", rest: "60s", ...MASTER_EXERCISE_DATA["Side Plank Hip Dips"] },
    { ...defaultExerciseProps, name: "Mountain Climbers", sets: "3", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Mountain Climbers"] },
  ]
};

export const MALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
  focus: "Shoulders (Front, Side, Rear)",
  exercises: [
    { ...defaultExerciseProps, name: "Shoulder Press (Barbell or Dumbbell)", sets: "4", reps: "8–10", rest: "60s", ...MASTER_EXERCISE_DATA["Shoulder Press (Barbell or Dumbbell)"] },
    { ...defaultExerciseProps, name: "Arnold Press", sets: "3", reps: "10–12", rest: "60s", ...MASTER_EXERCISE_DATA["Arnold Press"] },
    { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
    { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Face Pulls"] },
    { ...defaultExerciseProps, name: "Front Raises", sets: "3", reps: "12–15", rest: "60s", ...MASTER_EXERCISE_DATA["Front Raises"] },
  ]
};

export const MALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
  focus: "Shoulders (Front, Side, Rear)",
  exercises: [
    { ...defaultExerciseProps, name: "Pike Push-ups", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
    { ...defaultExerciseProps, name: "Incline Push-Ups", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Incline Push-Ups"] },
    { ...defaultExerciseProps, name: "Lateral Arm Circles (Small + Big)", sets: "3", reps: "40 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Arm Circles (Small + Big)"] },
    { ...defaultExerciseProps, name: "Reverse Snow Angels", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Snow Angels"] },
    { ...defaultExerciseProps, name: "Elevated Pike Hold", sets: "3", reps: "30 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Elevated Pike Hold"] },
  ]
};

export const FEMALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
  focus: "Shoulders (Sculpting & Strength)",
  exercises: [
    { ...defaultExerciseProps, name: "Dumbbell Shoulder Press", sets: "3", reps: "10–12", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"] },
    { ...defaultExerciseProps, name: "Arnold Press", sets: "3", reps: "10–12", rest: "60s", ...MASTER_EXERCISE_DATA["Arnold Press"] },
    { ...defaultExerciseProps, name: "Lateral Raises", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Raises"] },
    { ...defaultExerciseProps, name: "Face Pulls", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Face Pulls"] },
    { ...defaultExerciseProps, name: "Front Raises", sets: "3", reps: "12–15", rest: "60s", ...MASTER_EXERCISE_DATA["Front Raises"] },
  ]
};

export const FEMALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
  focus: "Shoulders (Toning & Balance)",
  exercises: [
    { ...defaultExerciseProps, name: "Wall Walks", sets: "3", reps: "8–10", rest: "60s", ...MASTER_EXERCISE_DATA["Wall Walks"] },
    { ...defaultExerciseProps, name: "Pike Push-ups", sets: "3", reps: "8–10", rest: "60s", ...MASTER_EXERCISE_DATA["Pike Push-ups"] },
    { ...defaultExerciseProps, name: "Lateral Arm Raises (Using Water Bottles/Bands)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Lateral Arm Raises (Using Water Bottles/Bands)"] },
    { ...defaultExerciseProps, name: "Rear Delt Pulses (Bodyweight or Light Weights)", sets: "3", reps: "15–20", rest: "60s", ...MASTER_EXERCISE_DATA["Rear Delt Pulses (Bodyweight or Light Weights)"] },
    { ...defaultExerciseProps, name: "Front Raises (Bottles/Bands)", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Front Raises (Bottles/Bands)"] },
  ]
};

export const MALE_LEG_GYM_WORKOUT: DayWorkout = {
  focus: "Legs (Strength & Power)",
  exercises: [
    { ...defaultExerciseProps, name: "Barbell Back Squats", sets: "4", reps: "8–10", rest: "60s", ...MASTER_EXERCISE_DATA["Barbell Back Squats"] },
    { ...defaultExerciseProps, name: "Romanian Deadlifts", sets: "3", reps: "10–12", rest: "60s", ...MASTER_EXERCISE_DATA["Romanian Deadlifts"] },
    { ...defaultExerciseProps, name: "Leg Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Press"] },
    { ...defaultExerciseProps, name: "Walking Dumbbell Lunges", sets: "3", reps: "10 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"] },
    { ...defaultExerciseProps, name: "Leg Curl Machine", sets: "3", reps: "12–15", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Curl Machine"] },
    { ...defaultExerciseProps, name: "Standing Calf Raises", sets: "4", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Standing Calf Raises"] },
  ]
};

export const MALE_LEG_HOME_WORKOUT: DayWorkout = {
  focus: "Legs (Bodyweight Strength)",
  exercises: [
    { ...defaultExerciseProps, name: "Jump Squats", sets: "4", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Jump Squats"] },
    { ...defaultExerciseProps, name: "Wall Sit", sets: "3", reps: "45 sec", rest: "60s", ...MASTER_EXERCISE_DATA["Wall Sit"] },
    { ...defaultExerciseProps, name: "Glute Bridges", sets: "3", reps: "15", rest: "60s", ...MASTER_EXERCISE_DATA["Glute Bridges"] },
    { ...defaultExerciseProps, name: "Reverse Crunches", sets: "3", reps: "12 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Reverse Crunches"] },
    { ...defaultExerciseProps, name: "Donkey Kicks", sets: "3", reps: "15 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Donkey Kicks"] },
    { ...defaultExerciseProps, name: "Single-Leg Calf Raises", sets: "3", reps: "15 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Single-Leg Calf Raises"] },
  ]
};

export const FEMALE_LEG_GYM_WORKOUT: DayWorkout = {
  focus: "Legs (Tone & Strength)",
  exercises: [
    { ...defaultExerciseProps, name: "Smith Squats", sets: "4", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Smith Squats"] },
    { ...defaultExerciseProps, name: "Romanian Deadlifts", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Romanian Deadlifts"] },
    { ...defaultExerciseProps, name: "Cable Kickbacks", sets: "3", reps: "15 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Cable Kickbacks"] },
    { ...defaultExerciseProps, name: "Hip Thrusts", sets: "3", reps: "12–15", rest: "60s", ...MASTER_EXERCISE_DATA["Hip Thrusts"] },
    { ...defaultExerciseProps, name: "Leg Press", sets: "3", reps: "12", rest: "60s", ...MASTER_EXERCISE_DATA["Leg Press"] },
    { ...defaultExerciseProps, name: "Seated Calf Raises", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Seated Calf Raises"] },
  ]
};

export const FEMALE_LEG_HOME_WORKOUT: DayWorkout = {
  focus: "Legs (Bodyweight Tone)",
  exercises: [
    { ...defaultExerciseProps, name: "Squats", sets: "4", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Squats"] },
    { ...defaultExerciseProps, name: "Side-Lying Leg Raises", sets: "3", reps: "15 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Side-Lying Leg Raises"] },
    { ...defaultExerciseProps, name: "Donkey Kicks", sets: "3", reps: "15 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Donkey Kicks"] },
    { ...defaultExerciseProps, name: "Glute Bridge March", sets: "3", reps: "10 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Glute Bridge March"] },
    { ...defaultExerciseProps, name: "Step-Ups", sets: "3", reps: "12 each leg", rest: "60s", ...MASTER_EXERCISE_DATA["Step-Ups"] },
    { ...defaultExerciseProps, name: "Standing Calf Raises", sets: "3", reps: "20", rest: "60s", ...MASTER_EXERCISE_DATA["Standing Calf Raises"] },
  ]
};
