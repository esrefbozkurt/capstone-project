import {
  StyledWorkoutDetails,
  StyledWorkoutDetailsHeader,
  StyledExerciseDetailsHeader,
} from "./StyledWorkoutDetails";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import FormAddSets from "./FormAddSets/FormAddSets";

const WorkoutDetails = ({
  currentWorkout,
  onDeleteExercise,
  id,
  onSubmitNewSet,
}) => {
  const addedExercises = currentWorkout.exercises;
  const [showInput, setShowInput] = useState([id, false]);
  function handleShowInput(id, boolean) {
    setShowInput([id, boolean]);
  }

  return (
    <StyledWorkoutDetails>
      {showInput[1] ? (
        <>
          <StyledExerciseDetailsHeader>
            <button
              onClick={() => handleShowInput(id, false)}
              className="backButtonExercise"
            >
              <Image
                src="/arrow-circle-left.svg"
                width={34}
                height={34}
                alt="back button"
                priority
              />
            </button>
            <h2>{currentWorkout.name.toUpperCase()}</h2>
          </StyledExerciseDetailsHeader>
          <FormAddSets
            currentWorkout={currentWorkout}
            onSubmitNewSet={onSubmitNewSet}
            exerciseId={showInput[0]}
            onShowInput={handleShowInput}
          />
        </>
      ) : (
        <>
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
          </StyledWorkoutDetailsHeader>
          <ul>
            {addedExercises.map((addedExercise) => {
              return (
                <li key={addedExercise._id}>
                  <button
                    onClick={() => handleShowInput(addedExercise._id, true)}
                    className="addContainer"
                  >
                    <h3>{addedExercise.name.toUpperCase()}</h3>
                    <Image
                      onClick={(event) =>
                        onDeleteExercise(
                          currentWorkout,
                          addedExercise._id,
                          event
                        )
                      }
                      className="deleteWorkout"
                      src="/delete.svg"
                      width={24}
                      height={24}
                      alt="delete Workout"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <Link href={`/workouts/exercisesAdd/${id}`} className="addButton">
            <h4>+ Add Exercise</h4>
          </Link>
        </>
      )}
    </StyledWorkoutDetails>
  );
};

export default WorkoutDetails;
