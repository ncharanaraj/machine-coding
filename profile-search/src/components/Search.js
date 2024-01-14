import React from "react";

const Search = ({ searchText, setSearchText, getUserInfo }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getUserInfo(searchText);
        }}
      >
        <input
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
