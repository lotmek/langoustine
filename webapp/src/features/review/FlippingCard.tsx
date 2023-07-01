import "react";
import "twin.macro";
import "./FlippingCard.css";

export const FlippingCard = () => {
  return (
    <div className="flip-card" tw="m-5">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div>
            <h1>Hello</h1>
          </div>
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};
