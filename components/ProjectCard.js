"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const { colors } = useTheme();

  const handlePrev = () => {
    if (Array.isArray(project.image)) {
      setCurrentImage(prev => prev === 0 ? project.image.length - 1 : prev - 1);
    }
  };

  const handleNext = () => {
    if (Array.isArray(project.image)) {
      setCurrentImage(prev => prev === project.image.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <div className="project-card">
      <div className="project-image-container">
        <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon left" onClick={handlePrev} />
        <img
          src={Array.isArray(project.image) ? project.image[currentImage] : project.image}
          alt={project.title}
          className="project-image"
        />
        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon right" onClick={handleNext} />
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
      )}
    </div>
  );
}
