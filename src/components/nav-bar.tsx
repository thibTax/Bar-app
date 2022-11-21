import React, { FunctionComponent, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import colorFormat from "../headers/color-format";
import DishList from "../pages/dish-list";
import { ExitToApp, RestaurantMenu } from "@mui/icons-material";

const NavBar: FunctionComponent = () => {
  /* <nav>
      <Link to="/"> Accueil</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/exit">Exit</Link>
    </nav> */
  const [namePage, setNamePage] = useState("Commande");

  const changeNamePage = (value: string) => {
    switch (value) {
      case "commande":
        setNamePage(value);
        break;
      case "inventaire":
        setNamePage(value);
        break;
      default:
        setNamePage("commande");
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: colorFormat("primary"), borderRadius: 8 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/commande" style={{ color: colorFormat("light") }}>
              <RestaurantMenu />
            </Link>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/inventaire" style={{ color: colorFormat("light") }}>
              <ListAltIcon />
            </Link>
          </IconButton>

          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {namePage}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {" "}
            <Avatar src="/broken-image.jpg" />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/exit" style={{ color: colorFormat("light") }}>
              <ExitToApp />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
