import React from 'react';
import styles from './alert.module.css';

interface AlertProps {
    callback: () => void;
}
export default function AlertComponent({callback}: AlertProps) {
    return <div className={styles.container}>
        <img src="/images/alert.png" alt="alert" className={styles.alertImage}/>
        <h2 className={styles.text}>Whoops... something went wrong please try again later.</h2>
        <button className={styles.button} onClick={callback}><p className={styles.buttonText}>Try again</p></button>
    </div>
};
