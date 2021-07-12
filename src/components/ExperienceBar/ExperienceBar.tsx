import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../ExperienceBar/styles.module.scss';

export function ExperienceBar() {
  const { currentExperience, experienceTonNextLevel } = useContext(ChallengesContext)
  const percentToNextLevel = Math.round(currentExperience * 100) / (experienceTonNextLevel)
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div className={styles.experience}>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceTonNextLevel} xp</span>
    </header>
  );
}