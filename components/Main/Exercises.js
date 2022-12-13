import { dataBiceps } from "../../lib/data";
import { StyledExercises } from "./StyledExercises";

export default function Exercises() {
  return (
    <StyledExercises>
      {dataBiceps.map(({ name }) => (
        <li>{name}</li>
      ))}
    </StyledExercises>
  );
}
