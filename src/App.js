import React from "react";
import styles from "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import GitHubProjects from "./components/GitHubProjects/GitHubProjects"; // New GitHub projects component
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // ScrollToTop component

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="github-projects">
          <GitHubProjects username="YOUR_GITHUB_USERNAME" count={5} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
