import Image from "next/image";
import { StyledForm } from "./StyledInputWorkout";

const InputWorkout = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        id="workout-input"
        placeholder="Name your Workout..."
        className="workout-input"
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
    </StyledForm>
  );
};

export default InputWorkout;
