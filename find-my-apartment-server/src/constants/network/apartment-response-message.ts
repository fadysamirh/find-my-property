import ResponseModel from "../../models/dto/response.model";
import {successCode} from "./status-codes";

export const APARTMENT_CREATED_SUCCESSFULLY: ResponseModel = new ResponseModel(successCode, "Apartment created successfully");
export const APARTMENT_DETAILS_FETCHED_SUCCESSFULLY: ResponseModel = new ResponseModel(successCode, "Apartment details fetched successfully");
export const APARTMENTS_FETCHED_SUCCESSFULLY: ResponseModel = new ResponseModel(successCode, "Apartments fetched successfully");
export const APARTMENT_NOT_FOUND: ResponseModel = new ResponseModel("APT01", "Apartment not found");
