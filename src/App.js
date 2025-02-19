import React from "react";
import styles from "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import GitHubProjects from "./components/GitHubProjects/GitHubProjects"; // New GitHub projects component
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // ScrollToTop component
import ChatBot from "./components/ChatBot/ChatBot";

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
        
        <section id="projects">
          <Projects />
        </section>
        <section id="chatbot">
          <ChatBot/>
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
