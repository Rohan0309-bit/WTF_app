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
};
