import Head from "next/head";
import { Fragment } from "react";
import Exercises from "../components/Main/Exercises/Exercises";
import Favourite from "../components/Main/Exercises/Favourite/FavouriteButton";

import SearchBar from "../components/Main/Exercises/SearchBar/SearchBar";
import { dataBiceps } from "../lib/data";

const Favourites = ({ onFav, isFavourite, id }) => {
  // const currentFavourite = isFavourite.map((exercise) =>
  //   isFavourite.includes(id)
  // );

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
      />
    </Fragment>
  );
};

export default Favourites;
