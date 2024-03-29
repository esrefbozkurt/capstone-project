import { useEffect, useState } from "react";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
  const [isFavourite, setIsFavourite] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [exerciseAdded, setExerciseAdded] = useState([]);

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

  async function updateAddedExercises(currentWorkout, exerciseName) {
    const nameArray = currentWorkout.exercises.map((exercise) => exercise.name);
    if (exerciseName) {
      setExerciseAdded([...nameArray, exerciseName]);
    } else {
      setExerciseAdded(nameArray);
    }
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
      exercises: [
        ...currentWorkout.exercises,
        { name: exerciseName, details: [{}] },
      ],
    };

    await fetch("/api/workouts/" + currentWorkout.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkout),
    });

    getWorkouts();
    updateAddedExercises(currentWorkout, exerciseName);
  }

  async function handleDeleteExercise(currentWorkout, exerciseID, event) {
    event.preventDefault();
    event.stopPropagation();

    const exercises = currentWorkout.exercises;
    const updatedExercises = exercises.filter(
      (exercise) => exercise._id !== exerciseID
    );
    const newWorkout = {
      ...currentWorkout,
      exercises: updatedExercises,
    };

    await fetch("/api/workouts/" + currentWorkout.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkout),
    });

    getWorkouts();
  }

  async function handleSubmitNewSet(updatedWorkout, id, event) {
    event.preventDefault();
    event.stopPropagation();
    await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedWorkout),
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
        onDeleteWorkout={handleDeleteWorkout}
        onAddExercise={handleAddExerciseToWorkOut}
        onDeleteExercise={handleDeleteExercise}
        exerciseAdded={exerciseAdded}
        updateAddedExercises={updateAddedExercises}
        onSubmitNewSet={handleSubmitNewSet}
      />
    </>
  );
}

export default MyApp;
