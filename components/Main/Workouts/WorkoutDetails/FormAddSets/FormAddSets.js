import { StyledAddSets, StyledForm } from "./StyledAddSets";

export default function FormAddSets({
  onSubmitNewSet,
  currentWorkout,
  exerciseId,
  onShowInput,
}) {
  const currDate = new Date().toLocaleDateString();
  const currentExerciseName = currentWorkout.exercises.find(
    (exercise) => exercise._id === exerciseId
  ).name;

  function handleSubmitSet(event) {
    event.preventDefault;
    const newSet = {
      date: currDate,
      sets: [
        {
          name: event.target.elements.setNumber.value,
          weights: event.target.elements.weight.value,
          reps: event.target.elements.reps.value,
        },
      ],
    };
    const updatedWorkout = {
      ...currentWorkout,
      exercises: currentWorkout.exercises.map((exercise) =>
        exercise._id === exerciseId
          ? {
              ...exercise,
              details: [...exercise.details, newSet],
            }
          : exercise
      ),
    };
    onSubmitNewSet(updatedWorkout, currentWorkout.id, event);
    onShowInput([]);
  }
  return (
    <StyledAddSets>
      <h3>
        {currDate} {currentExerciseName}
      </h3>
      <StyledForm onSubmit={(event) => handleSubmitSet(event)}>
        <fieldset>
          <label htmlFor="setNumber">set#</label>
          <input
            type="number"
            name="setNumber"
            id="setNumber"
            className="setInput"
            required
          ></input>
          <label htmlFor="weight">weight</label>
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Name your Workout..."
            className="workout-input"
            required
          ></input>
          <label htmlFor="reps">reps</label>
          <input
            type="number"
            name="reps"
            id="reps"
            className="workout-input"
            required
          ></input>

          <button type="submit">Send</button>
        </fieldset>
      </StyledForm>
    </StyledAddSets>
  );
}
