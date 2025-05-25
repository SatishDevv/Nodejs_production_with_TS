import { Request } from 'express';
import { THttpError } from '../types/types';
import responseMessage from '../constant/responseMessage';
import config from '../config/config';
import { EApplicationEnvironment } from '../constant/application';
import logger from './logger';

export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): THttpError => {
    const errorObject: THttpError = {
        success: false,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message:
            err instanceof Error
                ? err.message || responseMessage.SOME_THING_WENT_WRONG
                : responseMessage.SOME_THING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    };

    // Logging the error for debugging purposes
    logger.error(`ERROR OCCURRED`, { meta: errorObject });
    // Delete the ip from the response if the environment is production
    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObject?.request?.ip;
        delete errorObject.trace; // Optionally remove trace in production
    }
    return errorObject;
};

