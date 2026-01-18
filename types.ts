
export type UserRole = 'admin' | 'member';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  bio?: string;
  goals?: string[];
  preferences?: {
    notifications: boolean;
    publicProfile: boolean;
    units: 'metric' | 'imperial';
  };
}

export interface Subscription {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  planType: 'Monthly' | 'Quarterly' | 'Yearly';
  status: 'Active' | 'Expired' | 'Pending';
  amount: number;
}

export interface WorkoutSet {
  reps: number;
  weight: number;
  completed?: boolean;
}

export interface WorkoutLog {
  id: string;
  userId: string;
  date: string;
  exerciseName: string;
  sets: WorkoutSet[];
  duration?: number; // in seconds
}

export interface Attendance {
  id: string;
  userId: string;
  checkInTime: string;
}

export interface Routine {
  id: string;
  name: string;
  exercises: {
    name: string;
    defaultSets: number;
    defaultReps: number;
  }[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export type Page = 'landing' | 'dashboard' | 'workouts' | 'subscription' | 'admin' | 'settings' | 'login';
