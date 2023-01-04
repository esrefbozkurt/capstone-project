import Image from "next/image";
import MuscleGroupItem from "./MuscleGroupItem/MuscleGroupItem";

import { SytledMuscleGroups } from "./StyledMuscleGroups";

const MuscleGroups = () => {
  return (
    <SytledMuscleGroups>
      <h2>Muscle Groups</h2>
      <ul>
        <MuscleGroupItem muscle={abdominals} imageName={abdominals} />
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
    </SytledMuscleGroups>
  );
};

export default MuscleGroups;
