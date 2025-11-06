import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import FoodDisplay from "./components/FoodDisplay/FoodDisplay";
const App = () => {
  return (
    <div className="App">
      <Search />
      <Navbar />
      <Header />
      <FoodDisplay />
    </div>
  );
};

export default App;
