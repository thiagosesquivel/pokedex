import React from "react";
import { SearchInput } from "./styles";

function Search({ onPress }) {
  return (
    <>
      <SearchInput
        onKeyUpCapture={(event) => onPress(event)}
        placeholder="Pesquisar.."
      />
    </>
  );
}

export default Search;
