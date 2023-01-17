import { Fragment } from "react";
import Head from "next/head";
import Nav from "../../../components/Footer/Nav";
import WorkoutExercises from "../../../components/Main/Workouts/WorkoutExercises/WorkoutExercises";
import { useRouter } from "next/router";

export default function WorkoutWorkouts({ exercises }) {
  const router = useRouter();
  const { muscle } = router.query;

  return (
    <Fragment>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <WorkoutExercises exercises={exercises} />
      <Nav />
    </Fragment>
  );
}
