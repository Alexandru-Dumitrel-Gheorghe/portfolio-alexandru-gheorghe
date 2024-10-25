// src/components/About.jsx

import React from "react";
import styles from "./About.module.css";
import profileImage from "../../assets/images/alex2.jpg";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      color: "#E34F26",
      level: 90,
      description: "Experte in der Struktur und Semantik von Webseiten.",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      color: "#1572B6",
      level: 85,
      description:
        "Fortgeschrittene Fähigkeiten in responsive Design und Animationen.",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "#F7DF1E",
      level: 80,
      description: "Entwicklung von interaktiven und dynamischen Funktionen.",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "#61DAFB",
      level: 75,
      description: "Erstellung moderner und skalierbarer Webanwendungen.",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "#7952B3",
      level: 70,
      description: "Schnelle und responsive Layout-Erstellung.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "#339933",
      level: 65,
      description: "Entwicklung von Backend und effizienten APIs.",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase />,
      color: "#47A248",
      level: 60,
      description:
        "Verwaltung von NoSQL-Datenbanken für skalierbare Anwendungen.",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      color: "#F05032",
      level: 85,
      description: "Versionskontrolle und Zusammenarbeit an Projekten.",
    },
  ];

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

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Hauptinhalt */}
        <div className={styles.mainContent}>
          {/* Profilbild */}
          <motion.div
            className={styles.profileImageContainer}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={profileImage}
              alt="Profilbild von Alexandru Gheorghe"
              className={styles.profileImage}
              loading="lazy"
            />
          </motion.div>

          {/* Über mich Text */}
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2>Über mich</h2>
            <p>
              Hallo! Ich bin ein Frontend-Webentwickler, der seine Leidenschaft
              während der Pandemie entdeckt hat. Im Jahr 2024 habe ich ein
              Bootcamp für Frontend-Webentwicklung begonnen, um meine
              Fähigkeiten zu vertiefen und mein Wissen zu erweitern.
            </p>
            <p>
              Dieses Portfolio wurde erstellt, um eine Firma zu finden, in der
              ich meine Fähigkeiten einbringen und weiter wachsen kann. Ich bin
              motiviert, in einem Team zu arbeiten und an spannenden Projekten
              teilzunehmen.
            </p>
            <p className={styles.mission}>
              <em>
                "Mein Ziel ist es, durch Kreativität und Engagement digitale
                Erlebnisse zu schaffen, die beeindrucken."
              </em>
            </p>

            {/* Soziale Medien Icons */}
            <motion.nav
              className={styles.socialIcons}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              aria-label="Soziale Medien"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={styles.socialLink}
                >
                  {link.icon}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        </div>

        {/* Fähigkeiten Sektion */}
        <motion.div
          className={styles.skillsSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className={styles.skillsTitle}>Meine Fähigkeiten</h3>
          <div className={styles.skillsList}>
            {skills.map((skill, idx) => (
              <div key={idx} className={styles.skillItem}>
                <div className={styles.skillInfo}>
                  <div
                    className={styles.skillIcon}
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div className={styles.skillDetails}>
                    <h4 className={styles.skillName}>{skill.name}</h4>
                    <p className={styles.skillDescription}>
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progress}
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
