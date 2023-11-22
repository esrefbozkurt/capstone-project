import MuscleGroupItem from "./MuscleGroupItem/MuscleGroupItem";
import { useState } from "react";
import { StyledMuscleGroups } from "./StyledMuscleGroups";
import { ExerciseType } from "../../../types";

interface IMuscleGroups {
  exercises: ExerciseType[];
}

const MuscleGroups = ({ exercises }: IMuscleGroups) => {
  const [muscles, setMuscles] = useState<string[]>([]);
  exercises.map((exercise) => {
    if (!muscles.includes(exercise.muscle)) {
      setMuscles([...muscles, exercise.muscle]);
    }
  });

  return (
    <StyledMuscleGroups>
      <h2>Muscle Groups</h2>
      <ul>
        {muscles.map((muscle, index) => (
          <MuscleGroupItem muscle={muscle} key={index} />
        ))}
      </ul>
    </StyledMuscleGroups>
  );
};

export default MuscleGroups;
