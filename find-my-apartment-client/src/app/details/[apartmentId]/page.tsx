'use client';
import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css'
import ApartmentCarouselComponent from "@/app/components/details/apartment-carousel/apartment-carousel.component";
import ApartmentCardComponent from "@/app/components/details/apartment-card/apartment-card.component";
import ApartmentTitleComponent from "@/app/components/details/apartment-title/apartment-title.component";
import {numberWithCommas} from "@/utilities/utilities";
import HighlightsComponent from "@/app/components/details/highlights/highlights.component";
import ApartmentDescriptionComponent
    from "@/app/components/details/apartment-description/apartment-description.component";
import ApartmentDetailsComponent from "@/app/components/details/apartment-details/apartment-details.component";
import ApartmentAmenitiesComponent from "@/app/components/details/apartment-amenities/apartment-amenities.component";
import ContactInfoComponent from "@/app/components/details/contact-info/contact-info.component";
import {useParams} from "next/navigation";
import {getApartmentDetails, getApartmentList} from "@/network/services/apartment.service";
import {ApartmentDetailsModel} from "@/models/apartment-details.model";
import LoadingComponent from "@/app/components/general/loading/loading.component";
import {Snackbar} from "@mui/material";
import AlertComponent from "@/app/components/general/alert/alert.component";
import AppBarComponent from "@/app/components/general/app-bar/app-bar.component";

export default function DetailsPage() {
    const params = useParams();
    const apartmentId: string = params.apartmentId as string;
    const [apartment, setApartment] = useState({} as ApartmentDetailsModel);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [snackMessage, setSnackMessage] = React.useState('');

    const fetchApartmentDetails = async () => {
        setLoading(true);
        const response = await getApartmentDetails(apartmentId);
        if (response) {
            if (response.status === 200) {
                setHasError(false);
                setOpen(false);
                setSnackMessage('')

                setApartment(response.data.data);
            } else {
                setHasError(true)
                setOpen(true);
                setSnackMessage(response.data.message);
            }
        } else {
            setHasError(true);
            setOpen(true);
            setSnackMessage('Network Error');
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchApartmentDetails();
    }, []);

    return (
        <div>
            <AppBarComponent hasBackButton={true}/>
            {
                loading ? <LoadingComponent/> : hasError ?
                    <AlertComponent callback={fetchApartmentDetails}/> : apartment ?
                        <div className={styles.container}>
                            {apartment.imagesUrls && <ApartmentCarouselComponent images={apartment.imagesUrls}/>}
                            {apartment.price && apartment.title && apartment.createdAt && apartment.address &&
                                <ApartmentCardComponent title={`EGP ${numberWithCommas(apartment.price)}`}
                                                        Component={<ApartmentTitleComponent title={apartment.title}
                                                                                            createdAt={apartment.createdAt}
                                                                                            address={apartment.address}/>}/>}
                            {apartment.description && <ApartmentCardComponent title={'Description'}
                                                                              Component={<ApartmentDescriptionComponent
                                                                                  description={apartment.description}/>}/>}
                            {apartment.numberOfBedrooms && apartment.numberOfBathrooms && apartment.sizeInSquareMeters && apartment.type &&
                                <ApartmentCardComponent title={'Highlights'}
                                                        Component={<HighlightsComponent
                                                            numberOfBedrooms={apartment.numberOfBedrooms}
                                                            numberOfBathrooms={apartment.numberOfBathrooms}
                                                            furnished={apartment.furnished}
                                                            sizeInSquareMeters={apartment.sizeInSquareMeters}
                                                            type={apartment.type}/>}/>}
                            {apartment.paymentOptions && apartment.available && apartment.listingType && apartment.level &&
                                <ApartmentCardComponent title={'Details'}
                                                        Component={<ApartmentDetailsComponent
                                                            paymentOptions={apartment.paymentOptions}
                                                            available={apartment.available}
                                                            listingType={apartment.listingType}
                                                            level={apartment.level}/>}/>}
                            {apartment.amenities && <ApartmentCardComponent title={'Amenities'}
                                                                            Component={<ApartmentAmenitiesComponent
                                                                                amenities={apartment.amenities}/>}/>}
                            {apartment.contactInfo && <ApartmentCardComponent title={'Contact Info'}
                                                                              Component={<ContactInfoComponent
                                                                                  contactInfo={apartment.contactInfo}/>}/>}
                        </div> : <div></div>
            }
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message={snackMessage}
            />
        </div>

    );
}
