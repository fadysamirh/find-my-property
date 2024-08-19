import React from "react";
import styles from './contact-info.module.css'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {ContactInfoModel} from "@/models/contact-info.model";
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
interface ContactInfoProps {
    contactInfo: ContactInfoModel
}

export default function ContactInfoComponent({contactInfo}: ContactInfoProps) {
    return <div className={styles.container}>
        <div className={styles.row}>
            <BadgeOutlinedIcon fontSize={'medium'}/>
            <h6 className={styles.text}>{contactInfo.name}</h6>
        </div>
        <div className={styles.row}>
            <PhoneAndroidOutlinedIcon fontSize={'medium'}/>
            <h6 className={styles.text}><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></h6>
        </div>
        <div className={styles.row}>
            <EmailOutlinedIcon fontSize={'medium'}/>
            <h6 className={styles.email} onClick={() => window.location.href = `mailto:${contactInfo.email}`}>{contactInfo.email}</h6>
        </div>
    </div>
}
