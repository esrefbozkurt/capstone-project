import styled from "styled-components";

export const StyledWorkouts = styled.div``;

export const StyledWorkoutsHeader = styled.div`
  display: flex;
  background: #ff5300;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    overflow-y: scroll;
    font-size: 1.3rem;
    margin-left: 0.6rem;
  }
  img {
    display: flex;
    border: none;
    margin-right: 0.6rem;
  }
`;
