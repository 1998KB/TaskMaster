import React from "react";
import "./IconCard.css";
import Book from "../../images/book.png";

type IconCardType = {
  title: string;
  text: string;
  image: string;
  color: string;
};

export const IconCard = ({ title, text, image, color }: IconCardType) => {
  return (
    <div className="iconCard-container">
      <div className="iconCard-header" style={{ backgroundColor: color }}></div>
      <div className="iconCard-text">
        <img className="iconCard-image" src={image} />
        <h3 className="iconCard-title">{title}</h3>
        <p className="iconCard-paragraph">{text}</p>
      </div>
    </div>
  );
};
