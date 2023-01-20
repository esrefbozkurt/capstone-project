import { StyledWorkouts, StyledWorkoutsHeader } from "./StyledWorkouts";
import Image from "next/image";
import InputWorkout from "./InputWorkout/InputWorkout";
import { useState } from "react";
import Link from "next/link";

const Workouts = ({ workouts, onAddWorkout, onDelete }) => {
  const [showInput, setShowInput] = useState(false);

  function toggleShow() {
    setShowInput(!showInput);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target.elements.name.value;
    const newWorkout = {
      name: name,
      exercises: [],
    };

    onAddWorkout(newWorkout);
    event.target.reset();
    setShowInput(false);
  }

  return (
    <>
      <StyledWorkoutsHeader
        style={{ maxHeight: !showInput ? "50px" : "100px" }}
      >
        <div className="workoutsHeaderContainer">
          <h2>My-Workouts</h2>
          <button className="add-workout" onClick={toggleShow}>
            <Image
              src="/plus-circle.svg"
              width={32}
              height={32}
              alt="show input"
            />
          </button>
        </div>
        <InputWorkout onSubmit={handleSubmit} />
      </StyledWorkoutsHeader>

      <StyledWorkouts>
        <ul>
          {workouts.map((workout) => {
            return (
              <Link href={"/workouts/" + workout.id}>
                <li key={workout.id}>
                  <div className="workoutContainer" key={workout.id}>
                    <h3>{workout.name.toUpperCase()}</h3>
                    <Image
                      onClick={(event) => onDelete(event, workout.id)}
                      className="deleteWorkout"
                      src="/delete.svg"
                      width={24}
                      height={24}
                      alt="delete Workout"
                    />
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </StyledWorkouts>
    </>
  );
};

export default Workouts;
