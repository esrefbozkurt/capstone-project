import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  const [isActive, setIsActive] = useState(0);

  return (
    <StyledNav>
      <Link href="/">
        {isActive === 0 ? (
          <Image
            src="/appstore-filled.svg"
            width={36}
            height={36}
            alt="home icon"
          />
        ) : (
          <Image
            src="/appstore-outlined.svg"
            width={36}
            height={36}
            alt="home icon"
            onClick={() => setIsActive(0)}
          />
        )}
      </Link>

      <Link href="/favourites">
        {isActive === 1 ? (
          <Image
            src="/favorite-remove.svg"
            width={36}
            height={36}
            alt="add-favourite icon"
          />
        ) : (
          <Image
            src="/favorite-add-outline.svg"
            width={36}
            height={36}
            alt="add-favourite icon"
            onClick={() => setIsActive(1)}
          />
        )}
      </Link>
    </StyledNav>
  );
}
