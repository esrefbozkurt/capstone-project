import Head from "next/head";
import { Fragment } from "react";
import Exercises from "../components/Main/Exercises/Exercises";

const Favourites = ({ onFav, isFavourite, exercises }) => {
  return (
    <Fragment>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <Exercises
        onFav={onFav}
        isFavourite={isFavourite}
        isFavouriteExercise={true}
        exercises={exercises}
      />
    </Fragment>
  );
};

export default Favourites;
