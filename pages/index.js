import Head from "next/head";
import MuscleGroups from "../components/Main/MuscleGroups/MuscleGroups";
import Header from "../components/Header/Header";
import Nav from "../components/Footer/Nav";

export default function Home({ onFav, isFavourite, exercises }) {
  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>
      <Header />
      <MuscleGroups exercises={exercises} />
      <Nav />
    </>
  );
}
