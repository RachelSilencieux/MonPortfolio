"use client";

import projectsData from "../projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import PopupHeader from "./PopupHeader";

export default function MyProjects() {
  const { colors } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{
        backgroundColor: colors.background2,
        color: colors.text,
      }}
    >
      <PopupHeader />

      {/* Liste des projets */}
      <div className="grid gap-10 p-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((_, index) => (
          <ProjectCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ index }) {
  const project = projectsData.projects[index];
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
    <div
      className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl w-full max-w-[400px]"
      style={{
        backgroundColor: colors.card,
        color: colors.text,
      }}
    >
      {/* Images + flèches */}
      <div className="relative w-full">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={handlePrevImage}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-xl cursor-pointer hover:scale-110 transition"
        />

        <img
          src={
            Array.isArray(project.image)
              ? project.image[currentImage]
              : project.image
          }
          alt={project.title}
          className="w-full h-[220px] object-cover rounded-t-xl"
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={handleNextImage}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-white text-xl cursor-pointer hover:scale-110 transition"
        />
      </div>

      {/* Titre + description */}
      <div className="p-5 text-center">
        <h3
          className="font-semibold text-xl mb-3"
          style={{ color: colors.title }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed opacity-90 mb-5">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2 rounded-md text-white font-medium transition-colors duration-300"
            style={{
              backgroundColor: colors.accent,
              border: `1px solid ${colors.border}`,
            }}
          >
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
}
