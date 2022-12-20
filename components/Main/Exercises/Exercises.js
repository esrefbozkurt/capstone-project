import { dataBiceps } from "../../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Favorite from "./Favorite/Favorite";

export default function Exercises() {
  const [toggledExercises, setToggledExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggle(id) {
    if (toggledExercises.includes(id)) {
      setToggledExercises(
        toggledExercises.filter((toggleId) => toggleId !== id)
      );
    } else {
      setToggledExercises([id, ...toggledExercises]);
    }
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <StyledExercises>
      <h2>Biceps Exercises</h2>
      <SearchBar onChange={handleChange} setSearchTerm={setSearchTerm} />
      {dataBiceps
        .filter((exercise) => {
          if (searchTerm === "") {
            return exercise;
          } else if (
            exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return exercise;
          }
        })
        .map(({ name, equipment, difficulty, instructions, id }) => (
          <li key={id}>
            <div className="favContainer">
              <button
                onClick={() => {
                  handleToggle(id);
                }}
              >
                <span>
                  <h3>{name.toUpperCase()}</h3>
                </span>
              </button>
              <Favorite />
            </div>
            {toggledExercises.includes(id) ? (
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
