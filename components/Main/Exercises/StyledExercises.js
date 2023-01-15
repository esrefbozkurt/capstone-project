import styled from "styled-components";

export const StyledExercises = styled.div`
  display: flex;
  flex-direction: column;

  .header_searchbar {
    position: sticky;
    top: 0px;
    background: #ff5300;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  ul {
    margin-bottom: 3.5rem;
    overflow: hidden;
  }
  li {
    padding: 0rem 1rem;
    list-style: none;
    background-color: transparent;
    color: black;
    border-bottom: inset #354f52 1px;

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

    text-align: left;
  }
`;

export const StyledExercisesHeader = styled.div`
  display: flex;
  align-items: center;
  background: #ff5300;
  padding-top: 0.2rem;
  h2 {
    font-family: Lato-bold;
    display: flex;
    overflow-y: scroll;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .backbutton {
    margin: 0.2rem 0.5rem;
  }
`;

export const StyledFavouritesHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  background: #ff5300;
  padding: 0.5rem 0;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.3rem;
    margin-left: 0.6rem;
  }
`;
