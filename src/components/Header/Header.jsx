import React from "react";
import styles from "./Header.module.css";
import profileImage from "../../assets/images/profilalex1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import Navbar from "../Navbar/Navbar"; // Import Navbar

const Header = () => {
  return (
    <header className={styles.header} id="home">
      <Navbar /> {/* Add Navbar */}
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.content}>
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

        {/* Text Section */}
        <motion.div
          className={styles.welcomeText}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            Willkommen! Ich bin{" "}
            <span className={styles.nameHighlight}>Alexandru Gheorghe</span>
          </h1>
          <ReactTypingEffect
            text={[
              "Motivierter Frontend-Entwickler",
              "Lösungsorientierter Teamplayer",
              "Stets lernbereit und engagiert",
            ]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            className={styles.typingEffect}
          />
          <p className={styles.description}>
            Mit Leidenschaft für innovative Technologien und dem Ziel,
            außergewöhnliche digitale Erfahrungen zu schaffen, die einen
            Unterschied machen.
          </p>
          <p className={styles.missionStatement}>
            "Meine Motivation und Anpassungsfähigkeit heben mich von anderen ab.
            Ich strebe danach, kontinuierlich zu wachsen und echten Mehrwert zu
            bieten."
          </p>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className={styles.ctaButton}
            aria-label="Zu meinen Projekten scrollen"
          >
            Meine Projekte ansehen
          </Link>
        </motion.div>
      </div>
      {/* Social Media Icons (optional, if you want to keep them here as well) */}
      {/*
      <motion.div
        className={styles.socialIcons}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <a
          href="https://github.com/Alexandru-Dumitrel-Gheorghe"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </motion.div>
      */}
    </header>
  );
};

export default Header;
