import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Element } from "react-scroll";

//files
// import WebProjects from "./WebProjects";
import ShopifyDiv from "./ShopifyDiv";
import WebDiv from "./WebDiv";

//Scss
import "./Projects.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <ShopifyDiv />
          </TabPanel>
          <TabPanel className="cards">
            <WebDiv />
          </TabPanel>
        </div>
      </Tabs>
      {/* <button className="view-all">View All Projects</button> */}
    </Element>
  );
};

export default Projects;
