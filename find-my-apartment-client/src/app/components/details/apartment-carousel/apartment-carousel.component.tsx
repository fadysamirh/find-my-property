'use client';
import React, {useState} from 'react';
import styles from './apartment-carousel.module.css'
import {Carousel} from "react-bootstrap";

interface ApartmentCarouselProps {
    images: string[];
}
export default function ApartmentCarouselComponent({images}: ApartmentCarouselProps) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return <div className={styles.carousel}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map((image, index) => (
                <Carousel.Item key={index} interval={4000}>
                    <img src={image} alt="slides" className={styles.image}/>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
}
