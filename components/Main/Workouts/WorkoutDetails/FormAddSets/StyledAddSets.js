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
  width: 100%;
  justify-content: center;
  flex-direction: column;

  padding: 0.3rem 0;
  fieldset {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 0.3rem;
    border: 1px solid lightgray;
    justify-content: space-between;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.26);
    margin-bottom: 0.5rem;
  }
  label {
    text-align: center;
    margin: 0.3rem;
  }
  .setInput {
    font-size: 1rem;
    width: 2rem;
    border-radius: 0.3rem;
    margin: 0.3rem 0;
    padding: 0.3rem;
  }
  .add-set {
    background: transparent;
    border: none;
    margin-top: 3.5px;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
  img {
    background-color: lightgreen;
    border-radius: 0.3rem;
  }
`;
