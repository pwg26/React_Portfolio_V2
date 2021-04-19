import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuIcon />

        <Button component={Link} to="/home">
          Home
        </Button>

        <Button component={Link} to="/about">
          About
        </Button>
        <Button component={Link} to="/portfolio">
          Portfolio
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
