import { useState, useEffect, useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minute1, minute2] = String(minutes).padStart(2, "0").split(""); // padstart = se n tiver 2 caracteres, adiciona o 0 no começo

  const [second1, second2] = String(seconds).padStart(2, "0").split(""); // padstart = se n tiver 2 caracteres, adiciona o 0 no começo

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minute1}</span>
          <span>{minute2}</span>
        </div>
        <span>:</span>
        <div>
          <span>{second1}</span>
          <span>{second2}</span>
        </div>
      </div>

      {hasFinished ? (
        <button className={styles.countdownButton} disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
