import Image from "next/image";
import { useState } from "react";
import { StyledFav } from "./StyledFav";

export default function Favorite() {
  const [favourite, setFavourite] = useState(false);

  function toggleFav() {
    if (!favourite) {
      setFavourite(true);
    } else {
      setFavourite(false);
    }
  }

  return (
    <StyledFav>
      <button onClick={toggleFav}>
        {!favourite ? (
          <Image
            className="add-fav"
            src="/favorite-add-outline.svg"
            width={22}
            height={22}
            alt="add-fav icon"
          />
        ) : (
          <Image
            className="remove-fav"
            src="/favorite-remove.svg"
            width={22}
            height={22}
            alt="remove-fav icon"
          />
        )}
      </button>
    </StyledFav>
  );
}
