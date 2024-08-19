import React from "react";
import styles from './listing-type-chip.module.css';
import {ListingTypeEnum} from "@/enums/listing-type.enum";

interface ListingTypeComponentProps {
    listingType: ListingTypeEnum;
}

export default function ListingTypeChipComponent({listingType}: ListingTypeComponentProps) {
    return (
        <div className={styles.chip}>
            <p className={styles.text}>{listingType}</p>
        </div>
    );
}
