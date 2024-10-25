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
        "The Product Timer Dashboard is a web-based application designed to help users track time spent on different products. It offers functionalities such as starting, pausing, and stopping timers for specific products under various categories. The app includes daily data storage, PDF report generation, and a real-time chart and calendar to visualize time spent on tasks. It supports dark mode and is fully responsive.",
      liveLink: "https://task-timerv1.netlify.app/",
      gitLink: "https://github.com/Alexandru-Dumitrel-Gheorghe/task-timer-app",
      image: require("../../assets/images/Timer.png"),
      technologies: ["React", "CSS3", "Bootstrap", "Node.js", "MongoDB"],
    },
    {
      title: "Wedding Photography",
      description:
        "This project is a modern and professional website designed for wedding photography services. The website is built using React, CSS Modules, and various other tools to ensure responsiveness, animations, and ease of use. The website showcases photography portfolios, service packages, testimonials, a contact form, and more.",
      liveLink: "https://aleks-nikolic.netlify.app",
      gitLink:
        "https://github.com/Alexandru-Dumitrel-Gheorghe/Aleksander-Nikolic",
      image: require("../../assets/images/Aleks.png"),
      technologies: ["JavaScript", "HTML5", "MongoDB"],
    },
    {
      title: "Kassa Pension",
      description:
        "Kassa is a luxurious vacation home located in Bran, Romania. This project is a React-based website designed to showcase the beauty and amenities of the Kassa property, allowing potential guests to explore rooms, facilities, and other offerings.",
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
