import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Element } from "react-scroll";
//files
import ShopifyTab from "./shopify/ShopifyTab";
import WebTab from "./webDev/WebTab";

//Scss
import "./Projects.scss";
import "react-multi-carousel/lib/styles.css";
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
        <div className="all-projects">
          <TabPanel className="proj-cards">
            <ShopifyTab />
          </TabPanel>
          <TabPanel className="proj-cards">
            <WebTab />
          </TabPanel>
        </div>
      </Tabs>
    </Element>
  );
};

export default Projects;
