import Image from "next/image";
import { StyledFav } from "./StyledFav";
import React from "react";

export default function FavouriteButton({ onFav, isFavourite, id }) {
  return (
    <StyledFav>
      <button>
        {!isFavourite.includes(id) ? (
          <Image
            className="add-fav"
            src="/favorite-add-outline.svg"
            width={28}
            height={28}
            alt="add-fav icon"
            onClick={(event) => onFav(id, event)}
          />
        ) : (
          <Image
            className="remove-fav"
            src="/favorite-remove.svg"
            width={28}
            height={28}
            alt="remove-fav icon"
            onClick={(event) => onFav(id, event)}
          />
        )}
      </button>
    </StyledFav>
  );
}
