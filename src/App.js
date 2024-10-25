// src/App.jsx
import React from "react";
import styles from "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <About />
        <Resume />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
