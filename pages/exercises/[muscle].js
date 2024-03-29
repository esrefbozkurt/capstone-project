import Head from "next/head";
import { useRouter } from "next/router";
import Nav from "../../components/Footer/Nav";
import Exercises from "../../components/Main/Exercises/Exercises";

export default function Exercise({
  onFav,
  isFavourite,
  exercises,
  onAddExercise,
}) {
  const router = useRouter();
  const { muscle } = router.query;

  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Exercises
        muscle={muscle}
        onFav={onFav}
        isFavourite={isFavourite}
        exercises={exercises}
        isFavouriteExercise={false}
        onAddExercise={onAddExercise}
      />
      <Nav />
    </>
  );
}
