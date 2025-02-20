import React, { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./Projects.module.css";

// Varianten für die List-Animation
const listVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 },
  }),
};

// Komponente für ein einzelnes Projekt-Card (optimiert mit React.memo)
const ProjectCard = React.memo(({ project, onClick }) => (
  <motion.div
    className={styles.projectCard}
    onClick={() => onClick(project)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img
      src={project.image}
      alt={project.title}
      className={styles.projectImage}
      loading="lazy"
    />
    <div className={styles.cardOverlay}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
    </div>
  </motion.div>
));

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

// Modal-Komponente mit Escape-Handler und ARIA-Attributen für Barrierefreiheit
const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={onClose}
              aria-label="Fenster schließen"
            >
              &times;
            </button>
            <img
              src={project.image}
              alt={project.title}
              className={styles.modalImage}
              loading="lazy"
            />
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <p className={styles.modalDescription}>{project.description}</p>
            <div className={styles.modalLinks}>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  Live Demo
                </a>
              )}
              {project.gitLink && (
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkButton}
                >
                  GitHub
                </a>
              )}
            </div>
            {project.features && project.features.length > 0 && (
              <>
                <h4 className={styles.featuresHeading}>Funktionen:</h4>
                <ul className={styles.featuresList}>
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={listVariants}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.projectTech}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    liveLink: PropTypes.string,
    gitLink: PropTypes.string,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [searchTerm, setSearchTerm] = useState("");

  // Projekt-Daten
  const projectsData = useMemo(
    () => [
      {
        title: "Task Timer",
        description:
          "Das Product Timer Dashboard ist eine Webanwendung, die Ihnen hilft, die Zeit für verschiedene Aufgaben zu verfolgen. Verwendet React, CSS Modules, Node.js und MongoDB.",
        features: [
          "Echtzeit-Timer: Start, Pause, Stopp",
          "Kategorien: Aufgaben nach Kategorien sortieren",
          "Tägliche, wöchentliche und monatliche Berichte",
          "PDF-Export",
          "Dark Mode",
          "Responsives Design",
        ],
        liveLink: "https://task-timerv1.netlify.app/",
        gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app",
        image: require("../../assets/images/Timer.png"),
        technologies: ["React", "CSS Modules", "Bootstrap", "Node.js", "MongoDB"],
        category: "Backend",
      },
      {
        title: "Wedding Photography",
        description:
          "Eine Website für Hochzeitsfotografie-Dienstleistungen mit Portfolios, Leistungspaketen und Kundenbewertungen.",
        features: [
          "Responsives Design",
          "Interaktive Galerie",
          "Kontaktformular",
          "Servicepakete",
        ],
        liveLink: "https://aleks-nikolic.netlify.app",
        gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic",
        image: require("../../assets/images/Aleks.png"),
        technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "React"],
        category: "Frontend",
      },
      {
        title: "Kassa Pension",
        description:
          "Kassa ist eine luxuriöse Villa in Bran, Rumänien, die ihre Annehmlichkeiten und Schönheit präsentiert.",
        features: [
          "Detaillierte Zimmerbeschreibung",
          "Verfügbare Einrichtungen",
          "Formular für Buchungsanfragen",
        ],
        liveLink: "https://kassa-v1.netlify.app",
        gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Kassa-Pension-V2",
        image: require("../../assets/images/Kassa.png"),
        technologies: ["Bootstrap", "JavaScript", "React", "Git"],
        category: "Frontend",
      },
      {
        title: "Breakout Game in React",
        description:
          "Eine moderne Version des klassischen Breakout-Spiels mit mehreren Levels, dynamischer Ballgeschwindigkeit und Power-Ups.",
        features: [
          "Mehrere Level",
          "Dynamische Ballgeschwindigkeit",
          "Power-Ups",
          "Soundeffekte",
          "Responsives Design",
          "Maussteuerung",
        ],
        liveLink: "https://breakout-v1.netlify.app/",
        gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Breakout-Game",
        image: require("../../assets/images/Breakout.png"),
        technologies: ["React", "JavaScript", "HTML5", "CSS3"],
        category: "Frontend",
      },
      {
        title: "Tetris Game",
        description:
          "Ein klassisches Tetris-Spiel mit React. Ordnen Sie fallende Tetrominos so an, dass ganze Reihen entstehen, um Punkte zu sammeln.",
        features: [
          "Mehrere Level",
          "Steigende Geschwindigkeit",
          "Responsives Design",
          "Intuitive Steuerung",
          "Soundeffekte",
        ],
        liveLink: "https://tetris-alex93.netlify.app/",
        gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/Tetris-Game",
        image: require("../../assets/images/Tetris.png"),
        technologies: ["React", "JavaScript", "HTML5", "CSS3"],
        category: "Frontend",
      },
    ],
    []
  );

  const filters = ["Alle", "Frontend", "Backend", "UI/UX"];

  // Gefilterte Projekte
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesFilter =
        activeFilter === "Alle" || project.category === activeFilter;
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm, projectsData]);

  // Wechselt den aktiven Filter
  const handleFilterChange = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  // Bestimmt, welche CSS-Klasse wir nutzen: .squareGrid, wenn <= 3 Projekte
  const gridClassName =
    filteredProjects.length <= 3 ? styles.squareGrid : styles.grid;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.header}>
        <h1>Projekte</h1>
        <p>Eine Auswahl meiner professionellen Projekte</p>
      </div>

      {/* Filter-Buttons */}
      <div className={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.activeFilter : ""
            }`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Suchleiste */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Projekte suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {/* Grid der Projekte (oder squareGrid, wenn <= 3 Projekte) */}
      <div className={gridClassName}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={setSelectedProject} />
        ))}
      </div>

      {/* Modal für ausgewähltes Projekt */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
