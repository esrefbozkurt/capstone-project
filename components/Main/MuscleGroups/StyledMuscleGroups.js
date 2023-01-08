import styled from "styled-components";

export const SytledMuscleGroups = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 1rem;
    color: #354f52;
    background-color: white;
    font-size: 28px;
    position: sticky;
    top: 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 7.5rem;
    align-items: center;
    overflow: hidden;
    padding-bottom: 30px;

    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;
