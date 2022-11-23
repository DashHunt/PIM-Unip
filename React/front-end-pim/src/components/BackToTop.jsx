import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Voltar ao topo
    </Tooltip>
  );

  return (
    <div>
      {backToTopButton && (
        <OverlayTrigger
          placement="top"
          delay={{ show: 100, hide: 100 }}
          overlay={renderTooltip}
        >
          <Button
            variant="light"
            className="shadow shadow border rounded-circle"
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              height: "50px",
              width: "50px",
              fontSize: "1.5rem",
            }}
            onClick={ScrollUp}
          >
            ^
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default BackToTop;
