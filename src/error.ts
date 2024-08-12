import {APIErrorType} from './dtos/errors.js'

export class APIError extends Error {
    public readonly code: number;

    constructor(apiError: APIErrorType) {
        super(apiError.error);
        this.code = apiError.code;
        Error.captureStackTrace(this, APIError);
    }
}