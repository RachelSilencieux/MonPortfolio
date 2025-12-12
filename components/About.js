"use client";

import Progression from "./Progression";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { colors } = useTheme();

  return (
    <div
      className="px-5 py-10 transition-colors duration-300"
      style={{
        backgroundColor: colors.background2,
        color: colors.text,
      }}
    >
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Texte principal */}
        <div className="flex-[2]">
          <h1
            className="text-left ml-5 text-[2.5em] mb-5 underline font-semibold"
            style={{ color: colors.title }}
          >
            À propos de moi
          </h1>

          <div className="space-y-5">
            <p
              className="text-left text-[1.2em] leading-[1.6] max-w-[800px] px-5"
              style={{ color: colors.title }}
            >
              Salut! Je m'appelle Rachel,
            </p>

            <p
              className="text-left text-[1.2em] leading-[1.6] max-w-[800px] px-5"
              style={{ color: colors.title }}
            >
              Étudiante en informatique curieuse et passionnée par les nouvelles
              technologies. Depuis 2022, je poursuis des études pour approfondir
              mes connaissances en programmation et explorer différents
              langages. Au fil du temps, j’ai développé un vif intérêt pour le
              développement web, particulièrement l’interface et l’expérience
              utilisateur. J’ai aussi apprécié découvrir la gestion de bases de
              données avec la méthode CRUD, mais mon cœur reste du côté du
              frontend, où je peux créer des interfaces claires et intuitives
              qui rendent l’expérience des utilisateurs plus agréable.
            </p>

            <p
              className="text-left text-[1.2em] leading-[1.6] max-w-[800px] px-5"
              style={{ color: colors.title }}
            >
              Mon objectif en rejoignant votre entreprise est d’approfondir mes
              connaissances en technologies tout en bâtissant une carrière
              solide. Je souhaite également concevoir des solutions simples et
              efficaces, qui apportent une réelle valeur aux utilisateurs.
            </p>
          </div>

          {/* Boutons */}
          <div className="mt-8 flex gap-4 pl-5">
            <button
              className="px-6 py-2 font-bold rounded-md transition duration-300"
              style={{
                backgroundColor: colors.accent,
                color: colors.buttonText,
              }}
            >
              Contactez-moi
            </button>

           <a href="/cv/Silencieux_Rachel_CV_officiel.pdf" download="Silencieux_Rachel_CV_officiel.pdf">
              <button
                className="px-6 py-2 font-bold rounded-md transition duration-300 cursor-pointer"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.buttonText,
                }}
              >
                Télécharger mon CV
              </button>
            </a>   
          </div>
        </div>

        {/* Section Progression */}
        <section
          className="flex-1 p-12 rounded-lg transition-colors duration-300 h-150"
          style={{
            backgroundColor: colors.card,
            border: `1px solid ${colors.border}`,
          }}
        >
          <Progression />
        </section>
      </div>
    </div>
  );
}
