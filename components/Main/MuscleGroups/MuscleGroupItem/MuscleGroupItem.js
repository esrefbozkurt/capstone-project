import Image from "next/image";
import Link from "next/link";
import { StyledMuscleGroupItem } from "./StyledMuscleGroupItem";

const MuscleGroupItem = ({ muscle }) => {
  return (
    <StyledMuscleGroupItem>
      <Link href="/exercises">
        <Image
          src="/images/abs.svg"
          width={158}
          height={80}
          alt="add-fav icon"
        />
        <h3>{muscle}</h3>
      </Link>
    </StyledMuscleGroupItem>
  );
};

export default MuscleGroupItem;
