import { StyledAddWorkout, StyledAddWorkoutHeader } from "./StyledAddWorkout";
import Link from "next/link";
import Image from "next/image";

const AddWorkout = ({ onAddWorkout }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target.elements.name.value;
    const newWorkout = {
      name: name,
    };

    onAddWorkout(newWorkout);
    event.target.reset();
  }

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

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name your Workout..."
            required
          />
          <button type="submit">
            <Image
              src="/checkmark-circle.svg"
              width={34}
              height={34}
              alt="checkmark button"
              className="checkmark"
            />
          </button>
        </form>
      </StyledAddWorkoutHeader>
    </StyledAddWorkout>
  );
};

export default AddWorkout;
