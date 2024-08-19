import React from 'react';
import styles from './app-bar.module.css';

export default function AppBarComponent() {
    return (
        <div className={styles.container}>
            <img src={'/images/logo.png'} className={styles.appbarLogo}/>
        </div>
    );
}
