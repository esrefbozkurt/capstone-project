import { Fragment, useState } from "react";
import Head from "next/head";
import Nav from "../../components/Footer/Nav";
import Workouts from "../../components/Main/Workouts/Workouts";

const Workout = ({ workouts, onAddWorkout, onDelete, exercises }) => {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Workouts</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Workouts
        exercises={exercises}
        workouts={workouts}
        onAddWorkout={onAddWorkout}
        onDelete={onDelete}
      />

      <Nav />
    </Fragment>
  );
};

export default Workout;
