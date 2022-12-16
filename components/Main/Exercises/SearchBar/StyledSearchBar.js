import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0 1rem 0.75rem 1rem;

  input {
    opacity: 0;
    font-family: Lato;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 40px;
    height: 40px;
    border: none;
    background: #f8f9fa;
    color: #354f52;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    transition: all 0.5s;

    z-index: 5;
    border: 1px solid #354f52;
    outline: none;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 100%;
      opacity: 1;
      cursor: text;
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
  span {
    position: relative;
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    border: 1px solid #354f52;
    transition: all 0.1s;
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
      position: absolute;
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
`;
