import React from "react";
import styles from './apartment-details.module.css'
import {ListingTypeEnum} from "@/enums/listing-type.enum";

interface ApartmentDetailsProps {
    paymentOptions: string[];
    available: boolean;
    listingType: ListingTypeEnum;
    level?: string;
}

export default function ApartmentDetailsComponent({
                                                      paymentOptions,
                                                      available,
                                                      listingType,
                                                      level
                                                  }: ApartmentDetailsProps) {
    return (
        <div className={styles.grid}>
            {level && <div className={styles.gridItem}>
                <p className={styles.text}>Level</p>
                <h6 className={styles.text}>{level}</h6>
            </div>}
            <div className={styles.gridItem}>
                <p className={styles.text}>Payment Options</p>
                <h6 className={styles.text}>{paymentOptions.join(' or ')}</h6>
            </div>
            <div className={styles.gridItem}>
                <p className={styles.text}>Listing Type</p>
                <h6 className={styles.text}>{listingType}</h6>
            </div>
            <div className={styles.gridItem}>
                <p className={styles.text}>Available</p>
                <h6 className={styles.text}>{available ? 'Yes' : 'No'}</h6>
            </div>
        </div>
    )
};
