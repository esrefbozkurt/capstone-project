import styled from "styled-components";

export const StyledMuscleGroupItem = styled.div`
  li {
    cursor: pointer;
    list-style: none;
    width: 162px;
    height: 112px;
    color: rgba(53, 79, 82, 0.76);
    /* font-size: 20px; */
    border-radius: 10px;
    border: 1px solid lightgray;
    margin: 8px;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.26);
    flex-direction: column;
    /* border: solid 1px red; */

    &:active {
      transform: scale(97%);
      transition: all 200ms ease;
    }
  }

  img {
    align-self: center;
    outline: none;
    /* border: solid 1px red; */
  }

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0;
    /* padding: 0.5rem 1rem; */
    color: #354f52;
    background-color: transparent;
    /* border: solid 1px red; */
    font-size: 1.1rem;
  }
`;
