// src/components/SkillCard.jsx

import React from "react";
import styles from "./SkillCard.module.css";
import { motion } from "framer-motion";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 0.6 }}
    >
      {/* Fața Cardului */}
      <div className={`${styles.face} ${styles.front}`}>
        <div className={styles.icon}>{skill.icon}</div>
        <h4 className={styles.skillName}>{skill.name}</h4>
      </div>

      {/* Spatele Cardului */}
      <div className={`${styles.face} ${styles.back}`}>
        <p className={styles.description}>{skill.description}</p>
        <div className={styles.level}>Kompetenzniveau: {skill.level}%</div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
