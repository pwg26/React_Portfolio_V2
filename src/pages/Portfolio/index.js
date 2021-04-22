import React from "react";
import ProjectCard from "../../components/ProjectCard";
import faggots from "../../projects.json";
import ProjectContext from "../../utils/context";

function Portfolio() {
  return (
    <div>
      {faggots.map((faggot) => {
        return (
          <ProjectContext.Provider
            value={{
              image: faggot.image,
              title: faggot.title,
              description: faggot.description,
              giturl: faggot.giturl,
              appurl: faggot.appurl,
            }}
          >
            <ProjectCard />
          </ProjectContext.Provider>
        );
      })}
    </div>
  );
}

export default Portfolio;
