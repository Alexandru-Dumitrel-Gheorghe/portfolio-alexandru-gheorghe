// src/components/Resume.jsx

import React from "react";
import styles from "./Resume.module.css";
import {
  FaDownload,
  FaBriefcase,
  FaUniversity,
  FaCertificate,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Resume = () => {
  const resumeSections = [
    {
      title: "Berufserfahrung",
      icon: <FaBriefcase className={styles.sectionIcon} />,
      items: [
        {
          title: "Freiberuflicher Webentwickler",
          subtitle: "Selbstständig | 2023 – Heute",
          description:
            "Arbeit an freien Projekten zur Webentwicklung und -gestaltung. Entwicklung von benutzerfreundlichen, modernen Webseiten mit React und anderen Technologien. Zusammenarbeit mit Kunden zur Erstellung maßgeschneiderter digitaler Lösungen.",
        },
        {
          title: "Lasertechniker",
          subtitle: "Mlase GmbH | Dezember 2022 – Heute",
          description:
            "Betreuung und Überwachung von Lasersystemen zur Fertigung in der Elektronikindustrie. Durchführung regelmäßiger Wartungen und Fehlerbehebungen. Einhaltung strenger Sicherheitsprotokolle und Qualitätskontrollen.",
        },
        {
          title: "Fertigungsmitarbeiter",
          subtitle: "Pressfinish GmbH | Januar 2022 – Dezember 2022",
          description:
            "Fertigung und Montage von Baugruppen in der Elektronikproduktion. Sicherstellung einer präzisen und termingerechten Fertigung. Zusammenarbeit mit dem Team zur Erhöhung der Produktionsqualität.",
        },
      ],
    },
    {
      title: "Bildung",
      icon: <FaUniversity className={styles.sectionIcon} />,
      items: [
        {
          title: "IT School",
          subtitle: "2023",
          description:
            "Kurse in Web Development, Frontend-Entwicklung, Frameworks und Bibliotheken sowie Responsive Design.",
        },
        {
          title: "Technisches Gymnasium Anghel Saligny",
          subtitle: "2007 – 2011",
          description:
            "Fachrichtung Automatisierungselektronik, Ausbildung in Grundlagen der Elektronik und Automatisierung.",
        },
      ],
    },
    {
      title: "Zertifikate",
      icon: <FaCertificate className={styles.sectionIcon} />,
      items: [
        {
          title: "Certified React Developer",
          subtitle: "React Training Institute | 2021",
          description: "",
        },
        {
          title: "Full Stack Web Development",
          subtitle: "Online Bootcamp | 2020",
          description: "",
        },
      ],
    },
  ];

  return (
    <section id="resume" className={styles.resume}>
      <h2 className={styles.heading}>Lebenslauf</h2>
      <motion.div
        className={styles.resumeContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {resumeSections.map((section, index) => (
          <motion.div
            key={index}
            className={styles.resumeSection}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className={styles.sectionTitle}>
              {section.icon}
              {section.title}
            </h3>
            {section.items.map((item, idx) => (
              <div key={idx} className={styles.item}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <span className={styles.itemSubtitle}>{item.subtitle}</span>
                {item.description && (
                  <p className={styles.itemDescription}>{item.description}</p>
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* Link to download the Lebenslauf PDF */}
      <a href="/Lebenslauf.pdf" download className={styles.downloadButton}>
        Herunterladen <FaDownload className={styles.downloadIcon} />
      </a>
    </section>
  );
};

export default Resume;
