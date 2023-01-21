import { useRouter } from "next/router";
import AddExercises from "../../../components/Main/Workouts/WorkoutDetails/AddExercises/AddExercises";
import Head from "next/head";

const ExerciseAdd = ({
  workouts,
  exercises,
  onAddExercise,
  exerciseAdded,
  setExerciseAdded,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const currentWorkout = workouts.find((workout) => workout.id === id);

  if (!currentWorkout) {
    return null;
  }

  const name = currentWorkout?.name;

  return (
    <>
      <Head>
        <title>TrackFit | {name}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <AddExercises
        exercises={exercises}
        currentWorkout={currentWorkout}
        onAddExercise={onAddExercise}
        id={id}
        exerciseAdded={exerciseAdded}
        setExerciseAdded={setExerciseAdded}
      />
    </>
  );
};

export default ExerciseAdd;
