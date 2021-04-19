import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#7b1fa2",
    },
    secondary: {
      main: "#00e676",
    },
  },
});

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
}));

function About() {
  const classes = useStyles();
  return (
    <Container className={classes.line} maxWidth="md">
      <h1>About Me</h1>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12}>
          <p>
            My name is Pierce Gladfelter and I'm a young adult living in Denver
            Colorado. Originally from NJ, I graduated from the University of
            Rutgers with a Degree in Environmental Science before moving out
            west 2 years ago where i've worked as an environmnetal consultant.
            After being laid of from COVID in july 2020 I took the opportunity
            to reavaluate my career, and explore other options. After taking an
            online course with codecademy, I found I really liked coding, and
            can now see myself in a more tech oriented position. With the
            newfound motivation and excitement I enrolled full-time in the
            University of Denvers coding boot camp where I hope to learn the
            skills nessassary to make this change I've always wanted.
          </p>
        </Grid>

        <Grid item xs={6}>
          <img
            src={process.env.PUBLIC_URL + "/images/me.jpg"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={6}>
          <p>
            Aside from this big change i'm about to make in my carrer, I've
            lived a pretty life great so far. I love playing sports, fishing,
            hiking, skiing, playing video games, and spending quality time with
            friends and family. Of all these my biggest passion is traveling.
            I've been to places all over the workd and I think it is one of the
            most novel experiences a person can have.
          </p>
        </Grid>

        <Grid item xs={12} className={classes.but}>
          <p>
            Check out my Portfolio and Resume or have a peak at some of the
            places I've traveled to on my adventures!
          </p>
          <div className={classes.root}>
            <ThemeProvider theme={outerTheme}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
                Travel
              </Button>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
                Portfolio
              </Button>
            </ThemeProvider>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
