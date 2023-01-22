import styled from "styled-components";

export const StyledFormSets = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  align-items: center;
  /* border-bottom-left-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
padding-bottom: 0.5rem; */

  border: black;
  border-radius: 0.3rem;

  width: 100%;
`;

export const StyledForm = styled.fieldset`
  .set-input {
    display: flex;
    padding: 0.4rem 0.4rem 0.4rem 0;
    background-color: black;
    font-size: 1.1rem;
    /* border: black solid 1px; */
    border-radius: 0.5rem;
    color: white;
    padding: 0.4rem;
  }
  .addButton {
    height: 2rem;
    width: 100%;
    overflow: hidden;

    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    background: lightgreen;
    /* box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1); */
    justify-content: center;
    align-items: center;
    color: black;

    &:active {
      transform: scale(97%);
      transition: all 200ms ease;
    }
  }
`;
