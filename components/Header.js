"use client";

import { useRouter } from "next/navigation";
import ThemeButton from "../components/ThemeButton";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <header
      className="border-b-2 p-6 transition-colors duration-500"
      style={{
        backgroundColor: colors.background,
        borderColor: colors.border,
        color: colors.text,
      }}
    >
      <div className="flex justify-end">
        <ThemeButton />
      </div>

      <section className="flex flex-col items-center text-center my-12">
        <img
          src="/images/profil.png"
          alt="photo de profil"
          className="w-[150px] h-[150px] rounded-full mb-5"
        />
        <h1
          className="text-4xl font-semibold mb-3"
          style={{ color: colors.title }}
        >
          Rachel Silencieux
        </h1>
        <h2 className="text-lg" style={{ color: colors.text }}>
          Étudiante en informatique
        </h2>
      </section>

      <section className="flex flex-wrap justify-center gap-4 mt-6">
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
            className="rounded-full px-4 py-2 text-sm md:text-base transition-colors duration-300 cursor-pointer"
            style={{
              backgroundColor: colors.card,
              color: colors.text,
              border: `1px solid ${colors.border}`,
            }}
          >
            {skill}
          </h3>
        ))}
      </section>

      <button
        onClick={() => router.push("./projects")}
        className="block mx-auto mt-10 px-6 py-3 text-lg font-semibold rounded-md transition-colors duration-300"
        style={{
          backgroundColor: colors.accent,
          color: colors.buttonText,
          border: `1px solid ${colors.border}`,
          cursor: "pointer",
        }}
      >
        Voir mes travaux
      </button>
    </header>
  );
}
