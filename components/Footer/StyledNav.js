import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.div`
  display: flex;
  justify-content: space-around;

  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem;
  background: black;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  .active {
    background: grey;
    border-radius: 0.2rem;
    height: 36px;
  }
`;
