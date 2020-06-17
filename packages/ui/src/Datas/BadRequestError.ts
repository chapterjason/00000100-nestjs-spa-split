import { ResponseError } from "./ResponseError";

export interface BadRequestError extends ResponseError {
    // eslint-disable-next-line no-magic-numbers
    statusCode: 400;
    message: string | string[];
}
