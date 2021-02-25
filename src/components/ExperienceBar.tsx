import styles from '../styles/components/ExperienceBar.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ExperienceBar() {

    const { currentXp, xpToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentXp * 100)/xpToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>

            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>

                <span className={styles.currentXp} style={{ left: `${percentToNextLevel}%` }}>{currentXp} xp</span>
            </div>

            <span>{xpToNextLevel} xp</span>
        </header>
    )
}