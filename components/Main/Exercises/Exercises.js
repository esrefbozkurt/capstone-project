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
  onAddExercise,
  currentWorkout,
  addExercises,
  exerciseAdded,
  setExerciseAdded,
  id,
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
  // setExerciseAdded([...exerciseAdded, exerciseName]);

  const handleAddExercise = (event, exerciseName) => {
    onAddExercise(currentWorkout, exerciseName, event);
    const nameArray = currentWorkout.exercises.map((exercise) => exercise.name);
    setExerciseAdded([...nameArray, exerciseName]);
  };

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
                priority
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
              <li
                key={exercise.id}
                className={
                  toggledExercises.includes(exercise.id)
                    ? "li expanded"
                    : "li collapsed"
                }
              >
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

                <Description
                  id={exercise.id}
                  name={exercise.name}
                  equipment={exercise.equipment}
                  difficulty={exercise.difficulty}
                  instructions={exercise.instructions}
                />
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
                <li
                  key={exercise.id}
                  className={
                    toggledExercises.includes(exercise.id)
                      ? "expanded"
                      : "collapsed"
                  }
                >
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

                  <Description
                    key={exercise.id}
                    id={exercise.id}
                    name={exercise.name}
                    equipment={exercise.equipment}
                    difficulty={exercise.difficulty}
                    instructions={exercise.instructions}
                  />
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
        <div className="header_searchbar">
          <StyledExercisesHeader>
            <Link href={`/workouts/${id}`}>
              <Image
                src="/arrow-circle-left.svg"
                width={34}
                height={34}
                alt="back button"
                priority
              />
            </Link>
            <h2 className="headerAddExercise">
              Add Exercises to {currentWorkout.name}
            </h2>
          </StyledExercisesHeader>
          <SearchBar onChange={handleChange} setSearchTerm={setSearchTerm} />
        </div>
        <ul>
          {exercises
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
              <li
                key={exercise.id}
                className={
                  exerciseAdded?.includes(exercise.name)
                    ? "addedContainer"
                    : "addContainer"
                }
              >
                <h3>{exercise.name.toUpperCase()}</h3>
                {exerciseAdded?.includes(exercise.name) ? (
                  <Image
                    className="add-exercise"
                    src="/checkmark.svg"
                    width={24}
                    height={24}
                    alt="checkmark exercise added"
                  />
                ) : (
                  <Image
                    onClick={
                      (event) => handleAddExercise(event, exercise.name)
                      // handleAdd(event, exercise, currentWorkout)
                    }
                    className="add-exercise"
                    src="/plus.svg"
                    width={24}
                    height={24}
                    alt="add Exercise"
                  />
                )}
              </li>
            ))}
        </ul>
      </StyledExercises>
    );
  }
}
