import React from "react";
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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

function Sayulita(props) {
  const classes = useStyles();
  var items = [
    {
      img: "/images/say-1.jpg",
    },
    {
      img: "/images/say-2.jpg",
    },
    {
      img: "/images/say-3.jpg",
    },
  ];

  return (
    <Container className={classes.line} alignContent="center" maxWidth="md">
      <Grid
        alignItems="center"
        justify="center"
        alignContent="center"
        container
        spacing={0}
      >
        <Grid item xs={8}>
          <h1>Sayulita</h1>
          <p>
            By far and away my favorite place in Mexico. Located on the pacific
            coast of Jalisco, this beautiful hippie beach provides a great
            balance of unique traquility and vaction vibes. Often overlooked for
            its neighbor Puerto Vallerto, Sayulita retains much of it's
            authenticity because it is not a tourist trap. I dont think I saw
            one high-rise resort. Everyone I met during my stay at one of the
            local hostals seemed to spend weeks on end instead of just passing
            through. I myself extended my initial one week trip to three!
          </p>
          <Carousel>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
}

function Item(props) {
  return (
    <img
      src={process.env.PUBLIC_URL + props.item.img}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}

export default Sayulita;
