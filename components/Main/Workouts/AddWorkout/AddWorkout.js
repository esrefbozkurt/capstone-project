import { StyledAddWorkout, StyledAddWorkoutHeader } from "./StyledAddWorkout";
import Link from "next/link";
import Image from "next/image";

const AddWorkout = () => {
  return (
    <StyledAddWorkout>
      <StyledAddWorkoutHeader>
        <Link href="/workouts">
          <Image
            src="/arrow-circle-left.svg"
            width={34}
            height={34}
            alt="back button"
            className="backbutton"
          />
        </Link>
        <form>
          <label>
            <input
              type="text"
              name="Workout"
              placeholder="Name your Workout..."
            />
          </label>
        </form>
        <Image
          src="/checkmark.svg"
          width={42}
          height={42}
          alt="checkmark button"
          className="checkmark"
        />
      </StyledAddWorkoutHeader>
    </StyledAddWorkout>
  );
};

export default AddWorkout;
