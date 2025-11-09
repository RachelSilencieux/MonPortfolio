"use client";

import { useTheme } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeButton() {

    const { theme, toggleTheme, colors } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: "transparent",
                color: colors.icon,
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease",
            }}

            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} size="lg"/>


        </button>
    )

}