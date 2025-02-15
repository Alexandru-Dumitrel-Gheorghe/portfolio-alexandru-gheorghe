import React from "react";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <motion.p
          className={styles.copy}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Alexandru Gheorghe. Alle Rechte
          vorbehalten.
        </motion.p>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>+49 1577 2158264</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>gheorghe.93@icloud.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span>Fürstenfeldbruck, Deutschland</span>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <motion.a
            href="https://github.com/Alexandru-Dumitrel-Gheorghe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialLink}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/alexandru-gheorghe-a19a19314/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialLink}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className={styles.socialLink}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="mailto:gheorghe.93@icloud.com"
            aria-label="E-Mail"
            className={styles.socialLink}
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
