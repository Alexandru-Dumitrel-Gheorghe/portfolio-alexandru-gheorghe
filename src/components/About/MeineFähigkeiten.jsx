import React from "react";
import styles from "./MeineFähigkeiten.module.css";
import { motion } from "framer-motion";

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaBootstrap
} from "react-icons/fa";
import { 
  SiFigma, 
  SiMiro, 
  SiMongodb, 
  SiNodedotjs 
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

// Asociezi fiecare skill cu o culoare
const skillColors = {
  HTML5: "#E96228",       // portocaliu
  CSS3: "#2862E9",        // albastru
  "JavaScript (ES6+)": "#F7DF1E", // galben
  React: "#61DBFB",       // albastru deschis
  "Git & GitHub": "#181717", // negru
  Bootstrap: "#563D7C",   // mov
  "UI/UX Design": "#8E44AD", // un mov deschis
  Figma: "#A259FF",
  Miro: "#FFD02A",
  MongoDB: "#4DB33D",     // verde
  "Node.js": "#3C873A",   // verde
};

const SKILLS = [
  { icon: <FaHtml5 />,       name: "HTML5" },
  { icon: <FaCss3Alt />,     name: "CSS3" },
  { icon: <FaJs />,          name: "JavaScript (ES6+)" },
  { icon: <FaReact />,       name: "React" },
  { icon: <FaGitAlt />,      name: "Git & GitHub" },
  { icon: <FaBootstrap />,   name: "Bootstrap" },
  { icon: <MdDesignServices />, name: "UI/UX Design" },
  { icon: <SiFigma />,       name: "Figma" },
  { icon: <SiMiro />,        name: "Miro" },
  { icon: <SiMongodb />,     name: "MongoDB" },
  { icon: <SiNodedotjs />,   name: "Node.js" },
];

const MeineFähigkeiten = () => {
  return (
    <motion.div
      className={styles.meineFaehigkeiten}
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3 className={styles.subtitle}>Fähigkeiten</h3>

      <div className={styles.skillGrid}>
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillBadge}
            style={{
              // Fondul badge-ului se colorează în funcție de skill
              backgroundColor: skillColors[skill.name] + "20", 
              // "20" -> mic hack pt alpha (transparență)
            }}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // Mic efect la hover
          >
            <span 
              className={styles.iconWrapper}
              style={{ color: skillColors[skill.name] }}
            >
              {skill.icon}
            </span>
            <span className={styles.skillName}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MeineFähigkeiten;
