import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(5),
    },
  },
  but: {
    textAlign: "center",
  },
  line: {
    lineHeight: "1.6",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.line} maxWidth="md">
      <h1>I'm Pierce Gladfelter</h1>
      <Grid alignItems="center" className={classes.line}>
        <Grid item xs={7}>
          <p>
            Come with me on this quest of self discovery through the world of
            programming! hopfully one day I can use these skills to make an
            impact on the world!
          </p>
          <Link to="about">
            Get to Know Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up-right-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803L10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
            </svg>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
