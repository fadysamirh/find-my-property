import React from 'react';
import styles from './apartment-listing-card.module.css'
import {ListingTypeEnum} from "@/enums/listing-type.enum";
import {RentPaymentFrequencyEnum} from "@/enums/rent-payment-frequency.enum";
import ListingTypeChipComponent from "@/app/components/home/listing-type-chip/listing-type-chip.component";
import {numberWithCommas} from "@/utilities/utilities";
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import {ApartmentListingModel} from "@/models/apartment-listing.model";

interface ApartmentListingCardProps {
    apartment: ApartmentListingModel
}

export default function ApartmentListingCardComponent({apartment}: ApartmentListingCardProps) {
    return (
        <div className={styles.container}>
            <img src={apartment.imagesUrls[0]} alt={"Apartment Image"} className={styles.img}/>
            <div className={styles.column}>
                <span className={styles.spaceBetweenRow}>
                    <span className={styles.priceRow}>
                        <h1 className={styles.price}>EGP {numberWithCommas(apartment.price)}</h1>
                        <p className={styles.paymentFrequency}>{apartment.listingType === ListingTypeEnum.RENT ? apartment.rentPaymentFrequency : ''}</p>
                    </span>
                    <ListingTypeChipComponent listingType={apartment.listingType}/>
                </span>
                <h2 className={styles.title}>{apartment.title}</h2>
                <p className={styles.description}>{apartment.description}</p>
                <span className={styles.detailsContainer}>
                    <span className={styles.detailsRow}>
                        <KingBedOutlinedIcon sx={{fontSize: { xs: 20, sm: 20, md: 20, lg: 26 } }}/>
                        <p className={styles.details}>{apartment.numberOfBedrooms}</p>
                    </span>
                    <span className={styles.detailsRow}>
                        <ShowerOutlinedIcon sx={{fontSize: { xs: 20, sm: 20, md: 20, lg: 26 } }}/>
                        <p className={styles.details}>{apartment.numberOfBathrooms}</p>
                    </span>
                    <span className={styles.detailsRow}>
                        <CalendarViewMonthOutlinedIcon sx={{fontSize: { xs: 20, sm: 20, md: 20, lg: 26 } }}/>
                        <p className={styles.details}>{apartment.sizeInSquareMeters} SQM</p>
                    </span>
                </span>
                <span className={styles.detailsRow}>
                        <FmdGoodOutlinedIcon sx={{fontSize: { xs: 20, sm: 20, md: 20, lg: 26 } }}/>
                    <p className={styles.address}>{apartment.address.street}, {apartment.address.city}, {apartment.address.state}</p>
                </span>
            </div>
        </div>
    )
        ;
}
