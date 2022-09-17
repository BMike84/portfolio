import { useEffect } from "react";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//files
import ServiceData from "./ServiceData";

//Scss
import "./Services.scss";

const Services = () => {
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
    <div id="services" name="services" ref={ref}>
      <div className="service-header">
        <h1>
          Check out my <span>services</span>
        </h1>
        <p>
          All services come with 100% money back gurantee if your not satisfied
        </p>
      </div>
      <motion.div ref={ref} className="cards" animate={animation}>
        {ServiceData.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} />
              <h4 className="service-hover">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Services;
