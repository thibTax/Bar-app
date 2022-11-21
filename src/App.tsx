import React, { FunctionComponent, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dish from "./models/dish";
import DISH from "./models/data-local";
import DishList from "./pages/dish-list";
import NavBar from "./components/nav-bar";
import Inventaire from "./pages/inventaire";
import Exit from "./pages/exit";

const App: FunctionComponent = () => {
  //règle n°1 : un hooks doit etre appeler à la racine d'un composant

  // initialisation de l'état du composant avec un tableau vide
  /* const [dishes, setDishes] = useState<Dish[]>([]);
  useEffect(() => {
    setDishes(DISH);
  }, []); // le table au vide en 2nd argument évite de déclancher le hook d'effet à chaque nouvel appel du composant*/

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="commande" element={<DishList />} />
        <Route path="inventaire" element={<Inventaire />} />
        <Route path="exit" element={<Exit />} />
      </Routes>
    </div>
  );
};

export default App;
