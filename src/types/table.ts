export interface Result {
  result: Schedule[];
}

export interface Schedule {
  id: number;
  type?: string;
  day: string;
  exercise?: string[];
  meals?: Meal[];
}

export interface Meal {
  time: string;
  menu: string[];
  kcal: number;
}
