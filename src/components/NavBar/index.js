import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#00e676",
      contrastText: "#fafafa",
    },
  },
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={outerTheme}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/home">
            Home
          </Button>

          <Button component={Link} to="/about">
            About
          </Button>

          <Button component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button
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
    </ThemeProvider>
  );
};
export default NavBar;
