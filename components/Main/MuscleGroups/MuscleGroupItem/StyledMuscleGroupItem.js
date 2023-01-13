import styled from "styled-components";

export const StyledMuscleGroupItem = styled.div`
  li {
    cursor: pointer;
    list-style: none;
    width: 162px;
    height: 112px;
    color: rgba(53, 79, 82, 0.76);
    border-radius: 10px;
    border: 1px solid lightgray;
    margin: 8px;
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
  }

  h3 {
    font-family: Lato-bold;
    display: flex;
    color: #354f52;
    background-color: transparent;
    text-decoration: none;
    font-size: 1rem;
    justify-content: center;
  }
`;
