import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../ChallengeBox/ChallengeBox.module.scss';
export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Receba {activeChallenge.amount} de xp</header>
          <main>
            <img src="/icons/workout.png" width="100px" height="100px" alt="" />
            <strong>Novo desafio:</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={completeChallenge}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Comece a jogar para poder receber seus desafios!</strong>
          <p>
            <img src="icons/levelup.png" width="100px" height="100px" alt="Level up" />
            Complete seus desafios para avançar de level!
          </p>
        </div>
      )
      }
    </div >
  );
}
