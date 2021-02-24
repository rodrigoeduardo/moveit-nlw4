import { useState, useEffect } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setActive] = useState(false);
  const [isPaused, setPause] = useState(false);

  const [countdownState, setCountdownState] = useState("Iniciar um ciclo");

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minute1, minute2] = String(minutes).padStart(2, "0").split(""); // padstart = se n tiver 2 caracteres, adiciona o 0 no começo

  const [second1, second2] = String(seconds).padStart(2, "0").split(""); // padstart = se n tiver 2 caracteres, adiciona o 0 no começo

  function startCountdown() {
    if (isActive === true) {
      setPause(true);
      setActive(false);
    } else if (isPaused === true) {
      setPause(false);
      setActive(true);
    } else {
      setActive(true);
    }
  }

  useEffect(() => {
    if (isActive && time > 0 && isPaused === false) {
      setCountdownState("Pausar");
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isPaused === true && time > 0) {
      clearTimeout();
      setCountdownState("Continuar");
    }
  }, [isPaused, isActive, time]);

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
      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        {countdownState}
      </button>
    </div>
  );
}
