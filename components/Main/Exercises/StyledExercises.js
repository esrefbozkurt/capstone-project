import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    /* margin: 0.5rem; */
    padding: 0.4rem 1rem 0.4rem 1rem;
    list-style: none;
    background-color: white;
    color: #354f52;
    box-shadow: 1px 1px 2px 2px #e9ecef;
    transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    border-top: outset 1px;
  }
  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: flex-start;
    padding: 0.75rem 1rem 2.3rem 1rem;

    color: #354f52;
    background-color: white;
    border-top: inset #f8f9fa;
    font-size: 1.25rem;
  }

  button {
    border: none;
    background: transparent;
    height: 24px;
    width: 24px;
    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 1rem;
  }
`;
