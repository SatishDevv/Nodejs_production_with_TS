import { NextFunction, Request, Response } from 'express';
import responseMessage from '../constant/responseMessage';
import httpResponse from '../utils/httpResponse';
import httpError from '../utils/httpError';

export default {
    test: (req: Request, res: Response, next: NextFunction) => {
        try {
            httpResponse(req, res, 200, responseMessage.SUCCESS, { hii: 'Hello World!' });
        } catch (err) {
            httpError(next, err, req, 500);
        }
    }
};
