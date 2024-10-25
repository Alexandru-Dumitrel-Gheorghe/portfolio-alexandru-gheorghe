// src/components/Projects/Projects.jsx

import React from "react";
import styles from "./Projects.module.css";
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaBootstrap,
  FaDatabase,
  FaGitAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Task Timer",
      description:
        "Die Product Timer Dashboard ist eine webbasierte Anwendung, die Nutzern hilft, die auf verschiedene Produkte verwendete Zeit zu verfolgen.",
      features: [
        "Timer starten, pausieren und stoppen",
        "Tägliche Datenspeicherung",
        "PDF-Berichtsgenerierung",
        "Echtzeitdiagramm zur Visualisierung",
        "Dunkelmodus und vollständig responsive",
      ],
      liveLink: "https://task-timerv1.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app",
      image: require("../../assets/images/Timer.png"),
      technologies: ["React", "CSS3", "Bootstrap", "Node.js", "MongoDB"],
    },
    {
      title: "Wedding Photography",
      description:
        "Diese Website wurde für Hochzeitsfotografie-Dienste erstellt und zeigt Portfolios, Dienstleistungspakete und Kundenbewertungen.",
      features: [
        "Responsive Design für alle Geräte",
        "Interaktive Galerie für Fotos",
        "Einfaches Kontaktformular",
        "Verfügbare Dienstleistungspakete",
      ],
      liveLink: "https://aleks-nikolic.netlify.app",
      gitLink:
        "https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic",
      image: require("../../assets/images/Aleks.png"),
      technologies: ["JavaScript", "HTML5", "MongoDB"],
    },
    {
      title: "Kassa Pension",
      description:
        "Kassa ist ein luxuriöses Ferienhaus in Bran, Rumänien, das seine Schönheit und Annehmlichkeiten präsentiert.",
      features: [
        "Detaillierte Zimmerbeschreibung",
        "Verfügbare Einrichtungen und Angebote",
        "Buchungsanfragen direkt über die Website",
      ],
      liveLink: "https://kassa-v1.netlify.app",
      gitLink:
        "https://github.com/Alexandru-Dumitrel-Gheorghe/Kassa-Pension-V2",
      image: require("../../assets/images/Kassa.png"),
      technologies: ["Bootstrap", "Git", "React"],
    },
  ];

  const getTechnologyIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact />;
      case "CSS3":
        return <FaCss3Alt />;
      case "Node.js":
        return <FaNodeJs />;
      case "JavaScript":
        return <FaJs />;
      case "HTML5":
        return <FaHtml5 />;
      case "Bootstrap":
        return <FaBootstrap />;
      case "MongoDB":
        return <FaDatabase />;
      case "Git":
        return <FaGitAlt />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>Projekte</h2>
      <motion.div
        className={styles.projectList}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={`Screenshot von ${project.title}`}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <h4 className={styles.featureTitle}>Funktionen:</h4>
              <ul className={styles.featureList}>
                {project.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={styles.technologies}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.tech}>
                    {getTechnologyIcon(tech)} {tech}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live ansehen <FaExternalLinkAlt />
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
