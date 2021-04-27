import React from "react";
import ProjectCard from "../../components/ProjectCard";
import datas from "../../projects.json";
import Grid from "@material-ui/core/Grid";
import ProjectContext from "../../utils/context";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import * as DiIcons from "react-icons/di";
import { colors } from "@material-ui/core";

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

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.line} justify="center" maxWidth="md">
        <h1>Portfolio</h1>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Languanges
        </h3>
        <div
          style={{
            display: "table",
            margin: "auto",
            verticalAlign: "middle",
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "5px 5px 5px 5px",

            fontSize: "45px",
          }}
        >
          <DiIcons.DiReact />
          <DiIcons.DiNodejsSmall />
          <DiIcons.DiJavascript1 />
          <DiIcons.DiPython />
          <DiIcons.DiMongodb />
          <DiIcons.DiMysql />
        </div>

        <h3 style={{ textAlign: "center" }}>Projects</h3>
        <Grid
          alignItems="center"
          justify="center"
          alignContent="center"
          container
          spacing={0}
          direction="row"
        >
          {datas.map((data) => {
            return (
              <Grid item xs={4}>
                <ProjectContext.Provider
                  value={{
                    image: data.image,
                    title: data.title,
                    description: data.description,
                    giturl: data.giturl,
                    appurl: data.appurl,
                  }}
                >
                  <ProjectCard />
                </ProjectContext.Provider>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;
