import React from "react";
import styles from "./Experience.module.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      role: "Freiberuflicher Webentwickler",
      company: "Selbstständig",
      duration: "2023 – Heute",
      responsibilities: [
        "Arbeit an freien Projekten zur Webentwicklung und -gestaltung.",
        "Entwicklung von benutzerfreundlichen, modernen Webseiten mit React und anderen Technologien.",
        "Zusammenarbeit mit Kunden zur Erstellung maßgeschneiderter digitaler Lösungen.",
      ],
    },
    {
      role: "Lasertechniker",
      company: "Mlase GmbH",
      duration: "Dezember 2022 – Heute",
      responsibilities: [
        "Betreuung und Überwachung von Lasersystemen zur Fertigung in der Elektronikindustrie.",
        "Durchführung regelmäßiger Wartungen und Fehlerbehebungen.",
        "Einhaltung strenger Sicherheitsprotokolle und Qualitätskontrollen.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>Berufserfahrung</h2>
      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
          >
            <div className={styles.content}>
              <div className={styles.icon}>
                <FaBriefcase />
              </div>
              <div className={styles.details}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.company}>
                  {exp.company} | {exp.duration}
                </span>
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
