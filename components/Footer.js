"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-content-1">
        <h3>Rachel Silencieux</h3>
      </section>

      <section className="footer-content-2">
        <h3>Mes réseaux sociaux</h3>
        <div className="icons">
          <a href="https://github.com/RachelSilencieux" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/quinnzrachelintech" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </section>

      <section className="footer-content-3">
        <h3>Contact moi</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:rachel.silencieux@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
      </section>
    </footer>
  );
}
