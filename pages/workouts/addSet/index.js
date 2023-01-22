import { Fragment } from "react";
import Head from "next/head";
import Nav from "../../../components/Footer/Nav";
import FormSets from "../../../components/Main/Workouts/WorkoutDetails/AddSets/Form/FormSets";
const Workout = ({ workouts, onAddWorkout, onDeleteWorkout, exercises }) => {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Workouts</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>

      <FormSets />
    </Fragment>
  );
};

export default Workout;
