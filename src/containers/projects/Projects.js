import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  if (!openSource.display) {
    return null;
  }

  return (
    <section
      className="main"
      id="opensource"
      aria-labelledby="opensource-title"
    >
      <h1 className="project-title" id="opensource-title">
        Open Source Projects
      </h1>
      <p className="subTitle project-intro">
        A curated selection of public code. Commercial work is described below
        where source code cannot be shared.
      </p>
      <div className="repo-cards-div-main">
        {openSource.projects.map(project => (
          <a
            className={
              isDark ? "opensource-card dark-card-mode" : "opensource-card"
            }
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.url}
          >
            <span className="opensource-language">{project.language}</span>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <span className="opensource-link">View repository →</span>
          </a>
        ))}
      </div>
      <Button
        text="View GitHub profile"
        className="project-button"
        href={socialMediaLinks.github}
        newTab={true}
      />
    </section>
  );
}
