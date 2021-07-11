import styles from '../ExperienceBar/styles.module.scss';

export function ExperienceBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div className={styles.experience}>
        <div style={{ width: '50%' }} />
        <span className={styles.currentExperience} style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}