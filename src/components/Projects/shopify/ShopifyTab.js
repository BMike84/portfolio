import React from "react";

import ShopifyProjects from "./ShopifyProjects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ShopifyTab = () => {
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1023, min: 769 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    all: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive1} className="project-cards">
        {ShopifyProjects.map((store, index) => {
          return (
            <>
              <Carousel
                key={index}
                swipeable={false}
                draggable={false}
                responsive={responsive2}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "all"]}
                className="inner-carousel"
              >
                <img alt={store.title} src={store.image} />
                <img alt={store.title} src={store.image2} />
                <img alt={store.title} src={store.image3} />
              </Carousel>
              <div className="btn-div">
                <a href={store.link} className="shopify-btn" target="blank">
                  {store.title}
                </a>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default ShopifyTab;
