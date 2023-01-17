import Image from "next/image";
import Link from "next/link";
import { StyledMuscleGroupItem } from "./StyledMuscleGroupItem";
import React from "react";

const MuscleGroupItem = ({ muscle }) => {
  return (
    <StyledMuscleGroupItem>
      <Link href={`/exercises/${muscle}`}>
        <li>
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
