import styled from "styled-components";

export const StyledExercises = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    list-style: none;
    background-color: white;
    color: #354f52;
    text-align: center;
    box-shadow: 1px 1px 3px 3px #cad2c5;
  }
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    padding: 5px;
    margin: 10px;
    color: #354f52;
  }
`;
