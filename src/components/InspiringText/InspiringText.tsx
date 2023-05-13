import React from "react";
import "./InspiringText.css";
import Tree from "../../images/tree.png";

export const InspiringText = () => {
  return (
    <div className="inspiringText-container">
      <p className="landing-title second">
        Explore TaskMaster's incredible features
      </p>

      <p className="landing-description second">
        simplify task management, receive smart AI assistance,
        <br /> and collaborate effortlessly with your team
      </p>
      <div className="callToAction-container">
        <button className="btn-try-now">Try now! 🚀</button>

        <p className="callToAction">
          Experience the <span>revolution </span>
          today!
        </p>
      </div>
    </div>
  );
};
