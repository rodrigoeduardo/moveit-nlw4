import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rodrigoeduardo.png" alt="Rodrigo Eduardo"/>
            <div>
                <strong>Rodrigo Eduardo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}