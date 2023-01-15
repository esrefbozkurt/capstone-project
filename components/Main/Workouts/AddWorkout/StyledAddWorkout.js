import styled from "styled-components";

export const StyledAddWorkout = styled.div``;

export const StyledAddWorkoutHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  background-color: white;
  padding: 0.5rem 0;
  border-bottom: inset #354f52 1px;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;
    text-decoration: underline;
  }
  .backbutton {
    margin-left: 10px;
  }

  .checkmark {
    margin-right: 10px;
  }

  input {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: lightgrey;
    background-color: lightblue;
    overflow-y: scroll;
    font-size: 1rem;
    border: none;
  }
`;
