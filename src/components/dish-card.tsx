import React, { FunctionComponent, useState } from "react";
import Dish from "../models/dish";
import "./dish-card.css";
import Box from "@mui/material/Box";
import { color } from "@mui/system";
// typescript nous permet de controler l'entrée 'props' et assurer le bon typage
type Props = {
  dish: Dish;
  borderColored?: string;
};

const DishCard: FunctionComponent<Props> = ({
  dish,
  borderColored = "#f5F5F5",
}) => {
  const [color, setColor] = useState<string>();

  // fonction appelé lorsque l'utilisateur passe la souris dessus
  const showBorder = () => {
    setColor("black");
    console.log("onmouseenter");
  };

  const hideBorder = () => {
    setColor(borderColored);
  };

  return (
    <Box
      sx={{ minWidth: 120 }}
      className="horizontal"
      style={{ borderColor: color, backgroundColor: dish.color }}
      onMouseEnter={showBorder}
      onMouseLeave={hideBorder}
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
