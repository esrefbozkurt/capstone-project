import styled from "styled-components";

export const StyledAddWorkout = styled.div``;

export const StyledAddWorkoutHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: #ff5300;
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  h2 {
    font-family: Lato-bold;
    display: flex;
    overflow-y: scroll;
    font-size: 1.3rem;
  }
  .backbutton {
    margin-left: 0.6rem;
    align-self: center;
  }

  input {
    font-family: Lato-bold;
    display: flex;
    padding: 0.4rem 0.4rem;
    margin-right: 3.5rem;
    background-color: transparent;
    font-size: 1.3rem;
    border: black solid 1px;
    text-align: center;
    border-radius: 0.5rem;
  }

  input::placeholder {
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    border: none;
  }
`;
