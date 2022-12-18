import { dataBiceps } from "../../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";
import { useState } from "react";

import SearchBar from "./SearchBar/SearchBar";

export default function Exercises() {
  const [toggleIds, setToggleIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggle(id) {
    if (toggleIds.includes(id)) {
      setToggleIds(toggleIds.filter((toggleId) => toggleId !== id));
    } else {
      setToggleIds([id, ...toggleIds]);
    }
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <StyledExercises>
      <h2>Biceps Exercises</h2>
      <SearchBar onChange={handleChange} />
      {dataBiceps
        .filter((exercise) => {
          if (searchTerm == "") {
            return null;
          } else if (
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return exercise;
          }
        })
        .map(({ name, equipment, difficulty, instructions, id }) => (
          <li key={id}>
            <button
              onClick={() => {
                handleToggle(id);
              }}
            >
              <span>
                <h3>{name.toUpperCase()}</h3>
              </span>
            </button>
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
