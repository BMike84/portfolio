import { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//files
import ShopifyTab from "./shopify/ShopifyTab";
import WebTab from "./webDev/WebTab";

//Scss
import "./Projects.scss";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  //to see if section is in view
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div id="projects" name="projects" ref={ref}>
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
        <motion.div className="all-projects" animate={animation}>
          <TabPanel className="proj-cards">
            <ShopifyTab />
          </TabPanel>
          <TabPanel className="proj-cards">
            <WebTab />
          </TabPanel>
        </motion.div>
      </Tabs>
    </div>
  );
};

export default Projects;
