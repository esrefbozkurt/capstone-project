import styled from "styled-components";

export const StyledWorkouts = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    margin-bottom: 3.5rem;
    overflow: hidden;
  }
  li {
    padding: 0rem 1rem;
    list-style: none;
    background-color: #f8f9fa;
    color: black;
    margin: 0.5rem 0.3rem;
    border-radius: 0.2rem;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.26);
  }

  .workoutContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  h3 {
    font-size: 0.8rem;
    padding: 0.75rem 0.5rem;
    text-align: left;
  }
`;

export const StyledWorkoutsHeader = styled.div`
  display: flex;
  background: black;
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
    font-size: 1.1rem;
    margin-left: 6.5rem;
    text-transform: uppercase;
    color: white;
  }
  img {
    display: flex;
    border: none;
    margin-right: 0.6rem;
  }
`;
