
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
  "Jawline Sharper (Massage Along Jaw)": { muscle: 'Jaw' },
  'Vowel Mouth Stretch ("O"-"E")': { muscle: 'Face' },
  "Lion's Breath": { muscle: 'Face' },
  "Chin Tuck": { muscle: 'Neck' },
  "Jaw Unlocker": { muscle: 'Jaw' },
  "Cheek & Jawline Lifter": { muscle: 'Cheeks' },
  "Gua Sha or Facial Massage (Jawline)": { muscle: 'Jaw' },
  'Kiss the Ceiling / "Whistler"': { muscle: 'Neck' },
  "Lip Trills": { muscle: 'Vocal Cords' },
  "Humming Warm-Up": { muscle: 'Vocal Cords' },
  "Sirens (Low to High Pitch Glide)": { muscle: 'Vocal Cords' },
  "Sustain Note (Deep Chest Voice)": { muscle: 'Vocal Cords' },
  "Consonant Articulation (P-T-K-B-D-G)": { muscle: 'Lips, Tongue' },
  "Breath Control (Inhale 4s – Hold – Exhale 8s)": { muscle: 'Diaphragm' },
  "Deep 'Ahh' Vowel Projection": { muscle: 'Vocal Cords' },
  "Lip Bubbles (Trills with Sound)": { muscle: 'Vocal Cords' },
  "Humming Glide (Nasal Resonance)": { muscle: 'Vocal Cords' },
  "Octave Sirens (Smooth Pitch Slide)": { muscle: 'Vocal Cords' },
  "Sustain 'Ee' / 'Oo' Notes": { muscle: 'Vocal Cords' },
  "Vowel Chains (AEIOU transitions)": { muscle: 'Lips, Tongue' },
  "Breath Support Drill (4-4-8 breathing)": { muscle: 'Diaphragm' },
  "Vocal Stretch (Soft Yawns + 'Haa')": { muscle: 'Vocal Cords' },
  "Wall Slides": { muscle: 'Shoulders, Back' },
  "Glute Kickbacks (Bodyweight or Band)": { muscle: 'Glutes' },
  "Reverse Snow Angels (on floor)": { muscle: 'Back' },
  "Seated Chin Tucks": { muscle: 'Neck' },
  "Child’s Pose with Reach": { muscle: 'Back, Shoulders' },
  "Butterfly Stretch": { muscle: 'Hips' },
  "Barbell Hip Thrusts": { muscle: 'Glutes' },
  "Cable Pull-Throughs": { muscle: 'Glutes, Hamstrings' },
  "Kettlebell Swings": { muscle: 'Glutes, Hamstrings' },
  "Standing Cable Hip Flexion": { muscle: 'Hips' },
  "Controlled Box Jumps": { muscle: 'Legs' },
  "Bodyweight Glute Bridges": { muscle: 'Glutes' },
  "Pelvic Tilts": { muscle: 'Core, Pelvic Floor' },
  "Fire Hydrants": { muscle: 'Hips, Glutes' },
  "Sumo Deadlifts": { muscle: 'Glutes, Hamstrings, Quads' },
  "Cable Abductions": { muscle: 'Hips, Glutes' },
  "Weighted Glute Bridges": { muscle: 'Glutes' },
  "Stability Ball Plank": { muscle: 'Core' },
  "Box Jumps": { muscle: "Legs", type: "plyometrics"},
  "Walking Lunges with Dumbbells": { muscle: "Legs", type: "strength"},
  "Overhead Press (Dumbbells)": { muscle: "Shoulders", type: "strength"},
  "Triceps Pushdowns (Rope)": { muscle: "Triceps", type: "strength"},
  "Medicine Ball Rotational Slams": { muscle: "Core", type: "power"},
  "Foam Rolling (Full Body)": { muscle: "Full Body", type: "flexibility"},
  "Yoga Flow (Hamstrings + Back)": { muscle: "Full Body", type: "flexibility"},
  "Light Rowing": { muscle: "Full Body", type: "cardio"},
  "Lateral Bounds": { muscle: "Legs", type: "plyometrics"},
  "Agility Ladder Drills": { muscle: "Full Body", type: "agility"},
  "Single-Leg Deadlifts": { muscle: "Hamstrings", type: "strength"},
  "Treadmill Sprints": { muscle: "Full Body", type: "cardio"},
  "Pull-Ups (Weighted if possible)": { muscle: "Back", type: "strength"},
  "Bent Over Rows": { muscle: "Back", type: "strength"},
  "Battle Ropes": { muscle: "Full Body", type: "conditioning"},
  "Dumbbell Thrusters": { muscle: "Full Body", type: "strength"},
  "Sled Push": { muscle: "Full Body", type: "strength"},
  "Ab Rollouts": { muscle: "Core", type: "strength"},
  "Farmer's Carry": { muscle: "Full Body", type: "strength"},
  "Goblet Squats": { muscle: "Legs", type: "strength"},
  "Lateral Band Walks": { muscle: "Glutes", type: "strength"},
  "Incline Dumbbell Press": { muscle: "Chest", type: "strength"},
  "Triceps Rope Pushdowns": { muscle: "Triceps", type: "strength"},
  "Cable Woodchoppers": { muscle: "Core", type: "strength"},
  "Yoga Flow (Pigeon, Down Dog, Cobra)": { muscle: "Full Body", type: "flexibility"},
  "Light Cycling/ Walking": { muscle: "Full Body", type: "cardio"},
  "Medicine Ball Slams": { muscle: "Full Body", type: "power"},
  "Dumbbell Walking Lunges": { muscle: "Legs", type: "strength"},
  "Wall Ball Throws": { muscle: "Full Body", "type": "power"},
  "Glute Bridges": { muscle: "Glutes", "type": "strength"},
  "Single-Leg Calf Raises": { muscle: "Calves", "type": "strength"},
  "Plank to Push-Up": { muscle: "Core", "type": "strength"},
  "Agility Ladder (Simulated)": { muscle: "Full Body", "type": "agility"},
  "Side-to-Side Bounds": { muscle: "Legs", "type": "plyometrics"},
  "Reaction Ball or Wall Catch": { muscle: "Full Body", "type": "coordination"},
  "Shadow Fielding": { muscle: "Full Body", "type": "coordination"},
  "Bodyweight Squats": { muscle: "Legs", "type": "strength"},
  "Reverse Lunges": { muscle: "Legs", "type": "strength"},
  "High Knees": { muscle: "Legs", "type": "cardio"},
  "Wrist Curls (with bottles/cans)": { muscle: "Forearms", "type": "strength"},
  "Burpees": { muscle: "Full Body", "type": "conditioning"},
  "Full Body Stretch": { muscle: "Full Body", "type": "flexibility"},
  "Easy Walking": { muscle: "Full Body", "type": "cardio"},
  "Alternating Lunges": { muscle: "Legs", "type": "strength"},
  "Plank Shoulder Taps": { muscle: "Core", "type": "strength"},
  "Skater Hops": { muscle: "Legs", "type": "plyometrics"},
  "Side Lunges": { muscle: "Legs", "type": "strength"},
  "Butt Kicks": { muscle: "Legs", "type": "cardio"},
  "Resistance Band Pull-Aparts": { muscle: "Shoulders", "type": "strength"},
  "Yoga Routine": { muscle: "Full Body", "type": "flexibility"},
  "Shuttle Ghosting": { muscle: "Full Body", "type": "agility"},
  "Jump Rope (imaginary)": { muscle: "Full Body", "type": "cardio"},
  "Broad Jumps": { muscle: "Legs", "type": "plyometrics"},
  "Tuck Jumps": { muscle: "Legs", "type": "plyometrics"},
  "Light Jog/Walk": { muscle: "Full Body", "type": "cardio"},
  "Power Cleans (if trained)": { muscle: "Full Body", "type": "power"},
  "Cone Sprints (Short Distance)": { muscle: "Full Body", "type": "agility"},
  "Treadmill Sprint Intervals": { muscle: "Full Body", "type": "cardio"},
  "Rowing Machine": { muscle: "Full Body", "type": "cardio"},
  "Foam Rolling & Stretch": { muscle: "Full Body", "type": "flexibility"},
  "Romanian Deadlifts (Dumbbells)": { muscle: "Hamstrings", "type": "strength"},
  "Cable Lateral Raises": { muscle: "Shoulders", "type": "strength"},
  "Lateral Hurdle Hops": { muscle: "Legs", "type": "plyometrics"},
  "Rowing Machine Sprint": { muscle: "Full Body", "type": "cardio"},
  "Light Elliptical / Walk": { muscle: "Full Body", "type": "cardio"},
  "Ab Roller": { muscle: "Core", type: "strength"},
  "Hanging Knee Raises": { muscle: "Core", type: "strength"},
  "Stability Ball Rollouts": { muscle: "Core", type: "strength"},
  "Squat Jumps": { type: "plyometrics", muscle: "Legs"},
  "Push-Up to Plank Jack": { type: "strength", muscle: "Core"},
  "Barbell Squats": { type: "strength", muscle: "Legs"},
  "Romanian Deadlift": { type: "strength", muscle: "Hamstrings"},
  "Seated Row": { type: "strength", muscle: "Back"},
  "Overhead Press": { type: "strength", muscle: "Shoulders"},
  "Sprint Intervals": { type: "cardio", muscle: "Full Body"},
  "Cone Drills": { type: "agility", muscle: "Full Body"},
  "Hip Mobility Drills": { type: "flexibility", muscle: "Hips"},
  "Deadlift": { type: "strength", muscle: "Full Body"},
  "Push Press": { type: "strength", muscle: "Shoulders"},
  "Farmer’s Carry": { type: "strength", muscle: "Full Body"},
  "Sled Push/Pull": { type: "strength", muscle: "Full Body"},
  "Walk or Light Jog": { type: "cardio", muscle: "Full Body"},
  "Inverted Rows": { type: "strength", muscle: "Back"},
  "Banded Rows": { type: "strength", muscle: "Back"},
  "Sprint in Place": { type: "cardio", muscle: "Full Body"},
  "Hip Circles": { type: "flexibility", muscle: "Hips"},
  "Burpee Push-Ups": { type: "strength", muscle: "Full Body"},
  "Squat to Press": { type: "strength", muscle: "Full Body"},
  "Chin-Up Hold": { type: "strength", muscle: "Back"},
  "Lunge Jumps": { type: "plyometrics", muscle: "Legs"},
  "Skater Jumps": { type: "plyometrics", muscle: "Legs"},
  "Jump Rope": { type: "cardio", muscle: "Full Body"},
  "Push-Ups (assisted)": { type: "strength", muscle: "Chest"},
  "Rowing": { type: "cardio", muscle: "Full Body"},
  "Bicep Curls": { type: "strength", muscle: "Biceps"},
  "Depth Jumps": { type: "plyometrics", muscle: "Legs"},
  "Spiking Practice": { type: "skill", muscle: "Full Body"},
  "Serving Practice": { type: "skill", muscle: "Full Body"},
  "Defensive Drills": { type: "skill", muscle: "Full Body"},
  "Spiking Footwork": { type: "skill", muscle: "Legs"},
  "Defensive Shuffle": { type: "skill", muscle: "Legs"},
  "Dribble Sprints": { type: "skill", muscle: "Full Body"},
  "Shooting Drills": { type: "skill", muscle: "Full Body"},
  "Layup Drills": { type: "skill", muscle: "Full Body"},
  "Shooting Form Drills": { type: "skill", muscle: "Full Body"},
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
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Squeezes (Towel or Ball)"], name: "Wrist Squeezes (Towel or Ball)", sets: "3", reps: "20", rest: "60s" },
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

    
