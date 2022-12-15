import { dataBiceps } from "../../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";
import { useState } from "react";
import Image from "next/image";

export default function Exercises() {
  const [toggleIds, setToggleIds] = useState([]);

  function handleToggle(id) {
    if (toggleIds.includes(id)) {
      setToggleIds(toggleIds.filter((toggleId) => toggleId !== id));
    } else {
      setToggleIds([id, ...toggleIds]);
    }
  }

  return (
    <StyledExercises>
      <h2>Biceps Exercises</h2>
      {dataBiceps.map(({ name, equipment, difficulty, instructions, id }) => (
        <li key={id}>
          <span>
            <h3>{name.toUpperCase()}</h3>

            <button
              onClick={() => {
                handleToggle(id);
              }}
            >
              <Image
                src="/info-outline-rounded.svg"
                width={24}
                height={24}
                alt="info icon"
              />
            </button>
          </span>
          {toggleIds.includes(id) ? (
            <Description
              key={id}
              id={id}
              name={name}
              equipment={equipment}
              difficulty={difficulty}
              instructions={instructions}
            />
          ) : null}
        </li>
      ))}
    </StyledExercises>
  );
}
