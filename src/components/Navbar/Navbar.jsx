import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`${styles.navbar} ${navBackground ? styles.activeNavbar : ""}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo-ul/Numele */}
      <a href="/" className={styles.navLogo}>
        Alexandru Gheorghe
      </a>

      {/* Linkurile de navigație */}
      <ul
        className={
          isMobile ? `${styles.navMenu} ${styles.active}` : styles.navMenu
        }
      >
        <li className={styles.navItem}>
          <Link
            activeClass={styles.activeLink}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMobileMenu}
            className={styles.navLinks}
          >
            Startseite
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            activeClass={styles.activeLink}
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMobileMenu}
            className={styles.navLinks}
          >
            Über mich
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            activeClass={styles.activeLink}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMobileMenu}
            className={styles.navLinks}
          >
            Projekte
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            activeClass={styles.activeLink}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMobileMenu}
            className={styles.navLinks}
          >
            Kontakt
          </Link>
        </li>
      </ul>

      {/* Iconițele sociale */}
      <div className={styles.socialIcons}>
        <motion.a
          href="https://github.com/Alexandru-Dumitrel-Gheorghe"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="GitHub"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
          aria-label="LinkedIn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
      </div>

      {/* Icon pentru meniul mobil */}
      <div className={styles.mobileIcon} onClick={handleToggle}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </motion.nav>
  );
};

export default Navbar;