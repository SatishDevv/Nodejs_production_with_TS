import { NextFunction, Request } from 'express';
import errorObject from './errorObject';

export default (
    nextFunc: NextFunction,
    err: Error | undefined | null | unknown,
    req: Request,
    errorStatusCode: number = 500
): void => {
    const errorObj = errorObject(err, req, errorStatusCode);
    return nextFunc(errorObj);
};

