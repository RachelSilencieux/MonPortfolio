"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col md:flex-row justify-between items-center md:items-start px-10 md:px-[60px] py-[40px] flex-wrap gap-6 transition-colors duration-300">
      {/* Section 1 */}
      <section className="flex flex-col gap-2 text-center md:text-left">
        <h3 className="text-lg font-semibold">Rachel Silencieux</h3>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col gap-3 text-center md:text-left">
        <h3 className="font-semibold text-lg">Mes réseaux sociaux</h3>
        <div className="flex gap-5 justify-center md:justify-start">
          <a
            href="https://github.com/RachelSilencieux"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/quinnzrachelintech"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col gap-3 text-center md:text-right">
        <h3 className="font-semibold text-lg">Contacte-moi</h3>
        <div className="flex gap-5 justify-center md:justify-end">
          <a
            href="https://www.linkedin.com/in/tonprofil"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:rachel.silencieux@hotmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </section>
    </footer>
  );
}
