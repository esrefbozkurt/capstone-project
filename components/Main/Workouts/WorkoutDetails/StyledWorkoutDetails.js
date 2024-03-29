import styled from "styled-components";

export const StyledWorkoutDetails = styled.div`
  display: flex;
  flex-direction: column;
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
    .addContainer {
      display: flex;
      width: 100%;
      justify-content: space-between;
      height: 2.5rem;
      align-items: center;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .addButton {
    display: flex;
    height: 3.2rem;
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: none;
    background: lightgreen;
    box-shadow: inset 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    color: black;

    &:active {
      transform: scale(97%);
      transition: all 200ms ease;
    }
  }

  h3 {
    font-size: 0.8rem;

    text-align: left;
  }
  a {
    text-decoration: none;
  }
`;

export const StyledWorkoutDetailsHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: black;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  .backbutton {
    position: absolute;
    left: 0.4rem;
    top: 0.6rem;
    background: transparent;
    border: none;
  }

  h2 {
    display: flex;
    padding: 0.5rem 0.5rem;
    overflow-y: scroll;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: white;
  }
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: flex-end;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledDate = styled.p`
  font-size: 0.8rem;
`;
