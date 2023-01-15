import { StyledHeader } from "./StyledHeader";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <Image src="/progress.svg" width={24} height={24} alt="progress icon" />
      <h1>TrackFit</h1>
    </StyledHeader>
  );
}
