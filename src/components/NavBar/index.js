import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  btn1: {
    backgroundColor: "#301b3f",
    color: "#FFFFFF",
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.btn1}>
        <Button
          variant="contained"
          className={classes.btn1}
          component={Link}
          to="/home"
        >
          Home
        </Button>

        <Button
          variant="contained"
          className={classes.btn1}
          component={Link}
          to="/about"
        >
          About
        </Button>

        <Button
          variant="contained"
          className={classes.btn1}
          component={Link}
          to="/portfolio"
        >
          Portfolio
        </Button>
        <Button
          variant="contained"
          className={classes.btn1}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Travel
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/travelhome">
            Travel Home
          </MenuItem>
          <MenuItem component={Link} to="/sayulita">
            Sayulita
          </MenuItem>
          <MenuItem component={Link} to="/munich">
            Munich
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
