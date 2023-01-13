import Head from "next/head";
import Exercises from "../../components/Main/Exercises/Exercises";
import MuscleGroups from "../../components/Main/MuscleGroups/MuscleGroups";

export default function Exercise({ onFav, isFavourite, exercises }) {
  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>

      <Exercises
        onFav={onFav}
        isFavourite={isFavourite}
        exercises={exercises}
        isFavouriteExercise={false}
      />
    </>
  );
}
