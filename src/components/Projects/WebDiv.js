import React from "react";
import { Carousel } from "react-responsive-carousel";
//files
import WebProjects from "./WebProjects";

//Scss
import "./Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const WebDiv = () => {
  return WebProjects.map((item, index) => {
    return (
      <div className="proj-cards card-full-stack" key={`Full ${index}`}>
        <h3>{item.title}</h3>
        <Carousel autoPlay interval="4000" infiniteLoop>
          <div>
            <img src={item.image} alt={item.title} />
            <a href={item.link} className="legend" target="blank">
              View Project
            </a>
          </div>
          <div>
            <img src={item.image2} alt={item.title} />
            <a href={item.link} className="legend" target="blank">
              View Project
            </a>
          </div>
          <div>
            <img src={item.image3} alt={item.title} />
            <a href={item.link} className="legend" target="blank">
              View Project
            </a>
          </div>
        </Carousel>
        {/* <p>{item.description}</p> */}
      </div>
    );
  });
};

export default WebDiv;
