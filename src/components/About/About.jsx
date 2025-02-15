import React from "react";
import styles from "./About.module.css";
import ÜberMich from "./ÜberMich";
import MeineFähigkeiten from "./MeineFähigkeiten";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ y: -20, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Über mich
        </motion.h2>

        <motion.div
          className={styles.columns}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ÜberMich />
          <MeineFähigkeiten />
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className={styles.arrow}></span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
