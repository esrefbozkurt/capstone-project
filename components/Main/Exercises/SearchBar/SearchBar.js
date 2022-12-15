import { StyledSearchBar } from "./StyledSearchBar";

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search..." />
      <span></span>
    </StyledSearchBar>
  );
}
