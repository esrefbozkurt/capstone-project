import { useRef } from "react";
import { StyledSearchBar } from "./StyledSearchBar";
import { useState } from "react";
import Image from "next/image";

export default function SearchBar({ onChange, setSearchTerm }) {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);

  function handleClick() {
    if (!isFocused) {
      inputRef?.current.focus();
    } else {
      inputRef?.current.blur();
      setSearchTerm("");
      inputRef.current.value = "";
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
    </StyledSearchBar>
  );
}
