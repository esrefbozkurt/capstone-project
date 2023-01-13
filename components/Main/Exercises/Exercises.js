import { StyledExercises } from "./StyledExercises";
import React from "react";
import Description from "./Description/Description";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import FavouriteButton from "./Favourite/FavouriteButton";
import Link from "next/link";
import Image from "next/image";

export default function Exercises({
  onFav,
  isFavourite,
  isFavouriteExercise,
  exercises,
  muscle,
}) {
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
  const filteredExercises = exercises.filter(
    (exercise) => exercise.muscle === muscle
  );
  return (
    <StyledExercises>
      {!isFavouriteExercise ? (
        <>
          <div>
            <Link href="/">
              <Image
                src="/arrow-circle-left.svg"
                width={36}
                height={36}
                alt="back button"
              />
            </Link>
            <h2>{muscle} Exercises</h2>
          </div>
          <SearchBar onChange={handleChange} setSearchTerm={setSearchTerm} />
          {filteredExercises
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
          {exercises.map((exercise) => {
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
