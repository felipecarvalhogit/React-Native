import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/33544044?s=400&u=451ef00d88a6ba37be2ca0b1f99b89b501500f8a&v=4" alt="Felipe A. Carvalho" />
            <div>
                <strong>Felipe A. Carvalho</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}