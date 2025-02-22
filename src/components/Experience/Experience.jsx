import React from "react";
import styles from "./Experience.module.css";
import { FaBriefcase, FaPencilRuler } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      role: "IT School Certificate",
      company: "IT School",
      duration: "08.08.2024",
      responsibilities: [
        "Awarded to Dumitrel-Alexandru Gheorghe for attending and successfully completing the training program.",
        "Issued 08.08.2024",
        "Website: www.itschool.ro",
        "Certificate No. ITSGO0224FE5904",
      ],
      icon: <FaPencilRuler />, // Poți schimba iconița după preferințe
    },
    {
      role: "UI/UX Designer",
      company: "Freelance",
      duration: "2024",
      responsibilities: [
        "Erstellung von interaktiven Prototypen mit Figma und Miro.",
        "Nutzerforschung und Design Thinking für optimale User Experience.",
        "Wireframing, visuelle Designs und mobile-first Ansätze.",
      ],
      icon: <FaPencilRuler />, // Icon pentru UI/UX Design
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
      // Folosim implicit FaBriefcase dacă nu este definit un icon specific
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
                {exp.icon ? exp.icon : <FaBriefcase />}
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
