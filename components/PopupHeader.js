"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function PopupHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed left-0 w-full flex justify-around items-center font-bold text-[1.2rem] transition-all duration-700 ease-in-out z-[9999] ${
        isVisible ? "top-0 opacity-100" : "-top-[100px] opacity-0"
      }`}
      style={{
        backgroundColor: colors.card ?? "#333",
        color: colors.text ?? "#fff",
      }}
    >
      <img
        src="/images/meSmiley.png"
        alt="smiley"
        className="w-[90px] h-[90px] rounded-full transform translate-x-[100%]"
      />
      <p className="text-center transform -translate-x-[20%] px-4">
        Oui, oui, voici tous mes projets de différents langages faits avec
        HTML/CSS, JS, C# et plus encore !!!
      </p>
    </div>
  );
}
