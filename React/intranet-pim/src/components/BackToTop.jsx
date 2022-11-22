import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {backToTopButton && (
        <Button
          variant="light"
          className="shadow shadow-sm border rounded-circle"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
          }}
          onClick={ScrollUp}
        >
          ^
        </Button>
      )}
    </div>
  );
};

export default BackToTop;
