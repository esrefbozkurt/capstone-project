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

  /* align-items: center;
  justify-content: center;
  background-color: white;
  align-items: center;
  /* border-bottom-left-radius: 0.5rem;
border-bottom-right-radius: 0.5rem;
padding-bottom: 0.5rem; */

  /* border: black;
  border-radius: 0.3rem;

  width: 100%; */
`;

export const StyledForm = styled.form`
  display: flex;
  /* position: fixed;
  bottom: 0; */
  width: 100%;
  justify-content: center;
  flex-direction: column;

  padding: 0.5rem;
  fieldset {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 0.7rem;
    border: 1px solid lightgray;
    padding: 0.3rem;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.26);
  }
  label {
    text-align: center;
    margin: 0.3rem;
  }
  .setInput {
    font-size: 1rem;
    width: 2.5rem;
    border-radius: 0.3rem;

    padding: 0.5rem;
  }
`;
