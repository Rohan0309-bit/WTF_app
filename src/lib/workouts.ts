

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
  image?: string;
  gifUrl?: string; // Keep for backward compatibility if needed, but prefer image
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
  image: "/images/exercises/placeholder.png", // Default placeholder
  injury_prevention: "Always warm up before starting and listen to your body. Stop if you feel sharp pain.",
};

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const createImagePath = (name: string) => `/images/exercises/${slugify(name)}.png`;


// Add injury prevention tips here
export const MASTER_EXERCISE_DATA: { [key: string]: Partial<ExerciseDetails> } = {
    // Chest
    "Bench Press": { type: 'strength', muscle: 'Chest', equipment: 'Barbell', difficulty: 'intermediate', image: createImagePath("Bench Press"), injury_prevention: 'Keep your feet flat on the floor and avoid arching your back excessively. Use a spotter for heavy lifts.' },
    "Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Push-Ups"), injury_prevention: 'Keep your body in a straight line from head to heels. Lower your chest to the floor in a controlled manner.' },
    "Incline Bench Press": { type: 'strength', muscle: 'Chest', equipment: 'Barbell', difficulty: 'intermediate', image: createImagePath("Incline Bench Press"), injury_prevention: 'Do not let the dumbbells or barbell bounce off your chest. Control the weight throughout the movement.' },
    "Dumbbell Flyes": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', image: createImagePath("Dumbbell Flyes"), injury_prevention: 'Keep a slight bend in your elbows and focus on squeezing your chest muscles. Avoid using a weight that is too heavy.' },
    "Cable Crossover": { type: 'strength', muscle: 'Chest', equipment: 'Cable', difficulty: 'intermediate', image: createImagePath("Cable Crossover"), injury_prevention: 'Adjust the pulleys to the correct height and maintain a stable stance. Focus on the chest contraction.' },
    "Decline Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'intermediate', image: createImagePath("Decline Push-Ups"), injury_prevention: 'Place your feet securely on the elevated surface. Keep your core engaged to prevent your back from sagging.' },
    "Incline Dumbbell Press": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', image: createImagePath("Incline Dumbbell Press"), injury_prevention: 'Ensure the bench is at a 30-45 degree angle. Dont arch your back off the bench.' },
    "Chest Dips": { type: 'strength', muscle: 'Chest', equipment: 'Parallel Bars', difficulty: 'advanced', image: createImagePath("Chest Dips"), injury_prevention: 'Lean your torso forward to target the chest more effectively. Lower yourself until you feel a good stretch, but not pain in your shoulders.' },
    "Flat Dumbbell Press": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', image: createImagePath("Flat Dumbbell Press"), injury_prevention: 'Keep your wrists straight and directly above your elbows. Control the dumbbells throughout the movement.' },
    "Pec Deck Machine": { type: 'strength', muscle: 'Chest', equipment: 'Machine', difficulty: 'beginner', image: createImagePath("Pec Deck Machine"), injury_prevention: 'Set the seat height so the handles are at chest level. Avoid letting the weights slam at the end of the movement.' },
    "Wall Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Wall Push-Ups"), injury_prevention: 'Stand far enough from the wall to create a challenge but maintain control. Keep your back straight.' },
    "Wide-Grip Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'intermediate', image: createImagePath("Wide-Grip Push-Ups"), injury_prevention: 'Placing your hands wider than your shoulders can put more stress on the shoulder joints. Listen to your body and dont go too wide if it causes discomfort.' },

    // Back
    "Pull-Ups": { type: 'strength', muscle: 'Back', equipment: 'Pull-up Bar', difficulty: 'intermediate', image: createImagePath("Pull-Ups"), injury_prevention: 'Avoid swinging or using momentum. Start from a full hang and pull your chin over the bar. Use assistance bands if needed.' },
    "Deadlifts": { type: 'strength', muscle: 'Back', equipment: 'Barbell', difficulty: 'advanced', image: createImagePath("Deadlifts"), injury_prevention: 'Keep your back straight throughout the lift. Hinge at your hips and keep the bar close to your body. Start light to master the form.' },
    "Barbell Rows": { type: 'strength', muscle: 'Back', equipment: 'Barbell', difficulty: 'intermediate', image: createImagePath("Barbell Rows"), injury_prevention: 'Maintain a flat back throughout the movement. Hinge at the hips, and avoid using your lower back to lift the weight.' },
    "Lat Pulldowns": { type: 'strength', muscle: 'Back', equipment: 'Cable', difficulty: 'beginner', image: createImagePath("Lat Pulldowns"), injury_prevention: 'Pull the bar down to your upper chest, not behind your neck. Avoid using momentum by leaning back too far.' },
    "Seated Cable Row": { type: 'strength', muscle: 'Back', equipment: 'Cable', difficulty: 'beginner', image: createImagePath("Seated Cable Row"), injury_prevention: 'Keep your back straight and pull the handle towards your torso, squeezing your shoulder blades together.' },
    "Superman Hold": { type: 'strength', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Superman Hold"), injury_prevention: 'Lift your arms and legs gently. Avoid arching your back too aggressively, especially if you have lower back issues.' },
    "Inverted Rows": { type: 'strength', muscle: 'Back', equipment: 'Bar/Table', difficulty: 'intermediate', image: createImagePath("Inverted Rows"), injury_prevention: 'Keep your body in a straight line. The more horizontal your body, the harder the exercise. Start with a more vertical angle.' },
    "Back Extensions": { type: 'strength', muscle: 'Back', equipment: 'Hyperextension Bench', difficulty: 'intermediate', image: createImagePath("Back Extensions"), injury_prevention: 'Move in a slow, controlled manner. Avoid over-extending (arching) your back at the top of the movement.' },

    // Legs
    "Squats": { type: 'strength', muscle: 'Legs', equipment: 'Bodyweight/Barbell', difficulty: 'beginner', image: createImagePath("Squats"), injury_prevention: 'Keep your chest up, back straight, and go to a depth that is comfortable for your mobility. Ensure your knees track over your toes.' },
    "Lunges": { type: 'strength', muscle: 'Legs', equipment: 'Bodyweight/Dumbbell', difficulty: 'beginner', image: createImagePath("Lunges"), injury_prevention: 'Take controlled steps and ensure your front knee does not go past your toes. Keep your torso upright.' },
    "Romanian Deadlifts": { type: 'strength', muscle: 'Hamstrings', equipment: 'Barbell/Dumbbell', difficulty: 'intermediate', image: createImagePath("Romanian Deadlifts"), injury_prevention: 'Keep a slight bend in your knees and maintain a flat back. Hinge at the hips and lower the weight until you feel a stretch in your hamstrings.' },
    "Calf Raises": { type: 'strength', muscle: 'Calves', equipment: 'Bodyweight/Machine', difficulty: 'beginner', image: createImagePath("Calf Raises"), injury_prevention: 'Perform the movement slowly, focusing on a full range of motion. Avoid bouncing at the bottom.' },
    "Leg Press": { type: 'strength', muscle: 'Legs', equipment: 'Machine', difficulty: 'beginner', image: createImagePath("Leg Press"), injury_prevention: 'Do not lock out your knees at the top of the movement. Keep your lower back and hips pressed against the seat.' },
    "Hip Thrusts": { type: 'strength', muscle: 'Glutes', equipment: 'Barbell/Dumbbell', difficulty: 'intermediate', image: createImagePath("Hip Thrusts"), injury_prevention: 'Position the bench under your shoulder blades. Keep your chin tucked and focus on using your glutes to lift the weight.' },
    "Glute Bridges": { type: 'strength', muscle: 'Glutes', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Glute Bridges"), injury_prevention: 'Squeeze your glutes at the top of the movement and avoid over-arching your lower back.' },
    "Jump Squats": { type: 'plyometrics', muscle: 'Legs', equipment: 'Bodyweight', difficulty: 'intermediate', image: createImagePath("Jump Squats"), injury_prevention: 'Land softly on the balls of your feet and immediately bend your knees to absorb the impact.' },
    "Bulgarian Split Squats": { type: 'strength', muscle: 'Legs', equipment: 'Dumbbell/Bodyweight', difficulty: 'intermediate', image: createImagePath("Bulgarian Split Squats"), injury_prevention: 'Keep your torso upright and your front foot flat on the ground. Dont let your front knee travel too far past your toes.' },
    "Box Jumps": { type: 'plyometrics', muscle: 'Legs', equipment: 'Box', difficulty: 'intermediate', image: createImagePath("Box Jumps"), injury_prevention: 'Start with a low box. Land softly on the box and step down, do not jump down, to protect your joints.' },
    
    // Shoulders
    "Shoulder Press": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell/Barbell', difficulty: 'intermediate', image: createImagePath("Shoulder Press"), injury_prevention: 'Keep your core tight to avoid arching your back. Press the weight directly overhead, not in front or behind your head.' },
    "Lateral Raises": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: 'beginner', image: createImagePath("Lateral Raises"), injury_prevention: 'Use a light weight and lead with your elbows. Avoid using momentum or shrugging your traps.' },
    "Front Raises": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell/Plate', difficulty: 'beginner', image: createImagePath("Front Raises"), injury_prevention: 'Lift the weight only to shoulder height. Keep your core engaged to prevent leaning back.' },
    "Face Pulls": { type: 'strength', muscle: 'Shoulders', equipment: 'Cable', difficulty: 'beginner', image: createImagePath("Face Pulls"), injury_prevention: 'Use a lighter weight and focus on external rotation of the shoulders. Pull the rope towards your face, not your neck.' },
    "Shrugs": { type: 'strength', muscle: 'Traps', equipment: 'Dumbbell/Barbell', difficulty: 'beginner', image: createImagePath("Shrugs"), injury_prevention: 'Avoid rolling your shoulders. Lift them straight up towards your ears and slowly lower them down.' },
    "Pike Push-ups": { type: 'strength', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'intermediate', image: createImagePath("Pike Push-ups"), injury_prevention: 'Keep your head in a neutral position, looking towards your feet, not up. This helps protect your neck.' },
    "Arnold Press": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: 'intermediate', image: createImagePath("Arnold Press"), injury_prevention: 'Perform the rotation smoothly and with control. Avoid using a weight that is too heavy, which can strain the rotator cuff.' },

    // Arms
    "Dumbbell Curl": { type: 'strength', muscle: 'Biceps', equipment: 'Dumbbell', difficulty: 'beginner', image: createImagePath("Dumbbell Curl"), injury_prevention: 'Avoid swinging the dumbbells. Keep your upper arms stationary and focus on using your biceps to lift the weight.' },
    "Hammer Curl": { type: 'strength', muscle: 'Biceps', equipment: 'Dumbbell', difficulty: 'beginner', image: createImagePath("Hammer Curl"), injury_prevention: 'Keep your palms facing each other and control the movement on the way up and down to protect the elbow joint.' },
    "Triceps Pushdown": { type: 'strength', muscle: 'Triceps', equipment: 'Cable', difficulty: 'beginner', image: createImagePath("Triceps Pushdown"), injury_prevention: 'Keep your elbows tucked into your sides and avoid using momentum to move the weight.' },
    "Skull Crushers": { type: 'strength', muscle: 'Triceps', equipment: 'Barbell/Dumbbell', difficulty: 'intermediate', image: createImagePath("Skull Crushers"), injury_prevention: 'Lower the weight towards your forehead in a controlled manner. Dont let your elbows flare out too much.' },
    "Overhead Extension": { type: 'strength', muscle: 'Triceps', equipment: 'Cable/Dumbbell', difficulty: 'intermediate', image: createImagePath("Overhead Extension"), injury_prevention: 'Keep your core tight to protect your lower back. Avoid flaring your elbows out.' },
    "Close-Grip Push-Ups": { type: 'strength', muscle: 'Triceps', equipment: 'Bodyweight', difficulty: 'intermediate', image: createImagePath("Close-Grip Push-Ups"), injury_prevention: 'Place your hands closer than shoulder-width apart. Keep your elbows tucked in close to your body as you lower yourself.' },
    "Chin-Ups": { type: 'strength', muscle: 'Biceps', equipment: 'Pull-up Bar', difficulty: 'intermediate', image: createImagePath("Chin-Ups"), injury_prevention: 'Use a full range of motion. An underhand grip will target the biceps more, but can also strain the elbows if form is incorrect.' },

    // Core
    "Plank": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Plank"), injury_prevention: 'Keep your back flat and avoid letting your hips sag to prevent lower back strain. Engage your core and glutes.' },
    "Crunches": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Crunches"), injury_prevention: 'Avoid pulling on your neck with your hands. Place your hands across your chest or lightly by your head. Lift your shoulders off the floor.' },
    "Leg Raises": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Leg Raises"), injury_prevention: 'Press your lower back into the floor to avoid arching it. If this is difficult, start with bent-knee raises.' },
    "Russian Twists": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight/Medicine Ball', difficulty: 'intermediate', image: createImagePath("Russian Twists"), injury_prevention: 'Keep your back straight and rotate from your torso, not just your arms. Keep the movement controlled.' },
    "Hanging Leg Raises": { type: 'strength', muscle: 'Core', equipment: 'Pull-up Bar', difficulty: 'advanced', image: createImagePath("Hanging Leg Raises"), injury_prevention: 'Avoid swinging. Control the movement using your core strength. Start with hanging knee raises if straight-leg raises are too difficult.' },
    "Side Plank": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Side Plank"), injury_prevention: 'Keep your body in a straight line from your head to your feet. Dont let your hips sag.' },
    "Bicycle Crunches": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Bicycle Crunches"), injury_prevention: 'Go slowly and focus on the twisting motion. Bring your knee towards the opposite elbow, not the other way around.' },
    
    // Cardio / Full Body
    "Jumping Jacks": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Jumping Jacks"), injury_prevention: 'Land softly on the balls of your feet to reduce impact on your knees and ankles.' },
    "Burpees": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'intermediate', image: createImagePath("Burpees"), injury_prevention: 'Maintain control throughout the movement. Dont let your back sag during the plank portion.' },
    "Mountain Climbers": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Mountain Climbers"), injury_prevention: 'Keep your core engaged and your back flat. Bring your knees towards your chest in a controlled running motion.' },
    "Kettlebell Swings": { type: 'strength', muscle: 'Full Body', equipment: 'Kettlebell', difficulty: 'intermediate', image: createImagePath("Kettlebell Swings"), injury_prevention: 'This is a hip hinge movement, not a squat. Use the power from your hips and glutes to swing the kettlebell, not your arms.' },
    "Battle Ropes": { type: 'cardio', muscle: 'Full Body', equipment: 'Battle Ropes', difficulty: 'intermediate', image: createImagePath("Battle Ropes"), injury_prevention: 'Maintain a stable athletic stance. The motion should come from your entire body, not just your arms.' },
    "High Knees": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("High Knees"), injury_prevention: 'Land softly on the balls of your feet. Keep your core engaged and drive your knees up towards your chest.' },

    // Warmup & Flexibility
    "Wrist Roll": { type: 'warmup', muscle: 'Forearms', equipment: 'Wrist Roller', difficulty: 'beginner', image: createImagePath("Wrist Roll"), injury_prevention: 'Use a light weight and perform the movement slowly and in a controlled manner to avoid straining your wrist tendons.' },
    "Elbow Circles": { type: 'warmup', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Elbow Circles"), injury_prevention: 'Keep the circles smooth and controlled; avoid jerky movements.' },
    "Arm Circles": { type: 'warmup', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Arm Circles"), injury_prevention: 'Start with small circles and gradually increase the size to warm up the shoulder joint gently.' },
    "Bar Hanging": { type: 'strength', muscle: 'Back', equipment: 'Pull-up Bar', difficulty: 'beginner', image: createImagePath("Bar Hanging"), injury_prevention: 'Engage your shoulder muscles to support your weight; do not hang passively to avoid over-stressing the joints.' },
    "Quad Stretch": { type: 'flexibility', muscle: 'Quads', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Quad Stretch"), injury_prevention: 'Hold onto something for balance and avoid pulling your heel too forcefully. Keep your knees close together.' },
    "Hamstring Stretch": { type: 'flexibility', muscle: 'Hamstrings', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Hamstring Stretch"), injury_prevention: 'Keep a slight bend in your knee and avoid rounding your back to protect your spine.' },
    "Chest Stretch": { type: 'flexibility', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Chest Stretch"), injury_prevention: 'Perform the stretch gently. Do not force your arms back, to prevent shoulder impingement.' },
    "Shoulder Stretch": { type: 'flexibility', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Shoulder Stretch"), injury_prevention: 'Do not pull your arm across your body too hard. Keep your shoulder down and relaxed.' },
    "Triceps Stretch": { type: 'flexibility', muscle: 'Triceps', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Triceps Stretch"), injury_prevention: 'Gently pull your elbow behind your head; avoid forcing the stretch if you feel any shoulder pain.' },
    "Child\'s Pose": { type: 'flexibility', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Child's Pose"), injury_prevention: 'If you have knee issues, place a blanket under your shins for cushioning. Breathe deeply to relax your back.' },

    // More exercises to fill out the list
    "Dumbbell Pullover": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', image: createImagePath("Dumbbell Pullover"), injury_prevention: 'Keep a slight bend in your elbows and ensure your lower back stays on the bench. Use a lighter weight to master the form.' },
    "Single Arm Dumbbell Row": { type: 'strength', muscle: 'Back', equipment: 'Dumbbell', difficulty: 'intermediate', image: createImagePath("Single Arm Dumbbell Row"), injury_prevention: 'Keep your back flat and parallel to the floor. Pull the dumbbell towards your hip, not straight up.' },
    "T-Bar Row": { type: 'strength', muscle: 'Back', equipment: 'T-Bar Row Machine', difficulty: 'intermediate', image: createImagePath("T-Bar Row"), injury_prevention: 'Keep your chest up and back straight. Avoid using excessive momentum to lift the weight.' },
    "Good Mornings": { type: 'strength', muscle: 'Hamstrings', equipment: 'Barbell', difficulty: 'advanced', image: createImagePath("Good Mornings"), injury_prevention: 'Start with a very light weight or just the bar. Hinge at the hips while maintaining a straight back. This exercise requires excellent form.' },
    "Barbell Hip Thrust": { type: 'strength', muscle: 'Glutes', equipment: 'Barbell', difficulty: 'intermediate', image: createImagePath("Barbell Hip Thrust"), injury_prevention: 'Position the bench under your shoulder blades. Keep your chin tucked and focus on using your glutes to lift the weight.' },
    "Goblet Squats": { type: 'strength', muscle: 'Legs', equipment: 'Kettlebell/Dumbbell', difficulty: 'beginner', image: createImagePath("Goblet Squats"), injury_prevention: 'Keep the weight close to your chest and your back straight. This helps maintain an upright torso.' },
    "Cable Kickbacks": { type: 'strength', muscle: 'Glutes', equipment: 'Cable', difficulty: 'beginner', image: createImagePath("Cable Kickbacks"), injury_prevention: 'Keep your core engaged to avoid arching your back. Focus on squeezing the glute of the working leg.' },
    "Sled Push": { type: 'strength', muscle: 'Full Body', equipment: 'Sled', difficulty: 'intermediate', image: createImagePath("Sled Push"), injury_prevention: 'Maintain a straight line from your head to your heels. Drive through your legs.' },
    "Push Press": { type: 'strength', muscle: 'Shoulders', equipment: 'Barbell', difficulty: 'advanced', image: createImagePath("Push Press"), injury_prevention: 'Use your legs to initiate the drive. Keep the bar path straight up. Dont lean back excessively.' },
    "Clean and Jerk": { type: 'strength', muscle: 'Full Body', equipment: 'Barbell', difficulty: 'advanced', image: createImagePath("Clean and Jerk"), injury_prevention: 'This is a highly technical lift. Seek coaching to learn proper form to prevent injury.' },
    "Snatch": { type: 'strength', muscle: 'Full Body', equipment: 'Barbell', difficulty: 'advanced', image: createImagePath("Snatch"), injury_prevention: 'Requires significant mobility and technique. It is crucial to learn this from a qualified coach.' },
    "Medicine Ball Slams": { type: 'plyometrics', muscle: 'Full Body', equipment: 'Medicine Ball', difficulty: 'beginner', image: createImagePath("Medicine Ball Slams"), injury_prevention: 'Use your core to slam the ball down, not just your arms. Keep your back straight.' },
    "Treadmill Sprints": { type: 'cardio', muscle: 'Legs', equipment: 'Treadmill', difficulty: 'intermediate', image: createImagePath("Treadmill Sprints"), injury_prevention: 'Build up your speed gradually. Use the safety clip in case you lose your footing.' },
    "Incline Walk": { type: 'cardio', muscle: 'Legs', equipment: 'Treadmill', difficulty: 'beginner', image: createImagePath("Incline Walk"), injury_prevention: 'Hold the handrails for balance if needed, but avoid leaning on them, as this reduces the effectiveness of the workout.' },
    "Yoga Flow": { type: 'flexibility', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Yoga Flow"), injury_prevention: 'Move with your breath and dont force any poses. Listen to your body’s limitations.' },
    "Foam Rolling": { type: 'flexibility', muscle: 'Full Body', equipment: 'Foam Roller', difficulty: 'beginner', image: createImagePath("Foam Rolling"), injury_prevention: 'Roll slowly over tight muscles. Avoid rolling directly over joints or bones.' },
    "Agility Ladder Drills": { type: 'cardio', muscle: 'Full Body', equipment: 'Agility Ladder', difficulty: 'intermediate', image: createImagePath("Agility Ladder Drills"), injury_prevention: 'Stay on the balls of your feet and keep your movements quick and light to prevent tripping.' },
    "Cone Sprints": { type: 'cardio', muscle: 'Legs', equipment: 'Cones', difficulty: 'intermediate', image: createImagePath("Cone Sprints"), injury_prevention: 'Ensure you have a clear, non-slip surface. Warm up properly before sprinting.' },
    "Side Shuffles": { type: 'cardio', muscle: 'Legs', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Side Shuffles"), injury_prevention: 'Stay low in an athletic stance and push off your outside foot. Dont cross your feet over.' },
    "Jump Rope": { type: 'cardio', muscle: 'Full Body', equipment: 'Jump Rope', difficulty: 'beginner', image: createImagePath("Jump Rope"), injury_prevention: 'Turn the rope with your wrists, not your whole arms. Land softly on the balls of your feet.' },
    "Power Cleans": { type: 'strength', muscle: 'Full Body', equipment: 'Barbell', difficulty: 'advanced', image: createImagePath("Power Cleans"), injury_prevention: 'This is a technical lift. Focus on explosive hip extension. Master the form before adding significant weight.' },
    "Ab Roller": { type: 'strength', muscle: 'Core', equipment: 'Ab Wheel', difficulty: 'intermediate', image: createImagePath("Ab Roller"), injury_prevention: 'Keep your core tight and avoid arching your back. Only roll out as far as you can maintain a straight back.' },
    "Assault Bike Intervals": { type: 'cardio', muscle: 'Full Body', equipment: 'Assault Bike', difficulty: 'intermediate', image: createImagePath("Assault Bike Intervals"), injury_prevention: 'Set up the bike correctly for your height. Push and pull with both your arms and legs.' },
    "Reaction Ball Drill": { type: 'cardio', muscle: 'Full Body', equipment: 'Reaction Ball', difficulty: 'intermediate', image: createImagePath("Reaction Ball Drill"), injury_prevention: 'Use in an open space to avoid collisions. This drill improves hand-eye coordination.' },
    "Shadow Badminton": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', image: createImagePath("Shadow Badminton"), injury_prevention: 'Focus on proper footwork and swing mechanics. Ensure you have enough space around you.' },
    "Decline / Cable Fly": { type: "strength", muscle: "Chest", image: createImagePath("Decline Cable Fly") },
    "triceps pushdown": { type: "strength", muscle: "Triceps", image: createImagePath("triceps pushdown") },
    "Overhead Extension (Cable or Dumbbell)": { type: "strength", muscle: "Triceps", image: createImagePath("Overhead Extension Cable or Dumbbell") },
    "Underhand triceps pushdown": { type: "strength", muscle: "Triceps", image: createImagePath("Underhand triceps pushdown") },
    "Straight arm Lat Pulldowns": { type: "strength", muscle: "Back", image: createImagePath("Straight arm Lat Pulldowns") },
    "Ez Barbell Curl": { type: "strength", muscle: "Biceps", image: createImagePath("Ez Barbell Curl") },
    "Dumbbell Chest Press": { type: "strength", muscle: "Chest", image: createImagePath("Dumbbell Chest Press") },
    "Tricep Pushdowns": { type: "strength", muscle: "Triceps", image: createImagePath("Tricep Pushdowns") },
    "Reverse Crunches": { type: "strength", muscle: "Core", image: createImagePath("Reverse Crunches") },
    "Plank Side Holds": { type: "strength", muscle: "Core", image: createImagePath("Plank Side Holds") },
    "Stretching / Foam rolling": { type: "flexibility", muscle: "Full Body", image: createImagePath("Stretching Foam rolling") },
    "Optional: Yoga class": { type: "flexibility", muscle: "Full Body", image: createImagePath("Optional Yoga class") },
    "Overhead Triceps Extensions": { type: "strength", muscle: "Triceps", image: createImagePath("Overhead Triceps Extensions") },
    "Superman Pulls": { type: "strength", muscle: "Back", image: createImagePath("Superman Pulls") },
    "Isometric Hold": { type: "strength", muscle: "Full Body", image: createImagePath("Isometric Hold") },
    "Wrist Curls": { type: "strength", muscle: "Forearms", image: createImagePath("Wrist Curls") },
    "Forearm Squeeze": { type: "strength", muscle: "Forearms", image: createImagePath("Forearm Squeeze") },
    "Plank to Push-Up": { type: "strength", muscle: "Core", image: createImagePath("Plank to Push-Up") },
    "Heel Touches": { type: "strength", muscle: "Core", image: createImagePath("Heel Touches") },
    "Light Yoga": { type: "flexibility", muscle: "Full Body", image: createImagePath("Light Yoga") },
    "Stretching": { type: "flexibility", muscle: "Full Body", image: createImagePath("Stretching") },
    "20-30 min walk": { type: "cardio", muscle: "Full Body", image: createImagePath("20-30 min walk") },
    "Incline Chest Press": { type: "strength", muscle: "Chest", image: createImagePath("Incline Chest Press") },
    "Chest Fly": { type: "strength", muscle: "Chest", image: createImagePath("Chest Fly") },
    "Triceps Rope Pushdown": { type: "strength", muscle: "Triceps", image: createImagePath("Triceps Rope Pushdown") },
    "Overhead DB Triceps Extension": { type: "strength", muscle: "Triceps", image: createImagePath("Overhead DB Triceps Extension") },
    "Lat Pulldown": { type: "strength", muscle: "Back", image: createImagePath("Lat Pulldown") },
    "Assisted Pull-Ups": { type: "strength", muscle: "Back", image: createImagePath("Assisted Pull-Ups") },
    "Dumbbell Bicep Curls": { type: "strength", muscle: "Biceps", image: createImagePath("Dumbbell Bicep Curls") },
    "Cable Bicep Curls": { type: "strength", muscle: "Biceps", image: createImagePath("Cable Bicep Curls") },
    "Smith Squats": { type: "strength", muscle: "Legs", image: createImagePath("Smith Squats") },
    "DB Shoulder Press": { type: "strength", muscle: "Shoulders", image: createImagePath("DB Shoulder Press") },
    "Flat DB Bench": { type: "strength", muscle: "Chest", image: createImagePath("Flat DB Bench") },
    "Plank Hold": { type: "strength", muscle: "Core", image: createImagePath("Plank Hold") },
    "Cable Oblique Twists": { type: "strength", muscle: "Core", image: createImagePath("Cable Oblique Twists") },
    "T-Bar Rows": { type: "strength", muscle: "Back", image: createImagePath("T-Bar Rows") },
    "Wide Lat Pulldown": { type: "strength", muscle: "Back", image: createImagePath("Wide Lat Pulldown") },
    "Concentration Curls": { type: "strength", muscle: "Biceps", image: createImagePath("Concentration Curls") },
    "Wrist Curls & Ext": { type: "strength", muscle: "Forearms", image: createImagePath("Wrist Curls & Ext") },
    "Leg Curls": { type: "strength", muscle: "Hamstrings", image: createImagePath("Leg Curls") },
    "Cable Crunch + Twists": { type: "strength", muscle: "Core", image: createImagePath("Cable Crunch + Twists") },
    "Stretch / Foam Roll": { type: "flexibility", muscle: "Full Body", image: createImagePath("Stretch / Foam Roll") },
    "Yoga (Optional)": { type: "flexibility", muscle: "Full Body", image: createImagePath("Yoga (Optional)") },
    "Knee Push-Ups": { type: "strength", muscle: "Chest", image: createImagePath("Knee Push-Ups") },
    "Bench Dips": { type: "strength", muscle: "Triceps", image: createImagePath("Bench Dips") },
    "Triceps Kickbacks": { type: "strength", muscle: "Triceps", image: createImagePath("Triceps Kickbacks") },
    "Superwoman Hold": { type: "strength", muscle: "Back", image: createImagePath("Superwoman Hold") },
    "Snow Angels": { type: "strength", muscle: "Back", image: createImagePath("Snow Angels") },
    "Wall Angels": { type: "strength", muscle: "Shoulders", image: createImagePath("Wall Angels") },
    "Forearm Plank": { type: "strength", muscle: "Core", image: createImagePath("Forearm Plank") },
    "Bent Over Dumbbell Reverse Flys": { type: "strength", muscle: "Shoulders", image: createImagePath("Bent Over Dumbbell Reverse Flys") },
    "Wrist Circles": { type: "warmup", muscle: "Forearms", image: createImagePath("Wrist Circles") },
    "Sumo Squats": { type: "strength", muscle: "Legs", image: createImagePath("Sumo Squats") },
    "Step-Ups": { type: "strength", muscle: "Legs", image: createImagePath("Step-Ups") },
    "Donkey Kicks": { type: "strength", muscle: "Glutes", image: createImagePath("Donkey Kicks") },
    "Bird Dog": { type: "strength", muscle: "Core", image: createImagePath("Bird Dog") },
    "Walk 20-30 mins": { type: "cardio", muscle: "Full Body", image: createImagePath("Walk 20-30 mins") },
    "Flat Barbell Bench Press": { type: "strength", muscle: "Chest", image: createImagePath("Flat Barbell Bench Press") },
    "Decline Bench Press": { type: "strength", muscle: "Chest", image: createImagePath("Decline Bench Press") },
    "Chest Press Machine": { type: "strength", muscle: "Chest", image: createImagePath("Chest Press Machine") },
    "Push-Up (Chest Focus)": { type: "strength", muscle: "Chest", image: createImagePath("Push-Up (Chest Focus)") },
    "Wide Arm Push-Ups": { type: "strength", muscle: "Chest", image: createImagePath("Wide Arm Push-Ups") },
    "Chest Dips (Chair)": { type: "strength", muscle: "Chest", image: createImagePath("Chest Dips (Chair)") },
    "Explosive Push-Ups": { type: "plyometrics", muscle: "Chest", image: createImagePath("Explosive Push-Ups") },
    "Incline Chest Press (Machine or DB)": { type: "strength", muscle: "Chest", image: createImagePath("Incline Chest Press (Machine or DB)") },
    "Incline Cable Fly": { type: "strength", muscle: "Chest", image: createImagePath("Incline Cable Fly") },
    "Incline Push-Ups (Bench/Chair)": { type: "strength", muscle: "Chest", image: createImagePath("Incline Push-Ups (Bench/Chair)") },
    "Dumbbell Floor Press (If available)": { type: "strength", muscle: "Chest", image: createImagePath("Dumbbell Floor Press (If available)") },
    "Chest Squeeze (with Towel)": { type: "strength", muscle: "Chest", image: createImagePath("Chest Squeeze (with Towel)") },
    "Inverted Rows (using table)": { type: "strength", muscle: "Back", image: createImagePath("Inverted Rows (using table)") },
    "Prone Cobra": { type: "strength", muscle: "Back", image: createImagePath("Prone Cobra") },
    "Prone Arm Lifts (Y-T-W)": { type: "strength", muscle: "Back", image: createImagePath("Prone Arm Lifts (Y-T-W)") },
    "Cat-Cow Stretch": { type: "flexibility", muscle: "Back", image: createImagePath("Cat-Cow Stretch") },
    "Barbell Curls": { type: "strength", muscle: "Biceps", image: createImagePath("Barbell Curls") },
    "Resistance Band Curls": { type: "strength", muscle: "Biceps", image: createImagePath("Resistance Band Curls") },
    "Hammer Curls (Water Bottles/Dumbbells)": { type: "strength", muscle: "Biceps", image: createImagePath("Hammer Curls (Water Bottles/Dumbbells)") },
    "Wrist Squeezes (Towel/Stress Ball)": { type: "strength", muscle: "Forearms", image: createImagePath("Wrist Squeezes (Towel/Stress Ball)") },
    "Overhead Water Bottle Extensions": { type: "strength", muscle: "Triceps", image: createImagePath("Overhead Water Bottle Extensions") },
    "Hammer Curls (Water Bottles)": { type: "strength", muscle: "Biceps", image: createImagePath("Hammer Curls (Water Bottles)") },
    "Reverse Band Curls": { type: "strength", muscle: "Biceps", image: createImagePath("Reverse Band Curls") },
    "Cable Rope Crunch": { type: "strength", muscle: "Core", image: createImagePath("Cable Rope Crunch") },
    "Roman Chair Sit-Ups": { type: "strength", muscle: "Core", image: createImagePath("Roman Chair Sit-Ups") },
    "Weighted Russian Twists": { type: "strength", muscle: "Core", image: createImagePath("Weighted Russian Twists") },
    "Decline Crunch": { type: "strength", muscle: "Core", image: createImagePath("Decline Crunch") },
    "Hanging Knee Tucks": { type: "strength", muscle: "Core", image: createImagePath("Hanging Knee Tucks") },
    "Russian Twists (Bodyweight)": { type: "strength", muscle: "Core", image: createImagePath("Russian Twists (Bodyweight)") },
    "Side Plank (Both Sides)": { type: "strength", muscle: "Core", image: createImagePath("Side Plank (Both Sides)") },
    "Seated Ab Machine Crunch": { type: "strength", muscle: "Core", image: createImagePath("Seated Ab Machine Crunch") },
    "Decline Sit-Ups": { type: "strength", muscle: "Core", image: createImagePath("Decline Sit-Ups") },
    "Stability Ball Pass": { type: "strength", muscle: "Core", image: createImagePath("Stability Ball Pass") },
    "Flutter Kicks": { type: "strength", muscle: "Core", image: createImagePath("Flutter Kicks") },
    "Side Plank Hip Dips": { type: "strength", muscle: "Core", image: createImagePath("Side Plank Hip Dips") },
    "Shoulder Press (Barbell or Dumbbell)": { type: "strength", muscle: "Shoulders", image: createImagePath("Shoulder Press (Barbell or Dumbbell)") },
    "Lateral Arm Circles (Small + Big)": { type: "warmup", muscle: "Shoulders", image: createImagePath("Lateral Arm Circles (Small + Big)") },
    "Elevated Pike Hold": { type: "strength", muscle: "Shoulders", image: createImagePath("Elevated Pike Hold") },
    "Lateral Arm Raises (Using Water Bottles/Bands)": { type: "strength", muscle: "Shoulders", image: createImagePath("Lateral Arm Raises (Using Water Bottles/Bands)") },
    "Rear Delt Pulses (Bodyweight or Light Weights)": { type: "strength", muscle: "Shoulders", image: createImagePath("Rear Delt Pulses (Bodyweight or Light Weights)") },
    "Front Raises (Bottles/Bands)": { type: "strength", muscle: "Shoulders", image: createImagePath("Front Raises (Bottles/Bands)") },
    "Leg Curl Machine": { type: "strength", muscle: "Hamstrings", image: createImagePath("Leg Curl Machine") },
    "Standing Calf Raises": { type: "strength", muscle: "Calves", image: createImagePath("Standing Calf Raises") },
    "Side-Lying Leg Raises": { type: "strength", muscle: "Glutes", image: createImagePath("Side-Lying Leg Raises") },
    "Glute Bridge March": { type: "strength", muscle: "Glutes", image: createImagePath("Glute Bridge March") },
    "Jawline Sharper (Massage Along Jaw)": { muscle: 'Jaw', image: createImagePath("Jawline Sharper (Massage Along Jaw)") },
    'Vowel Mouth Stretch ("O"-"E")': { muscle: 'Face', image: createImagePath('Vowel Mouth Stretch ("O"-"E")') },
    "Lion's Breath": { muscle: 'Face', image: createImagePath("Lion's Breath") },
    "Chin Tuck": { muscle: 'Neck', image: createImagePath("Chin Tuck") },
    "Jaw Unlocker": { muscle: 'Jaw', image: createImagePath("Jaw Unlocker") },
    "Cheek & Jawline Lifter": { muscle: 'Cheeks', image: createImagePath("Cheek & Jawline Lifter") },
    "Gua Sha or Facial Massage (Jawline)": { muscle: 'Jaw', image: createImagePath("Gua Sha or Facial Massage (Jawline)") },
    'Kiss the Ceiling / "Whistler"': { muscle: 'Neck', image: createImagePath('Kiss the Ceiling / "Whistler"') },
    "Lip Trills": { muscle: 'Vocal Cords', image: createImagePath("Lip Trills") },
    "Humming Warm-Up": { muscle: 'Vocal Cords', image: createImagePath("Humming Warm-Up") },
    "Sirens (Low to High Pitch Glide)": { muscle: 'Vocal Cords', image: createImagePath("Sirens (Low to High Pitch Glide)") },
    "Sustain Note (Deep Chest Voice)": { muscle: 'Vocal Cords', image: createImagePath("Sustain Note (Deep Chest Voice)") },
    "Consonant Articulation (P-T-K-B-D-G)": { muscle: 'Lips, Tongue', image: createImagePath("Consonant Articulation (P-T-K-B-D-G)") },
    "Breath Control (Inhale 4s – Hold – Exhale 8s)": { muscle: 'Diaphragm', image: createImagePath("Breath Control (Inhale 4s – Hold – Exhale 8s)") },
    "Deep 'Ahh' Vowel Projection": { muscle: 'Vocal Cords', image: createImagePath("Deep 'Ahh' Vowel Projection") },
    "Lip Bubbles (Trills with Sound)": { muscle: 'Vocal Cords', image: createImagePath("Lip Bubbles (Trills with Sound)") },
    "Humming Glide (Nasal Resonance)": { muscle: 'Vocal Cords', image: createImagePath("Humming Glide (Nasal Resonance)") },
    "Octave Sirens (Smooth Pitch Slide)": { muscle: 'Vocal Cords', image: createImagePath("Octave Sirens (Smooth Pitch Slide)") },
    "Sustain 'Ee' / 'Oo' Notes": { muscle: 'Vocal Cords', image: createImagePath("Sustain 'Ee' / 'Oo' Notes") },
    "Vowel Chains (AEIOU transitions)": { muscle: 'Lips, Tongue', image: createImagePath("Vowel Chains (AEIOU transitions)") },
    "Breath Support Drill (4-4-8 breathing)": { muscle: 'Diaphragm', image: createImagePath("Breath Support Drill (4-4-8 breathing)") },
    "Vocal Stretch (Soft Yawns + 'Haa')": { muscle: 'Vocal Cords', image: createImagePath("Vocal Stretch (Soft Yawns + 'Haa')") },
    "Wall Slides": { muscle: 'Shoulders, Back', image: createImagePath("Wall Slides") },
    "Glute Kickbacks (Bodyweight or Band)": { muscle: 'Glutes', image: createImagePath("Glute Kickbacks (Bodyweight or Band)") },
    "Reverse Snow Angels (on floor)": { muscle: 'Back', image: createImagePath("Reverse Snow Angels (on floor)") },
    "Seated Chin Tucks": { muscle: 'Neck', image: createImagePath("Seated Chin Tucks") },
    "Child’s Pose with Reach": { muscle: 'Back, Shoulders', image: createImagePath("Child’s Pose with Reach") },
    "Butterfly Stretch": { muscle: 'Hips', image: createImagePath("Butterfly Stretch") },
    "Barbell Hip Thrusts": { muscle: 'Glutes', image: createImagePath("Barbell Hip Thrusts") },
    "Cable Pull-Throughs": { muscle: 'Glutes, Hamstrings', image: createImagePath("Cable Pull-Throughs") },
    "Standing Cable Hip Flexion": { muscle: 'Hips', image: createImagePath("Standing Cable Hip Flexion") },
    "Controlled Box Jumps": { muscle: 'Legs', image: createImagePath("Controlled Box Jumps") },
    "Bodyweight Glute Bridges": { muscle: 'Glutes', image: createImagePath("Bodyweight Glute Bridges") },
    "Pelvic Tilts": { muscle: 'Core, Pelvic Floor', image: createImagePath("Pelvic Tilts") },
    "Sumo Deadlifts": { muscle: 'Glutes, Hamstrings, Quads', image: createImagePath("Sumo Deadlifts") },
    "Cable Abductions": { muscle: 'Hips, Glutes', image: createImagePath("Cable Abductions") },
    "Weighted Glute Bridges": { muscle: 'Glutes', image: createImagePath("Weighted Glute Bridges") },
    "Stability Ball Plank": { muscle: 'Core', image: createImagePath("Stability Ball Plank") },
    "Walking Lunges with Dumbbells": { muscle: "Legs", type: "strength", image: createImagePath("Walking Lunges with Dumbbells")},
    "Overhead Press (Dumbbells)": { muscle: "Shoulders", type: "strength", image: createImagePath("Overhead Press (Dumbbells)")},
    "Triceps Pushdowns (Rope)": { muscle: "Triceps", type: "strength", image: createImagePath("Triceps Pushdowns (Rope)")},
    "Medicine Ball Rotational Slams": { muscle: "Core", type: "power", image: createImagePath("Medicine Ball Rotational Slams")},
    "Foam Rolling (Full Body)": { muscle: "Full Body", type: "flexibility", image: createImagePath("Foam Rolling (Full Body)")},
    "Yoga Flow (Hamstrings + Back)": { muscle: "Full Body", type: "flexibility", image: createImagePath("Yoga Flow (Hamstrings + Back)")},
    "Light Rowing": { muscle: "Full Body", type: "cardio", image: createImagePath("Light Rowing")},
    "Lateral Bounds": { muscle: "Legs", type: "plyometrics", image: createImagePath("Lateral Bounds")},
    "Single-Leg Deadlifts": { muscle: "Hamstrings", type: "strength", image: createImagePath("Single-Leg Deadlifts")},
    "Pull-Ups (Weighted if possible)": { muscle: "Back", type: "strength", image: createImagePath("Pull-Ups (Weighted if possible)")},
    "Dumbbell Thrusters": { muscle: "Full Body", type: "strength", image: createImagePath("Dumbbell Thrusters")},
    "Ab Rollouts": { muscle: "Core", type: "strength", image: createImagePath("Ab Rollouts")},
    "Farmer's Carry": { muscle: "Full Body", type: "strength", image: createImagePath("Farmer's Carry")},
    "Lateral Band Walks": { muscle: "Glutes", type: "strength", image: createImagePath("Lateral Band Walks")},
    "Triceps Rope Pushdowns": { muscle: "Triceps", type: "strength", image: createImagePath("Triceps Rope Pushdowns")},
    "Cable Woodchoppers": { muscle: "Core", type: "strength", image: createImagePath("Cable Woodchoppers")},
    "Yoga Flow (Pigeon, Down Dog, Cobra)": { muscle: "Full Body", type: "flexibility", image: createImagePath("Yoga Flow (Pigeon, Down Dog, Cobra)")},
    "Light Cycling/ Walking": { muscle: "Full Body", type: "cardio", image: createImagePath("Light Cycling/ Walking")},
    "Dumbbell Walking Lunges": { muscle: "Legs", type: "strength", image: createImagePath("Dumbbell Walking Lunges")},
    "Wall Ball Throws": { muscle: "Full Body", "type": "power", image: createImagePath("Wall Ball Throws")},
    "Plank to Push-Up": { muscle: "Core", "type": "strength", image: createImagePath("Plank to Push-Up")},
    "Agility Ladder (Simulated)": { muscle: "Full Body", "type": "agility", image: createImagePath("Agility Ladder (Simulated)")},
    "Side-to-Side Bounds": { muscle: "Legs", "type": "plyometrics", image: createImagePath("Side-to-Side Bounds")},
    "Reaction Ball or Wall Catch": { muscle: "Full Body", "type": "coordination", image: createImagePath("Reaction Ball or Wall Catch")},
    "Shadow Fielding": { muscle: "Full Body", "type": "coordination", image: createImagePath("Shadow Fielding")},
    "Bodyweight Squats": { muscle: "Legs", "type": "strength", image: createImagePath("Bodyweight Squats")},
    "Reverse Lunges": { muscle: "Legs", "type": "strength", image: createImagePath("Reverse Lunges")},
    "Wrist Curls (with bottles/cans)": { muscle: "Forearms", "type": "strength", image: createImagePath("Wrist Curls (with bottles/cans)")},
    "Full Body Stretch": { muscle: "Full Body", "type": "flexibility", image: createImagePath("Full Body Stretch")},
    "Easy Walking": { muscle: "Full Body", "type": "cardio", image: createImagePath("Easy Walking")},
    "Alternating Lunges": { muscle: "Legs", "type": "strength", image: createImagePath("Alternating Lunges")},
    "Plank Shoulder Taps": { muscle: "Core", "type": "strength", image: createImagePath("Plank Shoulder Taps")},
    "Skater Hops": { muscle: "Legs", "type": "plyometrics", image: createImagePath("Skater Hops")},
    "Side Lunges": { muscle: "Legs", "type": "strength", image: createImagePath("Side Lunges")},
    "Butt Kicks": { muscle: "Legs", "type": "cardio", image: createImagePath("Butt Kicks")},
    "Resistance Band Pull-Aparts": { muscle: "Shoulders", "type": "strength", image: createImagePath("Resistance Band Pull-Aparts")},
    "Yoga Routine": { muscle: "Full Body", "type": "flexibility", image: createImagePath("Yoga Routine")},
    "Shuttle Ghosting": { muscle: "Full Body", "type": "agility", image: createImagePath("Shuttle Ghosting")},
    "Jump Rope (imaginary)": { muscle: "Full Body", "type": "cardio", image: createImagePath("Jump Rope (imaginary)")},
    "Broad Jumps": { muscle: "Legs", "type": "plyometrics", image: createImagePath("Broad Jumps")},
    "Tuck Jumps": { muscle: "Legs", "type": "plyometrics", image: createImagePath("Tuck Jumps")},
    "Light Jog/Walk": { muscle: "Full Body", "type": "cardio", image: createImagePath("Light Jog/Walk")},
    "Power Cleans (if trained)": { muscle: "Full Body", "type": "power", image: createImagePath("Power Cleans (if trained)")},
    "Cone Sprints (Short Distance)": { muscle: "Full Body", "type": "agility", image: createImagePath("Cone Sprints (Short Distance)")},
    "Treadmill Sprint Intervals": { muscle: "Full Body", "type": "cardio", image: createImagePath("Treadmill Sprint Intervals")},
    "Rowing Machine": { muscle: "Full Body", "type": "cardio", image: createImagePath("Rowing Machine")},
    "Foam Rolling & Stretch": { muscle: "Full Body", "type": "flexibility", image: createImagePath("Foam Rolling & Stretch")},
    "Romanian Deadlifts (Dumbbells)": { muscle: "Hamstrings", "type": "strength", image: createImagePath("Romanian Deadlifts (Dumbbells)")},
    "Cable Lateral Raises": { muscle: "Shoulders", "type": "strength", image: createImagePath("Cable Lateral Raises")},
    "Lateral Hurdle Hops": { muscle: "Legs", "type": "plyometrics", image: createImagePath("Lateral Hurdle Hops")},
    "Rowing Machine Sprint": { muscle: "Full Body", "type": "cardio", image: createImagePath("Rowing Machine Sprint")},
    "Light Elliptical / Walk": { muscle: "Full Body", "type": "cardio", image: createImagePath("Light Elliptical / Walk")}
};