import Image from "next/image";
import React from "react";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <a></a>
      <a>
        <Image
          className="add-fav"
          src="/favorite-add-outline.svg"
          width={36}
          height={36}
          alt="add-fav icon"
        />
      </a>
    </StyledNav>
  );
}
