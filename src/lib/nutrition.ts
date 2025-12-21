
export interface Meal {
  name: string;
  time: string;
  ingredients: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface DailyNutritionPlan {
  goal: string;
  description: string;
  meals: Meal[];
}

export const NUTRITION_PLANS: Record<string, Record<string, DailyNutritionPlan>> = {
  "General Fitness": {
    "Cutting": {
      goal: "Cutting (Weight Loss)",
      description: "A plan focused on a caloric deficit to promote fat loss while preserving muscle mass. High in protein and fiber.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Oatmeal with berries and a scoop of protein powder", "Black coffee or green tea"], calories: 400, protein: 30, carbs: 50, fat: 10 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large salad with grilled chicken breast, mixed greens, vegetables, and a light vinaigrette"], calories: 500, protein: 40, carbs: 30, fat: 25 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Greek yogurt with a handful of almonds"], calories: 250, protein: 20, carbs: 10, fat: 15 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Baked salmon with roasted asparagus and quinoa"], calories: 550, protein: 45, carbs: 40, fat: 25 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Weight Gain)",
      description: "A high-calorie plan designed to support muscle growth and weight gain, rich in complex carbs and healthy fats.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["4 scrambled eggs, 2 slices of whole-wheat toast with avocado, a glass of milk"], calories: 700, protein: 40, carbs: 60, fat: 35 },
        { name: "Morning Snack", time: "11:00 AM", ingredients: ["Protein shake with milk, a banana, and a tablespoon of peanut butter"], calories: 450, protein: 35, carbs: 40, fat: 15 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large portion of chicken and rice with mixed vegetables and olive oil"], calories: 800, protein: 50, carbs: 90, fat: 25 },
        { name: "Afternoon Snack", time: "4:00 PM", ingredients: ["Cottage cheese with pineapple and a handful of walnuts"], calories: 350, protein: 25, carbs: 20, fat: 18 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Steak with a large sweet potato and a side of green beans"], calories: 900, protein: 60, carbs: 80, fat: 35 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Muscle Gain",
      description: "A balanced plan with a slight caloric surplus, high protein intake, and controlled carbs to build muscle while minimizing fat gain.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["3-egg omelette with spinach and feta, 1 slice of whole-wheat toast"], calories: 500, protein: 35, carbs: 30, fat: 25 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Grilled turkey breast, brown rice, and a large portion of steamed broccoli"], calories: 600, protein: 50, carbs: 60, fat: 15 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Protein bar and an apple"], calories: 300, protein: 20, carbs: 35, fat: 8 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Pan-seared cod with a quinoa and black bean salad"], calories: 650, protein: 55, carbs: 55, fat: 20 },
      ]
    },
  },
  "Cricket": {
    "Cutting": {
      goal: "Cutting (In-Season)",
      description: "A plan for cricketers to maintain energy for performance while in a slight caloric deficit for fat loss.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Scrambled eggs with vegetables", "Small bowl of fruit"], calories: 450, protein: 25, carbs: 40, fat: 20 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Grilled fish with a large salad and a small portion of sweet potato"], calories: 550, protein: 40, carbs: 45, fat: 22 },
        { name: "Pre-Training", time: "4:00 PM", ingredients: ["A banana and a handful of almonds"], calories: 250, protein: 5, carbs: 30, fat: 13 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Chicken stir-fry with plenty of vegetables and brown rice"], calories: 600, protein: 45, carbs: 55, fat: 20 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Off-Season)",
      description: "High-calorie plan for off-season cricketers to build strength and muscle mass.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Oats with milk, protein powder, nuts, and seeds"], calories: 750, protein: 45, carbs: 80, fat: 30 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large portion of pasta with ground turkey meat sauce and a side salad"], calories: 850, protein: 55, carbs: 100, fat: 25 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Weight gainer shake or Greek yogurt with honey and fruit"], calories: 500, protein: 30, carbs: 60, fat: 15 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Lamb chops with mashed potatoes and steamed green vegetables"], calories: 950, protein: 60, carbs: 70, fat: 45 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Muscle Gain & Performance",
      description: "A balanced plan to fuel performance, support muscle repair, and build lean mass without excess fat.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["3-egg and cheese omelette", "1 slice of whole-wheat toast", "A glass of orange juice"], calories: 600, protein: 40, carbs: 45, fat: 28 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Chicken breast sandwich on whole-wheat bread with lettuce, tomato, and a side of fruit"], calories: 650, protein: 50, carbs: 70, fat: 18 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Protein shake and a rice cake with peanut butter"], calories: 400, protein: 30, carbs: 35, fat: 15 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Tandoori chicken with naan and a cucumber-tomato salad"], calories: 700, protein: 55, carbs: 65, fat: 25 },
      ]
    },
  },
  "Football": {
    "Cutting": {
      goal: "Cutting (Weight Management)",
      description: "Designed for football players needing to reduce body fat while maintaining strength and explosive power.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Protein smoothie with spinach, fruit, and almond milk"], calories: 400, protein: 35, carbs: 40, fat: 12 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large chicken Caesar salad (light on dressing)"], calories: 500, protein: 45, carbs: 20, fat: 28 },
        { name: "Pre-Training", time: "4:00 PM", ingredients: ["An apple with a tablespoon of peanut butter"], calories: 250, protein: 8, carbs: 25, fat: 15 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Lean ground beef with cauliflower rice and mixed peppers"], calories: 550, protein: 50, carbs: 25, fat: 28 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Strength Building)",
      description: "A high-energy diet for football players looking to add mass and strength during the off-season.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Large bowl of oatmeal with walnuts, bananas, and a scoop of whey protein"], calories: 800, protein: 50, carbs: 90, fat: 30 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Chili con carne with a large portion of rice and a side of cornbread"], calories: 900, protein: 60, carbs: 100, fat: 30 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Four hard-boiled eggs and a granola bar"], calories: 450, protein: 30, carbs: 30, fat: 24 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Whole-wheat pasta with meatballs and a generous serving of garlic bread"], calories: 1000, protein: 65, carbs: 120, fat: 35 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Mass & Power",
      description: "Fuels intense training sessions, supports recovery, and promotes the development of powerful, lean muscle.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Steak and eggs with a side of roasted potatoes"], calories: 700, protein: 50, carbs: 50, fat: 33 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large burrito with chicken, black beans, rice, salsa, and guacamole"], calories: 800, protein: 55, carbs: 85, fat: 25 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Greek yogurt with berries and a scoop of casein protein"], calories: 400, protein: 40, carbs: 30, fat: 12 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Salmon fillet with quinoa and steamed green beans"], calories: 650, protein: 50, carbs: 50, fat: 28 },
      ]
    },
  },
  "Basketball": {
    "Cutting": {
      goal: "Cutting (In-Season Maintenance)",
      description: "Focuses on maintaining energy for high-intensity games while promoting a lean physique.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Greek yogurt with granola and fruit", "A hard-boiled egg"], calories: 500, protein: 30, carbs: 55, fat: 18 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Turkey and avocado wrap on whole wheat tortilla", "Side salad"], calories: 550, protein: 40, carbs: 40, fat: 25 },
        { name: "Pre-Game/Training", time: "4:00 PM", ingredients: ["A banana and a small sports drink"], calories: 200, protein: 2, carbs: 50, fat: 1 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Grilled chicken breast, roasted sweet potatoes, and steamed broccoli"], calories: 600, protein: 50, carbs: 60, fat: 18 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Off-Season Strength)",
      description: "High-calorie plan to support intense strength training and muscle mass gain.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["4-egg omelette with cheese and veggies", "2 slices of whole wheat toast with peanut butter", "Glass of whole milk"], calories: 800, protein: 50, carbs: 70, fat: 38 },
        { name: "Snack 1", time: "11:00 AM", ingredients: ["Weight gainer shake"], calories: 500, protein: 40, carbs: 60, fat: 10 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large portion of lasagna or spaghetti with meat sauce", "Garlic bread"], calories: 900, protein: 55, carbs: 110, fat: 30 },
        { name: "Snack 2", time: "4:00 PM", ingredients: ["Cottage cheese with fruit and nuts"], calories: 400, protein: 30, carbs: 30, fat: 19 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Large steak, baked potato with sour cream, and a large serving of corn"], calories: 1000, protein: 65, carbs: 80, fat: 45 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Muscle & Agility",
      description: "Balanced macronutrients to build explosive power and lean muscle for on-court performance.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Scrambled eggs with smoked salmon and a whole-wheat bagel"], calories: 600, protein: 40, carbs: 50, fat: 27 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Chicken and quinoa bowl with black beans, corn, and avocado"], calories: 700, protein: 50, carbs: 75, fat: 22 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Protein shake and a handful of mixed nuts"], calories: 450, protein: 35, carbs: 25, fat: 23 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Pork chops with apple sauce, wild rice, and roasted Brussels sprouts"], calories: 750, protein: 55, carbs: 65, fat: 30 },
      ]
    },
  },
  "Volleyball": {
    "Cutting": {
      goal: "Cutting (Competition Readiness)",
      description: "A plan to help players become leaner and quicker without sacrificing power for jumps.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Oatmeal with protein powder and sliced almonds"], calories: 450, protein: 35, carbs: 50, fat: 13 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Grilled fish tacos on corn tortillas with slaw and avocado"], calories: 500, protein: 40, carbs: 40, fat: 20 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Hard-boiled egg and an orange"], calories: 200, protein: 10, carbs: 15, fat: 10 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Lean turkey meatballs with zucchini noodles and marinara sauce"], calories: 550, protein: 45, carbs: 35, fat: 25 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Power Building)",
      description: "Focused on building explosive leg and shoulder power for hitting and blocking.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Protein pancakes with maple syrup and a side of bacon"], calories: 750, protein: 45, carbs: 80, fat: 29 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Beef and broccoli stir-fry with a large portion of white rice"], calories: 800, protein: 50, carbs: 95, fat: 24 },
        { name: "Snack", time: "4:00 PM", ingredients: ["A large smoothie with fruit, yogurt, milk, and protein powder"], calories: 500, protein: 35, carbs: 70, fat: 8 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Roasted chicken (half), mashed potatoes, and gravy with green beans"], calories: 950, protein: 60, carbs: 80, fat: 40 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Muscle & Vertical Jump",
      description: "Optimal protein and timed carbs to fuel explosive movements and aid recovery.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Scrambled eggs, chicken sausage, and a bowl of oatmeal"], calories: 650, protein: 45, carbs: 60, fat: 25 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Large chicken salad sandwich on sourdough bread", "Side of grapes"], calories: 600, protein: 40, carbs: 65, fat: 19 },
        { name: "Post-Workout", time: "4:00 PM", ingredients: ["Protein shake with a banana"], calories: 400, protein: 30, carbs: 55, fat: 5 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Salmon with asparagus and a side of quinoa"], calories: 700, protein: 50, carbs: 60, fat: 29 },
      ]
    },
  },
  "Badminton": {
    "Cutting": {
      goal: "Cutting (Agility & Speed)",
      description: "A lightweight plan to maximize agility and speed on the court without feeling weighed down.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Egg white scramble with spinach and one slice of rye toast"], calories: 350, protein: 25, carbs: 30, fat: 14 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Vietnamese summer rolls with shrimp and a light peanut sauce"], calories: 450, protein: 30, carbs: 50, fat: 12 },
        { name: "Snack", time: "4:00 PM", ingredients: ["A pear and a small handful of cashews"], calories: 250, protein: 6, carbs: 25, fat: 15 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Steamed cod with a side of bok choy and a small bowl of brown rice"], calories: 500, protein: 40, carbs: 45, fat: 18 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Endurance & Power)",
      description: "Adds lean mass for powerful smashes and court coverage, without unnecessary weight.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Oatmeal cooked with milk, topped with banana, walnuts, and honey"], calories: 650, protein: 25, carbs: 90, fat: 22 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Chicken fried rice with extra chicken and vegetables"], calories: 750, protein: 45, carbs: 100, fat: 19 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Two hard-boiled eggs and a protein bar"], calories: 400, protein: 28, carbs: 30, fat: 19 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Pasta with a lean ground beef bolognese sauce and a side of garlic bread"], calories: 850, protein: 50, carbs: 95, fat: 30 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Muscle & Reflex Speed",
      description: "Designed for quick energy, fast reflexes, and strong muscular endurance for long rallies.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["3-egg omelette with bell peppers", "Small sweet potato"], calories: 500, protein: 30, carbs: 40, fat: 24 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Grilled chicken breast with a quinoa salad (cucumber, tomato, lemon dressing)"], calories: 600, protein: 45, carbs: 55, fat: 20 },
        { name: "Pre-Match", time: "4:00 PM", ingredients: ["An apple and an electrolyte drink"], calories: 150, protein: 1, carbs: 40, fat: 0 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Stir-fried tofu with mixed vegetables and noodles"], calories: 650, protein: 35, carbs: 70, fat: 25 },
      ]
    },
  },
  "Table Tennis": {
    "Cutting": {
      goal: "Cutting (Reaction & Focus)",
      description: "A plan to stay sharp and light on your feet, focusing on nutrients for cognitive function.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Scrambled egg whites, a handful of blueberries"], calories: 300, protein: 20, carbs: 25, fat: 13 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Tuna salad (made with Greek yogurt) in a lettuce wrap", "Cherry tomatoes"], calories: 400, protein: 35, carbs: 15, fat: 20 },
        { name: "Snack", time: "4:00 PM", ingredients: ["A small protein shake (water-based)"], calories: 150, protein: 25, carbs: 5, fat: 3 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Baked chicken thigh with a side of steamed cauliflower and a small salad"], calories: 500, protein: 40, carbs: 20, fat: 29 },
      ]
    },
    "Bulking": {
      goal: "Bulking (Core Strength & Stability)",
      description: "Focuses on building a strong, stable core and leg base for powerful shots.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Oatmeal with nuts, seeds, and a scoop of protein"], calories: 600, protein: 35, carbs: 70, fat: 20 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Beef and vegetable skewers with a side of couscous"], calories: 700, protein: 45, carbs: 80, fat: 22 },
        { name: "Snack", time: "4:00 PM", ingredients: ["Greek yogurt with a drizzle of honey"], calories: 300, protein: 20, carbs: 35, fat: 9 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Pork loin with roasted root vegetables (carrots, parsnips, potatoes)"], calories: 800, protein: 50, carbs: 75, fat: 33 },
      ]
    },
    "Lean Muscle Gain": {
      goal: "Lean Muscle & Quick Energy",
      description: "Provides sustained energy for long matches and training sessions, focusing on lean protein and complex carbs.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Two poached eggs on a slice of avocado toast"], calories: 450, protein: 25, carbs: 30, fat: 25 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Salmon fillet with a side of brown rice and sautéed spinach"], calories: 650, protein: 45, carbs: 50, fat: 29 },
        { name: "Pre-Match", time: "4:00 PM", ingredients: ["A banana and a small black coffee"], calories: 120, protein: 1, carbs: 30, fat: 1 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Chicken and vegetable stir-fry with a light soy-ginger sauce"], calories: 600, protein: 50, carbs: 45, fat: 25 },
      ]
    },
  },
  "Sexual Wellness": {
    "Libido & Stamina": {
      goal: "Libido & Stamina",
      description: "A plan rich in nutrients that support hormone balance, blood flow, and energy levels for enhanced sexual wellness.",
      meals: [
        { name: "Breakfast", time: "8:00 AM", ingredients: ["Oatmeal with walnuts, flaxseeds, and banana", "Green tea"], calories: 450, protein: 15, carbs: 60, fat: 20 },
        { name: "Lunch", time: "1:00 PM", ingredients: ["Grilled salmon, quinoa, and a large spinach salad with olive oil dressing"], calories: 600, protein: 40, carbs: 50, fat: 28 },
        { name: "Snack", time: "4:00 PM", ingredients: ["A handful of almonds and a few squares of dark chocolate (70% or higher)"], calories: 300, protein: 8, carbs: 20, fat: 22 },
        { name: "Dinner", time: "7:00 PM", ingredients: ["Lean steak or chicken with roasted asparagus and sweet potato"], calories: 650, protein: 50, carbs: 45, fat: 30 },
      ]
    }
  }
};
