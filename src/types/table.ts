import { ExerciseScheduleDay, MealScheduleDay } from "./result";

export interface Result {
  exercise?: ExerciseScheduleDay[];
  meal?: MealScheduleDay[];
}
