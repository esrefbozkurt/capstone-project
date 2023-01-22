import { useState } from "react";
import { StyledForm } from "./StyledForm";

const FormSets = () => {
  // const [entrySet, setEntrySet] = useState([]);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const newEntrySet = {
  //     name: event.target.elements.se.value,
  //     notes: event.target.elements.notes.value,
  //   };
  //   setEntry([...entrySet, newEntrySet]);
  // }
  const currDate = new Date().toLocaleDateString();
  return (
    <StyledForm>
      <h3>{currDate}</h3>
      <section className="setContainer">
        <form>
          <fieldset>
            <label for="setNumber">set#</label>
            <input
              type="number"
              name="setNumber"
              id="setNumber"
              className="setInput"
              required
            ></input>
            <label for="weight">weight</label>
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="Name your Workout..."
              className="workout-input"
              required
            ></input>
            <label for="reps">reps</label>
            <input
              type="number"
              name="reps"
              id="reps"
              className="workout-input"
              required
            ></input>

            <button type="submit">Send</button>
          </fieldset>
        </form>
      </section>
    </StyledForm>
  );
};

export default FormSets;
