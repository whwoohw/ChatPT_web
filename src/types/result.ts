export interface ExerciseScheduleData {
  workout_plan: ExerciseScheduleDay[];
  reason: string;
}

export interface ExerciseScheduleDay {
  day: string;
  detail: ExerciseSchedule[];
}

export interface ExerciseSchedule {
  exercise_type: string;
  duration: string;
  repetition: string;
  weight: string;
}

export interface MealScheduleData {
  meal_plan: MealScheduleDay[];
  reason: string;
}

export interface MealScheduleDay {
  day: string;
  detail: MealSchedule[];
}

export interface MealSchedule {
  time: string;
  menu: MealMenu[];
  nutrition: MealNutrition;
}

export interface MealMenu {
  food: string;
  kcal: string;
}

export interface MealNutrition {
  protein: string;
  fat: string;
  carbonhydrate: string;
}
