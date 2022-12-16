import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: inset #354f52 1px;
  li {
    padding: 0.4rem 1rem 0.4rem 1rem;
    list-style: none;
    background-color: white;
    color: #354f52;
    border-top: inset #354f52 1px;
  }

  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: flex-start;
    padding: 0.75rem 1rem 0.75rem 1rem;
    color: #354f52;
    background-color: white;
    overflow-y: scroll;
    font-size: 1.25rem;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  button:active {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  span {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 1rem;
  }
`;
