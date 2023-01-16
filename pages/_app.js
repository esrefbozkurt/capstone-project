import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [isFavourite, setIsFavourite] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

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

  async function getWorkouts() {
    const response = await fetch("/api/workouts");
    const workoutsList = await response.json();
    setWorkouts(workoutsList);
  }

  async function handleAddWorkout(newWorkout) {
    await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWorkout),
    });

    getWorkouts();
  }
  useEffect(() => {
    getExercises();
    getWorkouts();
  }, []);

  return (
    <>
      <GlobalStyles />

      <Component
        {...pageProps}
        onFav={handleFav}
        isFavourite={isFavourite}
        exercises={exercises}
        onAddWorkout={handleAddWorkout}
        workouts={workouts}
      />
    </>
  );
}

export default MyApp;
