"use client";

import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/projects.json";
import "@/styles/projects.css";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <h1>Mes Projets</h1>
      <div className="projects-list">
        {projectsData.projects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </main>
  );
}
