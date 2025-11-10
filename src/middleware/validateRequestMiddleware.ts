import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { BODY, PARAMS, QUERY } from '../constant/globalKey';
import httpError from '../utils/httpError';

type ValidationTarget = typeof BODY | typeof QUERY | typeof PARAMS;

const validateRequest =
    (schema: ObjectSchema, target: ValidationTarget = BODY) =>
    (req: Request, _: Response, next: NextFunction): void => {
        const { error } = schema.validate(req[target], { abortEarly: false });

        if (error) {
            const errorMessage = error.details[0]?.message || 'Validation failed';
            httpError(next, errorMessage, req, 400);
            return;
        }

        next();
    };

export default validateRequest;
