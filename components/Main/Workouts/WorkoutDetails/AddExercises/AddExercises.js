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
}) => {
  return (
    <>
      <StyledAddExercisesHeader>
        <Link href={`/workouts/${id}`}>
          <Image
            src="/arrow-circle-left.svg"
            width={34}
            height={34}
            alt="back button"
            priority
          />
        </Link>
        <h2>Add Exercises </h2>
      </StyledAddExercisesHeader>
      <Exercises
        addExercises={true}
        exercises={exercises}
        isFavouriteExercise={false}
        currentWorkout={currentWorkout}
        onAddExercise={onAddExercise}
        onDeleteExercise={onDeleteExercise}
        workouts={workouts}
      />
    </>
  );
};
export default AddExercises;
