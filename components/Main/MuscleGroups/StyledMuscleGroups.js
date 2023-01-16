import styled from "styled-components";

export const StyledMuscleGroups = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 1rem;
    background-color: white;
    font-size: 1.5rem;
    position: sticky;
    top: 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3.5rem;
    align-items: center;
    overflow: hidden;
    padding-bottom: 1rem;

    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;
