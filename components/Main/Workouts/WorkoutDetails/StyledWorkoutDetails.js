import styled from "styled-components";

export const StyledWorkoutDetails = styled.div`
  .addButton {
    height: 3.2rem;
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    /* border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem; */
    border-radius: 0.5rem;
    border: none;
    background: #99d98c;
    box-shadow: inset 0px 0px 0px 3px rgba(0, 0, 0, 0.1);

    &:active {
      transform: scale(97%);
      transition: all 200ms ease;
    }
  }
`;

export const StyledWorkoutDetailsHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: black;
  padding: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  .backbutton {
    margin-left: 0.6rem;
    align-self: center;
  }

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    overflow-y: scroll;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: white;
  }

  .checkmark {
    margin-right: 0.6rem;
  }

  .checkmarkButton {
    background: transparent;
    border: none;
  }
`;
