import * as React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { List, ListItem, ListItemText } from "@material-ui/core";

const NaveBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button>Home</Button>
        <Button>About</Button>
      </Toolbar>
    </AppBar>
  );
};
export default NaveBar;
