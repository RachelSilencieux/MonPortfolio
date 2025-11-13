"use client";

import { useTheme } from "../context/ThemeContext";

export default function NotFound() {
  const { colors } = useTheme();

  return (
    <div
      className="flex flex-col items-center justify-center text-center my-12 transition-colors duration-500"
      style={{
        backgroundColor: colors.background2,
        color: colors.text,
      }}
    >
      <img
        src="/images/notfoundpic.png"
        alt="Page non trouvée"
        className="w-[300px] h-[250px] rounded-full mb-6 shadow-md"
      />
      <h1
        className="text-3xl md:text-4xl font-bold underline"
        style={{ color: colors.title }}
      >
        Page not found
      </h1>
    </div>
  );
}
