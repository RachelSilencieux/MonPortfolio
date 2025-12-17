"use client"

import { useTheme } from "../../context/ThemeContext";
import React, { useEffect } from "react";

export default function ReflexionUXPage() {
    const { colors } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }
        window.addEventListener('scroll', handleScroll);

        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

  return (
    <div className="reflex-container"
        style={{
            backgroundColor: colors.background2,
            color: colors.text,
      }}
    >
      <section className="reflex-intro flex flex-col items-center text-center mb-10 p-5"
        style={{
            backgroundColor: colors.background,
            borderColor: colors.border,
            color: colors.text,
        }}
      >
        <img
          src="/images/meSmiley.png"
          alt="Photo de profil"
          className="w-[150px] h-[150px] rounded-full mb-5"
        />

        <h1 className="underline text-2xl mb-5">Introduction</h1>

        <p className="max-w-3xl text-xl">
          <p>Bienvenue sur ma page de réflexion UX.</p> 
          Ici, je présente le raisonnement qui a guidé la conception de mon portfolio.
          Mon objectif n’était pas seulement de le développer d’un point de vue technique,
          mais surtout d’offrir une expérience utilisateur claire, intuitive et agréable
          pour les visiteurs.
        </p>
      </section>

      <section className="reflex-schema mb-10">
        <img
          src="/images/schema.png"
          alt="Schéma de réflexion UX"
          className="w-full max-w-4xl mx-auto"
        />
      </section>

      <section 
        className="reflex-details max-w-10xl mx-auto opacity-0 translate-y-8 transition-all duration-700 reveal-on-scroll p-5"
        style={{
              backgroundColor: colors.card,
        }}
      >
        <h2 className="underline text-2xl mb-10 text-center">
          Détails de la réflexion UX
        </h2>

        <div className="reflex-point mb-8">
          <h3 className="text-xl font-semibold mb-2">
            1. Réflexion UX derrière mon portfolio
          </h3>

          <p>
            Avant de concevoir mon portfolio, j’ai volontairement mis de côté mes préférences
            personnelles afin de me concentrer sur les besoins des visiteurs.
            L’objectif était de proposer une interface épurée, permettant
            une navigation fluide et un accès rapide aux informations essentielles.
          </p>
        </div>

        <div className="reflex-point mb-8">
            <h3 className="text-xl font-semibold mb-2">
                2. Une approche centrée utilisateur
            </h3>

            <p className="mb-3">
                Dès l’arrivée sur mon portfolio, je me suis demandé ce que l’utilisateur
                cherchait à comprendre en priorité.
            </p>

            <ul className="list-disc list-inside mb-3">
                <li>Qui je suis</li>
                <li>Quelles sont mes compétences</li>
                <li>Quels projets j’ai réalisés</li>
                <li>Comment me contacter</li>
            </ul>

            <p className="mb-10">
                La structure du site a donc été pensée pour répondre rapidement à ces attentes,
                en mettant en avant l’information essentielle dès les premières interactions,
                sans détour ni surcharge inutile.
            </p>

          <h3 className="text-xl font-semibold mb-2">
                3. Une interface claire et intuitive
          </h3>

            <p className="mb-10">
                Étant une personne ayant des difficultés visuelles, j’ai accordé une attention
                particulière à la lisibilité et à l’accessibilité de mon portfolio.
                J’ai donc privilégié une typographie claire, des contrastes de couleurs adaptés
                et une mise en page aérée afin de faciliter la lecture et la navigation.
            </p>


          <h3 className="text-xl font-semibold mb-2">
                4. Un contexte visuel cohérent
            </h3>

            <p className="mb-3">
                Le choix du style visuel de mon portfolio n’est pas uniquement esthétique.
                Il a été pensé comme un moyen de refléter qui je suis, mes compétences
                et le type de projets que je réalise.
            </p>

            <p className="mb-3">
                Les couleurs, la typographie et la mise en page participent à créer
                une identité visuelle cohérente, en accord avec mon profil et mes objectifs
                professionnels.
            </p>

        </div>
      </section>
    </div>
  );
}
