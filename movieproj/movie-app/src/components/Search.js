import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search({ searchInput, search }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a Movie..."
        className="search"
        onChange={searchInput}
		onKeyDown={search}
      />
      <FontAwesomeIcon icon={faSearch}   onClick={search}className="search-icon" style={{ fontSize: "2.2rem" }} />
    </div>
  );
}

export default Search;
