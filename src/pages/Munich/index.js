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

function Munich(props) {
  const classes = useStyles();
  var items = [
    {
      img: "/images/mun-1.jpg",
    },
    {
      img: "/images/mun-2.jpg",
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
          <h1>Munich</h1>
          <p>
            Boy do the bavarian know how to have a good time! I know I did!
            Despite Munich haveing the reputation for being more posh than
            Berlin, many forget that this is where Octoberfest takes place each
            year. When I wasnt drinking beer out of steins as big as my head, I
            enjoyed a tour around the BMW factory and climed a mountain in the
            nearby Alps. It was also convient that my German buddy I stayed in
            touch with for studying abroad in Australia gave me the read carpet
            treatment letting me crash on his couch.
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

export default Munich;
