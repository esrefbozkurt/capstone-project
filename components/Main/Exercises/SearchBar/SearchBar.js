import styled from "styled-components";

export default function SearchBar({ onChange }) {
  function handleSearchClick() {
    if (!document.getElementById("search-bar").focus()) {
      document.getElementById("search-bar").blur();
    }
  }

  return (
<<<<<<< HEAD
    <StyledSearchBar>
      <span onClick={handleSearchClick}></span>
=======
    <StyledSearchBar role="search">
>>>>>>> origin/feature/searchBar
      <input
        type="text"
        id="search-bar"
        placeholder="Search..."
        onChange={onChange}
      />
    </StyledSearchBar>
  );
}
