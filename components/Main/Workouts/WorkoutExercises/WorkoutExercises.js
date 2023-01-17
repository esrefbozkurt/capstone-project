import {
  StyledWorkoutExercises,
  StyledWorkoutExercisesHeader,
} from "./StyledWorkoutExercises";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const WorkoutExercises = ({ workouts, exercises }) => {
  {
    workouts.map((workout) => {
      return (
        <StyledWorkoutExercises>
          <StyledWorkoutExercisesHeader>
            <Link href="/workouts">
              <Image
                src="/arrow-circle-left.svg"
                width={34}
                height={34}
                alt="back button"
                className="backbutton"
              />
            </Link>
            <h2>{workout.name.toUpperCase()}</h2>;
            <button type="submit">
              <Image
                //   onClick={handleSubmit}
                src="/checkmark-circle.svg"
                width={32}
                height={32}
                alt="checkmark button"
                className="checkmark"
              />
            </button>
          </StyledWorkoutExercisesHeader>
          <button>
            <h4>Add Exercise</h4>
          </button>
        </StyledWorkoutExercises>
      );
    });
  }
};

export default WorkoutExercises;
