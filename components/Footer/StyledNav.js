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
  background: #e9ecef;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  filter: invert(100%);

  a:active {
    background-color: grey;
  }
`;
