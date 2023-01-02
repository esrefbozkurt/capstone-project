import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <Image
          className="home"
          src="/appstore-outlined.svg"
          width={36}
          height={36}
          alt="home icon"
        />
      </Link>

      <Link href="/favourites">
        <Image
          className="fav"
          src="/favorite-add-outline.svg"
          width={36}
          height={36}
          alt="add-favourite icon"
        />
      </Link>
    </StyledNav>
  );
}
