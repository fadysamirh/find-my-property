import {ContactInfoModel} from "@/models/contact-info.model";
import {AmenityModel} from "@/models/amenity.model";
import {ListingTypeEnum} from "@/enums/listing-type.enum";

export interface ApartmentDetailsModel {
    _id?: string;
    title?: string;
    description?: string;
    address?: AddressModel;
    contactInfo?: ContactInfoModel;
    numberOfBedrooms?: number;
    numberOfBathrooms?: number;
    sizeInSquareMeters?: string; // Consider making this a number
    price?: number;
    imagesUrls?: string[];
    available?: boolean;
    paymentOptions?: string[];
    type?: string;
    amenities?: AmenityModel[];
    listingType?: ListingTypeEnum;
    createdAt?: string; // Consider making this a Date
    furnished?: boolean;
    level?: string;
    __v?: number;
}
