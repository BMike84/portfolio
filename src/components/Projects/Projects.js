import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Carousel } from "react-responsive-carousel";
import ShopifyProjects from "./ShopifyProjects";
import WebProjects from "./WebProjects";

//Scss
import "./Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <section id="projects">
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
            {ShopifyProjects.map((item) => {
              return (
                <div className="proj-cards card-shopify">
                  <h3>{item.title}</h3>
                  <Carousel>
                    <div>
                      <img src={item.image} />
                      <a href={item.link} className="legend" target="blank">
                        View Project
                      </a>
                    </div>
                    <div>
                      <img src={item.image2} />
                      <a href={item.link} className="legend" target="blank">
                        View Project
                      </a>
                    </div>
                    <div>
                      <img src={item.image3} />
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
            {WebProjects.map((item) => {
              return (
                <div className="proj-cards card-shopify">
                  <h3>{item.title}</h3>
                  <Carousel>
                    <div>
                      <img src={item.image} />
                      <a href={item.link} className="legend" target="blank">
                        View Project
                      </a>
                    </div>
                    <div>
                      <img src={item.image2} />
                      <a href={item.link} className="legend" target="blank">
                        View Project
                      </a>
                    </div>
                    <div>
                      <img src={item.image3} />
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
    </section>
  );
};

export default Projects;
