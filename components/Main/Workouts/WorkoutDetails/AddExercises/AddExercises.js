import Exercises from "../../../Exercises/Exercises";
import { StyledAddExercisesHeader } from "./StyledAddExercises";
import Link from "next/link";
import Image from "next/image";

const AddExercises = ({ exercises, currentWorkout, onToggle }) => {
  return (
    <>
      <StyledAddExercisesHeader>
        <button onClick={onToggle} className="backbutton">
          <Image
            src="/arrow-circle-left.svg"
            width={34}
            height={34}
            alt="back button"
          />
        </button>
        <h2>Add Exercises to "{currentWorkout.name}"</h2>
      </StyledAddExercisesHeader>
      <Exercises
        addExercises={true}
        exercises={exercises}
        isFavouriteExercise={false}
      />
    </>
  );
};
export default AddExercises;
