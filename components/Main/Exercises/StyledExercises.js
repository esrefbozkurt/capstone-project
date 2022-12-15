import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin: 0.5rem;
    padding: 0.75rem;
    border-radius: 10px;
    list-style: none;
    background-color: white;
    color: #354f52;
    box-shadow: 1px 1px 1px 1px #cad2c5;
    transition: all 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: center;
    padding: 0.75rem;
    color: #354f52;
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
    padding: 0.4rem;
  }
`;
