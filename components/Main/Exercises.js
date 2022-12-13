import { dataBiceps } from "../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";

export default function Exercises() {
  return (
    <StyledExercises>
      <h2>Biceps Exercises</h2>
      {dataBiceps.map(({ name, id }) => (
        <li key={id}>{name.toUpperCase()}</li>
      ))}
    </StyledExercises>
  );
}
