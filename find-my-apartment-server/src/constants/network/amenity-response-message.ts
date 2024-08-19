import {successCode} from "./status-codes";
import ResponseModel from "../../models/dto/response.model";

export const AMENITY_CREATED_SUCCESSFULLY: ResponseModel = new ResponseModel(successCode, "Amenity created successfully");
export const AMENITY_EDITED_SUCCESSFULLY: ResponseModel= new ResponseModel(successCode, "Amenity edited successfully");
export const AMENITY_DELETED_SUCCESSFULLY: ResponseModel = new ResponseModel(successCode, "Amenity deleted successfully");
export const AMENITY_FETCHED_SUCCESSFULLY: ResponseModel = new ResponseModel(successCode, "Amenity fetched successfully");
export const AMENITY_ALREADY_EXISTS = new ResponseModel("A0", "Amenity already exists");
export const AMENITY_NOT_FOUND = new ResponseModel("A01", "Amenity not found");

