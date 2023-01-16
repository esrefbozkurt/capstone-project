import React from "react";
import { StyledDescription } from "./StyledDescription";
import Image from "next/image";

export default function Description({
  equipment,
  difficulty,
  instructions,
  name,
}) {
  return (
    <StyledDescription>
      <h4>Equipment:</h4>
      <p>{equipment}</p>
      <h4>Difficulty:</h4>
      <p>{difficulty}</p>
      <h4>Instructions:</h4>
      <p>{instructions}</p>
      <a
        href={"https://www.youtube.com/results?search_query=" + name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/yt_logo_rgb_light.png"
          width={54.8}
          height={15}
          alt="Youtube Link as Icon"
          // className="checkmark"
        />
      </a>
    </StyledDescription>
  );
}
