import { dataBiceps } from "../../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";
import { useState } from "react";

export default function Exercises() {
  const [show, setShow] = useState(false);
  const [toggleID, setToggleId] = useState();

  function handleToggle(id) {
    setShow(!show);
    setToggleId(id);
    console.log(id);
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"
                />
              </svg>
            </button>
          </span>
          {show && id === toggleID && (
            <Description
              key={id}
              id={id}
              name={name}
              equipment={equipment}
              difficulty={difficulty}
              instructions={instructions}
            />
          )}
        </li>
      ))}
    </StyledExercises>
  );
}
