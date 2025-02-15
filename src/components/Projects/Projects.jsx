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
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Task Timer",
      description:
        "Das Product Timer Dashboard ist eine webbasierte Anwendung, die Nutzern hilft, die auf verschiedene Produkte verwendete Zeit zu verfolgen. Das Projekt nutzt ein React-Frontend mit CSS Modules und ein Backend, das mit Node.js und MongoDB entwickelt wurde. Es wurde auf Vercel bereitgestellt und verwendet eine API zur Kommunikation.",
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
    }
    ,
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
    {
      title: "Breakout Game in React",
      description:
        "A modern take on the classic Breakout game, built using React. It features multiple levels with increasing difficulty, dynamic ball speed adjustments, power-ups, and sound effects for an engaging gameplay experience.",
      features: [
        "Multiple Levels: 4 distinct levels defined in src/levels/levels.js with increasing challenge.",
        "Dynamic Ball Speed: The ball's speed increases with each level for progressive difficulty.",
        "Power-Ups: Occasionally drops power-ups that grant extra lives, increase paddle width, spawn extra balls, or shrink the paddle.",
        "Sound Effects: Audio feedback for paddle hits, brick hits, losing lives, level completion, and game over events.",
        "Responsive Design: Automatically adjusts game board dimensions for different screen sizes.",
        "Immersive Controls: Paddle controlled with the mouse; the cursor is hidden for an immersive experience.",
      ],
      liveLink: "https://breakout-v1.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Breakout-Game",
      image: require("../../assets/images/Breakout.png"),
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    },

    {
      title: "Tetris Game",
      description:
        "Tetris is a timeless and highly addictive puzzle game built using React. In this game, players must arrange falling tetrominoes (shapes made up of four blocks) to form complete horizontal lines. As lines clear, players earn points, and the falling speed increases progressively.",
      features: [
        "Multiple Levels: 4 distinct levels defined in src/levels/levels.js with increasing challenge.",
        "Dynamic Ball Speed: The falling speed increases as the game progresses.",
        "Power-Ups: Extra lives, increased paddle width, extra balls, or paddle shrinkage when bricks are destroyed.",
        "Sound Effects: Audio feedback for paddle hits, brick hits, losing lives, level completion, and game over events.",
        "Responsive Design: The game board adjusts automatically to different screen sizes.",
        "Immersive Controls: Paddle controlled with the mouse, with the cursor hidden over the game board.",
      ],
      liveLink: "https://tetris-alex93.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Tetris-Game",
      image: require("../../assets/images/Tetris.png"),
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    },
  
  ];

  const getTechnologyIcon = (tech) => {
    switch (tech) {
      case "React":
        return <FaReact />;
      case "CSS Modules":
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
          visible: { transition: { staggerChildren: 0.2 } },
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

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modal}
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
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
              <ul className={styles.featuresList}>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
