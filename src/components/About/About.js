import React from "react";
import Carousel from "react-multi-carousel";

//files
import Footer from "../Footer/Footer";
import Skills from "./Skills";

//Scss
import "./About.scss";
import "react-multi-carousel/lib/styles.css";

//Hero Image
import laptop from "../images/laptop.jpg";

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="about">
      <div className="about-me">
        <div className="about-img">
          <img className="hero-image" src={laptop} />
        </div>
        <div className="text-skills">
          <h3>
            I'm Michael, a professional web developer and freelancer.
            <br />
            <br />I specialize in making shopify stores. It can be rather from
            scratch or migrating your existing store from another platform to
            shopify.
            <br />
            <br />I also work with React.js, Ruby on Rails, Node.js and
            Express.js
          </h3>
          <div className="skill-images">
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {Skills.map((item) => {
                return <img src={item.image} />;
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
