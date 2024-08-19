import {Request, Response} from "express";
import {notFound, ok, serverError} from "../../constants/network/response";
import ApartmentModel from "../../models/mongo/apartment.model";
import {
    APARTMENT_CREATED_SUCCESSFULLY, APARTMENT_DETAILS_FETCHED_SUCCESSFULLY, APARTMENT_NOT_FOUND,
    APARTMENTS_FETCHED_SUCCESSFULLY
} from "../../constants/network/apartment-response-message";
import AmenityModel from "../../models/mongo/amenity.model";
import {AMENITY_NOT_FOUND} from "../../constants/network/amenity-response-message";

export const createApartment = async (req: Request, res: Response) => {
    try {
        const amenitiesFound = req.body.amenitiesIds
        const amenitiesModels = [];

        for (let i = 0; i < amenitiesFound.length; i++) {
            const amenity = await AmenityModel.findById(amenitiesFound[i]);
            if (!amenity) {
                return notFound(res, AMENITY_NOT_FOUND);
            }
            amenitiesModels.push(amenity);
        }

        delete req.body.amenitiesIds;
        req.body.amenities = amenitiesModels;

        const createdApartment = await ApartmentModel.create(req.body);
        return ok(res, APARTMENT_CREATED_SUCCESSFULLY, {data: createdApartment._doc})
    } catch (e: any) {
        serverError(res, "createApartment", e)
    }
};

export const getApartments = async (req: Request, res: Response) => {
    try {
        const page: number = parseInt(<string>req.query.page) || 1;
        const limit: number = parseInt(<string>req.query.limit) || 10;
        const skip: number = (page - 1) * limit;
        const apartments = await ApartmentModel.find().skip(skip).limit(limit).select("title description numberOfBedrooms numberOfBathrooms sizeInSquareMeters price imagesUrls address.street address.city address.state listingType rentPaymentFrequency");
        const totalItems = await ApartmentModel.countDocuments(); // Get total item count
        const totalPages = Math.ceil(totalItems / limit);

        return ok(res, APARTMENTS_FETCHED_SUCCESSFULLY, {data: apartments, currentPage: page, totalPages: totalPages, totalItems: totalItems});
    } catch (e: any) {
        serverError(res, "getApartments", e)
    }
};

export const getApartmentDetails = async (req: Request, res: Response) => {
    try {
        const {id} = req.query;
        const apartmentDetails = await ApartmentModel.findById(id);
        if (!apartmentDetails) {
            return notFound(res, APARTMENT_NOT_FOUND);
        }
        return ok(res, APARTMENT_DETAILS_FETCHED_SUCCESSFULLY, {data: apartmentDetails});
    } catch (e: any) {
        serverError(res, "getApartments", e)
    }
};
