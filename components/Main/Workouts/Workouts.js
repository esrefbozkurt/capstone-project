import { StyledWorkouts, StyledWorkoutsHeader } from "./StyledWorkouts";
import Image from "next/image";
import Link from "next/link";

const Workouts = () => {
  return (
    <StyledWorkouts>
      <StyledWorkoutsHeader>
        <h2>MyWorkouts</h2>
        <Link href="/addWorkouts">
          <Image
            className="add-workout"
            src="/plus-circle.svg"
            width={28}
            height={28}
            alt="add-workout"
          />
        </Link>
      </StyledWorkoutsHeader>
      <ul></ul>
    </StyledWorkouts>
  );
};

export default Workouts;
