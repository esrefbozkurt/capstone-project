import styled from "styled-components";

export const StyledWorkouts = styled.div``;

export const StyledWorkoutsHeader = styled.div`
  display: flex;
  background-color: white;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 0px;
  border-bottom: inset #354f52 1px;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;

    margin-left: 8px;
    text-decoration: underline;
  }
`;
