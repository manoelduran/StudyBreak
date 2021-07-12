
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../Countdown/Countdown.module.scss';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext)
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function handleStartCountdown() {
    setIsActive(true);
  }

  function handleResetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time])
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
              onClick={handleResetCountdown}
            >
              Cancelar
            </button>
          ) : (
            <button
              type="button"
              className={styles.contdawnButton}
              onClick={handleStartCountdown}
            >
              Lets Play?
            </button>)}
        </>
      )

      }

    </div>
  );
}