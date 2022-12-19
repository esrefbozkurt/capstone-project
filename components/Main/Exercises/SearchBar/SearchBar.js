import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { StyledSearchBar } from "./StyledSearchBar";
import { useState } from "react";
import Image from "next/image";

export default function SearchBar({ onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);

  function handleClick() {
    if (!isFocused) {
      inputRef?.current.focus();
      console.log("focus");
    } else {
      inputRef?.current.blur();
      console.log("blur");
    }
    setIsFocused(!isFocused);
  }

  return (
    <StyledSearchBar role="search">
      <button type="button" onClick={handleClick}>
        {!isFocused ? (
          <Image
            className="svg"
            src="/search.svg"
            width={22}
            height={22}
            alt="progress icon"
          />
        ) : (
          <Image
            className="svg"
            src="/close.svg"
            width={24}
            height={24}
            alt="progress icon"
          />
        )}
      </button>

      <input
        ref={inputRef}
        type="text"
        id="search-bar"
        placeholder="Search..."
        onChange={onChange}
        className="input"
      />
      {/* <button
        type="button"
        className="clear"
        onClick={handleSearchClick}
      ></button> */}
    </StyledSearchBar>
  );
}
