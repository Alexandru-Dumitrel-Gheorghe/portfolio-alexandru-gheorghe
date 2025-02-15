import React from "react";
import styles from "./Education.module.css";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      degree: "Technisches Gymnasium",
      institution: "Anghel Saligny",
      duration: "2007 – 2011",
      details: "Fachrichtung: Automatisierungselektronik.",
    },
    {
      degree: "IT School Zertifizierung",
      institution: "IT School",
      duration: "2023",
      details:
        "Kurse: Web Development, Frontend-Entwicklung, Frameworks und Bibliotheken, Responsive Design.",
    },
    {
      degree: "UI/UX Design Kurs",
      institution: "IT School",
      duration: "2024",
      details:
        "Spezialisierung auf User Experience Design, Prototyping mit Figma und Wireframing mit Miro.",
      icon: <FaLaptopCode />, // Icon personalizat pentru UI/UX Design
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
    <section id="education" className={styles.education}>
      <h2 className={styles.heading}>Bildung</h2>
      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
          >
            <div className={styles.content}>
              <div className={styles.icon}>
                {edu.icon ? edu.icon : <FaUniversity />}
              </div>
              <div className={styles.details}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <span className={styles.institution}>
                  {edu.institution} | {edu.duration}
                </span>
                <p className={styles.detailsText}>{edu.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Education;
