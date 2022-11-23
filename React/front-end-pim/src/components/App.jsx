import React from "react";

import Topbar from "./Topbar/Topbar";
import Simule from "./Simule";
import CarouselComponent from "./Carousel/Carousel";

import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import StepByStep from "./StepByStep/StepByStep";
import Footer from "./Footer/Footer";
import BackToTop from './BackToTop'

const App = () => {
  return (
    <>
      <Topbar>
        <section
          style={{ height: "100%", backgroundColor: "#0057fc", minHeight: 500 }}
        >
          <div className="text-white">
            <Simule></Simule>
          </div>
        </section>
        <section className="bg-white" style={{ height: "100%" }} id="scrollspyHeading1">
          <div
            className="d-flex justify-content-center align-items-center text-dark"
            
          >
            <CarouselComponent></CarouselComponent>
          </div>
        </section>
        <section
          className="container mb-5 rounded bg-light shadow-sm"
          style={{ height: "100%" }}
        >
          <div id="scrollspyHeading2">
            <StepByStep />
          </div>
        </section>
        <section
          className="bg-light bg-gradient shadow-sm text-dark border-top"
          style={{ height: "100%" }}
        >
          <div className="d-flex justify-content-center align-items-center" style={{ fontFamily: "Poppins, sans-serif" }} id="scrollspyHeading3">
            <Footer></Footer>
          </div>
        </section>
        <BackToTop></BackToTop>
      </Topbar>
    </>
  );
};

export default App;
