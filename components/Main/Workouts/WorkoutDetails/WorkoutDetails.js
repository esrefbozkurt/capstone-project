import {
  StyledWorkoutDetails,
  StyledWorkoutDetailsHeader,
} from "./StyledWorkoutDetails";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const WorkoutDetails = ({ name }) => {
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
          />
        </Link>
        <h2>{name.toUpperCase()}</h2>
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
      <Link href="/workouts/addExercises" className="addButton">
        <h4>+ Add Exercise</h4>
      </Link>
    </StyledWorkoutDetails>
  );
};

export default WorkoutDetails;
