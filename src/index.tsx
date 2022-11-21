import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DishList from "./pages/dish-list";
import Inventaire from "./pages/inventaire";
import Exit from "./pages/exit";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="commande" element={<DishList />} />
        <Route path="inventaire" element={<Inventaire />} />
        <Route path="exit" element={<Exit />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
