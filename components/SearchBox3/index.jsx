import React from "react";
import SearchIcon from "../SearchIcon";
import "./SearchBox3.css";

function SearchBox3(props) {
  const { articleNameOrKeywords } = props;

  return (
    <div className="search-box-1">
      <SearchIcon />
      <div className="article-name-or-keywords poppins-medium-black-20px">{articleNameOrKeywords}</div>
    </div>
  );
}

export default SearchBox3;
