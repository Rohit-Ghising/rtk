import React from "react";

const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <form>
        <input type="text" placeholder="Search  anything ...." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
