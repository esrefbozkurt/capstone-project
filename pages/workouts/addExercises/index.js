import { Fragment } from "react";
import Head from "next/head";
import AddExercises from "../../../components/Main/Workouts/WorkoutDetails/AddExercises/AddExercises";

const Workout = ({ workouts, onAddWorkout, onDelete, exercises }) => {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Add Exercises</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>

      <AddExercises exercises={exercises} />
    </Fragment>
  );
};

export default Workout;
