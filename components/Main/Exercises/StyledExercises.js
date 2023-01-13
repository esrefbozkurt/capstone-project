import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: inset #354f52 1px;
  margin-bottom: 3.5rem;

  li {
    padding: 0rem 1rem;
    list-style: none;
    background-color: transparent;
    color: #354f52;
    border-top: inset #354f52 1px;

    .favContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 1rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;
    text-transform: capitalize;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  h3 {
    font-size: 0.8rem;
    color: #354f52;
    text-align: left;
  }
  div {
    display: flex;
  }
`;
