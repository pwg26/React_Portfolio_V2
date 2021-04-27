import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  but: {
    textAlign: "center",
  },
  line: {
    lineHeight: "1.6",
  },

  content: {
    flex: "1 0 auto",
  },
}));

function TravelHome() {
  const classes = useStyles();
  return (
    <Container className={classes.line} maxWidth="md">
      <h1>Travel</h1>
      <Card xxc>
        <Grid container>
          <Grid item xs={6} align="center">
            <img
              src={process.env.PUBLIC_URL + "/images/lake.jpg"}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6} alignItems="center">
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                My Passion
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Being in historic, beuatiful and differnet places with no end
                point truly makes me feel alive. Back in 2018 I took a full gap
                year after graduating college to travel the world. It's been
                impossible to shake the travel bug ever since. This is a big
                reason why I took up coding in the first place order to work
                remotley and keep living the dream.
                <br />
                <br />
                <br />
                <br />
                Check out some of my adventures at:
              </Typography>

              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to="/sayulita"
                >
                  Sayulita
                </Button>
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to="/munich"
                >
                  Munich
                </Button>
              </CardActions>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default TravelHome;
