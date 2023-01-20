import Head from "next/head";
import { Fragment } from "react";
import Exercises from "../components/Main/Exercises/Exercises";
import Nav from "../components/Footer/Nav";

const Favourites = ({ onFav, isFavourite, exercises }) => {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Exercises
        onFav={onFav}
        isFavourite={isFavourite}
        isFavouriteExercise={true}
        exercises={exercises}
        addExercises={false}
      />
      <Nav />
    </Fragment>
  );
};

export default Favourites;
