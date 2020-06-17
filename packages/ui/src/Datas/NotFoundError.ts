import { ResponseError } from "./ResponseError";

export interface NotFoundError extends ResponseError {
    // eslint-disable-next-line no-magic-numbers
    statusCode: 404;
    message: string;
}
