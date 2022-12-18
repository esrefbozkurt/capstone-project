import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: inset #354f52 1px;
  li {
    padding: 0.4rem 1rem;
    list-style: none;
    background-color: white;
    color: #354f52;
    border-top: inset #354f52 1px;
  }

  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #354f52;
    background-color: white;
    overflow-y: scroll;
    font-size: 1.25rem;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  button:active {
    box-shadow: inset 0.1px 0.1px 0.1px 0.1px #b6b8c1;
    opacity: 0.5;
  }

  span {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 1rem;
    color: #354f52;
  }
`;
