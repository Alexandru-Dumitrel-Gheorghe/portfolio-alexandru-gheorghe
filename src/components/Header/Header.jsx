import React from "react";
import styles from "./Header.module.css";
import profileImage from "../../assets/images/profilalex1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/Alexandru-Dumitrel-Gheorghe",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/alexandrugheorghe",
    label: "Twitter",
  },
];

const Header = () => {
  return (
    <header className={styles.header} id="home">
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.content}>
        {/* Text Section */}
        <motion.div
          className={styles.welcomeText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Hallo, ich bin{" "}
            <span className={styles.nameHighlight}>Alexandru Gheorghe</span>
          </h1>
          <ReactTypingEffect
            text={[
              "Frontend-Webentwickler",
              "React-Spezialist",
              "Kreativer Problemlöser",
              "Technologie-Enthusiast",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className={styles.typingEffect}
          />
          <p className={styles.description}>
            Leidenschaftlicher Entwickler mit Fokus auf moderne Webtechnologien
            und Benutzererfahrung.
          </p>
          <p className={styles.missionStatement}>
            "Ich glaube an die Kraft der Technologie, um innovative Lösungen zu
            schaffen, die das Leben der Menschen verbessern."
          </p>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={styles.ctaButton}
            aria-label="Seite zu meinen Projekten scrollen"
          >
            Meine Projekte ansehen
          </Link>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className={styles.profileImageContainer}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={profileImage}
            alt="Profilbild von Alexandru Gheorghe"
            className={styles.profileImage}
          />
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        className={styles.socialIcons}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
