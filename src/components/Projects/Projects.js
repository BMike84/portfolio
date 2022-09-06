import React from "react";
import ProjectData from "./ProjectData";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <section id="projects">
      <h1>
        Some of my <span>projects</span>
      </h1>
      <div className="cards">
        {ProjectData.map((item) => {
          return (
            <div className="proj-cards">
              <img src={item.image}></img>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} target="blank">
                View Project
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-share" />
                </span>
              </a>
            </div>
          );
        })}
      </div>
      {/* <button className="view-all">View All Projects</button> */}
    </section>
  );
};

export default Projects;
