import React from "react";
import styles from "./SkillCard.module.css";

const SkillCard = ({ skill }) => {
  return (
    <div className={styles.skillCard} style={{ borderColor: skill.color }}>
      <div className={styles.skillIcon} style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <h4>{skill.name}</h4>
    </div>
  );
};

export default SkillCard;
