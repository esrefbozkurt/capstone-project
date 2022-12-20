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
            width={28}
            height={28}
            alt="add-fav icon"
          />
        ) : (
          <Image
            className="remove-fav"
            src="/favorite-remove.svg"
            width={28}
            height={28}
            alt="remove-fav icon"
          />
        )}
      </button>
    </StyledFav>
  );
}
