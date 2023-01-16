import { Fragment } from "react";
import Head from "next/head";
import Nav from "../../components/Footer/Nav";
import Workouts from "../../components/Main/Workouts/Workouts";
import { useEffect, useState } from "react";

const Workout = ({ workouts }) => {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <Workouts workouts={workouts} />
      <Nav />
    </Fragment>
  );
};

export default Workout;
