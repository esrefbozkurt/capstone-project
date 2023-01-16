import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [isFavourite, setIsFavourite] = useState([]);
  const [exercises, setExercises] = useState([]);

  function handleFav(id, event) {
    event.preventDefault();
    event.stopPropagation();
    isFavourite.includes(id)
      ? setIsFavourite((exercise) => exercise.filter((favour) => favour !== id))
      : setIsFavourite((exercise) => [...exercise, id]);
  }

  async function getExercises() {
    const response = await fetch("/api/exercises");
    const exercisesList = await response.json();
    setExercises(exercisesList);
  }

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <>
      <GlobalStyles />

      <Component
        {...pageProps}
        onFav={handleFav}
        isFavourite={isFavourite}
        exercises={exercises}
        workouts={workouts}
      />
    </>
  );
}

export default MyApp;
