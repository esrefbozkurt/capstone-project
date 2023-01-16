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
          <form>
            <label>
              <input
                type="text"
                name="text"
                placeholder="Name your Workout..."
                required
              />
            </label>
          </form>
        </Link>
      </StyledAddWorkoutHeader>
    </StyledAddWorkout>
  );
};

export default AddWorkout;
