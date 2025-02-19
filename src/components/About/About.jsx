import React from "react";
import styles from "./About.module.css";
import ÜberMich from "./ÜberMich";
import MeineFähigkeiten from "./MeineFähigkeiten";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Über mich</h2>
          <p className={styles.subtitle}>Lernen Sie mich und meine Fähigkeiten kennen</p>
          <div className={styles.decorLine}></div>
        </motion.div>

        <motion.div
          className={styles.columns}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ÜberMich />
          <MeineFähigkeiten />
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className={styles.scrollCircle}>
            <motion.span
              className={styles.arrow}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
