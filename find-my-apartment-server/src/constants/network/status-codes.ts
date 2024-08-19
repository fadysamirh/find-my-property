export const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400, // General client error
    UNAUTHORIZED: 401, // Requires authentication
    FORBIDDEN: 403, // Server understood request, but refuses to fulfill it
    NOT_FOUND: 404, // Resource not found
    UNPROCESSABLE_ENTITY: 422, // Validation error
    INTERNAL_SERVER_ERROR: 500, // General server error
};

export const successCode = '0';
