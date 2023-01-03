import { dataBiceps } from "../../../lib/data";
import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import FavouriteButton from "./Favourite/FavouriteButton";

export default function Exercises({ onFav, isFavourite, isFavouriteExercise }) {
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
      {!isFavouriteExercise ? (
        <>
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
            .map((exercise) => (
              <li key={exercise.id}>
                <div
                  className="favContainer"
                  onClick={() => {
                    handleToggle(exercise.id);
                  }}
                >
                  <button>
                    <h3>{exercise.name.toUpperCase()}</h3>
                  </button>
                  <FavouriteButton
                    onFav={onFav}
                    isFavourite={isFavourite}
                    id={exercise.id}
                  />
                </div>
                {toggledExercises.includes(exercise.id) && (
                  <Description
                    key={exercise.id}
                    id={exercise.id}
                    name={exercise.name}
                    equipment={exercise.equipment}
                    difficulty={exercise.difficulty}
                    instructions={exercise.instructions}
                  />
                )}
              </li>
            ))}
        </>
      ) : (
        <>
          <h2>Favourite Exercises</h2>
          {dataBiceps.map((exercise) => {
            if (isFavourite.includes(exercise.id)) {
              return (
                <li key={exercise.id}>
                  <div
                    className="favContainer"
                    onClick={() => {
                      handleToggle(exercise.id);
                    }}
                  >
                    <button>
                      <h3>{exercise.name.toUpperCase()}</h3>
                    </button>
                    <FavouriteButton
                      onFav={onFav}
                      isFavourite={isFavourite}
                      id={exercise.id}
                    />
                  </div>
                  {toggledExercises.includes(exercise.id) && (
                    <Description
                      key={exercise.id}
                      id={exercise.id}
                      name={exercise.name}
                      equipment={exercise.equipment}
                      difficulty={exercise.difficulty}
                      instructions={exercise.instructions}
                    />
                  )}
                </li>
              );
            }
          })}
        </>
      )}
    </StyledExercises>
  );
}
