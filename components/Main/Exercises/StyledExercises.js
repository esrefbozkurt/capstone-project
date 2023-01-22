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

    overflow: hidden;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 1s ease;
    transition: max-height 1s ease;

    .favContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
  }
  .addContainer {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    height: 2.5rem;
    align-items: center;
  }

  .headerAddExercise {
    font-size: 1rem;
  }

  .addedContainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    height: 2.5rem;
    align-items: center;
    background-color: lightgreen;
  }
  .expanded {
    max-height: 100rem;
  }

  .collapsed {
    max-height: 2.5rem;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;

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
  justify-content: center;
  h2 {
    display: flex;
    overflow-y: scroll;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: white;
    padding: 0.8rem 0;
  }
  .backbutton {
    position: absolute;
    left: 0.4rem;
    top: 0.6rem;
    background: transparent;
    border: none;
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
    display: flex;
    padding: 0.5rem 0.5rem;
    color: white;
    overflow-y: scroll;
    font-size: 1.1rem;
    margin-left: 0.6rem;
    text-transform: uppercase;
  }
`;
