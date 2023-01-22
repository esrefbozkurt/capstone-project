import { useState } from "react";
import { StyledForm, StyledFormSets } from "./StyledForm";

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
    <StyledFormSets>
      <h3>{currDate}</h3>
      <StyledForm>
        <form>
          <fieldset>
            <label htmlFor="setNumber">set#</label>
            <input
              type="number"
              name="setNumber"
              id="setNumber"
              className="set-input"
              required
            ></input>
            <label htmlFor="weight">weight</label>
            <input
              type="number"
              name="weight"
              id="weight"
              placeholder="Name your Workout..."
              className="set-input"
              required
            ></input>
            <label htmlFor="reps">reps</label>
            <input
              type="number"
              name="reps"
              id="reps"
              className="set-input"
              required
            ></input>

            <button className="addButton" type="submit">
              Send
            </button>
          </fieldset>
        </form>
      </StyledForm>
    </StyledFormSets>
  );
};

export default FormSets;
