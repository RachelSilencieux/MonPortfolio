"use client";


import { useTheme } from "../context/ThemeContext";

export default function Progression() {

  const getColor = (pourcentage) => {
    if (pourcentage < 30) return "red";
    else if (pourcentage < 70) return "orange";
    else return "green";
  };

  const skills = [
    { name: "React", value: 65 },
    { name: "JavaScript", value: 60 },
    { name: "HTML/CSS", value: 80 },
    { name: "Git", value: 70 },
    { name: "SQL", value: 75 }
  ];

  const { colors }= useTheme();

  return (
    <div className="progression-container">
      <section className="progression">
        <h1 style={{ color: colors.title }}>Niveau de maîtrise des technologies</h1>

        {skills.map((skill, i) => (
          <div key={i}>
            <p style={{ color: colors.title}}>{skill.name}</p>
            <div
              className="progress-bar"
              style={{
                width: skill.value + "%",
                backgroundColor: getColor(skill.value),
                borderRadius: "20px",
                textAlign: "center",
                color: "white"
              }}
              role="progressbar"
              aria-valuenow={skill.value}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.value}%
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
