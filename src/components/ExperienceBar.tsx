import styles from '../styles/components/ExperienceBar.module.css';
import { useState, useEffect } from 'react';

export function ExperienceBar() {
    const [counterXp, setCounter] = useState(150); // valor
    const [counterPercentage, setCounterPercentage] = useState(25); // porcentagem

    useEffect(() => {
        setCounter(600*(counterPercentage/100))
    }, [counterPercentage]);

    function increment() {
        if (counterPercentage === 100) {
            alert('Você não pode adicionar mais XP');
        } else {
            setCounterPercentage(counterPercentage + 5);
        }
    }

    return (
        <header className={styles.experienceBar}>
            
            <button type="button" onClick={increment}>+</button>

            <span>0 xp</span>

            <div>
                <div style={{ width: `${counterPercentage}%` }}/>

                <span className={styles.currentXp} style={{ left: `${counterPercentage}%` }}>{counterXp} xp</span>
            </div>

            <span>600 xp</span>
        </header>
    )
}