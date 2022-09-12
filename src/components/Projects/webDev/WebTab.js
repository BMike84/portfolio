import React from "react";

import WebProjects from "./WebProjects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WebTab = () => {
  const responsive1 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
        {WebProjects.map((store, index) => {
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
                <a href={store.link} className="btn-grad shop-a" target="blank">
                  View Project
                </a>
              </div>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default WebTab;
