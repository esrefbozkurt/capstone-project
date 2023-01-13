import Head from "next/head";
import MuscleGroups from "../components/Main/MuscleGroups/MuscleGroups";
import Exercises from "../components/Main/Exercises/Exercises";

export default function Home({ onFav, isFavourite, exercises }) {
  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>

      <MuscleGroups exercises={exercises} />
    </>
  );
}
