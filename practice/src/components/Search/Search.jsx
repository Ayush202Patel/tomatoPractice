import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    function demo() {
      console.log("Demo Function Executed");
    }
    demo();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        className="search-box"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
