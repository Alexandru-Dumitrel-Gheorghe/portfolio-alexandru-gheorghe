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
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaEye
} from "react-icons/fa";
import { GoCommit } from "react-icons/go";
import styles from "./GitHubProjects.module.css";

const GITHUB_USERNAME = "Alexandru-Dumitrel-Gheorghe";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubProjects = () => {
  const [repos, setRepos] = useState([]);
  const [commitCounts, setCommitCounts] = useState({}); // Stochează numărul de commit-uri pentru fiecare repo (indexat după repo.id)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch-ul repository-urilor
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
        // Selectăm doar primele 3 repository-uri actualizate recent
        setRepos(data.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Fetch-ul numărului de commit-uri pentru fiecare repository
  useEffect(() => {
    const fetchCommitCounts = async () => {
      if (repos.length > 0) {
        const commitCountsData = await Promise.all(
          repos.map(async (repo) => {
            try {
              const response = await fetch(
                `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?per_page=1`,
                {
                  headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                  },
                }
              );
              if (!response.ok) {
                throw new Error("Failed to fetch commits for " + repo.name);
              }
              // Extragem numărul total de commit-uri din header-ul de paginare
              const linkHeader = response.headers.get("Link");
              let commitCount = 1; // Dacă nu există header, presupunem că există cel puțin un commit
              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                if (match && match[1]) {
                  commitCount = parseInt(match[1], 10);
                }
              }
              return { id: repo.id, commitCount };
            } catch (error) {
              return { id: repo.id, commitCount: "?" };
            }
          })
        );

        const commitCountsMap = {};
        commitCountsData.forEach((item) => {
          commitCountsMap[item.id] = item.commitCount;
        });
        setCommitCounts(commitCountsMap);
      }
    };

    fetchCommitCounts();
  }, [repos]);

  const getTechIcons = (repo) => {
    const lowerName = repo.name.toLowerCase();
    const icons = [];

    if (lowerName.includes("react"))
      icons.push(<FaReact key="react" title="React" />);
    if (lowerName.includes("node"))
      icons.push(<FaNodeJs key="node" title="Node.js" />);
    if (lowerName.includes("js"))
      icons.push(<FaJs key="js" title="JavaScript" />);
    if (lowerName.includes("html"))
      icons.push(<FaHtml5 key="html" title="HTML5" />);
    if (lowerName.includes("css"))
      icons.push(<FaCss3Alt key="css" title="CSS3" />);
    if (lowerName.includes("mongo") || lowerName.includes("db"))
      icons.push(<FaDatabase key="db" title="MongoDB" />);
    if (lowerName.includes("git"))
      icons.push(<FaGitAlt key="git" title="Git" />);

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
              {repo.description
                ? repo.description
                : "Keine Beschreibung verfügbar."}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
            >
              Auf GitHub ansehen <FaExternalLinkAlt />
            </a>
            <div className={styles.repoExtra}>
              <div className={styles.repoStat}>
                <FaStar title="Stars" /> {repo.stargazers_count}
              </div>
              <div className={styles.repoStat}>
                <FaCodeBranch title="Forks" /> {repo.forks_count}
              </div>
              <div className={styles.repoStat}>
                <FaEye title="Watchers" /> {repo.watchers_count}
              </div>
              <div className={styles.repoStat}>
                <GoCommit title="Commits" /> {commitCounts[repo.id] || 0}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHubProjects;
