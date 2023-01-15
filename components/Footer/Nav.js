import Image from "next/image";
import Link from "next/link";
import React from "react";

import { StyledNav } from "./StyledNav";

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">
        <Image
          src="/appstore-outlined.svg"
          width={36}
          height={36}
          alt="home icon"
          onClick={() => setIsActive(0)}
        />
      </Link>

      <Link href="/favourites">
        <Image
          src="/favorite-add-outline.svg"
          width={36}
          height={36}
          alt="add-favourite icon"
          onClick={() => setIsActive(1)}
        />
      </Link>

      <Link href="/workouts">
        <Image
          src="/gym.svg"
          width={36}
          height={36}
          alt="workout icon filled"
        />
      </Link>
    </StyledNav>
  );
}
