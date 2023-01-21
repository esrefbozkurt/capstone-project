import {
  StyledWorkoutDetails,
  StyledWorkoutDetailsHeader,
} from "./StyledWorkoutDetails";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const WorkoutDetails = ({ currentWorkout, onDeleteExercise, id }) => {
  const addedExercises = currentWorkout.exercises;
  return (
    <StyledWorkoutDetails>
      <StyledWorkoutDetailsHeader>
        <Link href="/workouts">
          <Image
            src="/arrow-circle-left.svg"
            width={34}
            height={34}
            alt="back button"
            className="backbutton"
            priority
          />
        </Link>
        <h2>{currentWorkout.name.toUpperCase()}</h2>
        <button type="submit" className="checkmarkButton">
          <Image
            //   onClick={handleSubmit}
            src="/checkmark-circle.svg"
            width={34}
            height={34}
            alt="checkmark button"
            className="checkmark"
          />
        </button>
      </StyledWorkoutDetailsHeader>
      <ul>
        {addedExercises.map((addedExercise) => {
          return (
            <li key={addedExercise._id}>
              <div className="addContainer">
                <h3>{addedExercise.name.toUpperCase()}</h3>
                <Image
                  onClick={(event) =>
                    onDeleteExercise(currentWorkout, addedExercise._id, event)
                  }
                  className="deleteWorkout"
                  src="/delete.svg"
                  width={24}
                  height={24}
                  alt="delete Workout"
                />
              </div>
            </li>
          );
        })}
      </ul>

      <Link href={`/workouts/exercisesAdd/${id}`} className="addButton">
        <h4>+ Add Exercise</h4>
      </Link>
    </StyledWorkoutDetails>
  );
};

export default WorkoutDetails;
