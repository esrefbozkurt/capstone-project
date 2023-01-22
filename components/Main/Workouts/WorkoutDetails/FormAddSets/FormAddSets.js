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
      {/* <h3>{currentExerciseName}</h3>
      <p>{currDate}</p> */}
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

          <button type="submit">Send</button>
        </fieldset>
      </StyledForm>
    </StyledAddSets>
  );
}
