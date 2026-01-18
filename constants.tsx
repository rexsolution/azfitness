
import { UserProfile, Subscription, WorkoutLog, Attendance, Routine } from './types';

export const MOCK_USER: UserProfile = {
  id: 'user_1',
  name: 'Alex Johnson',
  email: 'alex@azfitness.com',
  role: 'member',
  avatar: 'https://picsum.photos/id/64/200/200'
};

export const MOCK_ADMIN: UserProfile = {
  id: 'admin_1',
  name: 'Coach Mike',
  email: 'mike@azfitness.com',
  role: 'admin',
  avatar: 'https://picsum.photos/id/103/200/200'
};

export const MOCK_ROUTINES: Routine[] = [
  {
    id: 'r1',
    name: 'Push Day (Chest/Shoulders/Triceps)',
    exercises: [
      { name: 'Bench Press', defaultSets: 3, defaultReps: 10 },
      { name: 'Overhead Press', defaultSets: 3, defaultReps: 8 },
      { name: 'Tricep Pushdowns', defaultSets: 4, defaultReps: 12 }
    ]
  },
  {
    id: 'r2',
    name: 'Pull Day (Back/Bis)',
    exercises: [
      { name: 'Deadlift', defaultSets: 3, defaultReps: 5 },
      { name: 'Pull Ups', defaultSets: 3, defaultReps: 10 },
      { name: 'Barbell Curls', defaultSets: 3, defaultReps: 12 }
    ]
  }
];

export const MOCK_SUBSCRIPTION: Subscription = {
  id: 'sub_1',
  userId: 'user_1',
  startDate: '2023-11-01',
  endDate: '2024-11-01',
  planType: 'Yearly',
  status: 'Active',
  amount: 499
};

export const EXERCISE_LIBRARY = [
  "Bench Press", "Squat", "Deadlift", "Overhead Press", "Pull-ups", "Push-ups",
  "Barbell Row", "Dumbbell Fly", "Leg Press", "Lat Pulldown", "Bicep Curl",
  "Tricep Extension", "Plank", "Crunch", "Lunges", "Calf Raise"
];
