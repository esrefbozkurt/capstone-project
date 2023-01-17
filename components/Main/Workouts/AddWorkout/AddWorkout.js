import { StyledAddWorkout, StyledAddWorkoutHeader } from "./StyledAddWorkout";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const AddWorkout = ({ workouts }) => {
  return (
    <StyledAddWorkout>
      <StyledAddWorkoutHeader>
        <Link href="/workouts">
          <Image
            src="/arrow-circle-left.svg"
            width={34}
            height={34}
            alt="back button"
            className="backbutton"
          />
        </Link>
      </StyledAddWorkoutHeader>
      <h3>{workout.name.toUpperCase()}</h3>
    </StyledAddWorkout>
  );
};

export default AddWorkout;
