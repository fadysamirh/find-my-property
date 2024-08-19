import mongoose, {Document} from 'mongoose';
import {Schema} from 'mongoose';
import {ApartmentTypeEnum} from "../../constants/enums/apartment-type.enum";
import {IAmenity} from "./amenity.model";
import {PaymentOptionsEnum} from "../../constants/enums/payment-options.enum";
import {ListingTypeEnum} from "../../constants/enums/listing-type.enum";

import AmenityModel from './amenity.model';
import {RentPaymentFrequencyEnum} from "../../constants/enums/rent-payment-frequency.enum";

export interface IAddress {
    street: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
};

export interface IContactInfo {
    name: string;
    email: string;
    phone: string;
};

export interface IApartment extends Document {
    title: string;
    description: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    sizeInSquareMeters: string;
    price: number;
    address: IAddress;
    imagesUrls: string[];
    contactInfo: IContactInfo;
    available: boolean;
    createdAt: Date;
    level: string;
    paymentOptions: string;
    furnished: boolean;
    type: string;
    amenities: IAmenity[];
    listingType: string;
    rentPaymentFrequency: string;
};

const apartmentSchema: Schema = new Schema<IApartment>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    numberOfBedrooms: {type: Number, required: true},
    numberOfBathrooms: {type: Number, required: true},
    sizeInSquareMeters: {type: String, required: true},
    price: {type: Number, required: true},
    address: {
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        latitude: {type: Number, required: true},
        longitude: {type: Number, required: true},
    },
    imagesUrls: [{type: String, required: true}],
    contactInfo: {
        name: {type: String, required: true},
        email: {type: String, required: true},
        phone: {type: String, required: true},
    },
    available: {type: Boolean, required: true},
    createdAt: {type: Date, default: Date.now},
    level: {type: String, required: false},
    paymentOptions: [{type: String, enum: [...Object.values(PaymentOptionsEnum)]}],
    furnished: {type: Boolean, required: false},
    type: {type: String, required: true, enum: [...Object.values(ApartmentTypeEnum)]},
    amenities: [AmenityModel.schema],
    listingType: {type: String, required: true, enum: [...Object.values(ListingTypeEnum)]},
    rentPaymentFrequency: {type: String, required: false, enum: [...Object.values(RentPaymentFrequencyEnum)]},
});

export default mongoose.model('apartment', apartmentSchema);
