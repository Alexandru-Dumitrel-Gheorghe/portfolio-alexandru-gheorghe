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
      title: "Produkt Timer",
      description:
        "Entwicklung einer modernen Webanwendung mit React und Node.js.",
      liveLink: "https://task-timerv1.netlify.app/",
      gitLink: "https://github.com/alexandrugheorghe/produkt-timer",
      image: require("../../assets/images/Timer.png"),
      technologies: ["React", "CSS3", "Node.js"],
    },
    {
      title: "Portfolio Website",
      description:
        "Eine interaktive Webseite, die JavaScript und MongoDB verwendet.",
      liveLink: "https://aleks-nikolic.netlify.app",
      gitLink: "https://github.com/alexandrugheorghe/projekt2",
      image: require("../../assets/images/Aleks.png"),
      technologies: ["JavaScript", "HTML5", "MongoDB"],
    },
    {
      title: "Kassen System",
      description:
        "Ein responsives Designprojekt, das Bootstrap und Git verwendet.",
      liveLink: "https://kassa-v1.netlify.app",
      gitLink: "https://github.com/alexandrugheorghe/projekt3",
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
