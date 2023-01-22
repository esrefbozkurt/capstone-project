import styled from "styled-components";

export const StyledMuscleGroupItem = styled.div`
  li {
    cursor: pointer;
    list-style: none;
    width: 162px;
    height: 112px;
    color: black;
    border-radius: 0.7rem;
    border: 1px solid lightgray;
    margin: 0.5rem;
    display: flex;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.26);
    flex-direction: column;

    &:active {
      transform: scale(97%);
      transition: all 200ms ease;
    }
  }

  img {
    align-self: center;
    outline: none;
    background: transparent;
  }

  h3 {
    display: flex;
    text-transform: capitalize;
    background-color: #f8f9fa;
    text-decoration: none;
    font-size: 1rem;
    justify-content: center;
    padding: 0.3rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  a {
    text-decoration: none;
  }
`;
