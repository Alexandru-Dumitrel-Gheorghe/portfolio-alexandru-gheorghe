import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMiro, SiFigma } from "react-icons/si";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Alexandru</div>

      {/* Meniu desktop */}
      <div className={styles.desktopMenu}>
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>

        {/* Iconițe social media în meniul desktop */}
        <div className={styles.socialLinks}>
          <a href="https://miro.com" target="_blank" rel="noreferrer">
            <SiMiro />
          </a>
          <a href="https://figma.com" target="_blank" rel="noreferrer">
            <SiFigma />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Buton hamburger (apare doar pe mobil) */}
      <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Meniul mobil full-screen cu efect clip-path */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ clipPath: "circle(0% at 90% 10%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 90% 10%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 90% 10%)", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Butonul de închidere (X) */}
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <FaTimes />
            </div>

            <div className={styles.mobileMenuContent}>
              <Link onClick={toggleMenu} to="home" smooth={true} duration={500}>
                Home
              </Link>
              <Link onClick={toggleMenu} to="about" smooth={true} duration={500}>
                About
              </Link>
              <Link onClick={toggleMenu} to="projects" smooth={true} duration={500}>
                Projects
              </Link>
              <Link onClick={toggleMenu} to="contact" smooth={true} duration={500}>
                Contact
              </Link>

              {/* Iconițe social media și în meniul mobil */}
              <div className={styles.mobileSocialLinks}>
                <a href="https://miro.com" target="_blank" rel="noreferrer">
                  <SiMiro />
                </a>
                <a href="https://figma.com" target="_blank" rel="noreferrer">
                  <SiFigma />
                </a>
                <a href="https://github.com/Alexandru-Dumitrel-Gheorghe" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
