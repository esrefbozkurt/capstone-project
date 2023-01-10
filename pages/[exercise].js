// const MuscleGroupExercise = () => {
//   return (
//     <div>
//       <h1>Exercise page</h1>
//     </div>
//   );
// };

// export default MuscleGroupExercise;

import Head from "next/head";
import Exercises from "../components/Main/Exercises/Exercises";

export default function Exercise({ onFav, isFavourite }) {
  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <Exercises
        onFav={onFav}
        isFavourite={isFavourite}
        isFavouriteExercise={false}
      />
    </>
  );
}
