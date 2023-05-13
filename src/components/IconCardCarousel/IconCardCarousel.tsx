import React from "react";
import "./IconCardCarousel.css";
import { IconCard } from "../IconCard/IconCard";

type Card = {
  title: string;
  text: string;
  image: string;
  color: string;
};

type IconCardCarouselType = {
  cards: Card[];
};

export const IconCardCarousel = ({ cards }: IconCardCarouselType) => {
  return (
    <div className="carousel-block">
      <h1 className="landing-title">
        Empowering Your Project <br />
        with <span>AI-Powered</span> Task Management
      </h1>
      <p className="landing-description first">
        Discover how TaskMaster utilizes the power of AI to revolutionize task
        management and drive project success
      </p>
      <div className="carousel-container">
        <div className="cards-container">
          {cards.map((card) => (
            <IconCard {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};
