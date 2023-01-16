import { StyledWorkouts, StyledWorkoutsHeader } from "./StyledWorkouts";
import Image from "next/image";
import Link from "next/link";

const Workouts = () => {
  return (
    <StyledWorkouts>
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
      <ul></ul>
    </StyledWorkouts>
  );
};

export default Workouts;
