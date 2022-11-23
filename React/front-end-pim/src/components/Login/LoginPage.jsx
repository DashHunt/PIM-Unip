import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import Topbar from "../Topbar/Topbar";
import Login from './Login'
import Register from './Register'

const LoginPage = () => {
  const [isFlipped, setIsFlipped] = useState(false)


  function handleClick() {
    setIsFlipped(!isFlipped)
  }

  return (
    <Topbar>
      <div
        className="position-relative"
        style={{
          backgroundColor: "#0057fc",
          minHeight: "95vh",
          minWidth: "20vh",
          position: "relative",
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ position: "absolute", height: "100%", width: "100%" }}
        >
          <div className="bg-white text-dark rounded p-4 p-sm-3 shadow-sm">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <Login flip={handleClick}></Login>

            <Register flip={handleClick}></Register>
          </ReactCardFlip>
            
          </div>
        </div>
      </div>
    </Topbar>
  );
};

export default LoginPage;
