
export const SPORTS = [
  'Cricket',
  'Badminton',
  'Football',
  'Volleyball',
  'Basketball',
  'Table Tennis',
  'Calisthenics',
];

export const WORKOUT_TYPES = [
    'Full-Body',
    'Chest',
    'Back',
    'Arms',
    'Abs',
    'Shoulder',
    'Legs',
    'Posture',
    'Sexual Wellness',
];

export const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Pro'];

export const GENDERS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
];

export const WORKOUT_PREFERENCES = [
    { value: 'home', label: 'Home' },
    { value: 'gym', label: 'Gym' },
];

export const ACTIVITY_LEVELS = [
    { value: 1.2, label: 'Sedentary (little or no exercise)' },
    { value: 1.375, label: 'Lightly active (light exercise/sports 1-3 days/week)' },
    { value: 1.55, label: 'Moderately active (moderate exercise/sports 3-5 days/week)' },
    { value: 1.725, label: 'Very active (hard exercise/sports 6-7 days a week)' },
    { value: 1.9, label: 'Super active (very hard exercise/sports & a physical job)' },
];

export const GOALS = [
    { value: 'cut', label: 'Cut (Weight Loss)' },
    { value: 'maintain', label: 'Maintain' },
    { value: 'bulk', label: 'Bulk (Weight Gain)' },
];

export const NON_ATHLETE_WORKOUTS = [
  { name: 'Full Body', href: '/dashboard/general-workouts/non-athlete/full-body', hint: 'gym workout' },
  { name: 'Chest', href: '#', hint: 'chest press' },
  { name: 'Back', href: '#', hint: 'person doing pull-ups' },
  { name: 'Arms', href: '#', hint: 'bicep curl' },
  { name: 'Abs', href: '#', hint: 'person doing crunches' },
  { name: 'Shoulder', href: '#', hint: 'shoulder press' },
  { name: 'Legs', href: '#', hint: 'person squatting' },
  { name: 'Posture', href: '#', hint: 'person stretching back' },
  { name: 'Sexual Wellness', href: '#', hint: 'couple yoga' },
];
