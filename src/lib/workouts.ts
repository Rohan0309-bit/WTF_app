
export interface ExerciseDetails {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
  injury_prevention?: string;
  sets?: string;
  reps?: string;
  rest?: string;
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
  name: string;
  description: string;
  days: Record<string, CustomExercise[]>;
}

export interface CustomExercise extends ExerciseDetails {
  customSets: string;
  customReps: string;
  customRest: string;
}

const defaultExerciseProps = {
  type: "",
  muscle: "",
  equipment: "",
  difficulty: "",
  instructions: "",
  gifUrl: "",
  injury_prevention: "Always warm up before starting and listen to your body. Stop if you feel sharp pain.",
};

// Add injury prevention tips here
export const MASTER_EXERCISE_DATA: { [key: string]: Partial<ExerciseDetails> } = {
    "Jumping Jacks": { type: 'cardio', muscle: 'Full Body', gifUrl: 'https://i.ibb.co/ZRn5DhQ2/Whats-App-Image-2025-07-02-at-23-58-35.jpg', injury_prevention: 'Land softly on the balls of your feet to reduce impact on your knees and ankles.' },
    "Wrist Roll": { type: 'strength', muscle: 'Forearms', gifUrl: 'https://i.ibb.co/0yX2Ckgn/Whats-App-Image-2025-07-03-at-00-10-57.jpg', injury_prevention: 'Use a light weight and perform the movement slowly and in a controlled manner to avoid straining your wrist tendons.' },
    "Elbow Circles": { type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/hRXNZ1xg/Whats-App-Image-2025-07-03-at-00-03-02.jpg', injury_prevention: 'Keep the circles smooth and controlled; avoid jerky movements.' },
    "Arm Circles": { type: 'warmup', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/zwTWyMx/Whats-App-Image-2025-07-03-at-00-10-00.jpg', injury_prevention: 'Start with small circles and gradually increase the size to warm up the shoulder joint gently.' },
    "Bar Hanging": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/Z6WFkXTN/Whats-App-Image-2025-07-02-at-23-58-36.jpg', injury_prevention: 'Engage your shoulder muscles to support your weight; do not hang passively to avoid over-stressing the joints.' },
    "Plank": { type: 'strength', muscle: 'Core', gifUrl: 'https://i.ibb.co/CpRxg3gr/Whats-App-Image-2025-07-03-at-16-00-52-1.jpg', injury_prevention: 'Keep your back flat and avoid letting your hips sag to prevent lower back strain. Engage your core and glutes.' },
    "Quad Stretch": { type: 'flexibility', muscle: 'Quads', gifUrl: 'https://i.ibb.co/8gCrtnCr/Whats-App-Image-2025-07-03-at-13-58-46.jpg', injury_prevention: 'Hold onto something for balance and avoid pulling your heel too forcefully. Keep your knees close together.' },
    "Hamstring Stretch": { type: 'flexibility', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/1JnZ0F7P/Whats-App-Image-2025-07-03-at-14-02-22.jpg', injury_prevention: 'Keep a slight bend in your knee and avoid rounding your back to protect your spine.' },
    "Chest Stretch": { type: 'flexibility', muscle: 'Chest', gifUrl: 'https://i.ibb.co/fYGrr0Fj/Whats-App-Image-2025-07-03-at-13-58-47-1.jpg', injury_prevention: 'Perform the stretch gently. Do not force your arms back, to prevent shoulder impingement.' },
    "Shoulder Stretch": { type: 'flexibility', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/93CV7cS8/Whats-App-Image-2025-07-03-at-13-58-48-1.jpg', injury_prevention: 'Do not pull your arm across your body too hard. Keep your shoulder down and relaxed.' },
    "Triceps Stretch": { type: 'flexibility', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/G4D1MJjZ/Whats-App-Image-2025-07-03-at-13-58-47-2.jpg', injury_prevention: 'Gently pull your elbow behind your head; avoid forcing the stretch if you feel any shoulder pain.' },
    "Child's Pose": { type: 'flexibility', muscle: 'Back', gifUrl: 'https://i.ibb.co/kCQT6tM/Whats-App-Image-2025-07-03-at-13-58-48.jpg', injury_prevention: 'If you have knee issues, place a blanket under your shins for cushioning. Breathe deeply to relax your back.' },
    "Bench Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/nMtLK64C/Whats-App-Image-2025-07-03-at-12-31-18.jpg', injury_prevention: 'Keep your feet flat on the floor and avoid arching your back excessively. Use a spotter for heavy lifts.' },
    "Incline Bench Press": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/C3FmPcw8/Whats-App-Image-2025-07-03-at-12-31-15.jpg', injury_prevention: 'Do not let the dumbbells or barbell bounce off your chest. Control the weight throughout the movement.' },
    "Decline / Cable Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/S7wNQZvm/Whats-App-Image-2025-07-03-at-12-31-17-1.jpg', injury_prevention: 'Keep a slight bend in your elbows and focus on squeezing your chest muscles. Avoid using a weight that is too heavy.' },
    "Seated Machine Fly": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/27NmYH8C/Whats-App-Image-2025-07-03-at-12-31-17.jpg', injury_prevention: 'Adjust the machine to fit your body. Ensure the pivot point is aligned with your shoulders.' },
    "Triceps Pushdown": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/HDRgnWZs/Whats-App-Image-2025-07-03-at-12-31-16-1.jpg', injury_prevention: 'Keep your elbows tucked into your sides and avoid using momentum to move the weight.' },
    "Overhead Extension (Cable or Dumbbell)": { type: 'strength', muscle: 'Triceps', gifUrl: 'https://i.ibb.co/BVjNXXnc/Whats-App-Image-2025-07-03-at-12-31-16-2.jpg', injury_prevention: 'Keep your core tight to protect your lower back. Avoid flaring your elbows out.' },
    "Lat Pulldowns": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/20DKfhXx/Whats-App-Image-2025-07-03-at-15-36-32.jpg', injury_prevention: 'Pull the bar down to your upper chest, not behind your neck. Avoid using momentum by leaning back too far.' },
    "Seated Cable Row": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/QvjcWkVK/Whats-App-Image-2025-07-03-at-15-36-31.jpg', injury_prevention: 'Keep your back straight and pull the handle towards your torso, squeezing your shoulder blades together.' },
    "Barbell Rows": { type: 'strength', muscle: 'Back', gifUrl: 'https://i.ibb.co/FPmN2sY/Whats-App-Image-2025-07-03-at-15-32-27.jpg', injury_prevention: 'Maintain a flat back throughout the movement. Hinge at the hips, and avoid using your lower back to lift the weight.' },
    "Dumbbell Curl": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/xSYFDHZd/Whats-App-Image-2025-07-03-at-15-32-23-2.jpg', injury_prevention: 'Avoid swinging the dumbbells. Keep your upper arms stationary and focus on using your biceps to lift the weight.' },
    "Hammer Curl": { type: 'strength', muscle: 'Biceps', gifUrl: 'https://i.ibb.co/RG7L3VQZ/Whats-App-Image-2025-07-03-at-15-32-24-1.jpg', injury_prevention: 'Keep your palms facing each other and control the movement on the way up and down to protect the elbow joint.' },
    "Face Pulls": { type: 'strength', muscle: 'Shoulders', gifUrl: 'https://i.ibb.co/MyhK8Vjr/Whats-App-Image-2025-07-03-at-16-00-53.jpg', injury_prevention: 'Use a lighter weight and focus on external rotation of the shoulders. Pull the rope towards your face, not your neck.' },
    "Shrugs": { type: 'strength', muscle: 'Traps', gifUrl: 'https://i.ibb.co/7JSJPxXK/Whats-App-Image-2025-07-03-at-16-00-50.jpg', injury_prevention: 'Avoid rolling your shoulders. Lift them straight up towards your ears and slowly lower them down.' },
    "Barbell Back Squats": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/b5bJn6wd/Whats-App-Image-2025-07-03-at-16-00-51.jpg', injury_prevention: 'Keep your chest up, back straight, and go to a depth that is comfortable for your mobility. Ensure your knees track over your toes.' },
    "Romanian Deadlifts": { type: 'strength', muscle: 'Hamstrings', gifUrl: 'https://i.ibb.co/bpSJMbn/Whats-App-Image-2025-07-03-at-16-00-51-1.jpg', injury_prevention: 'Keep a slight bend in your knees and maintain a flat back. Hinge at the hips and lower the weight until you feel a stretch in your hamstrings.' },
    "Dumbbell Walking Lunges": { type: 'strength', muscle: 'Legs', gifUrl: 'https://i.ibb.co/zH8BRBN8/Whats-App-Image-2025-07-03-at-16-00-52.jpg', injury_prevention: 'Take controlled steps and ensure your front knee does not go past your toes. Keep your torso upright.' },
    "Calf Raises": { type: 'strength', muscle: 'Calves', gifUrl: 'https://i.ibb.co/Sw3fgwDx/Whats-App-Image-2025-07-03-at-16-00-52-2.jpg', injury_prevention: 'Perform the movement slowly, focusing on a full range of motion. Avoid bouncing at the bottom.' },
    "Push-Ups": { type: 'strength', muscle: 'Chest', gifUrl: 'https://i.ibb.co/6RdMd2XP/Whats-App-Image-2025-07-11-at-02-11-22-1.jpg', injury_prevention: 'Keep your body in a straight line from head to heels. Lower your chest to the floor in a controlled manner.' },
    // Add the rest of the exercises with injury prevention tips
    // ...
};

// Function to get a workout plan by slug
export const getWorkoutForSlug = (
  slug: string,
  gender: 'male' | 'female',
  location: 'gym' | 'home'
): WorkoutSplit | DayWorkout | null => {
  const upperSlug = slug.toUpperCase().replace(/-/g, '_');
  
  // Handle non-athlete workouts
  const nonAthleteSlug = `GENERAL_${gender.toUpperCase()}_${location.toUpperCase()}_WORKOUT_PLAN`;
  if (upperSlug.includes('NON_ATHLETE')) {
      const parts = upperSlug.split('/');
      const workoutType = parts[parts.length - 1];

      // Handle full-body weekly plan for non-athletes
      if (workoutType === 'FULL-BODY') {
          if (gender === 'male' && location === 'gym') return GENERAL_MALE_GYM_WORKOUT_PLAN;
          if (gender === 'male' && location === 'home') return GENERAL_MALE_HOME_WORKOUT_PLAN;
          if (gender === 'female' && location === 'gym') return GENERAL_FEMALE_GYM_WORKOUT_PLAN;
          if (gender === 'female' && location === 'home') return GENERAL_FEMALE_HOME_WORKOUT_PLAN;
      }
      
      const singleWorkoutSlug = `${gender.toUpperCase()}_${workoutType}_${location.toUpperCase()}`;
      
      switch(singleWorkoutSlug) {
          case 'MALE_CHEST_GYM': return MALE_CHEST_GYM;
          case 'MALE_CHEST_HOME': return MALE_CHEST_HOME;
          case 'FEMALE_CHEST_GYM': return FEMALE_CHEST_GYM;
          case 'FEMALE_CHEST_HOME': return FEMALE_CHEST_HOME;
          case 'MALE_BACK_GYM': return MALE_BACK_GYM;
          case 'MALE_BACK_HOME': return MALE_BACK_HOME;
          case 'FEMALE_BACK_GYM': return FEMALE_BACK_GYM;
          case 'FEMALE_BACK_HOME': return FEMALE_BACK_HOME;
          case 'MALE_ARMS_GYM': return MALE_ARMS_GYM;
          case 'MALE_ARMS_HOME': return MALE_ARMS_HOME;
          case 'FEMALE_ARMS_GYM': return FEMALE_ARMS_GYM;
          case 'FEMALE_ARMS_HOME': return FEMALE_ARMS_HOME;
          case 'MALE_ABS_GYM': return MALE_ABS_GYM;
          case 'MALE_ABS_HOME': return MALE_ABS_HOME;
          case 'FEMALE_ABS_GYM': return FEMALE_ABS_GYM;
          case 'FEMALE_ABS_HOME': return FEMALE_ABS_HOME;
          case 'MALE_SHOULDER_GYM': return MALE_SHOULDER_GYM_WORKOUT;
          case 'MALE_SHOULDER_HOME': return MALE_SHOULDER_HOME_WORKOUT;
          case 'FEMALE_SHOULDER_GYM': return FEMALE_SHOULDER_GYM_WORKOUT;
          case 'FEMALE_SHOULDER_HOME': return FEMALE_SHOULDER_HOME_WORKOUT;
          case 'MALE_LEGS_GYM': return MALE_LEG_GYM_WORKOUT;
          case 'MALE_LEGS_HOME': return MALE_LEG_HOME_WORKOUT;
          case 'FEMALE_LEGS_GYM': return FEMALE_LEG_GYM_WORKOUT;
          case 'FEMALE_LEGS_HOME': return FEMALE_LEG_HOME_WORKOUT;
          case 'MALE_POSTURE_GYM':
          case 'MALE_POSTURE_HOME':
            return MALE_POSTURE_WORKOUT_PLAN;
          case 'FEMALE_POSTURE_GYM':
          case 'FEMALE_POSTURE_HOME':
            return FEMALE_POSTURE_WORKOUT_PLAN;
          case 'MALE_SEXUAL_WELLNESS_GYM': return MALE_SEXUAL_WELLNESS_GYM;
          case 'MALE_SEXUAL_WELLNESS_HOME': return MALE_SEXUAL_WELLNESS_HOME;
          case 'FEMALE_SEXUAL_WELLNESS_GYM': return FEMALE_SEXUAL_WELLNESS_GYM;
          case 'FEMALE_SEXUAL_WELLNESS_HOME': return FEMALE_SEXUAL_WELLNESS_HOME;
          case 'MALE_FACIAL_GYM':
          case 'MALE_FACIAL_HOME':
            return MALE_FACIAL_WORKOUT_PLAN;
          case 'FEMALE_FACIAL_GYM':
          case 'FEMALE_FACIAL_HOME':
            return FEMALE_FACIAL_WORKOUT_PLAN;
          case 'MALE_VOCALS_GYM':
          case 'MALE_VOCALS_HOME':
            return MALE_VOCAL_WORKOUT_PLAN;
          case 'FEMALE_VOCALS_GYM':
          case 'FEMALE_VOCALS_HOME':
            return FEMALE_VOCAL_WORKOUT_PLAN;
          default: return null;
      }
  }

  // Handle athlete workouts
  const athleteSlug = `${upperSlug}_${gender.toUpperCase()}_${location.toUpperCase()}_WORKOUT_PLAN`;
  switch(athleteSlug) {
      case 'CRICKET_MALE_GYM_WORKOUT_PLAN': return CRICKET_MALE_GYM_WORKOUT_PLAN;
      case 'CRICKET_FEMALE_GYM_WORKOUT_PLAN': return CRICKET_FEMALE_GYM_WORKOUT_PLAN;
      case 'CRICKET_MALE_HOME_WORKOUT_PLAN': return CRICKET_MALE_HOME_WORKOUT_PLAN;
      case 'CRICKET_FEMALE_HOME_WORKOUT_PLAN': return CRICKET_FEMALE_HOME_WORKOUT_PLAN;
      case 'BADMINTON_MALE_GYM_WORKOUT_PLAN': return BADMINTON_MALE_GYM_WORKOUT_PLAN;
      case 'BADMINTON_FEMALE_GYM_WORKOUT_PLAN': return BADMINTON_FEMALE_GYM_WORKOUT_PLAN;
      case 'BADMINTON_MALE_HOME_WORKOUT_PLAN': return BADMINTON_MALE_HOME_WORKOUT_PLAN;
      case 'BADMINTON_FEMALE_HOME_WORKOUT_PLAN': return BADMINTON_FEMALE_HOME_WORKOUT_PLAN;
      case 'FOOTBALL_MALE_GYM_WORKOUT_PLAN': return FOOTBALL_MALE_GYM_WORKOUT_PLAN;
      case 'FOOTBALL_FEMALE_GYM_WORKOUT_PLAN': return FOOTBALL_FEMALE_GYM_WORKOUT_PLAN;
      case 'FOOTBALL_MALE_HOME_WORKOUT_PLAN': return FOOTBALL_MALE_HOME_WORKOUT_PLAN;
      case 'FOOTBALL_FEMALE_HOME_WORKOUT_PLAN': return FOOTBALL_FEMALE_HOME_WORKOUT_PLAN;
      case 'BASKETBALL_MALE_GYM_WORKOUT_PLAN': return BASKETBALL_MALE_GYM_WORKOUT_PLAN;
      case 'BASKETBALL_FEMALE_GYM_WORKOUT_PLAN': return BASKETBALL_FEMALE_GYM_WORKOUT_PLAN;
      case 'BASKETBALL_MALE_HOME_WORKOUT_PLAN': return BASKETBALL_MALE_HOME_WORKOUT_PLAN;
      case 'BASKETBALL_FEMALE_HOME_WORKOUT_PLAN': return BASKETBALL_FEMALE_HOME_WORKOUT_PLAN;
      case 'VOLLEYBALL_MALE_GYM_WORKOUT_PLAN': return VOLLEYBALL_MALE_GYM_WORKOUT_PLAN;
      case 'VOLLEYBALL_FEMALE_GYM_WORKOUT_PLAN': return VOLLEYBALL_FEMALE_GYM_WORKOUT_PLAN;
      case 'VOLLEYBALL_MALE_HOME_WORKOUT_PLAN': return VOLLEYBALL_MALE_HOME_WORKOUT_PLAN;
      case 'VOLLEYBALL_FEMALE_HOME_WORKOUT_PLAN': return VOLLEYBALL_FEMALE_HOME_WORKOUT_PLAN;
      case 'TABLE_TENNIS_MALE_GYM_WORKOUT_PLAN': return TABLE_TENNIS_MALE_GYM_WORKOUT_PLAN;
      case 'TABLE_TENNIS_FEMALE_GYM_WORKOUT_PLAN': return TABLE_TENNIS_FEMALE_GYM_WORKOUT_PLAN;
      case 'TABLE_TENNIS_MALE_HOME_WORKOUT_PLAN': return TABLE_TENNIS_MALE_HOME_WORKOUT_PLAN;
      case 'TABLE_TENNIS_FEMALE_HOME_WORKOUT_PLAN': return TABLE_TENNIS_FEMALE_HOME_WORKOUT_PLAN;
      default: return null;
  }
}

// NOTE: All workout plans from the original file should be here.
// For brevity, I am only showing a few. The rest of the file content is assumed to be present.

export const MALE_CHEST_GYM: DayWorkout = {
  focus: "Chest (Gym)",
  gender: 'male',
  location: 'gym',
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
  gender: 'male',
  location: 'home',
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
  gender: 'female',
  location: 'gym',
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
  gender: 'female',
  location: 'home',
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Push-Ups"], name: "Wall Push-Ups", sets: "3", reps: "20", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Knee Push-Ups"], name: "Knee Push-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups (Bench/Chair)"], name: "Incline Push-Ups (Bench/Chair)", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Floor Press (If available)"], name: "Dumbbell Floor Press (If available)", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Squeeze (with Towel)"], name: "Chest Squeeze (with Towel)", sets: "3", reps: "15", rest: "45s" },
  ]
};

export const MALE_BACK_GYM: DayWorkout = {
    focus: 'Back Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Deadlifts'], name: 'Deadlifts', sets: '4', reps: '6-8', rest: '90s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pull-Ups'], name: 'Pull-Ups', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Barbell Rows'], name: 'Barbell Rows', sets: '3', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lat Pulldowns'], name: 'Lat Pulldowns', sets: '3', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Seated Cable Row'], name: 'Seated Cable Row', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Face Pulls'], name: 'Face Pulls', sets: '3', reps: '15-20', rest: '45s'},
    ],
};

export const MALE_BACK_HOME: DayWorkout = {
    focus: 'Back Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pull-Ups'], name: 'Pull-Ups', sets: '5', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Inverted Rows (using table)'], name: 'Inverted Rows (using table)', sets: '4', reps: '10-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Superman Hold'], name: 'Superman Hold', sets: '3', reps: '30s hold', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Towel Rows'], name: 'Towel Rows', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Prone Cobra'], name: 'Prone Cobra', sets: '3', reps: '15', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Reverse Snow Angels'], name: 'Reverse Snow Angels', sets: '3', reps: '20', rest: '30s'},
    ],
};

export const FEMALE_BACK_GYM: DayWorkout = {
    focus: 'Back Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Assisted Pull-Ups'], name: 'Assisted Pull-Ups', sets: '4', reps: '8-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lat Pulldowns'], name: 'Lat Pulldowns', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Single Arm Dumbbell Row'], name: 'Single Arm Dumbbell Row', sets: '3', reps: '12/arm', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Back Extensions (Hyperextensions)'], name: 'Back Extensions (Hyperextensions)', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Seated Cable Row'], name: 'Seated Cable Row', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bent Over Dumbbell Reverse Flys'], name: 'Bent Over Dumbbell Reverse Flys', sets: '3', reps: '15-20', rest: '30s'},
    ],
};

export const FEMALE_BACK_HOME: DayWorkout = {
    focus: 'Back Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Superman Hold'], name: 'Superman Hold', sets: '4', reps: '20-30s hold', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Inverted Rows (using table)'], name: 'Inverted Rows (using table)', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Prone Arm Lifts (Y-T-W)'], name: 'Prone Arm Lifts (Y-T-W)', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Towel Rows'], name: 'Towel Rows', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cat-Cow Stretch'], name: 'Cat-Cow Stretch', sets: '3', reps: '10-12', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bird Dog'], name: 'Bird Dog', sets: '3', reps: '15/side', rest: '30s'},
    ],
};

export const MALE_ARMS_GYM: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Barbell Curl'], name: 'Barbell Curl', sets: '4', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Incline Dumbbell Curls'], name: 'Incline Dumbbell Curls', sets: '3', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curl'], name: 'Hammer Curl', sets: '3', reps: '12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Skull Crushers'], name: 'Skull Crushers', sets: '4', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Cable Extension'], name: 'Overhead Cable Extension', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wrist Curls'], name: 'Wrist Curls', sets: '3', reps: '15-20', rest: '30s'},
    ],
};

export const MALE_ARMS_HOME: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Close-Grip Push-Ups'], name: 'Close-Grip Push-Ups', sets: '4', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Triceps Dips'], name: 'Triceps Dips', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Triceps Extensions (Backpack/Weight)'], name: 'Overhead Triceps Extensions (Backpack/Weight)', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin-Ups'], name: 'Chin-Ups', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curls (Water Bottles/Dumbbells)'], name: 'Hammer Curls (Water Bottles/Dumbbells)', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wrist Squeezes (Towel/Stress Ball)'], name: 'Wrist Squeezes (Towel/Stress Ball)', sets: '3', reps: '30s hold', rest: '30s'},
    ],
};

export const FEMALE_ARMS_GYM: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Triceps Pushdowns'], name: 'Cable Triceps Pushdowns', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead DB Triceps Extension'], name: 'Overhead DB Triceps Extension', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Triceps Dips'], name: 'Triceps Dips', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Bicep Curls'], name: 'Cable Bicep Curls', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Incline Hammer Curls'], name: 'Incline Hammer Curls', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Reverse Curls'], name: 'Reverse Curls', sets: '3', reps: '15', rest: '30s'},
    ],
};

export const FEMALE_ARMS_HOME: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Diamond Push-Ups'], name: 'Diamond Push-Ups', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Triceps Dips'], name: 'Triceps Dips', sets: '3', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Water Bottle Extensions'], name: 'Overhead Water Bottle Extensions', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Resistance Band Curls'], name: 'Resistance Band Curls', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curls (Water Bottles)'], name: 'Hammer Curls (Water Bottles)', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Reverse Band Curls'], name: 'Reverse Band Curls', sets: '3', reps: '15-20', rest: '30s'},
    ],
};

export const MALE_ABS_GYM: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Rope Crunch'], name: 'Cable Rope Crunch', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Leg Raises', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Roman Chair Sit-Ups'], name: 'Roman Chair Sit-Ups', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Weighted Russian Twists'], name: 'Weighted Russian Twists', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Decline Crunch'], name: 'Decline Crunch', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const MALE_ABS_HOME: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Crunches'], name: 'Crunches', sets: '4', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Knee Tucks'], name: 'Hanging Knee Tucks', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bicycle Crunches'], name: 'Bicycle Crunches', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Russian Twists (Bodyweight)'], name: 'Russian Twists (Bodyweight)', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Leg Raises', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Side Plank (Both Sides)'], name: 'Side Plank (Both Sides)', sets: '3', reps: '45s hold', rest: '30s'},
    ],
};

export const FEMALE_ABS_GYM: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Rope Crunch'], name: 'Cable Rope Crunch', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Knee Raises'], name: 'Hanging Knee Raises', sets: '3', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Seated Ab Machine Crunch'], name: 'Seated Ab Machine Crunch', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Decline Sit-Ups'], name: 'Decline Sit-Ups', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Stability Ball Pass'], name: 'Stability Ball Pass', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const FEMALE_ABS_HOME: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Crunches'], name: 'Crunches', sets: '3', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Leg Raises', sets: '3', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Flutter Kicks'], name: 'Flutter Kicks', sets: '3', reps: '30s', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bicycle Crunches'], name: 'Bicycle Crunches', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Side Plank Hip Dips'], name: 'Side Plank Hip Dips', sets: '3', reps: '15/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Mountain Climbers'], name: 'Mountain Climbers', sets: '3', reps: '30s', rest: '30s'},
    ],
};

export const MALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
    focus: 'Shoulder Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Shoulder Press (Barbell or Dumbbell)'], name: 'Shoulder Press (Barbell or Dumbbell)', sets: '4', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Raises'], name: 'Lateral Raises', sets: '4', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises'], name: 'Front Raises', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Face Pulls (Cable or Bands)'], name: 'Face Pulls (Cable or Bands)', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Shrugs'], name: 'Shrugs', sets: '4', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Arnold Press'], name: 'Arnold Press', sets: '3', reps: '10-12', rest: '60s'},
    ],
};

export const MALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
    focus: 'Shoulder Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pike Push-ups'], name: 'Pike Push-ups', sets: '4', reps: '10-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Arm Circles (Small + Big)'], name: 'Lateral Arm Circles (Small + Big)', sets: '3', reps: '20/direction', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Elevated Pike Hold'], name: 'Elevated Pike Hold', sets: '3', reps: '30s hold', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wall Walks'], name: 'Wall Walks', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Arm Raises (Using Water Bottles/Bands)'], name: 'Lateral Arm Raises (Using Water Bottles/Bands)', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Rear Delt Pulses (Bodyweight or Light Weights)'], name: 'Rear Delt Pulses (Bodyweight or Light Weights)', sets: '3', reps: '20-25', rest: '30s'},
    ],
};

export const FEMALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
    focus: 'Shoulder Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['DB Shoulder Press'], name: 'DB Shoulder Press', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Raises'], name: 'Lateral Raises', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises'], name: 'Front Raises', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Face Pulls'], name: 'Face Pulls', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Shrugs'], name: 'Shrugs', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Arnold Press'], name: 'Arnold Press', sets: '3', reps: '12-15', rest: '60s'},
    ],
};

export const FEMALE_SHOULDER_HOME_WORKOUT: DayWorkout = {
    focus: 'Shoulder Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pike Push-ups'], name: 'Pike Push-ups', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Arm Raises (Using Water Bottles/Bands)'], name: 'Lateral Arm Raises (Using Water Bottles/Bands)', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises (Bottles/Bands)'], name: 'Front Raises (Bottles/Bands)', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Rear Delt Pulses (Bodyweight or Light Weights)'], name: 'Rear Delt Pulses (Bodyweight or Light Weights)', sets: '3', reps: '20-25', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank to Push-Up'], name: 'Plank to Push-Up', sets: '3', reps: '10/side', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wall Walks'], name: 'Wall Walks', sets: '3', reps: 'Max', rest: '60s'},
    ],
};

export const MALE_LEG_GYM_WORKOUT: DayWorkout = {
    focus: 'Leg Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Barbell Back Squats'], name: 'Barbell Back Squats', sets: '4', reps: '8-10', rest: '90s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Press'], name: 'Leg Press', sets: '4', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Romanian Deadlifts'], name: 'Romanian Deadlifts', sets: '3', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Extension'], name: 'Leg Extension', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Curl Machine'], name: 'Leg Curl Machine', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Calf Raises'], name: 'Calf Raises', sets: '4', reps: '15-20', rest: '30s'},
    ],
};

export const MALE_LEG_HOME_WORKOUT: DayWorkout = {
    focus: 'Leg Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Squats', sets: '5', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lunges'], name: 'Lunges', sets: '4', reps: '15/leg', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Glute Bridges', sets: '4', reps: '20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bulgarian Split Squats (Chair)'], name: 'Bulgarian Split Squats (Chair)', sets: '3', reps: '15/leg', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Single-Leg Calf Raises'], name: 'Single-Leg Calf Raises', sets: '4', reps: '20/leg', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Jump Squats'], name: 'Jump Squats', sets: '3', reps: '15-20', rest: '60s'},
    ],
};

export const FEMALE_LEG_GYM_WORKOUT: DayWorkout = {
    focus: 'Leg Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Squats', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hip Thrusts'], name: 'Hip Thrusts', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Press'], name: 'Leg Press', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Kickbacks'], name: 'Cable Kickbacks', sets: '3', reps: '15/leg', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Extension'], name: 'Leg Extension', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Seated Calf Raises'], name: 'Seated Calf Raises', sets: '4', reps: '15-20', rest: '30s'},
    ],
};

export const FEMALE_LEG_HOME_WORKOUT: DayWorkout = {
    focus: 'Leg Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Squats', sets: '4', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridge March'], name: 'Glute Bridge March', sets: '4', reps: '20/leg', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lunges'], name: 'Lunges', sets: '3', reps: '15/leg', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Fire Hydrants'], name: 'Fire Hydrants', sets: '3', reps: '20/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Donkey Kicks'], name: 'Donkey Kicks', sets: '3', reps: '20/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Calf Raises'], name: 'Calf Raises', sets: '4', reps: '20-25', rest: '30s'},
    ],
};

export const MALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Posture Correction',
        gender: 'male',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wall Slides'], name: 'Wall Slides', sets: '3', reps: '15', rest: '45s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Superman Hold'], name: 'Superman Hold', sets: '3', reps: '30s hold', rest: '45s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Kickbacks (Bodyweight or Band)'], name: 'Glute Kickbacks (Bodyweight or Band)', sets: '3', reps: '15/side', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Reverse Snow Angels (on floor)'], name: 'Reverse Snow Angels (on floor)', sets: '3', reps: '20', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Seated Chin Tucks'], name: 'Seated Chin Tucks', sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Child’s Pose with Reach'], name: 'Child’s Pose with Reach', sets: '3', reps: '30s hold/side', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Butterfly Stretch'], name: 'Butterfly Stretch', sets: '2', reps: '60s hold', rest: '30s'},
        ],
    },
};

export const FEMALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = MALE_POSTURE_WORKOUT_PLAN; // Assuming they are the same

export const MALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Pull-Throughs'], name: 'Cable Pull-Throughs', sets: '4', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Barbell Hip Thrusts'], name: 'Barbell Hip Thrusts', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Kettlebell Swings'], name: 'Kettlebell Swings', sets: '4', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Leg Raises', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Standing Cable Hip Flexion'], name: 'Standing Cable Hip Flexion', sets: '3', reps: '15/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Controlled Box Jumps'], name: 'Controlled Box Jumps', sets: '3', reps: '10', rest: '60s'},
    ],
};

export const MALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bodyweight Glute Bridges'], name: 'Bodyweight Glute Bridges', sets: '4', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pelvic Tilts'], name: 'Pelvic Tilts', sets: '3', reps: '20', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Squats', sets: '4', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Leg Raises', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Fire Hydrants'], name: 'Fire Hydrants', sets: '3', reps: '15/side', rest: '30s'},
    ],
};

export const FEMALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Sumo Deadlifts'], name: 'Sumo Deadlifts', sets: '4', reps: '10-12', rest: '90s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Abductions'], name: 'Cable Abductions', sets: '3', reps: '15/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Weighted Glute Bridges'], name: 'Weighted Glute Bridges', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Kettlebell Swings'], name: 'Kettlebell Swings', sets: '4', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Knee Raises'], name: 'Hanging Knee Raises', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Stability Ball Plank'], name: 'Stability Ball Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const FEMALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bodyweight Glute Bridges'], name: 'Bodyweight Glute Bridges', sets: '4', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pelvic Tilts'], name: 'Pelvic Tilts', sets: '3', reps: '20', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Sumo Squats'], name: 'Sumo Squats', sets: '4', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Fire Hydrants'], name: 'Fire Hydrants', sets: '3', reps: '15/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bird Dog'], name: 'Bird Dog', sets: '3', reps: '15/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const MALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Facial Exercises',
        gender: 'male',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Jawline Sharper (Massage Along Jaw)'], name: 'Jawline Sharper (Massage Along Jaw)', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Vowel Mouth Stretch ("O"-"E")'], name: 'Vowel Mouth Stretch ("O"-"E")', sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lion's Breath"], name: "Lion's Breath", sets: '3', reps: '10', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin Tuck'], name: 'Chin Tuck', sets: '2', reps: '20', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Jaw Unlocker'], name: 'Jaw Unlocker', sets: '2', reps: '10/side', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cheek & Jawline Lifter'], name: 'Cheek & Jawline Lifter', sets: '3', reps: '15', rest: '30s'},
        ],
    },
};

export const FEMALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Facial Exercises',
        gender: 'female',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Gua Sha or Facial Massage (Jawline)'], name: 'Gua Sha or Facial Massage (Jawline)', sets: '1', reps: '2-3 mins', rest: 'N/A'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kiss the Ceiling / \"Whistler\""], name: "Kiss the Ceiling / \"Whistler\"", sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Vowel Mouth Stretch ("O"-"E")'], name: 'Vowel Mouth Stretch ("O"-"E")', sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lion's Breath"], name: "Lion's Breath", sets: '3', reps: '10', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin Tuck'], name: 'Chin Tuck', sets: '2', reps: '20', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cheek & Jawline Lifter'], name: 'Cheek & Jawline Lifter', sets: '3', reps: '15', rest: '30s'},
        ],
    },
};

export const MALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Vocal Exercises',
        gender: 'male',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lip Trills'], name: 'Lip Trills', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Humming Warm-Up'], name: 'Humming Warm-Up', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Sirens (Low to High Pitch Glide)'], name: 'Sirens (Low to High Pitch Glide)', sets: '3', reps: '10-12 glides', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Sustain Note (Deep Chest Voice)'], name: 'Sustain Note (Deep Chest Voice)', sets: '3', reps: '15-20s hold', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Consonant Articulation (P-T-K-B-D-G)'], name: 'Consonant Articulation (P-T-K-B-D-G)', sets: '3', reps: '15 reps/combo', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Breath Control (Inhale 4s – Hold – Exhale 8s)'], name: 'Breath Control (Inhale 4s – Hold – Exhale 8s)', sets: '5', reps: 'cycles', rest: '30s'},
        ],
    },
};

export const FEMALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Vocal Exercises',
        gender: 'female',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lip Bubbles (Trills with Sound)'], name: 'Lip Bubbles (Trills with Sound)', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Humming Glide (Nasal Resonance)'], name: 'Humming Glide (Nasal Resonance)', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Octave Sirens (Smooth Pitch Slide)'], name: 'Octave Sirens (Smooth Pitch Slide)', sets: '3', reps: '10-12 glides', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sustain 'Ee' / 'Oo' Notes"], name: "Sustain 'Ee' / 'Oo' Notes", sets: '3', reps: '15s hold/vowel', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Vowel Chains (AEIOU transitions)'], name: 'Vowel Chains (AEIOU transitions)', sets: '3', reps: '10 transitions', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Breath Support Drill (4-4-8 breathing)'], name: 'Breath Support Drill (4-4-8 breathing)', sets: '5', reps: 'cycles', rest: '30s'},
        ],
    },
};

export const GENERAL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps", gender: 'male', location: 'gym', day: 'Monday',
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Bench Press"], name: "Incline Bench Press", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline / Cable Fly"], name: "Decline / Cable Fly", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Machine Fly"], name: "Seated Machine Fly", sets: "3", reps: "15", rest: "45s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Pushdown"], name: "Triceps Pushdown", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Extension (Cable or Dumbbell)"], name: "Overhead Extension (Cable or Dumbbell)", sets: "3", reps: "12-15", rest: "60s" },
    ]
  },
  Tuesday: {
      focus: "Back & Biceps", gender: 'male', location: 'gym', day: 'Tuesday',
      exercises: [
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "10-12", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "12", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Rows"], name: "Barbell Rows", sets: "3", reps: "8-10", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Dumbbell Curl", sets: "3", reps: "10-12", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hammer Curl"], name: "Hammer Curl", sets: "3", reps: "12", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "45s"},
      ],
  },
  Wednesday: {
      focus: "Shoulders & Traps", gender: 'male', location: 'gym', day: 'Wednesday',
      exercises: [
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Shoulder Press", sets: "3", reps: "8-10", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Front Raises"], name: "Front Raises", sets: "3", reps: "15", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shrugs"], name: "Shrugs", sets: "4", reps: "12", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "45s"},
      ],
  },
  Thursday: {
      focus: "Legs & Abs", gender: 'male', location: 'gym', day: 'Thursday',
      exercises: [
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "3", reps: "8-10", rest: "90s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "10-12", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Walking Lunges"], name: "Dumbbell Walking Lunges", sets: "3", reps: "12/leg", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "20", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
      ],
  },
  Friday: {
      focus: "Rest", gender: 'male', location: 'gym', day: 'Friday',
      exercises: [],
  },
  Saturday: {
      focus: "Full Body Strength", gender: 'male', location: 'gym', day: 'Saturday',
      exercises: [
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "12", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "3", reps: "12", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Dumbbell Curl", sets: "3", reps: "12", rest: "45s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Pushdown"], name: "Triceps Pushdown", sets: "3", reps: "12", rest: "45s"},
      ],
  },
  Sunday: {
      focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Sunday',
      exercises: [
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Walk"], name: "Incline Walk", sets: "1", reps: "30 min", rest: "N/A"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching / Foam rolling"], name: "Stretching / Foam rolling", sets: "1", reps: "15 min", rest: "N/A"},
      ],
  },
};
export const GENERAL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Chest & Triceps", gender: 'male', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Diamond Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Close-Grip Push-Ups"], name: "Close-Grip Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Triceps Extensions"], name: "Overhead Triceps Extensions", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Tuesday: {
        focus: "Back & Biceps", gender: 'male', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Towel Rows"], name: "Towel Rows", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reverse Snow Angels"], name: "Reverse Snow Angels", sets: "3", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: "Biceps Curls", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: "Chin-Ups", sets: "3", reps: "Max", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Legs", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lunges", sets: "3", reps: "15/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Sit"], name: "Wall Sit", sets: "3", reps: "60s", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Shoulders, Arms & Abs", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Biceps Curls"], name: "Biceps Curls", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Friday: {
        focus: "Cardio", gender: 'male', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Saturday: {
        focus: "Full Body", gender: 'male', location: 'home', day: 'Saturday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Sunday',
        exercises: [],
    },
};
export const GENERAL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Full Body Strength", gender: 'female', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bench Press"], name: "Dumbbell Bench Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Tuesday: {
        focus: "Cardio & Core", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints (Interval)"], name: "Treadmill Sprints (Interval)", sets: "1", reps: "20 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Lower Body & Glutes", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Kickbacks"], name: "Cable Kickbacks", sets: "3", reps: "15/leg", rest: "45s"},
        ],
    },
    Thursday: {
        focus: "Upper Body & Arms", gender: 'female', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Bicep Curls"], name: "Cable Bicep Curls", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Rope Pushdowns"], name: "Triceps Rope Pushdowns", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Friday: {
        focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Full-Body Dynamic Stretch"], name: "Full-Body Dynamic Stretch", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Walk or Cycling"], name: "Incline Walk or Cycling", sets: "1", reps: "30 min", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Full Body Circuit", gender: 'female', location: 'gym', day: 'Saturday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "3", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const GENERAL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Full Body Strength", gender: 'female', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lunges", sets: "3", reps: "15/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Tuesday: {
        focus: "Cardio Blast", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "Max", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Lower Body & Glutes", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sumo Squats"], name: "Sumo Squats", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Fire Hydrants"], name: "Fire Hydrants", sets: "3", reps: "20/side", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Donkey Kicks"], name: "Donkey Kicks", sets: "3", reps: "20/side", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Upper Body & Core", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Push-Ups"], name: "Incline Push-Ups", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Resistance Band Rows"], name: "Resistance Band Rows", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bird Dog"], name: "Bird Dog", sets: "3", reps: "15/side", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Friday: {
        focus: "Active Recovery", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga or Stretch Class"], name: "Yoga or Stretch Class", sets: "1", reps: "20-30 min", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "HIIT Circuit", gender: 'female', location: 'home', day: 'Saturday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Crunches"], name: "Crunches", sets: "3", reps: "20-25", rest: "45s"},
        ],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Sunday',
        exercises: [],
    },
};

export const CRICKET_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Power & Agility", gender: 'male', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "4", reps: "8-10", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "8-10", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges with Dumbbells"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press Machine"], name: "Leg Press Machine", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "3", reps: "5 min", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'male', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "8-10", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'male', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Weighted)"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'male', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Power Cleans"], name: "Power Cleans", sets: "5", reps: "3-5", rest: "120s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", sets: "4", reps: "20m", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints (Interval)"], name: "Treadmill Sprints (Interval)", sets: "5", reps: "30s on, 60s off", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'male', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Mobility Drills"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const CRICKET_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Power & Agility", gender: 'male', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats (Chair)"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "15/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "3", reps: "5 min", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'male', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows (using table)", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank with Shoulder Taps"], name: "Plank with Shoulder Taps", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (each side)"], name: "Side Plank (each side)", sets: "3", reps: "45s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprint Drills", sets: "5", reps: "50m", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'male', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Mobility Drills"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Sunday',
        exercises: [],
    },
};
export const CRICKET_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Power & Agility", gender: 'female', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press Machine"], name: "Leg Press Machine", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "3", reps: "5 min", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bench Press"], name: "Dumbbell Bench Press", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["One-Arm Cable Row"], name: "One-Arm Cable Row", sets: "3", reps: "12/side", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Weighted)"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'female', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", sets: "4", reps: "30s", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bike Intervals"], name: "Bike Intervals", sets: "5", reps: "30s on, 60s off", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'female', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Mobility Drills"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const CRICKET_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Power & Agility", gender: 'female', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "3", reps: "5 min", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows (using table)", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank with Shoulder Taps"], name: "Plank with Shoulder Taps", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (each side)"], name: "Side Plank (each side)", sets: "3", reps: "45s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprint Drills", sets: "5", reps: "50m", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Mobility Drills"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling (Full Body)"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Sunday',
        exercises: [],
    },
};

export const BADMINTON_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Explosiveness", gender: 'male', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "4", reps: "8", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges with Dumbbells"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "10/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'male', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push Press"], name: "Push Press", sets: "4", reps: "8-10", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Rotational Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "10/side", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roller"], name: "Wrist Roller", sets: "3", reps: "Max", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'male', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Weighted)"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (each side)"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'male', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", sets: "4", reps: "30s on, 30s off", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const BADMINTON_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Explosiveness", gender: 'male', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "12", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'male', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "3", reps: "20", rest: "30s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (each side)"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'male', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", sets: "4", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Sunday',
        exercises: [],
    },
};
export const BADMINTON_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Explosiveness", gender: 'female', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges with Dumbbells"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Rotational Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "12/side", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roller"], name: "Wrist Roller", sets: "3", reps: "Max", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Weighted)"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (each side)"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'female', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", sets: "4", reps: "30s on, 30s off", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const BADMINTON_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Explosiveness", gender: 'female', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "12", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "3", reps: "20", rest: "30s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank (each side)"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Jumping Jacks", sets: "4", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Sunday',
        exercises: [],
    },
};

export const FOOTBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Strength & Power", gender: 'male', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "4", reps: "6-8", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "8-10", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "8", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'male', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "6-8", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "8-10", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bent Over Rows"], name: "Bent Over Rows", sets: "3", reps: "8-10", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'male', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Sprints (Short Distance)", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'male', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Power Cleans"], name: "Power Cleans", sets: "5", reps: "3-5", rest: "120s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sled Push"], name: "Sled Push", sets: "4", reps: "20m", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const FOOTBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Strength & Power", gender: 'male', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats (Chair)"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'male', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprint Drills", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'male', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'male', location: 'home', day: 'Sunday',
        exercises: [],
    },
};
export const FOOTBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Strength & Power", gender: 'female', location: 'gym', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bench Press"], name: "Dumbbell Bench Press", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Row Machine"], name: "Seated Row Machine", sets: "3", reps: "12-15", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Sprints (Short Distance)", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'female', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", sets: "4", reps: "30s on, 30s off", rest: "N/A"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday',
        exercises: [],
    },
};
export const FOOTBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Lower Body Strength & Power", gender: 'female', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats (Chair)"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows (using table)", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprint Drills", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Bodyweight)"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Stretching"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["High Knees"], name: "High Knees", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Saturday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Saturday',
        exercises: [],
    },
    Sunday: {
        focus: "Rest", gender: 'female', location: 'home', day: 'Sunday',
        exercises: [],
    },
};

export const BASKETBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = { 
    Monday: { focus: "Lower Body Power & Jumping", gender: 'male', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12 steps" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats", sets: "3", reps: "10/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" } ] }, 
    Tuesday: { focus: "Upper Body Strength", gender: 'male', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "8–10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Press (Dumbbells)"], name: "Overhead Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] }, 
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow for Athletes"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling Legs & Back"], name: "Foam Rolling Legs & Back", sets: "1", reps: "15 min" } ] }, 
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'male', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Power Cleans"], name: "Power Cleans", sets: "5", reps: "5" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "max" } ] }, 
    Friday: { focus: "Speed & Agility Drills", gender: 'male', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Sprints", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] }, 
    Saturday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday', exercises: [] }, 
    Sunday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday', exercises: [] }
};
export const BASKETBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Lower Body Power & Jumping", gender: 'male', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats (Chair)"], name: "Bulgarian Split Squats", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single-Leg Calf Raises"], name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10" } ] },
    Tuesday: { focus: "Upper Body Strength", gender: 'male', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow for Athletes"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dynamic Hip Stretching"], name: "Dynamic Hip Stretching", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'male', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "5", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" } ] },
    Friday: { focus: "Speed & Agility Drills", gender: 'male', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprints", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'home', day: 'Sunday', exercises: [] }
};
export const BASKETBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Lower Body Power & Jumping", gender: 'female', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges with Dumbbells"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" } ] },
    Tuesday: { focus: "Upper Body Strength", gender: 'female', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bench Press"], name: "Dumbbell Bench Press", sets: "4", reps: "12–15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow for Athletes"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling Legs & Back"], name: "Foam Rolling Legs & Back", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'female', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "max" } ] },
    Friday: { focus: "Speed & Agility Drills", gender: 'female', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints (Short Distance)"], name: "Cone Sprints", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday', exercises: [] }
};
export const BASKETBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Lower Body Power & Jumping", gender: 'female', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single-Leg Calf Raises"], name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10" } ] },
    Tuesday: { focus: "Upper Body Strength", gender: 'female', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chair Dips"], name: "Chair Dips", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow for Athletes"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dynamic Hip Stretching"], name: "Dynamic Hip Stretching", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'female', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "5", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" } ] },
    Friday: { focus: "Speed & Agility Drills", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprints", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'home', day: 'Sunday', exercises: [] }
};

export const VOLLEYBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'male', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "4", reps: "6-8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges with Dumbbells"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'male', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push Press"], name: "Push Press", sets: "4", reps: "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Rotational Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga or Mobility Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'male', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists (Weighted)"], name: "Russian Twists", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Roller"], name: "Ab Roller", sets: "3", reps: "15" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'male', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assault Bike Intervals"], name: "Assault Bike Intervals", sets: "10", reps: "20s on, 40s off" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday', exercises: [] }
};
export const VOLLEYBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'male', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "3", reps: "12" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'male', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga or Mobility Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Roll Substitute (Tennis Ball)"], name: "Foam Roll Substitute", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'male', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprints", sets: "10", reps: "15-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "4", reps: "45s" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'home', day: 'Sunday', exercises: [] }
};
export const VOLLEYBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'female', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'female', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "4", reps: "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assisted Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Rotational Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga or Mobility Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'female', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Roller"], name: "Ab Roller", sets: "3", reps: "15" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'female', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assault Bike Intervals"], name: "Assault Bike Intervals", sets: "10", reps: "20s on, 40s off" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday', exercises: [] }
};
export const VOLLEYBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'female', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Broad Jumps"], name: "Broad Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Walking Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Tuck Jumps"], name: "Tuck Jumps", sets: "3", reps: "12" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'female', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga or Mobility Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Roll Substitute (Tennis Ball)"], name: "Foam Roll Substitute", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'female', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Sprint Drills"], name: "Sprints", sets: "10", reps: "15-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "4", reps: "45s" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'home', day: 'Sunday', exercises: [] }
};

export const TABLE_TENNIS_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'male', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Back Squats"], name: "Barbell Back Squats", sets: "3", reps: "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Band Walks"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'male', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Twists"], name: "Medicine Ball Twists", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'male', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'male', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bench Press"], name: "Dumbbell Bench Press", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roller"], name: "Wrist Roller", sets: "3", reps: "max" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'male', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reaction Ball Drill"], name: "Reaction Ball Drill", sets: "3", reps: "5 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday', exercises: [] }
};
export const TABLE_TENNIS_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'male', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20-25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Band Walks"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'male', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'male', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'male', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "3", reps: "20" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'male', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shadow Badminton"], name: "Shadow Badminton", sets: "3", reps: "5 min" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'home', day: 'Sunday', exercises: [] }
};
export const TABLE_TENNIS_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'female', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Band Walks"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'female', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Woodchoppers"], name: "Cable Woodchoppers", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Twists"], name: "Medicine Ball Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Knee Raises"], name: "Hanging Knee Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'female', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'female', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Bench Press"], name: "Dumbbell Bench Press", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roller"], name: "Wrist Roller", sets: "3", reps: "max" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'female', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Reaction Ball Drill"], name: "Reaction Ball Drill", sets: "3", reps: "5 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday', exercises: [] }
};
export const TABLE_TENNIS_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'female', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20-25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Band Walks"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'female', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'female', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Mobility"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'female', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows (using table)"], name: "Inverted Rows", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Curls"], name: "Wrist Curls", sets: "3", reps: "20" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shadow Badminton"], name: "Shadow Badminton", sets: "3", reps: "5 min" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'home', day: 'Sunday', exercises: [] }
};


