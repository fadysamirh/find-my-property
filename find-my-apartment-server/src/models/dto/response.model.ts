export default class ResponseModel {
    statusCode: string;
    message: string;

    constructor(statusCode: string, message: string) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
