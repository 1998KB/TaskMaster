import React from "react";
import "./ProjectCard.css";

export interface ProjectCardProps {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <div className="projectCard-container">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="card-icon"></div>
    </div>
  );
};
