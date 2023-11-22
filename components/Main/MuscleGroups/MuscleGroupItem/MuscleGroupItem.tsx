import Image from "next/image";
import Link from "next/link";
import { StyledMuscleGroupItem } from "./StyledMuscleGroupItem";

interface IMuscleGroupItem {
  muscle: string;
}

const MuscleGroupItem = ({ muscle }: IMuscleGroupItem) => {
  return (
    <StyledMuscleGroupItem>
      <Link href={`/exercises/${muscle}`}>
        <li key={muscle}>
          <Image
            src={`/images/${muscle}.svg`}
            width={158}
            height={80}
            alt={muscle}
            priority
          />

          <h3>{muscle}</h3>
        </li>
      </Link>
    </StyledMuscleGroupItem>
  );
};

export default MuscleGroupItem;
