import {
    serverError,
    ok,
    alreadyExists,
    notFound
} from "../../../src/constants/network/response";
import AmenityModel, {IAmenity} from '../../models/mongo/amenity.model'
import {
    AMENITY_ALREADY_EXISTS,
    AMENITY_CREATED_SUCCESSFULLY, AMENITY_DELETED_SUCCESSFULLY,
    AMENITY_EDITED_SUCCESSFULLY,
    AMENITY_NOT_FOUND
} from "../../constants/network/amenity-response-message";
import {Request, Response} from 'express';
import ApartmentModel, {IApartment} from "../../models/mongo/apartment.model";
import {ObjectId} from 'mongodb';
export const createAmenity = async (req: Request, res: Response) => {
    try {
        const {name} = req.body;

        //if amenity already exists with the same name reject
        const amenityFound: IAmenity | null = await AmenityModel.findOne({name});
        if (amenityFound) {
            return alreadyExists(res, AMENITY_ALREADY_EXISTS);
        }

        //create amenity and return in to the user
        const amenityCreated = await AmenityModel.create({name: name});
        return ok(res, AMENITY_CREATED_SUCCESSFULLY, {data: amenityCreated._doc});
    } catch (e: any) {
        return serverError(res, "createAmenity", e);
    }
}

export const editAmenity = async (req: Request, res: Response) => {
    try {
        const {id, name} = req.body;

        //find amenity by id
        const amenityFoundById: IAmenity | null = await AmenityModel.findById(id);
        if (!amenityFoundById) {
            return notFound(res, AMENITY_NOT_FOUND);
        }

        //find amenity by name and if the same id is not found then reject
        const amenityFoundByName: IAmenity | null = await AmenityModel.findOne({name: name});
        if (amenityFoundByName && amenityFoundByName._id !== id) {
            return alreadyExists(res, AMENITY_ALREADY_EXISTS);
        }

        amenityFoundById.name = name;
        await amenityFoundById.save();

        // find apartments that has the amenity to update it
        const apartmentsFound: IApartment[] | null = await ApartmentModel.find({
            amenities: {
                $elemMatch: {
                    _id: id
                }
            }
        });

        for(let i = 0; i < apartmentsFound.length; i++) {
            const amenityIndex = apartmentsFound[i].amenities.findIndex((amenity) => (amenity._id as ObjectId).toString() === id);
            apartmentsFound[i].amenities[amenityIndex].name = name;
            await apartmentsFound[i].save();
        }

        return ok(res, AMENITY_EDITED_SUCCESSFULLY, {data: amenityFoundById});
    } catch (e: any) {
        return serverError(res, "editAmenities", e);
    }
};

export const deleteAmenity = async (req: Request, res: Response) => {
    try {
        const {id} = req.query;

        // find apartments that has the amenity to delete it
        const apartmentsFound: IApartment[] | null = await ApartmentModel.find({
            amenities: {
                $elemMatch: {
                    _id: id
                }
            }
        });

        for(let i = 0; i < apartmentsFound.length; i++) {
            apartmentsFound[i].amenities = apartmentsFound[i].amenities.filter((amenity) => (amenity._id as ObjectId).toString() !== id);
            console.log(apartmentsFound[i].amenities)
            await apartmentsFound[i].save();
        }

        //find amenity by id and delete
        await AmenityModel.findByIdAndDelete(id);

        return ok(res, AMENITY_DELETED_SUCCESSFULLY);
    } catch (e: any) {
        return serverError(res, "editAmenities", e);
    }
};

export const getAmenities = async (req: Request, res: Response) => {
    try {
        return ok(res, AMENITY_CREATED_SUCCESSFULLY, {data: await AmenityModel.find()});
    } catch (e: any) {
        return serverError(res, "getAmenities", e);
    }
};
