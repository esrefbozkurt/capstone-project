import styled from "styled-components";

export const StyledExercises = styled.div`
  display: flex;
  flex-direction: column;

  .header_searchbar {
    position: sticky;
    top: 0px;
    background: black;
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
    background-color: #f8f9fa;
    color: black;
    margin: 0.5rem 0.3rem;
    border-radius: 0.2rem;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.26);
    text-decoration: none;

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
    color: black;
  }

  h3 {
    font-size: 0.8rem;

    text-align: left;
  }
`;

export const StyledExercisesHeader = styled.div`
  display: flex;
  align-items: center;
  background: black;
  padding-top: 0.2rem;
  justify-content: space-between;
  h2 {
    font-family: Lato-bold;
    display: flex;
    overflow-y: scroll;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    margin-right: 6.5rem;
  }
  .backbutton {
    margin: 0.2rem 0.5rem;
  }
`;

export const StyledFavouritesHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0px;
  background: black;
  padding: 0.5rem 0;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  justify-content: center;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: white;
    overflow-y: scroll;
    font-size: 1.1rem;
    margin-left: 0.6rem;
    text-transform: uppercase;
  }
`;
