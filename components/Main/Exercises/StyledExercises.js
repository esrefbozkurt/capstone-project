import styled from "styled-components";

export const StyledExercises = styled.div`
  display: flex;
  flex-direction: column;

  .header_searchbar {
    position: sticky;
    top: 0px;
    background-color: white;
  }

  ul {
    border-bottom: inset #354f52 1px;
    margin-bottom: 3.5rem;
    overflow: hidden;
  }
  li {
    padding: 0rem 1rem;
    list-style: none;
    background-color: transparent;
    color: #354f52;
    border-top: inset #354f52 1px;

    .favContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  h3 {
    font-size: 0.8rem;
    color: #354f52;
    text-align: left;
  }
`;

export const StyledExercisesHeader = styled.div`
  display: flex;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;
    text-transform: capitalize;
  }
  .backbutton {
    padding-left: 10px;
  }
`;
