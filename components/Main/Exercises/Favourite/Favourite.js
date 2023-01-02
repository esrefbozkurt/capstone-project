import Image from "next/image";
import { useState } from "react";
import { StyledFav } from "./StyledFav";

export default function Favourite({ onFav, isFavourite }) {
  return (
    <StyledFav>
      <button>
        {isFavourite ? (
          <Image
            className="add-fav"
            src="/favorite-add-outline.svg"
            width={28}
            height={28}
            alt="add-fav icon"
            onFav={onFav}
          />
        ) : (
          <Image
            className="remove-fav"
            src="/favorite-remove.svg"
            width={28}
            height={28}
            alt="remove-fav icon"
            onFav={onFav}
          />
        )}
      </button>
    </StyledFav>
  );
}
