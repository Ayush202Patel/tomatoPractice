import React, { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_Key = "0c73ae803c9b408d8e2bf36e4c020982";
const Search = () => {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function getFoodData() {
      const result = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`);
      const data = await result.json();
      console.log(data.results);
    }
    getFoodData();
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
