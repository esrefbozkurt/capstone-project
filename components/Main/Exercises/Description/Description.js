import React from "react";
import { StyledDescription } from "./StyledDescription";

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
        Click to see Exercise on YouTube
      </a>
    </StyledDescription>
  );
}
