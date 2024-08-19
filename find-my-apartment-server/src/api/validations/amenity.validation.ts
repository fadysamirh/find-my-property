import Joi from 'joi';
import {validationError} from "../../../src/constants/network/response";
import {Request, Response, NextFunction} from 'express';
export const validateCreateAmenity = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
        name: Joi.string().required()
    });
    const isValidBody = schemaBody.validate(req.body);
    if (isValidBody.error) {
        let errorMsg = isValidBody.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};

export const validateEditAmenity = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
        id: Joi.string().length(24).required(),
        name: Joi.string().required()
    });
    const isValidBody = schemaBody.validate(req.body);
    if (isValidBody.error) {
        let errorMsg = isValidBody.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};

export const validateDeleteAmenity = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
        id: Joi.string().length(24).required()
    });
    const isValidQuery = schemaBody.validate(req.query);
    if (isValidQuery.error) {
        let errorMsg = isValidQuery.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};

export const validateGetAmenities = (req: Request, res: Response, next: NextFunction) => {
    const schemaBody = Joi.object({
    });
    const isValidQuery = schemaBody.validate(req.query);
    if (isValidQuery.error) {
        let errorMsg = isValidQuery.error.details[0].message;
        return validationError(res, errorMsg);
    }
    return next();
};
