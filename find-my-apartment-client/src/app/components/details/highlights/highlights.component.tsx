import React from "react";
import styles from './highlights.module.css'
import ChairIcon from '@mui/icons-material/ChairOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import {ListingTypeEnum} from "@/enums/listing-type.enum";
interface HighlightsProps {
    type: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    furnished?: boolean;
    sizeInSquareMeters: string;
}

export default function HighlightsComponent({
                                                type,
                                                numberOfBedrooms,
                                                numberOfBathrooms,
                                                furnished,
                                                sizeInSquareMeters
                                            }: HighlightsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.centeredColumn}>
                <div className={styles.centeredColumn}>
                    <BusinessOutlinedIcon fontSize={'large'}/>
                    <p className={styles.text}>Type</p>
                </div>
                <h6 className={styles.text}>{type}</h6>
            </div>
            <div className={styles.centeredColumn}>
                <div className={styles.centeredColumn}>
                    <CalendarViewMonthOutlinedIcon fontSize={'large'}/>
                    <p className={styles.text}>Area (m²)</p>
                </div>
                <h6 className={styles.text}>{sizeInSquareMeters}</h6>
            </div>
            <div className={styles.centeredColumn}>
                <div className={styles.centeredColumn}>
                    <KingBedOutlinedIcon fontSize={'large'}/>
                    <p className={styles.text}>Bedrooms</p>
                </div>
                <h6 className={styles.text}>{numberOfBedrooms}</h6>
            </div>
            <div className={styles.centeredColumn}>
                <div className={styles.centeredColumn}>
                    <ShowerOutlinedIcon fontSize={'large'}/>
                    <p className={styles.text}>Bathrooms</p>
                </div>
                <h6 className={styles.text}>{numberOfBathrooms}</h6>
            </div>
            {
                furnished &&
                <div className={styles.centeredColumn}>
                    <div className={styles.centeredColumn}>
                        <ChairIcon fontSize={'large'}/>
                        <p className={styles.text}>Furnished</p>
                    </div>
                    <h6 className={styles.text}>{furnished ? 'Yes' : 'No'}</h6>
                </div>
            }
        </div>
    )
}
