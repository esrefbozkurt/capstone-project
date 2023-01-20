import Head from "next/head";
import MuscleGroups from "../components/Main/MuscleGroups/MuscleGroups";
import Header from "../components/Header/Header";
import Nav from "../components/Footer/Nav";

export default function Home({ exercises }) {
  return (
    <>
      <Head>
        <title>TrackFit | Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <MuscleGroups exercises={exercises} />
      <Nav />
    </>
  );
}
