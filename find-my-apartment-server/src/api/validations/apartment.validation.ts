import {NextFunction, Request, Response} from "express";
import Joi from "joi";
import {validationError} from "../../constants/network/response";
import {ApartmentTypeEnum} from "../../constants/enums/apartment-type.enum";
import {PaymentOptionsEnum} from "../../constants/enums/payment-options.enum";
import {ListingTypeEnum} from "../../constants/enums/listing-type.enum";
import {RentPaymentFrequencyEnum} from "../../constants/enums/rent-payment-frequency.enum";

export const validateCreateApartment = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        numberOfBedrooms: Joi.number().integer().positive().allow(0).required(),
        numberOfBathrooms: Joi.number().positive().allow(0).required(),
        sizeInSquareMeters: Joi.string().required(), // You might want to consider making this a number
        price: Joi.number().positive().required(),
        address: Joi.object({
            street: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
        }).required(),
        imagesUrls: Joi.array().items(Joi.string().uri()).min(1).required(),
        contactInfo: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().regex(new RegExp('^(\\+201|01|00201)[0-2,5]{1}[0-9]{8}')).required(), // Consider adding more specific phone number validation if needed
        }).required(),
        available: Joi.boolean().required(),
        createdAt: Joi.date().default(Date.now),
        level: Joi.string().allow(null),
        paymentOptions: Joi.array().items(Joi.string().valid(...Object.values(PaymentOptionsEnum))).required(),
        furnished: Joi.boolean().allow(null),
        type: Joi.string().valid(...Object.values(ApartmentTypeEnum)).required(),
        amenitiesIds: Joi.array().items(Joi.string().length(24)).required(),
        listingType: Joi.string().valid(...Object.values(ListingTypeEnum)).required(),
        rentPaymentFrequency: Joi.string().valid(...Object.values(RentPaymentFrequencyEnum))
    });
    const isValidBody = schemaBody.validate(req.body);
    if (isValidBody.error) {
        let errorMsg = isValidBody.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};

export const validateGetApartments = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
        page: Joi.number().integer().positive(),
        limit: Joi.number().integer().positive()
    });
    const isValidQuery = schemaBody.validate(req.query);
    if (isValidQuery.error) {
        let errorMsg = isValidQuery.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};

export const validateGetApartmentDetails = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
        id: Joi.string().length(24).required(),
    });
    const isValidQuery = schemaBody.validate(req.query);
    if (isValidQuery.error) {
        let errorMsg = isValidQuery.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};
