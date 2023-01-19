import {
  StyledExercises,
  StyledExercisesHeader,
  StyledFavouritesHeader,
} from "./StyledExercises";
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
  addExercises,
  onAddExercise,
  currentWorkout,
}) {
  const [toggledExercises, setToggledExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [exerciseAdded, setExerciseAdded] = useState([]);

  function handleToggle(id) {
    if (toggledExercises.includes(id)) {
      setToggledExercises(
        toggledExercises.filter((toggleId) => toggleId !== id)
      );
    } else {
      setToggledExercises([id, ...toggledExercises]);
    }
  }

  // function handleExerciseAdded(event,id) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   setExerciseAdded(true);
  // }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredExercises = exercises.filter(
    (exercise) => exercise.muscle === muscle
  );

  if (!isFavouriteExercise && !addExercises) {
    return (
      <StyledExercises>
        <div className="header_searchbar">
          <StyledExercisesHeader>
            <Link href="/">
              <Image
                src="/arrow-circle-left.svg"
                width={32}
                height={32}
                alt="back button"
                className="backbutton"
              />
            </Link>
            <h2>{muscle}-Exercises</h2>
          </StyledExercisesHeader>

          <SearchBar onChange={handleChange} setSearchTerm={setSearchTerm} />
        </div>
        <ul>
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
                  <h3>{exercise.name.toUpperCase()}</h3>

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
        </ul>
      </StyledExercises>
    );
  } else if (isFavouriteExercise && !addExercises) {
    return (
      <StyledExercises>
        <StyledFavouritesHeader>
          <h2>Favourite-Exercises</h2>
        </StyledFavouritesHeader>
        <ul>
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
                    <h3>{exercise.name.toUpperCase()}</h3>

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
        </ul>
      </StyledExercises>
    );
  } else if (addExercises && !isFavouriteExercise) {
    return (
      <StyledExercises>
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <div className="addContainer">
                <h3>{exercise.name.toUpperCase()}</h3>

                <Image
                  onClick={(event) =>
                    onAddExercise(currentWorkout, exercise.name, event)
                  }
                  className="add-exercise"
                  src="/plus.svg"
                  width={24}
                  height={24}
                  alt="add Exercise"
                />
              </div>
            </li>
          ))}
        </ul>
      </StyledExercises>
    );
  }
}
