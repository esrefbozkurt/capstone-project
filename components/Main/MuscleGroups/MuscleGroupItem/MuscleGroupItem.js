import Image from "next/image";
import { StyledMuscleGroupItem } from "./StyledMuscleGroupItem";

const MuscleGroupItem = () => {
  return (
    <StyledMuscleGroupItem>
      <li>
        <Image
          src="/images/abs.svg"
          width={158}
          height={80}
          alt="add-fav icon"
        />
        <h3 muscle="abdominals">Abdominals</h3>
      </li>
    </StyledMuscleGroupItem>
  );
};

export default MuscleGroupItem;
