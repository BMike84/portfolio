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
          <img className="hero-image" src={laptop} alt="my-picutre" />
        </div>
        <div className="text-skills">
          <div className="about-info">
            <h3>
              I'm Michael, a full-stack web developer and freelancer. You can
              also find me on
              <a
                href="https://www.upwork.com/freelancers/~017b7de11424dccba0"
                target="blank"
                className="upwork"
              >
                Upwork
              </a>
              .
            </h3>
            <h3>
              I specialize in making shopify stores. It can be rather from
              scratch or migrating your existing store from another platform to
              shopify.
            </h3>

            <h3>
              I also work with React.js, Ruby on Rails, Node.js and Express.js
              and more.
            </h3>
          </div>
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
                return <img src={item.image} alt={item.title} />;
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
