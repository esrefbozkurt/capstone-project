import { Fragment } from "react";
import Head from "next/head";
import Nav from "../../../components/Footer/Nav";
import AddWorkout from "../../../components/Main/Workouts/AddWorkout/AddWorkout";

export default function AddWorkouts({ onAddWorkout, workouts }) {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <AddWorkout workouts={workouts} />
      <Nav />
    </Fragment>
  );
}
