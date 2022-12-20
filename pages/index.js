import Head from "next/head";
import Nav from "../components/Footer/Nav";
import Header from "../components/Header/Header";
import Exercises from "../components/Main/Exercises/Exercises";

export default function Home() {
  return (
    <>
      <Head>
        <title>TrackFit</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Header />
      <Exercises />
      <Nav />
    </>
  );
}
