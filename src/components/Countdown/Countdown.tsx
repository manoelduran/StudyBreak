
import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../Countdown/Countdown.module.scss';



export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.countdownContainer}>
        <div className={styles.contdawnRight}>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span className={styles.span}>:</span>
        <div className={styles.contdawnLeft}>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button
          type="button"
          disabled
          className={styles.contdawnButton}
        >
          Parabéns! Está na hora de um desafio.
        </button>) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.contdawnButton} ${styles.contdawnButtonActive}`}
              onClick={resetCountdown}
            >
              Cancelar
            </button>
          ) : (
            <button
              type="button"
              className={styles.contdawnButton}
              onClick={startCountdown}
            >
              Lets Play?
            </button>)}
        </>
      )

      }

    </div>
  );
}