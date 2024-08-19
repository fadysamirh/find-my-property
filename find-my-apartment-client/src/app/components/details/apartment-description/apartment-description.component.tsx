import React from "react";
import styles from './apartment-description.module.css';

interface ApartmentDescriptionProps {
    description: string;
}

export default function ApartmentDescriptionComponent({description}: ApartmentDescriptionProps) {
    return (
            <p className={styles.description}>{description}</p>
    );
}
