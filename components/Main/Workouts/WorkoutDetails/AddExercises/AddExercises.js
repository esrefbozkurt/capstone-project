import Exercises from "../../../Exercises/Exercises";
import { StyledAddExercisesHeader } from "./StyledAddExercises";
import Link from "next/link";
import Image from "next/image";

const AddExercises = ({
  exercises,
  workouts,
  onAddExercise,
  onDeleteExercise,
  id,
  currentWorkout,
  exerciseAdded,
  setExerciseAdded,
}) => {
  return (
    <>
      <Exercises
        addExercises={true}
        exercises={exercises}
        isFavouriteExercise={false}
        currentWorkout={currentWorkout}
        onAddExercise={onAddExercise}
        onDeleteExercise={onDeleteExercise}
        workouts={workouts}
        exerciseAdded={exerciseAdded}
        setExerciseAdded={setExerciseAdded}
        id={id}
      />
    </>
  );
};
export default AddExercises;
