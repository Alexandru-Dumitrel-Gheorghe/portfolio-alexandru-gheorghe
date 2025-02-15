import React from "react";
import styles from "./Resume.module.css";
import {
  FaDownload,
  FaBriefcase,
  FaUniversity,
  FaCertificate,
  FaPencilRuler,
  FaCode,
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
          subtitle: "Private Projekte | 2023 – Heute",
          description:
            "Arbeit an privaten Projekten zur Webentwicklung und -gestaltung. Entwicklung von benutzerfreundlichen, modernen Webseiten mit React und anderen Technologien. Zusammenarbeit mit Kunden zur Erstellung maßgeschneiderter digitaler Lösungen.",
        },
        {
          title: "Frontend Web Developer",
          subtitle: "IT School | 2023",
          description:
            "Abschluss des Frontend Web Development Programms. Dabei wurden moderne Technologien wie React, HTML, CSS und JavaScript eingesetzt, um responsive und benutzerfreundliche Webanwendungen zu entwickeln.",
          icon: <FaCode />,
        },
        {
          title: "UI/UX Designer",
          subtitle: "Freelance & IT School | 2024",
          description:
            "Erstellung von interaktiven Prototypen mit Figma und Miro. Nutzerforschung, Wireframing und visuelle Gestaltung für optimierte User Experience.",
          icon: <FaPencilRuler />,
        },
        {
          title: "Lasertechniker",
          subtitle: "Mlase GmbH | Dezember 2022 – Heute",
          description:
            "Betreuung und Überwachung von Lasersystemen zur Fertigung in der Elektronikindustrie. Durchführung regelmäßiger Wartungen und Fehlerbehebungen. Einhaltung strenger Sicherheitsprotokolle und Qualitätskontrollen.",
        },
      ],
    },
    {
      title: "Bildung",
      icon: <FaUniversity className={styles.sectionIcon} />,
      items: [
        {
          title: "UI/UX Design Kurs",
          subtitle: "IT School | 2024",
          description:
            "Vertiefung in User Experience Design, Prototyping mit Figma und Wireframing mit Miro.",
          icon: <FaPencilRuler />,
        },
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
          title: "Front-End Web Developer",
          subtitle: "IT School | 2023",
          description: "Zertifizierung in HTML, CSS, JavaScript und React.",
          icon: <FaCode />,
        },
        {
          title: "UI/UX Design",
          subtitle: "IT School | 2024",
          description: "Zertifizierung in Design Thinking, Prototyping und Wireframing.",
          icon: <FaPencilRuler />,
        },
        {
          title: "Certified React Developer",
          subtitle: "React Training Institute | 2021",
        },
        {
          title: "Full Stack Web Development",
          subtitle: "Online Bootcamp | 2020",
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

      <a href="/Lebenslauf.pdf" download className={styles.downloadButton}>
        Herunterladen <FaDownload className={styles.downloadIcon} />
      </a>
    </section>
  );
};

export default Resume;
