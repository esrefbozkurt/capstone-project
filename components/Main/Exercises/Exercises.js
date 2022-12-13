import { dataBiceps } from "../../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";

export default function Exercises() {
  return (
    <StyledExercises>
      <h2>Biceps Exercises</h2>
      {dataBiceps.map(({ name, id }) => (
        <li key={id}>
          {name.toUpperCase()}
          <Description />
        </li>
      ))}
    </StyledExercises>
  );
}
