import Image from "next/image";
import MuscleGroupItem from "./MuscleGroupItem/MuscleGroupItem";
import { useState } from "react";

import { StyledMuscleGroups } from "./StyledMuscleGroups";

const MuscleGroups = ({ exercises }) => {
  const [muscles, setMuscles] = useState([]);
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
    </SytledMuscleGroups>
  );
};

export default MuscleGroups;
