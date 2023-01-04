import Head from "next/head";
import MuscleGroups from "../components/Main/MuscleGroups/MuscleGroups";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>

      <MuscleGroups />
    </>
  );
}
