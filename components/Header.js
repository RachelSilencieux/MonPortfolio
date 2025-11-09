"use client";

import "../styles/header.css";
import ThemeButton from "../components/ThemeButton";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { colors } = useTheme(); 
  const router = useRouter();


  const handleNavigatePage = () => {
    router.push("./projects")
  }

  return (
    <div
      className="header-container"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <ThemeButton />

      <section className="presentation">
        <img src="/images/profil.png" alt="photo de profil" className="photo" />
        <h1 className="name" style={{ color: colors.title }}>
          Rachel Silencieux
        </h1>
        <h2 className="function" style={{ color: colors.text }}>
          Étudiante en informatique
        </h2>
      </section>

      <section className="knowledge">
        {[
          "React",
          "JavaScript",
          "HTML",
          "CSS",
          "Git",
          "SQL",
          "Github",
          "Agile",
          "UI/UX Design",
        ].map((skill) => (
          <h3
            key={skill}
            style={{
              backgroundColor: colors.card,
              color: colors.text,
              border: colors.border,
              borderRadius: "8px",
              padding: "6px 10px",
              transition: "backgroundColor 0.4s ease, color 0.4s ease",
            }}
          >
            {skill}
          </h3>
        ))}
      </section>

      <button
        className="works-btn"
        style={{
          backgroundColor: colors.accent,
          color: colors.buttonText,
          border: `1px solid ${colors.border}`,
          transition: "backgroundColor 0.4s ease, color 0.4s ease",
        }}
        onClick={handleNavigatePage}
      >
        Voir mes travaux
      </button>
    </div>
  );
}
