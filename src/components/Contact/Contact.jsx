// src/components/Contact/Contact.jsx

import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validarea datelor din formular
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }

    // Trimiterea emailului folosind EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Înlocuiește cu ID-ul serviciului tău EmailJS
        "YOUR_TEMPLATE_ID", // Înlocuiește cu ID-ul șablonului tău EmailJS
        e.target,
        "YOUR_USER_ID" // Înlocuiește cu ID-ul tău de utilizator EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Es gab einen Fehler beim Senden der Nachricht.");
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.heading}>Kontakt</h2>
      <motion.div
        className={styles.contactInfo}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:alexandrugheorghe@example.com">
            alexandrugheorghe@example.com
          </a>
        </div>
        <div className={styles.infoItem}>
          <FaPhone className={styles.icon} />
          <a href="tel:+491234567890">+49 123 456 7890</a>
        </div>
        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Fürstenfeldbruck, Deutschland</span>
        </div>
      </motion.div>
      {isSubmitted ? (
        <motion.p
          className={styles.thankYou}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.
        </motion.p>
      ) : (
        <motion.form
          className={styles.form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ihr Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ihre E-Mail-Adresse"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Nachricht</label>
            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Senden
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default Contact;
