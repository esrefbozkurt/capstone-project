import styled from "styled-components";

export const SytledMuscleGroups = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
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
  h2 {
    font-family: Lato-bold;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 1rem;
    color: #354f52;
    background-color: white;
    font-size: 28px;
    position: sticky;
    top: 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 7.5rem;
    align-items: center;
    overflow: hidden;
    padding-bottom: 30px;

    @media (max-width: 600px) {
      justify-content: center;
    }
  }
`;
