import { NextFunction, Request, Response } from 'express';
import { THttpError } from '../types/types';

// eslint-disable-next-line no-unused-vars
export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
    res.status(err.statusCode).json(err);
};
