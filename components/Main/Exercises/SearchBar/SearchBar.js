import styled from "styled-components";

export default function SearchBar({ onChange }) {
  function handleSearchClick() {
    if (!document.getElementById("search-bar").focus()) {
      document.getElementById("search-bar").blur();
    }
  }

  return (
    <StyledSearchBar>
      <span onClick={handleSearchClick}></span>
      <input
        type="text"
        id="search-bar"
        placeholder="Search..."
        onChange={onChange}
      />
    </StyledSearchBar>
  );
}
