import React, { FunctionComponent, useState, useEffect } from "react";
import Dish from "./models/dish";
import DISH from "./models/data-local";
import DishList from "./pages/dish-list";

const App: FunctionComponent = () => {
  //règle n°1 : un hooks doit etre appeler à la racine d'un composant

  // initialisation de l'état du composant avec un tableau vide
  /* const [dishes, setDishes] = useState<Dish[]>([]);
  useEffect(() => {
    setDishes(DISH);
  }, []); // le table au vide en 2nd argument évite de déclancher le hook d'effet à chaque nouvel appel du composant*/

  return <DishList />;
};

export default App;
