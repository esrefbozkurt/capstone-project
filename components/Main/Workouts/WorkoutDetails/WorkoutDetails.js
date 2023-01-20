import {
  StyledWorkoutDetails,
  StyledWorkoutDetailsHeader,
} from "./StyledWorkoutDetails";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const WorkoutDetails = ({ onToggle, currentWorkout }) => {
  const addedWorkouts = currentWorkout.exercises;

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
        {addedWorkouts.map((addedWorkout) => {
          return (
            <div key={addedWorkout.id}>
              <li>
                <div className="addContainer">
                  <h3>{addedWorkout.name.toUpperCase()}</h3>
                  <Image
                    onClick={(event) => onDelete(event, addedWorkout.id)}
                    className="deleteWorkout"
                    src="/close.svg"
                    width={24}
                    height={24}
                    alt="delete Workout"
                  />
                </div>
              </li>
            </div>
          );
        })}
      </ul>
      <button onClick={onToggle} className="addButton">
        <h4>+ Add Exercise</h4>
      </button>
    </StyledWorkoutDetails>
  );
};

export default WorkoutDetails;
