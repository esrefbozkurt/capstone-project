import { StyledWorkouts, StyledWorkoutsHeader } from "./StyledWorkouts";
import Image from "next/image";
import Link from "next/link";

const Workouts = ({ workouts }) => {
  return (
    <>
      <StyledWorkoutsHeader>
        <h2>My-Workouts</h2>
        <Link href="/workouts/addWorkouts">
          <Image
            className="add-workout"
            src="/plus-circle.svg"
            width={32}
            height={32}
            alt="add-workout"
          />
        </Link>
      </StyledWorkoutsHeader>
      <StyledWorkouts>
        <ul>
          {workouts.map((workout) => {
            return (
              <li>
                <div className="workoutContainer">
                  <h3>{workout.name.toUpperCase()}</h3>
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
