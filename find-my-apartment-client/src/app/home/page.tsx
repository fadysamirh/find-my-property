'use client';
import React, {useEffect, useState} from 'react';
import ApartmentListingCardComponent
    from "@/app/components/home/apartment-listing-card/apartment-listing-card.component";
import {getApartmentList} from "@/network/services/apartment.service";
import styles from './page.module.css'
import {useRouter} from "next/navigation";
import LoadingComponent from "@/app/components/general/loading/loading.component";
import AlertComponent from "@/app/components/general/alert/alert.component";
import {Pagination, Snackbar} from "@mui/material";
import AppBarComponent from "@/app/components/general/app-bar/app-bar.component";
import {ApartmentListingModel} from "@/models/apartment-listing.model";

export default function HomePage() {
    const router = useRouter();

    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [snackMessage, setSnackMessage] = React.useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(0);
    const fetchApartments = async () => {
        setLoading(true);
        const response = await getApartmentList(currentPage, limit);
        if (response) {
            setHasError(false);
            if (response.status === 200) {
                setApartments(response.data.data);
                setTotalPages(response.data.totalPages);
                setOpen(false);
                setSnackMessage('')
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
        fetchApartments();
    }, [currentPage]);

    return (
        <div>
            <AppBarComponent hasBackButton={false}/>
            {loading ? <LoadingComponent/> : hasError ? <AlertComponent callback={fetchApartments}/> :
                <div className={styles.container}>
                    {apartments.map((apartment: ApartmentListingModel, index: number) => (
                        <div key={index} onClick={() => router.push(`/details/${apartment._id}`)}><ApartmentListingCardComponent
                            apartment={apartment} /></div>
                    ))}
                    <div className={styles.paginationContainer}>
                        <Pagination onChange={(event, page) => {
                            setCurrentPage(page)
                        }} count={totalPages} page={currentPage}/>
                    </div>
                </div>}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message={snackMessage}
            />
        </div>

    );
}
