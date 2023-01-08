import Image from "next/image";
import { StyledMuscleGroupItem } from "./StyledMuscleGroupItem";

const MuscleGroupItem = () => {
  return (
    <StyledMuscleGroupItem>
      <li>
        <Image
          src="/images/abs.svg"
          width={158}
          height={60}
          alt="add-fav icon"
          onClick={(event) => onFav(id, event)}
        />
        <h2 muscle="abdominals">Abdominals</h2>
      </li>
    </StyledMuscleGroupItem>
  );
};

export default MuscleGroupItem;
