import { StyledSearchBar } from "./StyledSearchBar";

export default function SearchBar({ onChange }) {
  function handleSearchClick() {
    if (!document.getElementById("search-bar").focus()) {
      document.getElementById("search-bar").blur();
    }
  }

  // entfokusieren mit usestate
  return (
    <StyledSearchBar>
      <input
        type="text"
        id="search-bar"
        placeholder="Search..."
        onChange={onChange}
      />
      <span onClick={handleSearchClick}></span>
    </StyledSearchBar>
  );
}
