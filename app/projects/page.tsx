"use client";

import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/projects.json";
import { useTheme } from "@/context/ThemeContext";

export default function ProjectsPage() {
  const { colors } = useTheme();

  return (
    <main
      className="min-h-screen transition-colors duration-500 px-6 md:px-12 lg:px-20 py-12"
      style={{
        backgroundColor: colors.background2,
        color: colors.text,
      }}
    >
      {/* Titre principal */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center underline"
        style={{ color: colors.title }}
      >
        Mes Projets
      </h1>

      {/* Grille des projets */}
      <div className="grid gap-10 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.projects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </main>
  );
}
