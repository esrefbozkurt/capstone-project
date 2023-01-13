import Image from "next/image";
import MuscleGroupItem from "./MuscleGroupItem/MuscleGroupItem";
import { useState } from "react";

import { SytledMuscleGroups } from "./StyledMuscleGroups";

const MuscleGroups = ({ exercises }) => {
  const [muscles, setMuscles] = useState([]);
  exercises.map((exercise) => {
    if (!muscles.includes(exercise.muscle)) {
      setMuscles([...muscles, exercise.muscle]);
    }
  });

  return (
    <SytledMuscleGroups>
      <h2>Muscle Groups</h2>
      <ul>
        {muscles.map((muscle) => (
          <MuscleGroupItem muscle={muscle} key={exercises.id} />
        ))}
      </ul>
    </SytledMuscleGroups>
  );
};

export default MuscleGroups;
