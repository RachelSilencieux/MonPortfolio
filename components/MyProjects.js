"use client";


import projectsData from "../projects.json";
import "../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import PopupHeader from "./PopupHeader";


export default function MyProjects() {
  const { colors } = useTheme(); 
  
  return (
    <div 
      className="projects-container"
      style={{
        backgroundColor: colors.background2,
        color: colors.text,
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <PopupHeader/>

      <div className="projects-list">
        {projectsData.projects.map((_, index) => (
          <ProjectCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ index }) {
  const project = projectsData.projects[index]; // 🔹 on va directement chercher l’objet
  const [currentImage, setCurrentImage] = useState(0);

  const { colors } = useTheme(); 


  const handlePrevImage = () => {
    if (Array.isArray(project.image)) {
      setCurrentImage((prev) =>
        prev === 0 ? project.image.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (Array.isArray(project.image)) {
      setCurrentImage((prev) =>
        prev === project.image.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="arrow-icon left"
          onClick={handlePrevImage}
        />

        <img
          src={
            Array.isArray(project.image)
              ? project.image[currentImage]
              : project.image
          }
          alt={project.title}
          className="project-image"
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          className="arrow-icon right"
          onClick={handleNextImage}
        />
      </div>

      <h3 className="project-title" >{project.title}</h3>
      <p className="project-description" >{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Voir le projet
        </a>
      )}
    </div>
  );
}
