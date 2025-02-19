import React, { useState, memo } from "react";
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

// Mapping pentru iconițele tehnologiilor folosite în proiecte
const techIcons = {
  React: <FaReact title="React" />,
  "CSS Modules": <FaCss3Alt title="CSS3" />,
  CSS3: <FaCss3Alt title="CSS3" />,
  "Node.js": <FaNodeJs title="Node.js" />,
  JavaScript: <FaJs title="JavaScript" />,
  HTML5: <FaHtml5 title="HTML5" />,
  Bootstrap: <FaBootstrap title="Bootstrap" />,
  MongoDB: <FaDatabase title="MongoDB" />,
  Git: <FaGitAlt title="Git" />,
};

// Card-ul de proiect (cercul mic + imagine mare la hover)
const ProjectCard = memo(({ project, onSelect }) => (
  <div className={styles.iconImage} onClick={() => onSelect(project)}>
    {/* Imaginea mică (în cerc) */}
    <div className={styles.icon}>
      <img src={project.image} alt={project.title} />
    </div>

    {/* Imaginea mare + detalii la hover */}
    <div className={styles.hoverImage}>
      <img src={project.image} alt={project.title} />
      <div className={styles.content}>
        <div className={styles.details}>
          <h3 className={styles.name}>{project.title}</h3>
          <p className={styles.job}>{project.technologies.join(" | ")}</p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            Live <FaExternalLinkAlt />
          </a>
          <br />
          <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
            GitHub <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  </div>
));

// Modalul de detalii (apare când se face click pe un cerc)
const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className={styles.modal}
    onClick={onClose}
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
      <button
        className={styles.close}
        onClick={onClose}
        aria-label="Close project details"
      >
        &times;
      </button>
      <img src={project.image} alt={project.title} className={styles.modalImage} />
      <h3 className={styles.modalTitle}>{project.title}</h3>
      <p className={styles.modalDescription}>{project.description}</p>
      <h4 className={styles.featuresHeading}>Funktionen:</h4>
      <ul className={styles.featuresList}>
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <div className={styles.technologies}>
        {project.technologies.map((tech, idx) => (
          <span key={idx} className={styles.tech}>
            {techIcons[tech]} <span className={styles.techLabel}>{tech}</span>
          </span>
        ))}
      </div>
      <div className={styles.links}>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Live ansehen <FaExternalLinkAlt />
        </a>
        <a
          href={project.gitLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          GitHub <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Datele proiectelor
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
        "Responsives Design: Optimiert pentru Desktop und mobile Geräte.",
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
      title: "Breakout Game in React",
      description:
        "A modern take on the classic Breakout game, built using React. It features multiple levels with increasing difficulty, dynamic ball speed adjustments, power-ups, and sound effects for an engaging gameplay experience.",
      features: [
        "Multiple Levels: 4 distinct levels with increasing challenge.",
        "Dynamic Ball Speed: Speed increases with each level.",
        "Power-Ups: Extra lives, paddle width changes, extra balls, or paddle shrinkage.",
        "Sound Effects: Feedback for paddle hits, brick hits, losing lives, and level completion.",
        "Responsive Design: Adjusts for different screen sizes.",
        "Immersive Controls: Paddle controlled with the mouse; cursor is hidden for immersion.",
      ],
      liveLink: "https://breakout-v1.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Breakout-Game",
      image: require("../../assets/images/Breakout.png"),
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Tetris Game",
      description:
        "Tetris is a timeless and highly addictive puzzle game built using React. Players must arrange falling tetrominoes to form complete horizontal lines, earning points as the falling speed increases progressively.",
      features: [
        "Multiple Levels with increasing challenge.",
        "Dynamic Ball Speed: Falling speed increases with game progress.",
        "Power-Ups: Extra lives, paddle width changes, extra balls, or paddle shrinkage when bricks are destroyed.",
        "Sound Effects: Audio feedback for various game events.",
        "Responsive Design: Game board adjusts automatically for screen sizes.",
        "Immersive Controls: Paddle controlled with the mouse, with hidden cursor.",
      ],
      liveLink: "https://tetris-alex93.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Tetris-Game",
      image: require("../../assets/images/Tetris.png"),
      technologies: ["React", "JavaScript", "HTML5", "CSS3"],
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      {/* Secțiunea de titlu și categorii */}
      <div className={styles.headerContainer}>
        <h1 className={styles.heading}>Projekte</h1>

        {/* Categorii de tehnologii */}
        <div className={styles.techCategories}>
          {/* Card-ul pentru Frontend */}
          <div className={styles.categoryCard}>
            <h4>Frontend</h4>
            <ul>
              <li>
                <FaHtml5 className={styles.iconTech} /> HTML5
              </li>
              <li>
                <FaCss3Alt className={styles.iconTech} /> CSS3
              </li>
              <li>
                <FaJs className={styles.iconTech} /> JavaScript (ES6+)
              </li>
              <li>
                <FaReact className={styles.iconTech} /> React
              </li>
              <li>
                <FaBootstrap className={styles.iconTech} /> Bootstrap
              </li>
              <li>
                <FaGitAlt className={styles.iconTech} /> Git &amp; GitHub
              </li>
            </ul>
          </div>

          {/* Card-ul pentru Backend */}
          <div className={styles.categoryCard}>
            <h4>Backend</h4>
            <ul>
              <li>
                <FaDatabase className={styles.iconTech} /> MongoDB
              </li>
              <li>
                <FaNodeJs className={styles.iconTech} /> Node.js
              </li>
            </ul>
          </div>

          {/* Card-ul pentru UI/UX Design */}
          <div className={styles.categoryCard}>
            <h4>UI/UX Design</h4>
            <ul>
              <li>
                <span className={styles.customIcon} title="UI/UX">
                  🎨
                </span>{" "}
                UI/UX Design
              </li>
              <li>
                <span className={styles.customIcon} title="Figma">
                  🖌️
                </span>{" "}
                Figma
              </li>
              <li>
                <span className={styles.customIcon} title="Miro">
                  📋
                </span>{" "}
                Miro
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista proiectelor (cercuri + imagini mari la hover) */}
      <div className={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal pentru detalii proiect */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
