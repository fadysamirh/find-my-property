import {STATUS_CODES} from "./status-codes";
import {Response} from 'express';
import ResponseModel from "../../models/dto/response.model";

export function response(res: Response, status: number, responseModel: ResponseModel, data: any = undefined) {
    if (data) return res.status(status).json({ ...responseModel, ...data });
    return res.status(status).json({ ...responseModel });
}

export function ok(res: Response, responseModel: ResponseModel, data: any = undefined) {
    return response(res, STATUS_CODES.OK, responseModel, data);
}

export function invalid(res: Response, responseModel: ResponseModel, data: any = undefined) {
    return response(res, STATUS_CODES.FORBIDDEN, responseModel, data);
}

export function validationError(res: Response, message: string) {
    return response(res, STATUS_CODES.UNPROCESSABLE_ENTITY, new ResponseModel("V0", message));
}

export function alreadyExists(res: Response, responseModel: ResponseModel) {
    return response(res, STATUS_CODES.FORBIDDEN, responseModel);
}

export function notFound(res: Response, responseModel: ResponseModel) {
    return response(res, STATUS_CODES.NOT_FOUND, responseModel);
}

export function serverError(res: Response, message: string, e: any) {
    console.log(e);
    return response(res, STATUS_CODES.INTERNAL_SERVER_ERROR, new ResponseModel("SE", `Something went wrong in: ${message}`));
}
