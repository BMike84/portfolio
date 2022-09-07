import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Carousel } from "react-responsive-carousel";
import { Element } from "react-scroll";
//files
import ShopifyProjects from "./ShopifyProjects";
import WebProjects from "./WebProjects";
//Scss
import "./Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <Element id="projects" name="projects">
      <h1>
        Some of my <span>projects</span>
      </h1>
      <Tabs>
        <TabList className="tabs-list">
          <Tab className="shopify-tab">
            <p>
              <span>
                <FontAwesomeIcon icon="fa-brands fa-shopify" />
              </span>
              Shopify
            </p>
          </Tab>
          <Tab className="full-stack-tab">
            <p>
              <span>
                <FontAwesomeIcon icon="fa-brands fa-pagelines" />
              </span>
              Web Development
            </p>
          </Tab>
        </TabList>
        <div className="cards">
          <TabPanel className="cards">
            {ShopifyProjects.map((item, index) => {
              return (
                <div
                  className="proj-cards card-shopify"
                  key={`Shopify ${index}`}
                >
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
            })}
          </TabPanel>
          <TabPanel className="cards">
            {WebProjects.map((item, index) => {
              return (
                <div
                  className="proj-cards card-full-stack"
                  key={`Full ${index}`}
                >
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
            })}
          </TabPanel>
        </div>
      </Tabs>
      {/* <button className="view-all">View All Projects</button> */}
    </Element>
  );
};

export default Projects;
