import React, { useState } from "react";
import styles from "./Certifications.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";

/* Exemplu de array cu mai multe certificări 
   (păstrează doar una dacă vrei un singur certificat). */
const CERTIFICATES = [
  {
    id: 1,
    image: "/images/Certificat.jpg",
    pdfLink: "/certificates/Certificat.pdf",
    title: "Front-End Webentwicklung",
    issuer: "IT School | 08.08.2024",
    description:
      "Dieses Zertifikat wurde an Dumitrel-Alexandru Gheorghe verliehen für die erfolgreiche Teilnahme und den Abschluss des Frontend Webentwicklungsprogramms.",
  },
  // Poți adăuga mai multe certificate după același model
  // {
  //   id: 2,
  //   image: "/images/AnotherCertificate.jpg",
  //   pdfLink: "/certificates/AnotherCertificate.pdf",
  //   title: "React Developer",
  //   issuer: "XYZ Academy | 12.12.2024",
  //   description: "...",
  // },
];

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  /* Deschide modalul și setează certificatul selectat */
  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  /* Închide modalul */
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section className={styles.certificationSection} id="certification">
      <h2 className={styles.heading}>Zertifikate</h2>

      {/* Grid cu toate cardurile de certificate */}
      <div className={styles.grid}>
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div 
              className={styles.imageContainer} 
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={`Zertifikat ${cert.title}`}
                className={styles.diplomaImage}
              />
              <div className={styles.overlay}>
                <span>Klicken zum Vergrößern</span>
              </div>
            </div>

            <div className={styles.details}>
              <h3 className={styles.title}>{cert.title}</h3>
              <span className={styles.issuer}>{cert.issuer}</span>
              <p className={styles.description}>{cert.description}</p>
              <a
                href={cert.pdfLink}
                download
                className={styles.downloadButton}
                onClick={(e) => e.stopPropagation()}
              >
                Zertifikat herunterladen <FaDownload className={styles.icon} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL - folosește AnimatePresence pentru animare la ieșire */}
      <AnimatePresence>
        {modalOpen && selectedCert && (
          <motion.div
            className={styles.modalOverlay}
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <FaTimes />
              </button>
              <img
                src={selectedCert.image}
                alt={`Zertifikat ${selectedCert.title}`}
                className={styles.modalImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
