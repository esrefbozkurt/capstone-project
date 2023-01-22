import {
  StyledWorkoutDetails,
  StyledWorkoutDetailsHeader,
  ColumnDiv,
  RowDiv,
  StyledDate,
} from "./StyledWorkoutDetails";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
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
  function handleShowInput(id) {
    setShowInput([id, !showInput[1]]);
  }

  return (
    <>
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
        </StyledWorkoutDetailsHeader>
        <ul>
          {addedExercises.map((addedExercise) => {
            return (
              <>
                <li key={addedExercise._id}>
                  <button
                    onClick={() => handleShowInput(addedExercise._id)}
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
                  {showInput[0] === addedExercise._id && showInput[1] && (
                    <>
                      <section>
                        {addedExercise.details.map(
                          (detail) =>
                            detail.date && (
                              <Fragment key={detail._id}>
                                <StyledDate>{detail.date}</StyledDate>
                                <RowDiv>
                                  <ColumnDiv>
                                    <p>Set #</p>
                                    <p>Weight</p>
                                    <p>Reps</p>
                                  </ColumnDiv>
                                  {detail.sets.map((createdSet) => (
                                    <ColumnDiv key={createdSet._id}>
                                      <p>{createdSet.name}</p>
                                      <p>{createdSet.weights}</p>
                                      <p>{createdSet.reps}</p>
                                    </ColumnDiv>
                                  ))}
                                </RowDiv>
                              </Fragment>
                            )
                        )}
                      </section>
                      <FormAddSets
                        currentWorkout={currentWorkout}
                        onSubmitNewSet={onSubmitNewSet}
                        exerciseId={showInput[0]}
                        onShowInput={handleShowInput}
                      />
                    </>
                  )}
                </li>
              </>
            );
          })}
        </ul>
        <Link href={`/workouts/exercisesAdd/${id}`} className="addButton">
          <h4>+ Add Exercise</h4>
        </Link>
      </StyledWorkoutDetails>
    </>
  );
};

export default WorkoutDetails;
