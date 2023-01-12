import Head from "next/head";
import { useState, useEffect } from "react";
import Exercises from "../components/Main/Exercises/Exercises";

export default function Home({ onFav, isFavourite }) {
  const [entries, setEntries] = useState([]);
  async function getExercises() {
    const response = await fetch("/api/exercises");
    const exercisesList = await response.json();
    setEntries(exercisesList);
  }

  useEffect(() => {
    getExercises();
  }, []);

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
        entries={entries}
        isFavouriteExercise={false}
      />
    </>
  );
}
