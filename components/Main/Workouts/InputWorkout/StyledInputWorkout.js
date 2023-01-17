import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  background-color: black;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding-bottom: 0.5rem;
  animation: 0.4s alternate slidein;

  .workout-input {
    font-family: Lato-bold;
    display: flex;
    padding: 0.4rem 0.4rem 0.4rem 0;
    background-color: black;
    font-size: 1.1rem;
    border: white solid 1px;
    border-radius: 0.5rem;
    color: white;
    margin-left: 5rem;
  }

  input::placeholder {
    font-size: 1rem;
  }

  .checkmark {
    margin-right: 0.5rem;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .inputActive {
    transition: transform 0.35s ease-in-out;
  }

  @keyframes slidein {
    from {
      transform: translateY(-3rem);
    }

    to {
      transform: translateY(0rem);
    }
  }
`;
