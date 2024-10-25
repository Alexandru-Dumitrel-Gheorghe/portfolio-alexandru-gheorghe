// src/components/Certification/Certification.jsx

import React, { useState } from "react";
import styles from "./Certifications.module.css";
import certificateImage from "../../assets/images/Certificat.jpg";
import { motion } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className={styles.certification} id="certification">
      <h2 className={styles.heading}>Mein Zertifikat</h2>

      <motion.div className={styles.card} whileHover={{ scale: 1.05 }}>
        <div className={styles.imageContainer} onClick={toggleModal}>
          <img
            src={certificateImage}
            alt="Zertifikat von Dumitrel-Alexandru Gheorghe"
            className={styles.diplomaImage}
          />
          <div className={styles.overlay}>
            <span>Klicken zum Vergrößern</span>
          </div>
        </div>

        <div className={styles.details}>
          <h3 className={styles.title}>Front-End Webentwicklung</h3>
          <span className={styles.issuer}>IT School | 08.08.2024</span>
          <p className={styles.description}>
            Dieses Zertifikat wurde an Dumitrel-Alexandru Gheorghe verliehen für
            die erfolgreiche Teilnahme und den Abschluss des Frontend
            Webentwicklungsprogramms bei IT School.
          </p>
          <a
            href="/certificates/Certificat.pdf"
            download
            className={styles.downloadButton}
          >
            Zertifikat herunterladen <FaDownload className={styles.icon} />
          </a>
        </div>
      </motion.div>

      {/* Modal for the certificate */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <motion.div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <button className={styles.closeButton} onClick={toggleModal}>
              <FaTimes />
            </button>
            <img
              src={certificateImage}
              alt="Zertifikat von Dumitrel-Alexandru Gheorghe"
              className={styles.modalImage}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certification;
