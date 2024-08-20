import React from 'react';
import styles from './app-bar.module.css';
import {useRouter} from "next/navigation";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface AppBarProps {
    hasBackButton?: boolean;
}

export default function AppBarComponent({hasBackButton = false}: AppBarProps) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            {hasBackButton && <div className={styles.backButton} onClick={() => router.back()}>
                <ArrowBackIosNewIcon sx={{fontSize: { xs: 20, sm: 20, md: 20, lg: 26 } }}/>
            </div>}
            <img src={'/images/logo.png'} className={styles.appbarLogo}/>
        </div>
    );
}
