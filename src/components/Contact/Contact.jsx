import React, { useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";

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

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNumber, message } = formData;

    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      setErrorMessage("Bitte füllen Sie alle Felder aus.");
      return;
    }

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
          setErrorMessage("");
        },
        (error) => {
          console.error("Email sending error:", error);
          setErrorMessage("Es gab einen Fehler beim Senden der Nachricht.");
        }
      );
  };

  return (
    <div className={styles.contact_us_2}>
      <div
        className={`${styles["responsive-container-block"]} ${styles["big-container"]}`}
      >
        <div className={styles.blueBG}></div>
        <div
          className={`${styles["responsive-container-block"]} ${styles.container}`}
        >
          <form className={styles["form-box"]} onSubmit={sendEmail}>
            <div
              className={`${styles["container-block"]} ${styles["form-wrapper"]}`}
            >
              <p
                className={`${styles["text-blk"]} ${styles["contactus-head"]}`}
              >
                Kontakt aufnehmen
              </p>
              <p
                className={`${styles["text-blk"]} ${styles["contactus-subhead"]}`}
              >
                Bitte zögern Sie nicht, mich zu kontaktieren.
              </p>

              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}

              {isSubmitted ? (
                <p className={styles.thankYou}>
                  Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen
                  melden.
                </p>
              ) : (
                <div className={styles["responsive-container-block"]}>
                  <div
                    className={`${styles["responsive-cell-block"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-6"]}`}
                  >
                    <p
                      className={`${styles["text-blk"]} ${styles["input-title"]}`}
                    >
                      VORNAME
                    </p>
                    <input
                      className={styles.input}
                      name="firstName"
                      placeholder="Bitte Vornamen eingeben..."
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}
                  >
                    <p
                      className={`${styles["text-blk"]} ${styles["input-title"]}`}
                    >
                      NACHNAME
                    </p>
                    <input
                      className={styles.input}
                      name="lastName"
                      placeholder="Bitte Nachnamen eingeben..."
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}
                  >
                    <p
                      className={`${styles["text-blk"]} ${styles["input-title"]}`}
                    >
                      E-MAIL
                    </p>
                    <input
                      className={styles.input}
                      type="email"
                      name="email"
                      placeholder="Bitte E-Mail-Adresse eingeben..."
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`${styles["responsive-cell-block"]} ${styles["wk-desk-6"]} ${styles["wk-ipadp-6"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]}`}
                  >
                    <p
                      className={`${styles["text-blk"]} ${styles["input-title"]}`}
                    >
                      TELEFONNUMMER
                    </p>
                    <input
                      className={styles.input}
                      name="phoneNumber"
                      placeholder="Bitte Telefonnummer eingeben..."
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div
                    className={`${styles["responsive-cell-block"]} ${styles["wk-tab-12"]} ${styles["wk-mobile-12"]} ${styles["wk-desk-12"]} ${styles["wk-ipadp-12"]}`}
                  >
                    <p
                      className={`${styles["text-blk"]} ${styles["input-title"]}`}
                    >
                      IHRE NACHRICHT
                    </p>
                    <textarea
                      className={styles.textinput}
                      name="message"
                      placeholder="Bitte Nachricht eingeben..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              )}

              {!isSubmitted && (
                <button type="submit" className={styles["submit-btn"]}>
                  Absenden
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
