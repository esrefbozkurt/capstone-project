import styled from "styled-components";

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin: 0 1rem 0.75rem 1rem;

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    background: white;
    outline: none;
    border-radius: 50%;
    opacity: 1;

    &:hover {
      cursor: pointer;
    }
  }
  .svg {
    position: relative;
    top: 1px;
  }

  .input {
    opacity: 1;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid black;
    background: white;
    color: #354f52;
    padding-left: 20px;
    outline: none;
    transition: width 0.4s ease-in-out;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      width: 100%;
      opacity: 1;
      cursor: text;
    }
  }
`;
