import { useRouter } from "next/router";
import Head from "next/head";
import AddSets from "../../../components/Main/Workouts/WorkoutDetails/AddSets/AddSets";
import Workouts from "../../../components/Main/Workouts/Workouts";

const AddSet = ({ exerciseAdded }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentExercise = exerciseAdded.find((exercise) => exercise.id === id);
  if (!currentExercise) {
    return null;
  }
  console.log(currentExercise);

  const name = currentExercise?.name;
  console.log("helooooo", exerciseAdded);
  return (
    <>
      <Head>
        <title>TrackFit | {name}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <Workouts />
      <AddSets exerciseAdded={exerciseAdded} id={id} />
    </>
  );
};

export default AddSet;
