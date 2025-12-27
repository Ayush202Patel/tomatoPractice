import React from "react";
import { assets, food_list } from "../../assets/assets";

const FoodItem = ({ item, itemId }) => {
  return (
    <div className="food-item">
      <div>
        <img src={item.image} alt="" />
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
