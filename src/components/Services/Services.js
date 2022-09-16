import React from "react";
import { Element } from "react-scroll";

//files
import ServiceData from "./ServiceData";

//Scss
import "./Services.scss";

const Services = () => {
  return (
    <Element id="services" name="services">
      <div className="service-header">
        <h1>
          Check out my <span>services</span>
        </h1>
        <p>
          All services come with 100% money back gurantee if your not satisfied
        </p>
      </div>
      <div className="cards">
        {ServiceData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} />
              <h4 className="service-hover">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default Services;
