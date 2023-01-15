import styled from "styled-components";

export const StyledWorkouts = styled.div``;

export const StyledWorkoutsHeader = styled.div`
  display: flex;
  background-color: white;
  padding: 0.5rem 0;
  position: sticky;
  top: 0px;
  border-bottom: inset #354f52 1px;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: #354f52;
    background-color: transparent;
    overflow-y: scroll;
    font-size: 1.25rem;

    margin-left: 8px;
    text-decoration: underline;
  }
  img {
    /* height: 40px;
    width: 30px; */
    display: flex;

    background: transparent;
    border: none;
    margin-right: 15px;
  }
`;
