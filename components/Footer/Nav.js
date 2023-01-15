import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { StyledNav } from "./StyledNav";

export default function Nav() {
  const router = useRouter();

  return (
    <StyledNav>
      <Link className={router.pathname == "/" ? "active" : ""} href="/">
        <Image
          src="/appstore-outlined.svg"
          width={36}
          height={36}
          alt="home icon"
        />
      </Link>

      <Link
        className={router.pathname == "/favourites" ? "active" : ""}
        href="/favourites"
      >
        <Image
          src="/favorite.svg"
          width={36}
          height={36}
          alt="add-favourite icon"
        />
      </Link>

      <Link
        className={
          router.pathname == "/workouts" && "/workouts/addWorkouts"
            ? "active"
            : ""
        }
        href="/workouts"
      >
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
