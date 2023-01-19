import { useRouter } from "next/router";
import WorkoutDetails from "../../components/Main/Workouts/WorkoutDetails/WorkoutDetails";
import AddExercises from "../../components/Main/Workouts/WorkoutDetails/AddExercises/AddExercises";
import { useState } from "react";
import Head from "next/head";

const WorkoutDetail = ({ workouts, exercises }) => {
  const [showExercisesOverview, setShowExercisesOverview] = useState(false);

  const router = useRouter();
  const { id } = router.query;
  const currentWorkout = workouts.find((workout) => workout.id === id);

  if (!currentWorkout) {
    return null;
  }

  console.log("current Heinz", currentWorkout);
  const name = currentWorkout?.name;

  function toggleShowExercisesOverview() {
    setShowExercisesOverview(!showExercisesOverview);
  }
  return (
    <>
      <Head>
        <title>TrackFit | {name}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      {showExercisesOverview ? (
        <AddExercises
          exercises={exercises}
          currentWorkout={currentWorkout}
          onToggle={toggleShowExercisesOverview}
        />
      ) : (
        <WorkoutDetails
          currentWorkout={currentWorkout}
          onToggle={toggleShowExercisesOverview}
        />
      )}
    </>
  );
};

export default WorkoutDetail;
