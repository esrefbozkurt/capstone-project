import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: inset #354f52 1px;
  margin: 10px;
  /* border: 1px solid; */
  /* border-radius: 5px; */
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
    /* border-bottom: inset #354f52 1px; */
    padding: 0.5rem 1rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  h3 {
    font-size: 1rem;
    color: #354f52;
  }
`;
