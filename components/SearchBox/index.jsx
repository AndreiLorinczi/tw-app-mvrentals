import React from "react";
import SearchIcon from "../SearchIcon";
import "./SearchBox.css";

function SearchBox(props) {
  const { typeToSearchForAMovie } = props;

  return (
    <div className="search-box">
      <SearchIcon />
      <div className="type-to-search-for-a-movie">{typeToSearchForAMovie}</div>
    </div>
  );
}

export default SearchBox;
