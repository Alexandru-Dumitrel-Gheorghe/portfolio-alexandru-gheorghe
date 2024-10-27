import React from "react";
import styles from "./Header.module.css";
import profileImage from "../../assets/images/profilalex1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import ReactTypingEffect from "react-typing-effect";
import Navbar from "../Navbar/Navbar";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";

const Header = () => {
  const age = new Date().getFullYear() - 1993;

  return (
    <header className={styles.header} id="home">
      <Navbar />
      <motion.div
        className={styles.backgroundOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className={styles.content}>
        {/* Profile Image Section */}
        <motion.div
          className={styles.profileImageContainer}
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, rotate: 10 }}
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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.buttonWrapper}
          >
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
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <motion.a
            href="tel:+4916093091768"
            className={styles.contactItem}
            whileHover={{ scale: 1.05, color: "#FFD700" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Sunați la Alexandru Gheorghe"
          >
            <FaPhoneAlt className={styles.icon} /> <span>+49 160 93091768</span>
          </motion.a>
          <motion.a
            href="mailto:gheorghe.93@icloud.com"
            className={styles.contactItem}
            whileHover={{ scale: 1.05, color: "#FFD700" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Trimiteți un email lui Alexandru Gheorghe"
          >
            <FaEnvelope className={styles.icon} />
            <span>gheorghe.93@icloud.com</span>
          </motion.a>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Fürstenfeldbruck, Deutschland</span>
          </div>
          <div className={styles.contactItem}>
            <FaBirthdayCake className={styles.icon} /> <span>{age} Jahre</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
