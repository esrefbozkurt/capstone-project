import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  const [isFavourite, setIsFavourite] = useState([]);

  function handleFav(id, event) {
    event.preventDefault();
    event.stopPropagation();

    isFavourite.includes(id)
      ? setIsFavourite((exercise) => exercise.filter((favour) => favour !== id))
      : setIsFavourite((exercise) => [...exercise, id]);
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} onFav={handleFav} isFavourite={isFavourite} />
      </Layout>
    </>
  );
}

export default MyApp;
