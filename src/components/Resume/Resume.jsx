import React from "react";
import styles from "./Resume.module.css";
import {
  FaDownload,
  FaBriefcase,
  FaUniversity,
  FaCertificate,
  FaPencilRuler,
  FaCode,
  FaStar,
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
            "Arbeit an privaten Projekten im Bereich Webentwicklung und -design. Entwicklung benutzerfreundlicher, moderner Webseiten mit React und weiteren Technologien. Enge Zusammenarbeit mit Kunden zur Erstellung maßgeschneiderter digitaler Lösungen.",
          icon: <FaStar className={styles.itemIcon} />,
        },
        {
          title: "Frontend Web Developer",
          subtitle: "IT School | 2023",
          description:
            "Abschluss des Frontend Web Development Programms. Einsatz moderner Technologien wie React, HTML, CSS und JavaScript zur Entwicklung responsiver und benutzerfreundlicher Webanwendungen.",
          icon: <FaCode className={styles.itemIcon} />,
        },
        {
          title: "UI/UX Designer",
          subtitle: "Freelance & IT School | 2024",
          description:
            "Erstellung interaktiver Prototypen mit Figma und Miro. Nutzerforschung, Erstellung von Wireframes und visuelle Gestaltung zur Optimierung der User Experience.",
          icon: <FaPencilRuler className={styles.itemIcon} />,
        },
        {
          title: "Lasertechniker",
          subtitle: "Mlase GmbH | Dezember 2022 – Heute",
          description:
            "Betreuung und Überwachung von Lasersystemen in der Elektronikfertigung. Durchführung regelmäßiger Wartungen und Fehlerbehebungen unter Einhaltung strenger Sicherheitsprotokolle und Qualitätskontrollen.",
          icon: <FaStar className={styles.itemIcon} />,
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
            "Vertiefung im Bereich User Experience Design, Prototyping mit Figma und Wireframing mit Miro.",
          icon: <FaPencilRuler className={styles.itemIcon} />,
        },
        {
          title: "IT School",
          subtitle: "2023",
          description:
            "Kurse in Webentwicklung, Frontend-Entwicklung, Frameworks und Bibliotheken sowie Responsive Design.",
          icon: <FaCode className={styles.itemIcon} />,
        },
        {
          title: "Technisches Gymnasium Anghel Saligny",
          subtitle: "2007 – 2011",
          description:
            "Fachrichtung Automatisierungselektronik – Ausbildung in Elektronik und Automatisierung.",
          icon: <FaStar className={styles.itemIcon} />,
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
          description:
            "Zertifizierung in HTML, CSS, JavaScript und React.",
          icon: <FaCode className={styles.itemIcon} />,
        },
        {
          title: "UI/UX Design",
          subtitle: "IT School | 2024",
          description:
            "Zertifizierung in Design Thinking, Prototyping und Wireframing.",
          icon: <FaPencilRuler className={styles.itemIcon} />,
        },
      ],
    },
  ];

  return (
    <section id="resume" className={styles.resume}>
      <h2 className={styles.heading}>Lebenslauf</h2>

      {/* Animation mit Stagger für die Abschnitte */}
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
                <div className={styles.itemHeader}>
                  {item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                </div>
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
        Lebenslauf <FaDownload className={styles.downloadIcon} />
      </a>
      <div className={styles.waveWrapper}>
        <svg
          className={styles.wave}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,240C672,267,768,245,864,213.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Resume;
