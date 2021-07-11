import styles from '../ChallengeBox/ChallengeBox.module.scss';
export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Receba 400 de xp</header>
          <main>
            <img src="" alt="" />
            <strong>Novo desafio:</strong>
            <p>Levante e faça as atividades: 3 séries de 10 flexões e um 3 séries de 10 abdominais</p>
          </main>
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
