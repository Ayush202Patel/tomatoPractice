import React from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { food_list } from "../../assets/assets";
const FoodDisplay = () => {
  return (
    <div className="food-display">
      {food_list.map((item) => (
        <FoodItem item={item} key={item._id} />
      ))}
    </div>
  );
};

export default FoodDisplay;
