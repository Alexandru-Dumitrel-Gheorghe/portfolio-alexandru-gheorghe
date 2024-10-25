// src/components/DarkModeToggle/DarkModeToggle.jsx

import React, { useState, useEffect } from "react";
import styles from "./DarkModeToggle.module.css";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Überprüfen Sie die bevorzugte Farbschemata des Benutzers
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty(
        "--primary-color",
        "var(--dark-primary-color)"
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        "var(--dark-secondary-color)"
      );
      document.documentElement.style.setProperty(
        "--accent-color",
        "var(--dark-accent-color)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "var(--dark-text-color)"
      );
      document.documentElement.style.setProperty(
        "--background-color-light",
        "var(--dark-background-color-light)"
      );
      document.documentElement.style.setProperty(
        "--background-color-dark",
        "var(--dark-background-color-dark)"
      );
    } else {
      document.documentElement.style.setProperty("--primary-color", "#ff6f61");
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#6c5b7b"
      );
      document.documentElement.style.setProperty("--accent-color", "#f8b195");
      document.documentElement.style.setProperty("--text-color", "#333");
      document.documentElement.style.setProperty(
        "--background-color-light",
        "#f0f0f0"
      );
      document.documentElement.style.setProperty(
        "--background-color-dark",
        "#333"
      );
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleDarkMode}
      aria-label="Dark Mode Toggle"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
