import styles from '../styles/components/Profile.module.css';
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rodrigoeduardo.png" alt="Rodrigo Eduardo"/>
            <div>
                <strong>Rodrigo Eduardo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}