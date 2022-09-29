import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import cn from "classnames";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => setShowBack(!showBack), 5000+card.id*100);
    return () => clearInterval(interval);
  });

  return (
    <Col
      tabIndex={card.id}
      xs={4}
      md={2}
      className="tech-icons"
      onClick={handleClick}
    >
      <div className={cn("flip-card-outer")}>
        <div className={cn("flip-card-inner", { showBack })}>
          <div className="card front">
            <p style={{ marginTop: "-5px" }}>{card.front}</p>
          </div>
          <div className="card back">
            <div style={{ margin: "auto" }}>{card.back}</div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default FlipCard;
