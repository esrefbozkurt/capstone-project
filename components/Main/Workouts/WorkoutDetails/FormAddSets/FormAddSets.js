import { StyledAddSets, StyledForm } from "./StyledAddSets";
import Image from "next/image";

export default function FormAddSets({
  onSubmitNewSet,
  currentWorkout,
  exerciseId,
}) {
  // const currDate = new Date().toLocaleDateString();
  const currDate = "22/01/2023";

  const currentExerciseDetails = currentWorkout.exercises.find(
    (exercise) => exercise._id === exerciseId
  ).details;

  const isCurrentDate = currentExerciseDetails.find(
    (detail) => detail.date === currDate
  );

  function handleSubmitSet(event) {
    event.preventDefault;
    const newSet = {
      name: event.target.elements.setNumber.value,
      weights: event.target.elements.weight.value,
      reps: event.target.elements.reps.value,
    };

    function updateExerciseDetails() {
      if (isCurrentDate) {
        const updatedDetails = currentExerciseDetails.map((detail) => {
          if (detail.date && detail.date === currDate) {
            return { ...detail, sets: [...detail.sets, newSet] };
          } else {
            return detail;
          }
        });
        return updatedDetails;
      } else {
        const updatedDetails = [
          ...currentExerciseDetails,
          { date: currDate, sets: [newSet] },
        ];
        return updatedDetails;
      }
    }

    const updatedDetails = updateExerciseDetails();

    const updatedWorkout = {
      ...currentWorkout,
      exercises: currentWorkout.exercises.map((exercise) =>
        exercise._id === exerciseId
          ? {
              ...exercise,
              details: updatedDetails,
            }
          : exercise
      ),
    };

    onSubmitNewSet(updatedWorkout, currentWorkout.id, event);
    event.target.reset();
    event.target.elements.setNumber.focus();
  }

  return (
    <StyledAddSets>
      <StyledForm onSubmit={(event) => handleSubmitSet(event)}>
        <fieldset>
          <label htmlFor="setNumber">Set #</label>
          <input
            type="number"
            name="setNumber"
            id="setNumber"
            className="setInput"
            required
          ></input>

          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            name="weight"
            id="weight"
            className="setInput"
            required
          ></input>

          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            name="reps"
            id="reps"
            className="setInput"
            required
          ></input>

          <button type="submit" className="add-set">
            <Image src="/plus.svg" width={24} height={24} alt="add set" />
          </button>
        </fieldset>
      </StyledForm>
    </StyledAddSets>
  );
}
