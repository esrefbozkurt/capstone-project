import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  padding: 0.5rem 0;
  background: black;
  justify-content: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  font-size: 1.3rem;
  align-items: center;

  h1 {
    font-family: Lato-bold;
    display: flex;
    padding: 0.5rem 0.5rem;
    color: white;
    overflow-y: scroll;
    font-size: 1.3rem;
  }
  img {
    align-self: center;
  }
`;
