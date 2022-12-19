import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";

export const StyledFav = styled.div`
  @media (prefers-reduced-motion: reduce) {
    .element {
      animation: none;
      transition: none;
    }
  }

  /* div {
  transition: <property> <duration> <timing-function> <delay>;
} */

  transition: all 0.2s;
  padding: 12px;
  margin-left: ${(props) => (props.active ? "64px" : "24px")};
  background: ${(props) => (props.active ? "#333" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#f2f2f2" : "#333")};

  @keyframes margin-left {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    30% {
      opacity: 1;
      transform: scale(1.2);
    }
    50% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
    }
  }
`;
