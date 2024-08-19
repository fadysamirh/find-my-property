import React from "react";
import styles from './apartment-amenities.module.css'
import {AmenityModel} from "@/models/amenity.model";

interface ApartmentAmenitiesProps {
    amenities: AmenityModel[];
}
export default function ApartmentAmenitiesComponent({amenities}: ApartmentAmenitiesProps) {
    return (
      <div className={styles.grid}>
            {amenities.map((amenity, index) => {
                return (
                    <div key={index} className={styles.gridItem}>
                        <p className={styles.text}>{amenity.name}</p>
                    </div>
                )
            })}
      </div>
    );
};
