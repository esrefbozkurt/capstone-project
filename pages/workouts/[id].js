import { useRouter } from "next/router";
import WorkoutDetails from "../../components/Main/Workouts/WorkoutDetails/WorkoutDetails";
import Head from "next/head";

const WorkoutDetail = ({ workouts, onDeleteExercise, exercisesAdded }) => {
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

      <WorkoutDetails
        exercisesAdded={exercisesAdded}
        currentWorkout={currentWorkout}
        workouts={workouts}
        onDeleteExercise={onDeleteExercise}
        id={id}
      />
    </>
  );
};

export default WorkoutDetail;
