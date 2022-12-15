import styled from "styled-components";

export const StyledSearchBar = styled.div`
  position: relative;
  margin: 1rem;

  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */

  span {
    position: relative;

    /* top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    border: 1px solid #354f52;
    transition: all 0.3s;
    z-index: 4;

    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 9px;
      right: 0;
      bottom: 0;
      left: 9px;
      width: 8px;
      height: 1px;
      background: black;
      transform: rotate(45deg);
      transition: all 0.5s;
    }
    &::after {
      content: "";
      position: relative;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #354f52;
      transition: all 0.5s;
    }
  }
  input {
    font-family: Lato;
    /* position: relative; */
    /* margin: auto; */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 95%;
    height: 40px;
    outline: black;
    border: black;

    background: #f8f9fa;
    color: #354f52;

    /* padding: 0 80px 0 20px; */
    border-radius: 30px;

    transition: all 0.8s;
    opacity: 0;
    z-index: 5;

    /* letter-spacing: 0.1em; */
    &:hover {
      cursor: pointer;
    }
    &:focus {
      /* width: 90%; */
      opacity: 1;
      cursor: text;
      margin: 20px;
    }
    &:focus ~ span {
      background: white;
      z-index: 6;
      &::before {
        top: 0;
        left: 0;
        width: 18px;
      }
      &::after {
        top: 0;
        left: 0;
        width: 18px;
        height: 1px;
        border: none;
        background: #354f52;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: #354f52;
      opacity: 0.5;
    }
  }
`;
