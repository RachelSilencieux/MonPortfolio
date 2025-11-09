"use client";

import "../styles/about.css";
import Progression from "./Progression";
import { useTheme } from "../context/ThemeContext";

export default function About() {

    const { colors } = useTheme();

    return(
        <div className="about-container"
            style={{
                backgroundColor: colors.background2,
                color: colors.text,
            }}
        >
            <div className="about-content">
                <div className="about-text">
                    <h1 style={{ color: colors.title}}>À propos de moi</h1>
                    <p style={{ color: colors.title}}>Salut! Je m'appelle Rachel,</p>
                        <p style={{ color: colors.title}}>étudiante en informatique curieuse et passionnée par les nouvelles technologies. 
                            Depuis 2022, je poursuis des études pour approfondir mes connaissances en programmation et explorer différents langages. 
                            Au fil du temps, j’ai développé un vif intérêt pour le développement web, particulièrement l’interface et l’expérience utilisateur. 
                            J’ai aussi apprécié découvrir la gestion de bases de données avec la méthode CRUD, mais mon cœur reste du côté du frontend, 
                            où je peux créer des interfaces claires et intuitives qui rendent l’expérience des utilisateurs plus agréable.
                    </p>
                    <br/>
                    <p style={{ color: colors.title}}>Mon objectif en rejoignant votre entreprise est d’approfondir mes connaissances en technologies tout en bâtissant une carrière solide. 
                        Je souhaite également concevoir des solutions simples et efficaces, qui apportent une réelle valeur aux utilisateurs.
                    </p>

                    <div className="btn-links">
                        <button className="contact-me"
                            style={{
                                backgroundColor: colors.accent, 
                                color: colors.buttonText,
                            }}

                        >Contactez-moi</button>
                        <button className="resume"
                            style={{
                                backgroundColor: colors.accent, 
                                color: colors.buttonText,
                            }}
                        >Télécharger mon CV</button>
                    </div>
            </div>

            <section className="progress-section"
                style={{
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.border}`
                }}
            
            >
                <Progression/>
            </section>
            </div>
        </div>
        
    )
}