import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaGitAlt,
  FaGithub 
} from "react-icons/fa";
import styles from "./GitHubProjects.module.css";

const GITHUB_USERNAME = "Alexandru-Dumitrel-Gheorghe";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getTechIcons = (repo) => {
    const lowerName = repo.name.toLowerCase();
    const icons = [];

    if (lowerName.includes("react")) icons.push(<FaReact key="react" title="React" />);
    if (lowerName.includes("node")) icons.push(<FaNodeJs key="node" title="Node.js" />);
    if (lowerName.includes("js")) icons.push(<FaJs key="js" title="JavaScript" />);
    if (lowerName.includes("html")) icons.push(<FaHtml5 key="html" title="HTML5" />);
    if (lowerName.includes("css")) icons.push(<FaCss3Alt key="css" title="CSS3" />);
    if (lowerName.includes("mongo") || lowerName.includes("db"))
      icons.push(<FaDatabase key="db" title="MongoDB" />);
    if (lowerName.includes("git")) icons.push(<FaGitAlt key="git" title="Git" />);

    return icons;
  };

  if (loading) {
    return <div className={styles.loader}>Lade Projekte...</div>;
  }

  if (error) {
    return <div className={styles.error}>Fehler: {error}</div>;
  }

  return (
    <section id="github-projects" className={styles.githubProjects}>
      <h2 className={styles.heading}>
        <FaGithub className={styles.githubIcon} /> Neueste GitHub-Projekte
      </h2>
      <div className={styles.projectGrid}>
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className={styles.repoName}>{repo.name}</h3>
            <div className={styles.techIcons}>{getTechIcons(repo)}</div>
            <p className={styles.repoDescription}>
              {repo.description ? repo.description : "Keine Beschreibung verfügbar."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
            >
              Auf GitHub ansehen <FaExternalLinkAlt />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;
