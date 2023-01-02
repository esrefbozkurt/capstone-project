import Head from "next/head";
import SearchBar from "../../components/Main/Exercises/SearchBar/SearchBar";

const Favourites = ({ onFav, isFavourite }) => {
  return (
    <>
      <Head>
        <title>TrackFit | Favourites</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, "
        />
      </Head>

      <h2>Favorite Exercises</h2>
    </>
  );
};

export default Favourites;
