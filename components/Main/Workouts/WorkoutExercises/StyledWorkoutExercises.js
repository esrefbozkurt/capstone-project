import styled from "styled-components";

export const StyledWorkoutExercises = styled.div``;

export const StyledWorkoutExercisesHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: black;
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  .backbutton {
    margin-left: 0.6rem;
    align-self: center;
  }

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    overflow-y: scroll;
    font-size: 1.1rem;
    margin-left: 6.9rem;
    text-transform: uppercase;
    color: white;
  }
  .checkmark {
    margin-right: 0.6rem;
  }
`;
