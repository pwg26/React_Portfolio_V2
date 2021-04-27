import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ProjectContext from "../../utils/context";
import Box from "@material-ui/core/Box";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    maxHeight: 350,
    spacing: 2,
    postion: "inline-block",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <ProjectContext.Consumer>
      {({ image, title, description, giturl, appurl }) => (
        <Box m={1} alignItems="center" justifyContent="center">
          <Card className={classes.root} style={{ display: "inline-block" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={process.env.PUBLIC_URL + image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ textAlign: "center" }}>
              <Button size="small" color="primary" href={giturl}>
                GitHub Repo
              </Button>
              <Button size="small" color="primary" href={appurl}>
                Deployed Application
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </ProjectContext.Consumer>
  );
}
