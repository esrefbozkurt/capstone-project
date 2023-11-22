export interface ExerciseType {
  id: string;
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions?: string | number;
}

export interface WorkoutType {
  name: string;
  id: string;
  exercises: {
    name: string;
    _id: string;
    details: {
      date: string;
      _id: string;
      sets: {
        name: string;
        weights: string;
        reps: string;
        _id: string;
      }[];
    }[];
  }[];
}
