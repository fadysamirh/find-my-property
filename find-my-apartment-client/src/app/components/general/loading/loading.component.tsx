import React from "react";
import styles from "./loading.module.css";
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingComponent() {
    return (
        <div className={styles.container}>
            <CircularProgress/>
        </div>
    );
}
