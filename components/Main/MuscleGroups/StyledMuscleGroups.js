import styled from "styled-components";

export const SytledMuscleGroups = styled.div`
  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 1rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100vh;
    margin: 10px;
    margin-bottom: 3.5rem;
  }

  li {
    list-style: none;
    width: 172px;
    height: 122px;
    background-color: red;
    border-radius: 2px;
  }
`;
