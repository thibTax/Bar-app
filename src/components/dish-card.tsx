import React, { FunctionComponent, useState } from "react";
import Dish from "../models/dish";
import "./dish-card.css";
import Box from "@mui/material/Box";
import { color } from "@mui/system";
// typescript nous permet de controler l'entrée 'props' et assurer le bon typage
type Props = {
  dish: Dish;
};

const DishCard: FunctionComponent<Props> = ({ dish }) => {
  return (
    <Box
      sx={{ minWidth: 120 }}
      className="horizontal"
      style={{ backgroundColor: dish.color }}
    >
      <div>
        <img className="rond" src={dish.picture} height="100%" width="100%" />
      </div>
      <h3>{dish.name}</h3>
      <h5>{dish.price} €</h5>
    </Box>
  );
};

export default DishCard;
