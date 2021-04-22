import React from "react";

const ProjectContext = React.createContext({
  image: "",
  title: "",
  description: "",
  giturl: "",
  appurl: "",
});

export default ProjectContext;
