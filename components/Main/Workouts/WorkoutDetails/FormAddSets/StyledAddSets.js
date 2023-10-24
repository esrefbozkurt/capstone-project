import styled from "styled-components";

export const StyledAddSets = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    padding: 0.4rem;
    overflow-y: scroll;
    font-size: 1rem;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    font-size: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem 0;
  width: 100%;

  fieldset {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid lightgray;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.26);
  }
  label {
    margin: 0.3rem;
    text-align: center;
  }
  .setInput {
    margin: 0.3rem 0;
    width: 2rem;
    padding: 0.3rem;
    border-radius: 0.3rem;
    font-size: 1rem;
  }
  .add-set {
    margin-top: 3.5px;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background: transparent;
    border: none;
  }
  img {
    background-color: lightgreen;
    border-radius: 0.3rem;
  }
`;
