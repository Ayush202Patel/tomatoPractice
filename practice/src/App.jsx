import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <div className="App">
      <Search />
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
