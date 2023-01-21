import styled from "styled-components";

export const StyledAddExercisesHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: black;
  padding: 0.5rem 0;
  justify-content: left;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  .backbutton {
    margin-left: 0.6rem;
    align-self: center;
    background: transparent;
    border: none;
  }

  h2 {
    display: flex;
    padding: 0.5rem 0.5rem;
    overflow-y: scroll;
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
  }
`;
