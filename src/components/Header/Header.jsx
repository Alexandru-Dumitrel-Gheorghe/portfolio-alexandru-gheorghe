import React from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import profileImage from "../../assets/images/profilalex1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
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

      {/* Wave Divider în partea de jos */}
      <div className={styles.waveWrapper}>
        <svg
          className={styles.waveSvg}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,234.7C672,256,768,256,864,224C960,192,1056,128,1152,96C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Fundal radial animat */}
      <motion.div
        className={styles.backgroundShape}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <div className={styles.container}>
        {/* Coloana stângă: Text + CTA */}
        <motion.div
          className={styles.textColumn}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Willkommen! Ich bin <span>Alexandru Gheorghe</span>
          </motion.h1>

          {/* Typed effect pentru roluri */}
          <motion.div
            className={styles.roles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Typewriter
              options={{
                strings: ["Front-End Web Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 70,
              }}
            />
          </motion.div>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Leidenschaft für moderne Webtechnologien und die Erstellung
            benutzerfreundlicher, responsiver Lösungen.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={styles.ctaButton}
            >
              Meine Projekte
            </Link>
          </motion.div>
        </motion.div>

        {/* Coloana dreaptă: Imagine + Contact Info Card */}
        <motion.div
          className={styles.profileColumn}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className={styles.profileImageContainer}
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={profileImage}
              alt="Profilbild von Alexandru Gheorghe"
              className={styles.profileImage}
            />
          </motion.div>

          {/* Card cu Contact Info */}
          <div className={styles.contactInfoCard}>
            <h3>Kontakt  Info</h3>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <FaPhoneAlt className={styles.icon} />
              </div>
              <span>+49 1577 2158264</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <FaEnvelope className={styles.icon} />
              </div>
              <span>gheorghe.93@icloud.com</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <FaMapMarkerAlt className={styles.icon} />
              </div>
              <span>Fürstenfeldbruck, Deutschland</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <FaBirthdayCake className={styles.icon} />
              </div>
              <span>{age} Jahre</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
