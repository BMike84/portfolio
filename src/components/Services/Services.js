import React from "react";
import { Element } from "react-scroll";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="service-cards shopify">
          <h3>
            <span>
              <FontAwesomeIcon icon="fa-brands fa-shopify" />
            </span>
            Shopify store setup
          </h3>
          <p>
            A Shopify store is a great way to expand your business. Let's work
            together to build your store and expand your customer reach.
          </p>
        </div>
        <div className="service-cards shopify">
          <h3>
            <span>
              <FontAwesomeIcon icon="fa-brands fa-shopify" />
            </span>
            Migrations
          </h3>
          <p>
            Have a store already and looking to switch to Shopify? I can help
            with your migration of data, content, and training if you're new to
            Shopify.
          </p>
        </div>
        <div className="service-cards full-stack">
          <h3>
            <span>
              <FontAwesomeIcon icon="fa-brands fa-pagelines" />
            </span>
            Custom Websites
          </h3>
          <p>
            Have a current website or store that needs some customizations? Let
            me help make you make your website/store standout.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Services;
