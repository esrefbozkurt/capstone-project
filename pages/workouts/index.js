import { Fragment, useState } from "react";
import Head from "next/head";
import Nav from "../../components/Footer/Nav";
import Workouts from "../../components/Main/Workouts/Workouts";

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
      <Workouts
        exercises={exercises}
        workouts={workouts}
        onAddWorkout={onAddWorkout}
        onDeleteWorkout={onDeleteWorkout}
      />
      <Nav />
    </Fragment>
  );
};

export default Workout;
