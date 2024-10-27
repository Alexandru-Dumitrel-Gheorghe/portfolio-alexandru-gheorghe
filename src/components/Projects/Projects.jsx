import React, { useState } from "react";
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
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Task Timer",
      description:
        "Das Product Timer Dashboard ist eine webbasierte Anwendung, die Nutzern hilft, die auf verschiedene Produkte verwendete Zeit zu verfolgen.",
      features: [
        "Echtzeit-Timer: Starten, Pausieren und Stoppen der Timer für Aufgaben.",
        "Kategorienverwaltung: Organisieren Sie Aufgaben nach Kategorien für eine bessere Produktivitätsverfolgung.",
        "Berichte: Tägliche, wöchentliche und monatliche Berichte zur Nachverfolgung der Aufgabenabschlüsse und der aufgewendeten Zeit.",
        "PDF-Export: Erstellen Sie einen PDF-Bericht der Aufgabenprotokolle zur Offline-Verfolgung.",
        "Dunkelmodus: Wechseln Sie zwischen hellen und dunklen Themen für ein angenehmes Benutzererlebnis.",
        "Responsives Design: Optimiert für sowohl Desktop- als auch mobile Geräte.",
      ],
      liveLink: "https://task-timerv1.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app",
      image: require("../../assets/images/Timer.png"),
      technologies: ["React", "CSS Modules", "Bootstrap", "Node.js", "MongoDB"],
    },
    {
      title: "Wedding Photography",
      description:
        "Diese Website wurde für Hochzeitsfotografie-Dienste erstellt und zeigt Portfolios, Dienstleistungspakete und Kundenbewertungen.",
      features: [
        "Responsives Design für alle Geräte",
        "Interaktive Galerie für Fotos",
        "Einfaches Kontaktformular",
        "Verfügbare Dienstleistungspakete",
      ],
      liveLink: "https://aleks-nikolic.netlify.app",
      gitLink:
        "https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic",
      image: require("../../assets/images/Aleks.png"),
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "React"],
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
      technologies: ["Bootstrap", "JavaScript", "React", "Git"],
    },
    {
      title: "Personal Portfolio",
      description:
        "Eine persönliche Portfolio-Website, die Projekte, Fähigkeiten und Dienstleistungen eines Junior Frontend Webentwicklers präsentiert.",
      features: [
        "Moderne und minimalistische Benutzeroberfläche",
        "Responsives Design für alle Geräte",
        "Kontaktformular für direkte Anfragen",
        "Übersicht über Technologien und Projekte",
      ],
      liveLink: "https://alex-developer.netlify.app",
      gitLink:
        "https://github.com/Alexandru-Dumitrel-Gheorghe/Web-Developer-Site",
      image: require("../../assets/images/Portofolio.png"),
      technologies: ["React", "CSS Modules", "JavaScript", "HTML5"],
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
        className={styles.gallery}
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
            className={styles.projectItem}
            onClick={() => setSelectedProject(project)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={`Screenshot von ${project.title}`}
              className={styles.projectImage}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <FaExternalLinkAlt className={styles.linkIcon} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={styles.close}
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className={styles.modalImage}
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <h4>Funktionen:</h4>
            <ul>
              {selectedProject.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className={styles.technologies}>
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className={styles.tech}>
                  {getTechnologyIcon(tech)} {tech}
                </span>
              ))}
            </div>
            <div className={styles.links}>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live ansehen <FaExternalLinkAlt />
              </a>
              <a
                href={selectedProject.gitLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
