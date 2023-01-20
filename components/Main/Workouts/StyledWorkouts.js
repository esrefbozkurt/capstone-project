import styled from "styled-components";

export const StyledWorkouts = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    margin-bottom: 3.5rem;
    overflow: hidden;
  }
  li {
    padding: 1rem 1rem;
    list-style: none;
    background-color: #f8f9fa;
    color: black;
    margin: 0.5rem 0.3rem;
    border-radius: 0.2rem;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.26);

    &:active {
      transform: scale(97%);
      transition: all 200ms ease;
    }
  }

  .workoutContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 0.9rem;
    padding: 0.75rem 0.5rem;
    text-align: left;
  }
  a {
    text-decoration: none;
  }
`;

export const StyledWorkoutsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: black;
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  justify-content: space-between;
  z-index: 1;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  overflow-y: hidden;
  transition: max-height 800ms ease;

  /* .radiusInactive {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  } */

  .workoutsHeaderContainer {
    display: flex;
    margin-bottom: 8px;
    justify-content: center;
  }

  .add-workout {
    position: absolute;
    right: 8px;
    height: 32px;
    width: 32px;
  }

  /* .expanded {
    max-height: 200px;
  }

  .collapsed {
    max-height: 50px;
  } */

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    overflow-y: scroll;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: white;
  }
  img {
    display: flex;
    border: none;
    margin-right: 0.6rem;
  }

  button {
    background: transparent;
    border: none;
  }
  .delete-workout {
    fill: black;
  }
`;
