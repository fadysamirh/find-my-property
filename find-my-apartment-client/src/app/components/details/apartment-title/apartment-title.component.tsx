import styles from './apartment-title.module.css'
import React from "react";
import {formatDate} from "@/utilities/utilities";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
interface ApartmentTitleProps {
    title: string;
    createdAt: string;
    address: AddressModel;
}

export default function ApartmentTitleComponent({title, createdAt, address}: ApartmentTitleProps) {
    return (
        <div className={styles.container}>
            <div className={styles.spaceBetweenRow}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.date}>{formatDate(createdAt)}</p>
            </div>
            <span className={styles.locationRow}>
                    <FmdGoodOutlinedIcon fontSize={'small'}/>
                    <p className={styles.address}>{address.street}, {address.city}, {address.state}</p>
            </span>
        </div>
    )
}
