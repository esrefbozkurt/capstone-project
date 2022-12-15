import { StyledHeader } from "./StyledHeader";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <Image src="/progress.svg" width={24} height={24} alt="progress icon" />
      TrackFit
      <Image
        src="/alterofilista.svg"
        width={40}
        height={40}
        alt="progress icon"
      />
    </StyledHeader>
  );
}
