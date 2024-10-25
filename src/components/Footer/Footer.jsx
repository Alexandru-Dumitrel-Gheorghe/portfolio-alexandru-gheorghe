import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Alexandru Gheorghe. Alle Rechte
          vorbehalten.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/alexandrugheorghe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/alexandrugheorghe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={styles.socialLink}
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:alexandrugheorghe@example.com"
            aria-label="E-Mail"
            className={styles.socialLink}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
