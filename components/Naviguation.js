"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Naviguation() {
  const [showNav, setShowNav] = useState(false);
  const { colors } = useTheme(); 
  const router = useRouter();
  const toggleNav = () => setShowNav(!showNav);

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{
        backgroundColor: colors.background2,
        color: colors.text,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className="flex justify-between items-center px-5 py-3">
        <h1
          className="text-xl font-bold"
          style={{
            color: colors.title,
            fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            cursor: "pointer",
          }}
          onClick={
            (e) => {
              e.preventDefault();
              router.push("/");
            }
          }
        >
          Mon Portfolio
        </h1>

        <FontAwesomeIcon
          icon={faBars}
          onClick={toggleNav}
          className="text-2xl cursor-pointer transition-transform duration-200 hover:scale-110"
          style={{ color: colors.text }}
        />
      </div>

      {showNav && (
        <nav
          className="absolute right-5 mt-2 flex flex-col bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-lg"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          {[
            { label: "Projets", href: "/projects" },
            { label: "Réflexion UX", href: "/reflexion" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 text-base font-medium hover:font-semibold transition-colors duration-300"
              style={{
                color: colors.text,
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
