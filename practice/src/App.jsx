import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import FoodItem from "./components/FoodItem/FoodItem";

const App = () => {
  return (
    <div className="App">
      <Search />
      <Navbar />
      <Header />
      <FoodItem />
    </div>
  );
};

export default App;
