import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import {
  FcApproval,
  FcSportsMode,
  FcGoodDecision,
  FcLowPriority,
  FcCollaboration,
  FcAutomatic,
} from "react-icons/fc";

import Card from "./Card";

import Carousel from "./Carousel.css";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

function CarouselComponent() {
  const [width, setWidth] = useState(0);
  const innerCarousel = useRef();
  const carousel = useRef();
  const xPos = useRef(0);
  const animation = useAnimation();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  function onLeftClick() {
    const newXPosition = xPos.current + 600;

    animation.start({
      x: newXPosition > 0 ? 0 : newXPosition,
    });
  }

  function onRightClick() {
    const newXPosition = xPos.current - 600;

    animation.start({
      x: newXPosition < -width + 10 ? -width + 10 : newXPosition,
    });
  }

  function onUpdate(latest) {
    xPos.current = latest.x;
  }

  return (
    <>
      <div className="container mt-5 ">
        <h2
          className="ms-2 mb-4"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
        >
          Vantagens
        </h2>
        <motion.div
          ref={carousel}
          className="carousel fader"
          style={{ cursor: "grab", overflow: "hidden" }}
          whileTap={{ cursor: "grabbing" }}
          
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel d-flex "
            ref={innerCarousel}
            initial={false}
            onUpdate={onUpdate}
            animate={animation}
          >
            <Card
              title="Confiabilidade"
              icon={
                <FcApproval
                  style={{ width: "100px", height: "100px" }}
                ></FcApproval>
              }
            ></Card>
            <Card
              title="Praticidade"
              icon={
                <FcGoodDecision
                  style={{ width: "100px", height: "100px" }}
                ></FcGoodDecision>
              }
            ></Card>
            <Card
              title="Agilidade"
              icon={
                <FcAutomatic
                  style={{ width: "100px", height: "100px" }}
                ></FcAutomatic>
              }
            ></Card>
            <Card
              title="Rapidex"
              icon={
                <FcSportsMode
                  style={{ width: "100px", height: "100px" }}
                ></FcSportsMode>
              }
            ></Card>
            <Card
              title="Preço"
              icon={
                <FcLowPriority
                  style={{ width: "100px", height: "100px" }}
                ></FcLowPriority>
              }
            ></Card>
            <Card
              title="Transparencia"
              icon={
                <FcCollaboration
                  style={{ width: "100px", height: "100px" }}
                ></FcCollaboration>
              }
            ></Card>
          </motion.div>
        </motion.div>
        <div className="d-flex justify-content-center align-items-center text-dark mt-2 mb-5">
          
          <TfiAngleLeft
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            onClick={onLeftClick}
          ></TfiAngleLeft>
          <h4 className="mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
            Arraste os cards para o lado
          </h4>
          
          <TfiAngleRight
            style={{ height: "25px", width: "25px", cursor: "pointer" }}
            onClick={onRightClick}
          ></TfiAngleRight>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
