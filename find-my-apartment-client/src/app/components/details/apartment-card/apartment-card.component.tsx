import React from "react";
import styles from './apartment-card.module.css'

interface ApartmentCardProps {
    title: string;
    Component: React.JSX.Element;
}

export default function ApartmentCardComponent({title, Component}: ApartmentCardProps) {
    return (<div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {Component}
    </div>)
}
