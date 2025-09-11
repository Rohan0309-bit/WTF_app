

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
  gifUrl: "https://placehold.co/400x400.png",
  injury_prevention: "Always warm up before starting and listen to your body. Stop if you feel sharp pain.",
};

// Add injury prevention tips here
export const MASTER_EXERCISE_DATA: { [key: string]: Partial<ExerciseDetails> } = {
    // Chest
    "Bench Press": { type: 'strength', muscle: 'Chest', equipment: 'Barbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your feet flat on the floor and avoid arching your back excessively. Use a spotter for heavy lifts.' },
    "Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your body in a straight line from head to heels. Lower your chest to the floor in a controlled manner.' },
    "Incline Bench Press": { type: 'strength', muscle: 'Chest', equipment: 'Barbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Do not let the dumbbells or barbell bounce off your chest. Control the weight throughout the movement.' },
    "Dumbbell Flyes": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep a slight bend in your elbows and focus on squeezing your chest muscles. Avoid using a weight that is too heavy.' },
    "Cable Crossover": { type: 'strength', muscle: 'Chest', equipment: 'Cable', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Adjust the pulleys to the correct height and maintain a stable stance. Focus on the chest contraction.' },
    "Decline Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Place your feet securely on the elevated surface. Keep your core engaged to prevent your back from sagging.' },
    "Incline Dumbbell Press": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Ensure the bench is at a 30-45 degree angle. Dont arch your back off the bench.' },
    "Chest Dips": { type: 'strength', muscle: 'Chest', equipment: 'Parallel Bars', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Lean your torso forward to target the chest more effectively. Lower yourself until you feel a good stretch, but not pain in your shoulders.' },
    "Flat Dumbbell Press": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your wrists straight and directly above your elbows. Control the dumbbells throughout the movement.' },
    "Pec Deck Machine": { type: 'strength', muscle: 'Chest', equipment: 'Machine', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Set the seat height so the handles are at chest level. Avoid letting the weights slam at the end of the movement.' },
    "Wall Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Stand far enough from the wall to create a challenge but maintain control. Keep your back straight.' },
    "Wide-Grip Push-Ups": { type: 'strength', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Placing your hands wider than your shoulders can put more stress on the shoulder joints. Listen to your body and dont go too wide if it causes discomfort.' },

    // Back
    "Pull-Ups": { type: 'strength', muscle: 'Back', equipment: 'Pull-up Bar', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Avoid swinging or using momentum. Start from a full hang and pull your chin over the bar. Use assistance bands if needed.' },
    "Deadlifts": { type: 'strength', muscle: 'Back', equipment: 'Barbell', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your back straight throughout the lift. Hinge at your hips and keep the bar close to your body. Start light to master the form.' },
    "Barbell Rows": { type: 'strength', muscle: 'Back', equipment: 'Barbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Maintain a flat back throughout the movement. Hinge at the hips, and avoid using your lower back to lift the weight.' },
    "Lat Pulldowns": { type: 'strength', muscle: 'Back', equipment: 'Cable', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Pull the bar down to your upper chest, not behind your neck. Avoid using momentum by leaning back too far.' },
    "Seated Cable Row": { type: 'strength', muscle: 'Back', equipment: 'Cable', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your back straight and pull the handle towards your torso, squeezing your shoulder blades together.' },
    "Superman Hold": { type: 'strength', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Lift your arms and legs gently. Avoid arching your back too aggressively, especially if you have lower back issues.' },
    "Inverted Rows": { type: 'strength', muscle: 'Back', equipment: 'Bar/Table', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your body in a straight line. The more horizontal your body, the harder the exercise. Start with a more vertical angle.' },
    "Back Extensions": { type: 'strength', muscle: 'Back', equipment: 'Hyperextension Bench', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Move in a slow, controlled manner. Avoid over-extending (arching) your back at the top of the movement.' },

    // Legs
    "Squats": { type: 'strength', muscle: 'Legs', equipment: 'Bodyweight/Barbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your chest up, back straight, and go to a depth that is comfortable for your mobility. Ensure your knees track over your toes.' },
    "Lunges": { type: 'strength', muscle: 'Legs', equipment: 'Bodyweight/Dumbbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Take controlled steps and ensure your front knee does not go past your toes. Keep your torso upright.' },
    "Romanian Deadlifts": { type: 'strength', muscle: 'Hamstrings', equipment: 'Barbell/Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep a slight bend in your knees and maintain a flat back. Hinge at the hips and lower the weight until you feel a stretch in your hamstrings.' },
    "Calf Raises": { type: 'strength', muscle: 'Calves', equipment: 'Bodyweight/Machine', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Perform the movement slowly, focusing on a full range of motion. Avoid bouncing at the bottom.' },
    "Leg Press": { type: 'strength', muscle: 'Legs', equipment: 'Machine', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Do not lock out your knees at the top of the movement. Keep your lower back and hips pressed against the seat.' },
    "Hip Thrusts": { type: 'strength', muscle: 'Glutes', equipment: 'Barbell/Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Position the bench under your shoulder blades. Keep your chin tucked and focus on using your glutes to lift the weight.' },
    "Glute Bridges": { type: 'strength', muscle: 'Glutes', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Squeeze your glutes at the top of the movement and avoid over-arching your lower back.' },
    "Jump Squats": { type: 'plyometrics', muscle: 'Legs', equipment: 'Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Land softly on the balls of your feet and immediately bend your knees to absorb the impact.' },
    "Bulgarian Split Squats": { type: 'strength', muscle: 'Legs', equipment: 'Dumbbell/Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your torso upright and your front foot flat on the ground. Dont let your front knee travel too far past your toes.' },
    "Box Jumps": { type: 'plyometrics', muscle: 'Legs', equipment: 'Box', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Start with a low box. Land softly on the box and step down, do not jump down, to protect your joints.' },
    
    // Shoulders
    "Shoulder Press": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell/Barbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your core tight to avoid arching your back. Press the weight directly overhead, not in front or behind your head.' },
    "Lateral Raises": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use a light weight and lead with your elbows. Avoid using momentum or shrugging your traps.' },
    "Front Raises": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell/Plate', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Lift the weight only to shoulder height. Keep your core engaged to prevent leaning back.' },
    "Face Pulls": { type: 'strength', muscle: 'Shoulders', equipment: 'Cable', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use a lighter weight and focus on external rotation of the shoulders. Pull the rope towards your face, not your neck.' },
    "Shrugs": { type: 'strength', muscle: 'Traps', equipment: 'Dumbbell/Barbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Avoid rolling your shoulders. Lift them straight up towards your ears and slowly lower them down.' },
    "Pike Push-ups": { type: 'strength', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your head in a neutral position, looking towards your feet, not up. This helps protect your neck.' },
    "Arnold Press": { type: 'strength', muscle: 'Shoulders', equipment: 'Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Perform the rotation smoothly and with control. Avoid using a weight that is too heavy, which can strain the rotator cuff.' },

    // Arms
    "Dumbbell Curl": { type: 'strength', muscle: 'Biceps', equipment: 'Dumbbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Avoid swinging the dumbbells. Keep your upper arms stationary and focus on using your biceps to lift the weight.' },
    "Hammer Curl": { type: 'strength', muscle: 'Biceps', equipment: 'Dumbbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your palms facing each other and control the movement on the way up and down to protect the elbow joint.' },
    "Triceps Pushdown": { type: 'strength', muscle: 'Triceps', equipment: 'Cable', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your elbows tucked into your sides and avoid using momentum to move the weight.' },
    "Skull Crushers": { type: 'strength', muscle: 'Triceps', equipment: 'Barbell/Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Lower the weight towards your forehead in a controlled manner. Dont let your elbows flare out too much.' },
    "Overhead Extension": { type: 'strength', muscle: 'Triceps', equipment: 'Cable/Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your core tight to protect your lower back. Avoid flaring your elbows out.' },
    "Close-Grip Push-Ups": { type: 'strength', muscle: 'Triceps', equipment: 'Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Place your hands closer than shoulder-width apart. Keep your elbows tucked in close to your body as you lower yourself.' },
    "Chin-Ups": { type: 'strength', muscle: 'Biceps', equipment: 'Pull-up Bar', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use a full range of motion. An underhand grip will target the biceps more, but can also strain the elbows if form is incorrect.' },

    // Core
    "Plank": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your back flat and avoid letting your hips sag to prevent lower back strain. Engage your core and glutes.' },
    "Crunches": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Avoid pulling on your neck with your hands. Place your hands across your chest or lightly by your head. Lift your shoulders off the floor.' },
    "Leg Raises": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Press your lower back into the floor to avoid arching it. If this is difficult, start with bent-knee raises.' },
    "Russian Twists": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight/Medicine Ball', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your back straight and rotate from your torso, not just your arms. Keep the movement controlled.' },
    "Hanging Leg Raises": { type: 'strength', muscle: 'Core', equipment: 'Pull-up Bar', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Avoid swinging. Control the movement using your core strength. Start with hanging knee raises if straight-leg raises are too difficult.' },
    "Side Plank": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your body in a straight line from your head to your feet. Dont let your hips sag.' },
    "Bicycle Crunches": { type: 'strength', muscle: 'Core', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Go slowly and focus on the twisting motion. Bring your knee towards the opposite elbow, not the other way around.' },
    
    // Cardio / Full Body
    "Jumping Jacks": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Land softly on the balls of your feet to reduce impact on your knees and ankles.' },
    "Burpees": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Maintain control throughout the movement. Dont let your back sag during the plank portion.' },
    "Mountain Climbers": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your core engaged and your back flat. Bring your knees towards your chest in a controlled running motion.' },
    "Kettlebell Swings": { type: 'strength', muscle: 'Full Body', equipment: 'Kettlebell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'This is a hip hinge movement, not a squat. Use the power from your hips and glutes to swing the kettlebell, not your arms.' },
    "Battle Ropes": { type: 'cardio', muscle: 'Full Body', equipment: 'Battle Ropes', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Maintain a stable athletic stance. The motion should come from your entire body, not just your arms.' },
    "High Knees": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Land softly on the balls of your feet. Keep your core engaged and drive your knees up towards your chest.' },

    // Warmup & Flexibility
    "Wrist Roll": { type: 'warmup', muscle: 'Forearms', equipment: 'Wrist Roller', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use a light weight and perform the movement slowly and in a controlled manner to avoid straining your wrist tendons.' },
    "Elbow Circles": { type: 'warmup', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep the circles smooth and controlled; avoid jerky movements.' },
    "Arm Circles": { type: 'warmup', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Start with small circles and gradually increase the size to warm up the shoulder joint gently.' },
    "Bar Hanging": { type: 'strength', muscle: 'Back', equipment: 'Pull-up Bar', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Engage your shoulder muscles to support your weight; do not hang passively to avoid over-stressing the joints.' },
    "Quad Stretch": { type: 'flexibility', muscle: 'Quads', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Hold onto something for balance and avoid pulling your heel too forcefully. Keep your knees close together.' },
    "Hamstring Stretch": { type: 'flexibility', muscle: 'Hamstrings', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep a slight bend in your knee and avoid rounding your back to protect your spine.' },
    "Chest Stretch": { type: 'flexibility', muscle: 'Chest', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Perform the stretch gently. Do not force your arms back, to prevent shoulder impingement.' },
    "Shoulder Stretch": { type: 'flexibility', muscle: 'Shoulders', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Do not pull your arm across your body too hard. Keep your shoulder down and relaxed.' },
    "Triceps Stretch": { type: 'flexibility', muscle: 'Triceps', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Gently pull your elbow behind your head; avoid forcing the stretch if you feel any shoulder pain.' },
    "Child\'s Pose": { type: 'flexibility', muscle: 'Back', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'If you have knee issues, place a blanket under your shins for cushioning. Breathe deeply to relax your back.' },

    // More exercises to fill out the list
    "Dumbbell Pullover": { type: 'strength', muscle: 'Chest', equipment: 'Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep a slight bend in your elbows and ensure your lower back stays on the bench. Use a lighter weight to master the form.' },
    "Single Arm Dumbbell Row": { type: 'strength', muscle: 'Back', equipment: 'Dumbbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your back flat and parallel to the floor. Pull the dumbbell towards your hip, not straight up.' },
    "T-Bar Row": { type: 'strength', muscle: 'Back', equipment: 'T-Bar Row Machine', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your chest up and back straight. Avoid using excessive momentum to lift the weight.' },
    "Good Mornings": { type: 'strength', muscle: 'Hamstrings', equipment: 'Barbell', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Start with a very light weight or just the bar. Hinge at the hips while maintaining a straight back. This exercise requires excellent form.' },
    "Barbell Hip Thrust": { type: 'strength', muscle: 'Glutes', equipment: 'Barbell', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Position the bench under your shoulder blades. Keep your chin tucked and focus on using your glutes to lift the weight.' },
    "Goblet Squats": { type: 'strength', muscle: 'Legs', equipment: 'Kettlebell/Dumbbell', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep the weight close to your chest and your back straight. This helps maintain an upright torso.' },
    "Cable Kickbacks": { type: 'strength', muscle: 'Glutes', equipment: 'Cable', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your core engaged to avoid arching your back. Focus on squeezing the glute of the working leg.' },
    "Sled Push": { type: 'strength', muscle: 'Full Body', equipment: 'Sled', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Maintain a straight line from your head to your heels. Drive through your legs.' },
    "Push Press": { type: 'strength', muscle: 'Shoulders', equipment: 'Barbell', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use your legs to initiate the drive. Keep the bar path straight up. Dont lean back excessively.' },
    "Clean and Jerk": { type: 'strength', muscle: 'Full Body', equipment: 'Barbell', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'This is a highly technical lift. Seek coaching to learn proper form to prevent injury.' },
    "Snatch": { type: 'strength', muscle: 'Full Body', equipment: 'Barbell', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Requires significant mobility and technique. It is crucial to learn this from a qualified coach.' },
    "Medicine Ball Slams": { type: 'plyometrics', muscle: 'Full Body', equipment: 'Medicine Ball', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use your core to slam the ball down, not just your arms. Keep your back straight.' },
    "Treadmill Sprints": { type: 'cardio', muscle: 'Legs', equipment: 'Treadmill', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Build up your speed gradually. Use the safety clip in case you lose your footing.' },
    "Incline Walk": { type: 'cardio', muscle: 'Legs', equipment: 'Treadmill', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Hold the handrails for balance if needed, but avoid leaning on them, as this reduces the effectiveness of the workout.' },
    "Yoga Flow": { type: 'flexibility', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Move with your breath and dont force any poses. Listen to your body’s limitations.' },
    "Foam Rolling": { type: 'flexibility', muscle: 'Full Body', equipment: 'Foam Roller', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Roll slowly over tight muscles. Avoid rolling directly over joints or bones.' },
    "Agility Ladder Drills": { type: 'cardio', muscle: 'Full Body', equipment: 'Agility Ladder', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Stay on the balls of your feet and keep your movements quick and light to prevent tripping.' },
    "Cone Sprints": { type: 'cardio', muscle: 'Legs', equipment: 'Cones', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Ensure you have a clear, non-slip surface. Warm up properly before sprinting.' },
    "Side Shuffles": { type: 'cardio', muscle: 'Legs', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Stay low in an athletic stance and push off your outside foot. Dont cross your feet over.' },
    "Jump Rope": { type: 'cardio', muscle: 'Full Body', equipment: 'Jump Rope', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Turn the rope with your wrists, not your whole arms. Land softly on the balls of your feet.' },
    "Power Cleans": { type: 'strength', muscle: 'Full Body', equipment: 'Barbell', difficulty: 'advanced', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'This is a technical lift. Focus on explosive hip extension. Master the form before adding significant weight.' },
    "Ab Roller": { type: 'strength', muscle: 'Core', equipment: 'Ab Wheel', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Keep your core tight and avoid arching your back. Only roll out as far as you can maintain a straight back.' },
    "Assault Bike Intervals": { type: 'cardio', muscle: 'Full Body', equipment: 'Assault Bike', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Set up the bike correctly for your height. Push and pull with both your arms and legs.' },
    "Reaction Ball Drill": { type: 'cardio', muscle: 'Full Body', equipment: 'Reaction Ball', difficulty: 'intermediate', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Use in an open space to avoid collisions. This drill improves hand-eye coordination.' },
    "Shadow Badminton": { type: 'cardio', muscle: 'Full Body', equipment: 'Bodyweight', difficulty: 'beginner', gifUrl: 'https://placehold.co/400x400.png', injury_prevention: 'Focus on proper footwork and swing mechanics. Ensure you have enough space around you.' }
};

export const WARMUP_EXERCISES: ExerciseDetails[] = [
  { ...defaultExerciseProps, name: "Jumping Jacks", sets: "1", reps: "30 sec", rest: "20s", ...MASTER_EXERCISE_DATA["Jumping Jacks"] },
  { ...defaultExerciseProps, name: "Wrist Roll", sets: "1", reps: "10 each side", rest: "20s", ...MASTER_EXERCISE_DATA["Wrist Roll"] },
  { ...defaultExerciseProps, name: "Elbow Circles", sets: "1", reps: "10 each side", rest: "20s", ...MASTER_EXERCISE_DATA["Elbow Circles"] },
  { ...defaultExerciseProps, name: "Arm Circles", sets: "1", reps: "10 each side", rest: "20s", ...MASTER_EXERCISE_DATA["Arm Circles"] },
  { ...defaultExerciseProps, name: "Bar Hanging", sets: "1", reps: "10 sec", rest: "20s", ...MASTER_EXERCISE_DATA["Bar Hanging"] },
  { ...defaultExerciseProps, name: "Plank", sets: "1", reps: "30 sec", rest: "0s", ...MASTER_EXERCISE_DATA["Plank"] }
];

export const COOLDOWN_EXERCISES: ExerciseDetails[] = [
    { ...defaultExerciseProps, name: "Quad Stretch", sets: "1", reps: "30s each side", rest: "10s", ...MASTER_EXERCISE_DATA["Quad Stretch"] },
    { ...defaultExerciseProps, name: "Hamstring Stretch", sets: "1", reps: "30s each side", rest: "10s", ...MASTER_EXERCISE_DATA["Hamstring Stretch"] },
    { ...defaultExerciseProps, name: "Chest Stretch", sets: "1", reps: "30s", rest: "10s", ...MASTER_EXERCISE_DATA["Chest Stretch"] },
    { ...defaultExerciseProps, name: "Shoulder Stretch", sets: "1", reps: "30s each side", rest: "10s", ...MASTER_EXERCISE_DATA["Shoulder Stretch"] },
    { ...defaultExerciseProps, name: "Triceps Stretch", sets: "1", reps: "30s each side", rest: "10s", ...MASTER_EXERCISE_DATA["Triceps Stretch"] },
    { ...defaultExerciseProps, name: "Child\'s Pose", sets: "1", reps: "60s", rest: "0s", ...MASTER_EXERCISE_DATA["Child's Pose"] }
];

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
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "8-10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"], name: "Incline Dumbbell Press", sets: "4", reps: "10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Crossover", sets: "3", reps: "12-15", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pec Deck Machine"], name: "Pec Deck Machine", sets: "3", reps: "10", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Pullover"], name: "Dumbbell Pullover", sets: "3", reps: "12", rest: "60s" },
  ]
};

export const MALE_CHEST_HOME: DayWorkout = {
  focus: "Chest (Home)",
  gender: 'male',
  location: 'home',
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "15-20", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"], name: "Incline Push-Ups", sets: "4", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Decline Push-Ups"], name: "Decline Push-Ups", sets: "3", reps: "12-15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wide-Grip Push-Ups"], name: "Wide-Grip Push-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Dips"], name: "Chest Dips", sets: "3", reps: "12", rest: "60s" },
  ]
};

export const FEMALE_CHEST_GYM: DayWorkout = {
  focus: "Chest (Gym)",
  gender: 'female',
  location: 'gym',
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"], name: "Incline Dumbbell Press", sets: "3", reps: "12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pec Deck Machine"], name: "Pec Deck Machine", sets: "3", reps: "12-15", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Flat Dumbbell Press"], name: "Flat Dumbbell Press", sets: "3", reps: "10-12", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Crossover", sets: "3", reps: "15", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s" },
  ]
};

export const FEMALE_CHEST_HOME: DayWorkout = {
  focus: "Chest (Home)",
  gender: 'female',
  location: 'home',
  exercises: [
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wall Push-Ups"], name: "Wall Push-Ups", sets: "3", reps: "20", rest: "45s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max on knees", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Dumbbell Press"], name: "Incline Push-Ups", sets: "3", reps: "15", rest: "60s" },
    { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wide-Grip Push-Ups"], name: "Wide-Grip Push-Ups", sets: "3", reps: "Max on knees", rest: "60s" },
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
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Inverted Rows'], name: 'Inverted Rows', sets: '4', reps: '10-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Superman Hold'], name: 'Superman Hold', sets: '3', reps: '30s hold', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['T-Bar Row'], name: 'Towel Rows', sets: '4', reps: '15-20', rest: '45s'},
    ],
};

export const FEMALE_BACK_GYM: DayWorkout = {
    focus: 'Back Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pull-Ups'], name: 'Assisted Pull-Ups', sets: '4', reps: '8-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lat Pulldowns'], name: 'Lat Pulldowns', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Single Arm Dumbbell Row'], name: 'Single Arm Dumbbell Row', sets: '3', reps: '12/arm', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Back Extensions'], name: 'Back Extensions', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Seated Cable Row'], name: 'Seated Cable Row', sets: '3', reps: '15', rest: '45s'},
    ],
};

export const FEMALE_BACK_HOME: DayWorkout = {
    focus: 'Back Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Superman Hold'], name: 'Superman Hold', sets: '4', reps: '20-30s hold', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Inverted Rows'], name: 'Inverted Rows', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Good Mornings'], name: 'Prone Arm Lifts (Y-T-W)', sets: '3', reps: '15', rest: '45s'},
    ],
};

export const MALE_ARMS_GYM: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Dumbbell Curl'], name: 'Barbell Curl', sets: '4', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Incline Dumbbell Press'], name: 'Incline Dumbbell Curls', sets: '3', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curl'], name: 'Hammer Curl', sets: '3', reps: '12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Skull Crushers'], name: 'Skull Crushers', sets: '4', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Extension'], name: 'Overhead Cable Extension', sets: '3', reps: '12-15', rest: '45s'},
    ],
};

export const MALE_ARMS_HOME: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Close-Grip Push-Ups'], name: 'Close-Grip Push-Ups', sets: '4', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Dips'], name: 'Triceps Dips', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Extension'], name: 'Overhead Triceps Extensions (Backpack/Weight)', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin-Ups'], name: 'Chin-Ups', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curl'], name: 'Hammer Curls (Water Bottles/Dumbbells)', sets: '3', reps: '15-20', rest: '45s'},
    ],
};

export const FEMALE_ARMS_GYM: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Triceps Pushdown'], name: 'Cable Triceps Pushdowns', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Extension'], name: 'Overhead DB Triceps Extension', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Dips'], name: 'Triceps Dips', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Dumbbell Curl'], name: 'Cable Bicep Curls', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curl'], name: 'Incline Hammer Curls', sets: '3', reps: '12-15', rest: '45s'},
    ],
};

export const FEMALE_ARMS_HOME: DayWorkout = {
    focus: 'Arms Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Close-Grip Push-Ups'], name: 'Diamond Push-Ups', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Dips'], name: 'Triceps Dips', sets: '3', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Overhead Extension'], name: 'Overhead Water Bottle Extensions', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Dumbbell Curl'], name: 'Resistance Band Curls', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hammer Curl'], name: 'Hammer Curls (Water Bottles)', sets: '3', reps: '15-20', rest: '45s'},
    ],
};

export const MALE_ABS_GYM: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Crossover'], name: 'Cable Rope Crunch', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Leg Raises', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Back Extensions'], name: 'Roman Chair Sit-Ups', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Russian Twists'], name: 'Weighted Russian Twists', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Crunches'], name: 'Decline Crunch', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const MALE_ABS_HOME: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Crunches'], name: 'Crunches', sets: '4', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Knee Tucks', sets: '4', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bicycle Crunches'], name: 'Bicycle Crunches', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Russian Twists'], name: 'Russian Twists (Bodyweight)', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Leg Raises', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Side Plank'], name: 'Side Plank (Both Sides)', sets: '3', reps: '45s hold', rest: '30s'},
    ],
};

export const FEMALE_ABS_GYM: DayWorkout = {
    focus: 'Abs & Core Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Crossover'], name: 'Cable Rope Crunch', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Knee Raises', sets: '3', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Pec Deck Machine'], name: 'Seated Ab Machine Crunch', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Crunches'], name: 'Decline Sit-Ups', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Stability Ball Pass', sets: '3', reps: '15-20', rest: '45s'},
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
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Flutter Kicks', sets: '3', reps: '30s', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bicycle Crunches'], name: 'Bicycle Crunches', sets: '3', reps: '20/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Side Plank'], name: 'Side Plank Hip Dips', sets: '3', reps: '15/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Mountain Climbers'], name: 'Mountain Climbers', sets: '3', reps: '30s', rest: '30s'},
    ],
};

export const MALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
    focus: 'Shoulder Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Shoulder Press'], name: 'Shoulder Press (Barbell or Dumbbell)', sets: '4', reps: '8-10', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Raises'], name: 'Lateral Raises', sets: '4', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises'], name: 'Front Raises', sets: '3', reps: '12-15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Face Pulls'], name: 'Face Pulls (Cable or Bands)', sets: '3', reps: '15-20', rest: '45s'},
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
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Arm Circles'], name: 'Lateral Arm Circles (Small + Big)', sets: '3', reps: '20/direction', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Elevated Pike Hold', sets: '3', reps: '30s hold', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Push-Ups'], name: 'Wall Walks', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Raises'], name: 'Lateral Arm Raises (Using Water Bottles/Bands)', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises'], name: 'Rear Delt Pulses (Bodyweight or Light Weights)', sets: '3', reps: '20-25', rest: '30s'},
    ],
};

export const FEMALE_SHOULDER_GYM_WORKOUT: DayWorkout = {
    focus: 'Shoulder Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Shoulder Press'], name: 'DB Shoulder Press', sets: '4', reps: '12-15', rest: '60s'},
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
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lateral Raises'], name: 'Lateral Arm Raises (Using Water Bottles/Bands)', sets: '4', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises'], name: 'Front Raises (Bottles/Bands)', sets: '3', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Front Raises'], name: 'Rear Delt Pulses (Bodyweight or Light Weights)', sets: '3', reps: '20-25', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank to Push-Up', sets: '3', reps: '10/side', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Push-Ups'], name: 'Wall Walks', sets: '3', reps: 'Max', rest: '60s'},
    ],
};

export const MALE_LEG_GYM_WORKOUT: DayWorkout = {
    focus: 'Leg Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Barbell Back Squats', sets: '4', reps: '8-10', rest: '90s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Press'], name: 'Leg Press', sets: '4', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Romanian Deadlifts'], name: 'Romanian Deadlifts', sets: '3', reps: '10-12', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lunges'], name: 'Leg Extension', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hamstring Stretch'], name: 'Leg Curl Machine', sets: '3', reps: '15-20', rest: '45s'},
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
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Bulgarian Split Squats'], name: 'Bulgarian Split Squats (Chair)', sets: '3', reps: '15/leg', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Calf Raises'], name: 'Single-Leg Calf Raises', sets: '4', reps: '20/leg', rest: '30s'},
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
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lunges'], name: 'Leg Extension', sets: '3', reps: '15-20', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Calf Raises'], name: 'Seated Calf Raises', sets: '4', reps: '15-20', rest: '30s'},
    ],
};

export const FEMALE_LEG_HOME_WORKOUT: DayWorkout = {
    focus: 'Leg Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Squats', sets: '4', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Glute Bridge March', sets: '4', reps: '20/leg', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lunges'], name: 'Lunges', sets: '3', reps: '15/leg', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Fire Hydrants', sets: '3', reps: '20/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Donkey Kicks', sets: '3', reps: '20/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Calf Raises'], name: 'Calf Raises', sets: '4', reps: '20-25', rest: '30s'},
    ],
};

export const MALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Posture Correction',
        gender: 'male',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Push-Ups'], name: 'Wall Slides', sets: '3', reps: '15', rest: '45s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Superman Hold'], name: 'Superman Hold', sets: '3', reps: '30s hold', rest: '45s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Kickbacks'], name: 'Glute Kickbacks (Bodyweight or Band)', sets: '3', reps: '15/side', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Back Extensions'], name: 'Reverse Snow Angels (on floor)', sets: '3', reps: '20', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Crunches'], name: 'Seated Chin Tucks', sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Child's Pose"], name: 'Child’s Pose with Reach', sets: '3', reps: '30s hold/side', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hamstring Stretch'], name: 'Butterfly Stretch', sets: '2', reps: '60s hold', rest: '30s'},
        ],
    },
};

export const FEMALE_POSTURE_WORKOUT_PLAN: WorkoutSplit = MALE_POSTURE_WORKOUT_PLAN; // Assuming they are the same

export const MALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'male',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Good Mornings'], name: 'Cable Pull-Throughs', sets: '4', reps: '15', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Barbell Hip Thrust'], name: 'Barbell Hip Thrusts', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Kettlebell Swings'], name: 'Kettlebell Swings', sets: '4', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Leg Raises', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Lunges'], name: 'Standing Cable Hip Flexion', sets: '3', reps: '15/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Box Jumps'], name: 'Controlled Box Jumps', sets: '3', reps: '10', rest: '60s'},
    ],
};

export const MALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'male',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Bodyweight Glute Bridges', sets: '4', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Pelvic Tilts', sets: '3', reps: '20', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Squats', sets: '4', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Leg Raises'], name: 'Leg Raises', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Fire Hydrants', sets: '3', reps: '15/side', rest: '30s'},
    ],
};

export const FEMALE_SEXUAL_WELLNESS_GYM: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'female',
    location: 'gym',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Deadlifts'], name: 'Sumo Deadlifts', sets: '4', reps: '10-12', rest: '90s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Cable Kickbacks'], name: 'Cable Abductions', sets: '3', reps: '15/side', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Weighted Glute Bridges', sets: '4', reps: '12-15', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Kettlebell Swings'], name: 'Kettlebell Swings', sets: '4', reps: '20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Hanging Leg Raises'], name: 'Hanging Knee Raises', sets: '3', reps: 'Max', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Stability Ball Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const FEMALE_SEXUAL_WELLNESS_HOME: DayWorkout = {
    focus: 'Sexual Wellness Workout',
    gender: 'female',
    location: 'home',
    exercises: [
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Bodyweight Glute Bridges', sets: '4', reps: '20-25', rest: '45s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Glute Bridges'], name: 'Pelvic Tilts', sets: '3', reps: '20', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Sumo Squats', sets: '4', reps: '15-20', rest: '60s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Squats'], name: 'Fire Hydrants', sets: '3', reps: '15/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Back Extensions'], name: 'Bird Dog', sets: '3', reps: '15/side', rest: '30s'},
        {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Plank'], name: 'Plank', sets: '3', reps: '60s hold', rest: '30s'},
    ],
};

export const MALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Facial Exercises',
        gender: 'male',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wrist Roll'], name: 'Jawline Sharper (Massage Along Jaw)', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Elbow Circles'], name: 'Vowel Mouth Stretch ("O"-"E")', sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Arm Circles"], name: "Lion's Breath", sets: '3', reps: '10', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin-Ups'], name: 'Chin Tuck', sets: '2', reps: '20', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Jumping Jacks'], name: 'Jaw Unlocker', sets: '2', reps: '10/side', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Stretch'], name: 'Cheek & Jawline Lifter', sets: '3', reps: '15', rest: '30s'},
        ],
    },
};

export const FEMALE_FACIAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Facial Exercises',
        gender: 'female',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wrist Roll'], name: 'Gua Sha or Facial Massage (Jawline)', sets: '1', reps: '2-3 mins', rest: 'N/A'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Elbow Circles"], name: "Kiss the Ceiling / \"Whistler\"", sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Arm Circles'], name: 'Vowel Mouth Stretch ("O"-"E")', sets: '3', reps: '15', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Lion's Breath", sets: '3', reps: '10', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin-Ups'], name: 'Chin Tuck', sets: '2', reps: '20', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Stretch'], name: 'Cheek & Jawline Lifter', sets: '3', reps: '15', rest: '30s'},
        ],
    },
};

export const MALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Vocal Exercises',
        gender: 'male',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wrist Roll'], name: 'Lip Trills', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Elbow Circles'], name: 'Humming Warm-Up', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Arm Circles'], name: 'Sirens (Low to High Pitch Glide)', sets: '3', reps: '10-12 glides', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Jumping Jacks'], name: 'Sustain Note (Deep Chest Voice)', sets: '3', reps: '15-20s hold', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin-Ups'], name: 'Consonant Articulation (P-T-K-B-D-G)', sets: '3', reps: '15 reps/combo', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Stretch'], name: 'Breath Control (Inhale 4s – Hold – Exhale 8s)', sets: '5', reps: 'cycles', rest: '30s'},
        ],
    },
};

export const FEMALE_VOCAL_WORKOUT_PLAN: WorkoutSplit = {
    Daily: {
        focus: 'Vocal Exercises',
        gender: 'female',
        location: 'home',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Wrist Roll'], name: 'Lip Bubbles (Trills with Sound)', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Elbow Circles'], name: 'Humming Glide (Nasal Resonance)', sets: '2', reps: '60s', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Arm Circles'], name: 'Octave Sirens (Smooth Pitch Slide)', sets: '3', reps: '10-12 glides', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jumping Jacks"], name: "Sustain 'Ee' / 'Oo' Notes", sets: '3', reps: '15s hold/vowel', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chin-Ups'], name: 'Vowel Chains (AEIOU transitions)', sets: '3', reps: '10 transitions', rest: '30s'},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA['Chest Stretch'], name: 'Breath Support Drill (4-4-8 breathing)', sets: '5', reps: 'cycles', rest: '30s'},
        ],
    },
};

export const GENERAL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
  Monday: {
    focus: "Chest & Triceps", gender: 'male', location: 'gym', day: 'Monday',
    exercises: [
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Bench Press"], name: "Incline Bench Press", sets: "3", reps: "8-10", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Flyes"], name: "Decline / Cable Fly", sets: "3", reps: "12", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pec Deck Machine"], name: "Seated Machine Fly", sets: "3", reps: "15", rest: "45s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Pushdown"], name: "Triceps Pushdown", sets: "3", reps: "15", rest: "60s" },
      { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Extension"], name: "Overhead Extension (Cable or Dumbbell)", sets: "3", reps: "12-15", rest: "60s" },
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
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "3", reps: "8-10", rest: "90s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Romanian Deadlifts"], name: "Romanian Deadlifts", sets: "3", reps: "10-12", rest: "60s"},
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Dumbbell Walking Lunges", sets: "3", reps: "12/leg", rest: "60s"},
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
          {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Stretching / Foam rolling", sets: "1", reps: "15 min", rest: "N/A"},
      ],
  },
};
export const GENERAL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: {
        focus: "Chest & Triceps", gender: 'male', location: 'home', day: 'Monday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Bench Press"], name: "Incline Push-Ups", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Close-Grip Push-Ups"], name: "Diamond Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Dips"], name: "Chair Dips", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Close-Grip Push-Ups"], name: "Close-Grip Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Overhead Extension"], name: "Overhead Triceps Extensions", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Tuesday: {
        focus: "Back & Biceps", gender: 'male', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["T-Bar Row"], name: "Towel Rows", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Back Extensions"], name: "Reverse Snow Angels", sets: "3", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Biceps Curls", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chin-Ups"], name: "Chin-Ups", sets: "3", reps: "Max", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Legs", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lunges", sets: "3", reps: "15/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Wall Sit", sets: "3", reps: "60s", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Shoulders, Arms & Abs", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Dips"], name: "Chair Dips", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Biceps Curls", sets: "3", reps: "15-20", rest: "45s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Dumbbell Bench Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Tuesday: {
        focus: "Cardio & Core", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Treadmill Sprints (Interval)", sets: "1", reps: "20 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Dumbbell Curl"], name: "Cable Bicep Curls", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Triceps Pushdown"], name: "Triceps Rope Pushdowns", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Friday: {
        focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Full-Body Dynamic Stretch", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Walk"], name: "Incline Walk or Cycling", sets: "1", reps: "30 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Sumo Squats", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Fire Hydrants", sets: "3", reps: "20/side", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Donkey Kicks", sets: "3", reps: "20/side", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Upper Body & Core", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Incline Bench Press"], name: "Incline Push-Ups", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Rows"], name: "Resistance Band Rows", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Back Extensions"], name: "Bird Dog", sets: "3", reps: "15/side", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Friday: {
        focus: "Active Recovery", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga or Stretch Class", sets: "1", reps: "20-30 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "4", reps: "8-10", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "8-10", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press Machine", sets: "3", reps: "12-15", rest: "60s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'male', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "12/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Treadmill Sprints (Interval)", sets: "5", reps: "30s on, 60s off", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'male', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "15/leg", rest: "60s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank with Shoulder Taps", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank (each side)", sets: "3", reps: "45s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprint Drills", sets: "5", reps: "50m", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'male', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press Machine", sets: "3", reps: "15-20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "3", reps: "5 min", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Dumbbell Bench Press", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Assisted Pull-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Single Arm Dumbbell Row"], name: "One-Arm Cable Row", sets: "3", reps: "12/side", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Knee Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15-20", rest: "45s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'female', location: 'gym', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Battle Ropes"], name: "Battle Ropes", sets: "4", reps: "30s", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Treadmill Sprints"], name: "Bike Intervals", sets: "5", reps: "30s on, 60s off", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'female', location: 'gym', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "3", reps: "5 min", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "15-20", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Core & Rotational Strength", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank with Shoulder Taps", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank (each side)", sets: "3", reps: "45s", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Superman Hold"], name: "Superman Hold", sets: "3", reps: "30s", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Explosive Power & Conditioning", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10-12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprint Drills", sets: "5", reps: "50m", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s", rest: "30s"},
        ],
    },
    Friday: {
        focus: "Mobility & Injury Prevention", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Hip Mobility Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling (Full Body)", sets: "1", reps: "15 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "4", reps: "8", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "12", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "10/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'male', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push Press"], name: "Push Press", sets: "4", reps: "8-10", rest: "90s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "10/side", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Roller", sets: "3", reps: "Max", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'male', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "12", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'male', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Curls", sets: "3", reps: "20", rest: "30s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'male', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'female', location: 'gym', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "12/side", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Roller", sets: "3", reps: "Max", rest: "45s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Knee Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "20/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20", rest: "30s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "12", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Power & Shoulders", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Curls", sets: "3", reps: "20", rest: "30s"},
        ],
    },
    Wednesday: {
        focus: "Core Stability & Agility", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank (each side)", sets: "3", reps: "45s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "4", reps: "6-8", rest: "90s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "8-10", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Barbell Rows"], name: "Bent Over Rows", sets: "3", reps: "8-10", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'male', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Cone Sprints (Short Distance)", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "12/side", rest: "45s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10", rest: "60s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprint Drills", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'male', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'male', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Dumbbell Bench Press", sets: "4", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "12-15", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row Machine", sets: "3", reps: "12-15", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'female', location: 'gym', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Cone Sprints (Short Distance)", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "15/side", rest: "45s"},
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
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "12/leg", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10", rest: "60s"},
        ],
    },
    Tuesday: {
        focus: "Upper Body Strength & Power", gender: 'female', location: 'home', day: 'Tuesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "Max", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15-20", rest: "60s"},
        ],
    },
    Wednesday: {
        focus: "Agility, Speed & Core", gender: 'female', location: 'home', day: 'Wednesday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprint Drills", sets: "5", reps: "20m", rest: "60s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Bodyweight)", sets: "3", reps: "20/side", rest: "45s"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold", rest: "30s"},
        ],
    },
    Thursday: {
        focus: "Active Recovery", gender: 'female', location: 'home', day: 'Thursday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min", rest: "N/A"},
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Stretching", sets: "1", reps: "15 min", rest: "N/A"},
        ],
    },
    Friday: {
        focus: "Full Body Conditioning", gender: 'female', location: 'home', day: 'Friday',
        exercises: [
            {...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "15", rest: "60s"},
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
    Monday: { focus: "Lower Body Power & Jumping", gender: 'male', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "4", reps: "8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "12 steps" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats", sets: "3", reps: "10/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" } ] }, 
    Tuesday: { focus: "Upper Body Strength", gender: 'male', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Bench Press", sets: "4", reps: "8–10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Overhead Press (Dumbbells)", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] }, 
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling Legs & Back", sets: "1", reps: "15 min" } ] }, 
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'male', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Power Cleans"], name: "Power Cleans", sets: "5", reps: "5" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "max" } ] }, 
    Friday: { focus: "Speed & Agility Drills", gender: 'male', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Cone Sprints (Short Distance)", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] }, 
    Saturday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday', exercises: [] }, 
    Sunday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday', exercises: [] }
};
export const BASKETBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Lower Body Power & Jumping", gender: 'male', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bulgarian Split Squats"], name: "Bulgarian Split Squats (Chair)", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10" } ] },
    Tuesday: { focus: "Upper Body Strength", gender: 'male', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Dips"], name: "Chair Dips", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Dynamic Hip Stretching", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'male', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "5", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" } ] },
    Friday: { focus: "Speed & Agility Drills", gender: 'male', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprint Drills", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'home', day: 'Sunday', exercises: [] }
};
export const BASKETBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Lower Body Power & Jumping", gender: 'female', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hip Thrusts"], name: "Hip Thrusts", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" } ] },
    Tuesday: { focus: "Upper Body Strength", gender: 'female', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Dumbbell Bench Press", sets: "4", reps: "12–15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Row", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling Legs & Back", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'female', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Slams", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Knee Raises", sets: "3", reps: "max" } ] },
    Friday: { focus: "Speed & Agility Drills", gender: 'female', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Cone Sprints", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday', exercises: [] }
};
export const BASKETBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Lower Body Power & Jumping", gender: 'female', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Glute Bridges"], name: "Glute Bridges", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Single-Leg Calf Raises", sets: "4", reps: "20/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10" } ] },
    Tuesday: { focus: "Upper Body Strength", gender: 'female', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Chest Dips"], name: "Chair Dips", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow for Athletes", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Dynamic Hip Stretching", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Full Body Explosiveness & Core", gender: 'female', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "5", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "4", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" } ] },
    Friday: { focus: "Speed & Agility Drills", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprints", sets: "10", reps: "10-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Side Shuffles", sets: "4", reps: "20m/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "3", reps: "3 min" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'home', day: 'Sunday', exercises: [] }
};

export const VOLLEYBALL_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'male', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "4", reps: "6-8" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges with Dumbbells", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "12" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'male', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push Press"], name: "Push Press", sets: "4", reps: "8-10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "10/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'male', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists (Weighted)", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Roller"], name: "Ab Roller", sets: "3", reps: "15" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'male', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assault Bike Intervals"], name: "Assault Bike Intervals", sets: "10", reps: "20s on, 40s off" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday', exercises: [] }
};
export const VOLLEYBALL_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'male', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "3", reps: "12" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'male', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'male', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Roll Substitute (Tennis Ball)", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'male', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprints", sets: "10", reps: "15-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "4", reps: "45s" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'home', day: 'Sunday', exercises: [] }
};
export const VOLLEYBALL_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'female', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "4", reps: "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "12/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Press"], name: "Leg Press", sets: "3", reps: "15" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'female', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Press"], name: "Dumbbell Shoulder Press", sets: "4", reps: "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pull-Ups"], name: "Assisted Pull-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Medicine Ball Slams"], name: "Medicine Ball Rotational Slams", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lat Pulldowns"], name: "Lat Pulldowns", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "15" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Rolling", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'female', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Knee Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Ab Roller"], name: "Ab Roller", sets: "3", reps: "15" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'female', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Assault Bike Intervals"], name: "Assault Bike Intervals", sets: "10", reps: "20s on, 40s off" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Kettlebell Swings"], name: "Kettlebell Swings", sets: "4", reps: "20" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday', exercises: [] }
};
export const VOLLEYBALL_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Vertical Jump & Leg Power", gender: 'female', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "4", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Broad Jumps", sets: "4", reps: "10" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Walking Lunges", sets: "3", reps: "15/leg" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "4", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Tuck Jumps", sets: "3", reps: "12" } ] },
    Tuesday: { focus: "Upper Body & Shoulder Strength", gender: 'female', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "4", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" } ] },
    Wednesday: { focus: "Active Recovery", gender: 'female', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga or Mobility Flow", sets: "1", reps: "30-45 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Foam Rolling"], name: "Foam Roll Substitute (Tennis Ball)", sets: "1", reps: "15 min" } ] },
    Thursday: { focus: "Core & Rotational Power", gender: 'female', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s hold" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Friday: { focus: "Conditioning & Agility", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "15 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cone Sprints"], name: "Sprints", sets: "10", reps: "15-20m" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Mountain Climbers"], name: "Mountain Climbers", sets: "4", reps: "45s" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'home', day: 'Sunday', exercises: [] }
};

export const TABLE_TENNIS_MALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'male', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Barbell Back Squats", sets: "3", reps: "12-15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'male', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "12/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Medicine Ball Twists", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'male', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'male', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Dumbbell Bench Press", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Roller", sets: "3", reps: "max" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'male', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Reaction Ball Drill", sets: "3", reps: "5 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'gym', day: 'Sunday', exercises: [] }
};
export const TABLE_TENNIS_MALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'male', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20-25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'male', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'male', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'male', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Curls", sets: "3", reps: "20" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'male', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shadow Badminton"], name: "Shadow Badminton", sets: "3", reps: "5 min" } ] },
    Saturday: { focus: "Rest", gender: 'male', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'male', location: 'home', day: 'Sunday', exercises: [] }
};
export const TABLE_TENNIS_FEMALE_GYM_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'female', location: 'gym', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Goblet Squats"], name: "Goblet Squats", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Box Jumps"], name: "Box Jumps", sets: "3", reps: "12" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'female', location: 'gym', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Cable Crossover"], name: "Cable Woodchoppers", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Medicine Ball Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Hanging Leg Raises"], name: "Hanging Knee Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'female', location: 'gym', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'female', location: 'gym', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Bench Press"], name: "Dumbbell Bench Press", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Seated Cable Row"], name: "Seated Cable Row", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lateral Raises"], name: "Lateral Raises", sets: "3", reps: "15-20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Face Pulls"], name: "Face Pulls", sets: "3", reps: "20" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Roller", sets: "3", reps: "max" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'female', location: 'gym', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Shuffles"], name: "Reaction Ball Drill", sets: "3", reps: "5 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'gym', day: 'Sunday', exercises: [] }
};
export const TABLE_TENNIS_FEMALE_HOME_WORKOUT_PLAN: WorkoutSplit = {
    Monday: { focus: "Leg Endurance & Agility", gender: 'female', location: 'home', day: 'Monday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Squats"], name: "Squats", sets: "3", reps: "20-25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Squats"], name: "Jump Squats", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Lunges"], name: "Lateral Band Walks", sets: "3", reps: "15/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Calf Raises"], name: "Calf Raises", sets: "3", reps: "25" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Agility Ladder Drills"], name: "Agility Ladder Drills", sets: "1", reps: "10 min" } ] },
    Tuesday: { focus: "Core & Rotational Speed", gender: 'female', location: 'home', day: 'Tuesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Russian Twists"], name: "Russian Twists", sets: "3", reps: "20/side" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Leg Raises"], name: "Leg Raises", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Plank"], name: "Plank", sets: "3", reps: "60s" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Side Plank"], name: "Side Plank", sets: "3", reps: "45s/side" } ] },
    Wednesday: { focus: "Active Recovery & Mobility", gender: 'female', location: 'home', day: 'Wednesday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Yoga Flow"], name: "Yoga Flow", sets: "1", reps: "30 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shoulder Stretch"], name: "Shoulder Mobility", sets: "1", reps: "10 min" } ] },
    Thursday: { focus: "Upper Body Endurance", gender: 'female', location: 'home', day: 'Thursday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Push-Ups"], name: "Push-Ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Inverted Rows"], name: "Inverted Rows (using table)", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Pike Push-ups"], name: "Pike Push-ups", sets: "3", reps: "max" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Wrist Roll"], name: "Wrist Curls", sets: "3", reps: "20" } ] },
    Friday: { focus: "Conditioning & Reaction Time", gender: 'female', location: 'home', day: 'Friday', exercises: [ { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Jump Rope"], name: "Jump Rope", sets: "5", reps: "3 min" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Burpees"], name: "Burpees", sets: "3", reps: "15" }, { ...defaultExerciseProps, ...MASTER_EXERCISE_DATA["Shadow Badminton"], name: "Shadow Badminton", sets: "3", reps: "5 min" } ] },
    Saturday: { focus: "Rest", gender: 'female', location: 'home', day: 'Saturday', exercises: [] },
    Sunday: { focus: "Rest", gender: 'female', location: 'home', day: 'Sunday', exercises: [] }
};
