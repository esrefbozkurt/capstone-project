import { StyledWorkouts, StyledWorkoutsHeader } from "./StyledWorkouts";
import Image from "next/image";
import InputWorkout from "./InputWorkout/InputWorkout";
import { useState } from "react";
import React from "react";

const Workouts = ({ workouts, onAddWorkout, onDelete }) => {
  const [showInput, setShowInput] = useState(false);

  function toggleShow() {
    setShowInput(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target.elements.name.value;
    const newWorkout = {
      name: name,
    };

    await fetch("/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWorkout),
    });
    onAddWorkout(newWorkout);
    event.target.reset();
    setShowInput(false);
  }

  return (
    <>
      <StyledWorkoutsHeader>
        <h2>My-Workouts</h2>
        <button onClick={() => toggleShow()}>
          <Image
            className="add-workout"
            src="/plus-circle.svg"
            width={32}
            height={32}
            alt="show input"
          />
        </button>
      </StyledWorkoutsHeader>
      {showInput ? <InputWorkout onSubmit={handleSubmit} /> : null}

      <StyledWorkouts>
        <ul>
          {workouts.map((workout) => {
            return (
              <li key={workout.id}>
                <div className="workoutContainer">
                  <h3>{workout.name.toUpperCase()}</h3>
                  <Image
                    onClick={(event) => onDelete(event, workout.id)}
                    className="delete-workout"
                    src="/close.svg"
                    width={24}
                    height={24}
                    alt="delete Workout"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </StyledWorkouts>
    </>
  );
};

export default Workouts;
