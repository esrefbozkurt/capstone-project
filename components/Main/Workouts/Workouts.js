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
    };

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
              <Link href={"/workouts/" + workout.id} key={workout.id}>
                <li>
                  <div className="workoutContainer">
                    <h3>{workout.name.toUpperCase()}</h3>
                    <Image
                      onClick={(event) => onDelete(event, workout.id)}
                      className="deleteWorkout"
                      src="/close.svg"
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
