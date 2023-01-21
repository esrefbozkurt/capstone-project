import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-bottom: 0.5rem;
  animation: 0.4s alternate slidein;
  width: 100%;

  .workout-input {
    display: flex;
    padding: 0.4rem 0.4rem 0.4rem 0;
    background-color: black;
    font-size: 1.1rem;
    border: white solid 1px;
    border-radius: 0.5rem;
    color: white;
    padding: 0.4rem;
  }

  input::placeholder {
    font-size: 1rem;
  }

  .checkmark {
    position: absolute;
    right: 8px;
    height: 32px;
    width: 32px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
