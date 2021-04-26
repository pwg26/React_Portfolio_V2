import React from "react";
import ProjectCard from "../../components/ProjectCard";
import datas from "../../projects.json";
import Grid from "@material-ui/core/Grid";
import ProjectContext from "../../utils/context";
import Container from "@material-ui/core/Container";
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

function Portfolio() {
  const classes = useStyles();
  return (
    <Grid
      alignItems="center"
      justify="center"
      alignContent="center"
      container
      spacing={0}
      direction="row"
    >
      <Grid item xs={12}>
        <h1>Portfolio</h1>
      </Grid>

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
  );
}

export default Portfolio;
