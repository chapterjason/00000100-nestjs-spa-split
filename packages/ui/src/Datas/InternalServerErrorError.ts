import { ResponseError } from "./ResponseError";

export interface InternalServerErrorError extends ResponseError {
    // eslint-disable-next-line no-magic-numbers
    statusCode: 500;
    message: string;
}
