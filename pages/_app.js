import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [isFavourite, setIsFavourite] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getExercises();
    getWorkouts();
  }, []);

  function handleFav(id, event) {
    event.preventDefault();
    event.stopPropagation();
    isFavourite.includes(id)
      ? setIsFavourite((exercise) => exercise.filter((favour) => favour !== id))
      : setIsFavourite((exercise) => [...exercise, id]);
  }

  // function toggleAddExercise(event, id) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   exerciseAdd.includes(id)
  //     ? setExerciseAdd((exercise) => exercise.filter((added) => added !== id))
  //     : setExerciseAdd((exercise) => [...exercise, id]);
  // }
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

    setWorkouts([...workouts, newWorkout]);
    getWorkouts();
  }

  async function handleDeleteWorkout(event, id) {
    event.preventDefault();
    event.stopPropagation();
    await fetch("/api/workouts/" + id, {
      method: "DELETE",
    });
    getWorkouts();
  }

  async function handleAddExerciseToWorkOut(
    currentWorkout,
    exerciseName,
    event
  ) {
    event.preventDefault();
    event.stopPropagation();
    const newWorkout = {
      ...currentWorkout,
      exercises: [...currentWorkout.exercises, { name: exerciseName }],
    };

    await fetch("/api/workouts/" + currentWorkout.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkout),
    });

    getWorkouts();
  }

  async function handleDeleteExercise(event, currentWorkout) {
    event.preventDefault();
    event.stopPropagation();

    const addedExercise = currentWorkout.exercises;

    await fetch("/api/workouts/" + addedExercise.id, {
      method: "DELETE",
    });
    getWorkouts();
  }

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
        onDelete={handleDeleteWorkout}
        onAddExercise={handleAddExerciseToWorkOut}
        onDeleteExercise={handleDeleteExercise}
      />
    </>
  );
}

export default MyApp;
