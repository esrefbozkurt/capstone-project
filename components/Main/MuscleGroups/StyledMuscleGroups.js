import styled from "styled-components";

export const SytledMuscleGroups = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  border: solid 1px red;
  margin-bottom: 3.5rem;

  li {
    list-style: none;
    width: 150px;
    height: 100px;
    background-color: red;
    border: 1px solid black;
    margin: 10px;
  }
`;
