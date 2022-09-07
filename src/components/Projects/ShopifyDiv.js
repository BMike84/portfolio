import React from "react";
import { Carousel } from "react-responsive-carousel";
//files
import ShopifyProjects from "./ShopifyProjects";

//Scss
import "./Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ShopifyDiv = () => {
  return ShopifyProjects.map((item, index) => {
    return (
      <div className="proj-cards card-shopify" key={`Shopify ${index}`}>
        <h3>{item.title}</h3>
        <Carousel autoPlay interval="4000" infiniteLoop>
          <div>
            <img alt={item.title} src={item.image} />
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

export default ShopifyDiv;
