import Image from "next/image";
import React from "react";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <Image
        className="add-fav"
        src="/favorite-add-outline.svg"
        width={48}
        height={48}
        alt="add-fav icon"
      />
    </StyledNav>
  );
}
