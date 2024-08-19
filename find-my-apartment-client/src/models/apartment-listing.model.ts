import {ListingTypeEnum} from "@/enums/listing-type.enum";
import {RentPaymentFrequencyEnum} from "@/enums/rent-payment-frequency.enum";

export interface ApartmentListingModel {
    _id: string;
    title: string;
    description: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    sizeInSquareMeters: string;
    price: number;
    imagesUrls: string[];
    address: AddressModel;
    listingType: ListingTypeEnum;
    rentPaymentFrequency: RentPaymentFrequencyEnum;
}
