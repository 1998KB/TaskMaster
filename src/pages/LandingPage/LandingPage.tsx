import React from "react";
import "./LandingPage.css";
import { StdLandingPage } from "../../components/StdLandingPage/StdLandingPage";
import { IconCardCarousel } from "../../components/IconCardCarousel/IconCardCarousel";
import CardData from "../../contents/imagecards";
import { InspiringText } from "../../components/InspiringText/InspiringText";

export const LandingPage = () => {
  return (
    <>
      <StdLandingPage />
      <IconCardCarousel cards={CardData} />
      <InspiringText />
    </>
  );
};
