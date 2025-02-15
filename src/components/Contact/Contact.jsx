import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, message } = formData;

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      setErrorMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setIsSending(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setIsSubmitted(true);
          setFormData(initialFormData);
          setIsSending(false);
        },
        (error) => {
          console.error("Email sending error:", error);
          setErrorMessage("Es gab einen Fehler beim Senden der Nachricht.");
          setIsSending(false);
        }
      );
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Fundal animat subtil */}
      <div className={styles.background}></div>
      <div className={styles.container}>
        <motion.form
          className={styles.form}
          onSubmit={sendEmail}
          noValidate
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={styles.heading}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Kontakt aufnehmen
          </motion.h2>
          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Bitte zögern Sie nicht, mich zu kontaktieren.
          </motion.p>

          {errorMessage && (
            <motion.div
              className={styles.errorMessage}
              role="alert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errorMessage}
            </motion.div>
          )}

          {isSubmitted ? (
            <motion.div
              className={styles.thankYouMessage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.
            </motion.div>
          ) : (
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  Vorname
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.input}
                  placeholder="Bitte Vornamen eingeben..."
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  Nachname
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.input}
                  placeholder="Bitte Nachnamen eingeben..."
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="Bitte E-Mail-Adresse eingeben..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber" className={styles.label}>
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={styles.input}
                  placeholder="Bitte Telefonnummer eingeben..."
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="message" className={styles.label}>
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.textarea}
                  placeholder="Bitte Nachricht eingeben..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          )}

          {!isSubmitted && (
            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSending}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isSending ? "Senden..." : "Absenden"}
            </motion.button>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
