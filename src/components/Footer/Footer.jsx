import React from "react";
import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Alexandru Gheorghe. Alle Rechte
          vorbehalten.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>+49 160 93091768</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>gheorghe.93@icloud.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span>Fürstenfeldbruck, Deutschland</span>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/Alexandru-Dumitrel-Gheorghe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
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
            href="mailto:gheorghe.93@icloud.com"
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
