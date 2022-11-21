import React, { FunctionComponent, useState, useEffect } from "react";
import Dish from "../models/dish";
import DISHES from "../models/data-local";
import DishCard from "../components/dish-card";
import "./dish-list.css";

const DishList: FunctionComponent = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    setDishes(DISHES);
  }, []);

  return (
    <div>
      <h1 className="center">Menu</h1>
      <div className="boxDisplay">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default DishList;
