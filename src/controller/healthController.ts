import { NextFunction, Request, Response } from 'express';
import httpError from '../utils/httpError';
import quicker from '../utils/quicker';
import httpResponse from '../utils/httpResponse';
import responseMessage from '../constant/responseMessage';

export default {
    health: (req: Request, res: Response, next: NextFunction) => {
        try {
            const health = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth(),
                time: new Date().toISOString()
            };
            httpResponse(req, res, 200, responseMessage.SUCCESS, health);
        } catch (err) {
            httpError(next, err, req, 500);
        }
    }
};
