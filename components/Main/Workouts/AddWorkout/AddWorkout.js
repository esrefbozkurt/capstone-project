import { StyledAddWorkout, StyledAddWorkoutHeader } from "./StyledAddWorkout";
import Link from "next/link";
import Image from "next/image";

const AddWorkout = ({ onAddWorkout }) => {
  async function handleSubmit(event) {
    event.preventDefault();

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
            name="text"
            placeholder="Name your Workout..."
            required
          />
        </form>
        <button type="submit">
          <Image
            src="/checkmark-circle.svg"
            width={34}
            height={34}
            alt="checkmark button"
            className="checkmark"
          />
        </button>
      </StyledAddWorkoutHeader>
    </StyledAddWorkout>
  );
};

export default AddWorkout;
