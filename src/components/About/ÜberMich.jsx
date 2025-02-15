import React from "react";
import styles from "./ÜberMich.module.css";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const ÜberMich = () => {
  return (
    <motion.div
      className={styles.ueberMich}
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Un mic heading cu o icoană */}
      <div className={styles.header}>
        <FaUser className={styles.icon} />
        <h3 className={styles.subtitle}>Wer bin ich?</h3>
      </div>

      <p className={styles.text}>
        Hallo! Ich bin Alexandru, ein leidenschaftlicher Front-End Developer mit
        einem Auge für UI/UX. Ich liebe es, moderne und ansprechende
        Weboberflächen zu gestalten und neue Technologien auszuprobieren.
      </p>
      <p className={styles.text}>
        In meiner Freizeit genieße ich das Lernen neuer Frameworks, das
        Experimentieren mit Design-Tools und die Teilnahme an
        Entwickler-Communities.
      </p>
    </motion.div>
  );
};

export default ÜberMich;
