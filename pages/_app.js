import { useState } from "react";
import GlobalStyles from "../components/GlobalStyles";
import { dataBiceps } from "../lib/data";

function MyApp({ Component, pageProps }) {
  const [isFavourite, setIsFavourite] = useState([]);

  function handleFav(id) {
    isFav.includes(id)
      ? setIsFavourite((prev) => prev.filter((favour) => favour !== id))
      : setIsFavourite((prev) => [...prev, id]);
  }

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} onFav={handleFav} isFavourite={isFavourite} />
    </>
  );
}

export default MyApp;
