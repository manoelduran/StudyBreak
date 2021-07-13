import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../LevelUpModal/LevelUpModal.module.scss';
export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns!</strong>
        <p>Você acabou de alcançar o nivel {level}.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.png" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}