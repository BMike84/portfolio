import React, { useEffect, useState } from "react";
import { useInterval } from "react-use";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import titles from "../Hero/HeroData";

const TextAnimations = () => {
  const fullIcon = <FontAwesomeIcon icon="fa-brands fa-pagelines" />;
  const shopIcon = <FontAwesomeIcon icon="fa-brands fa-shopify" />;
  const shopify = "Shopify Developer";
  const fullStack = "Full Stack Web Developer";

  const [items, setitems] = useState(fullStack);
  const [icons, setIcons] = useState(fullIcon);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);

  useInterval(
    () => {
      // Animate Full Stack
      if (count === 0) {
        setIcons(fullIcon);
        setitems(fullStack);
        setCount(count + 1);
      }

      // Animate Shopify
      if (count == 1) {
        setCount(0);
        setIcons(shopIcon);
        setitems(shopify);
      }
    },
    play ? 6000 : null
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIcons(shopIcon);
      setitems(shopify);
      setPlay(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <span className={items.includes("Shopify") ? "shopify" : "full-stack"}>
        <span>{icons}</span>
        {items}
      </span>
    </Wrapper>
  );
};

export default TextAnimations;

const animation = keyframes`
0% { opacity : 0; transform: translateY(-100px) skewY(10deg) skewX(10deg);:filter: blur(10px); }

25% { opacity : 1; transform: translateY(0px) skewY(0deg) skewX(0deg);:filter: blur(0px); }

75% { opacity : 1; transform: translateY(0px) skewY(0deg) skewX(0deg);:filter: blur(0px); }

100% { opacity : 0; transform: translateY(-100px) skewY(10deg) skewX(10deg);:filter: blur(10px); }
`;
const Wrapper = styled.span`
  display: inline-block;

  span {
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }
`;
