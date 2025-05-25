import express, { Application, NextFunction, Request, Response } from 'express';
import path from 'path';
import rootRouter from './router/rootRoutes';
import globalErrorHandler from './utils/globalErrorHandler';
import httpError from './utils/httpError';
import responseMessage from './constant/responseMessage';
import helmet from 'helmet';

const app: Application = express();

// Middleware to set security headers
app.use(helmet());
// Middleware to parse JSON bodies
app.use(express.json());

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '../', 'public'))); //server static files from the 'public' directory

// Router
app.use('/api/v1', rootRouter);

// 404 Not Found handler
app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'));
    } catch (error) {
        httpError(next, error, req, 404);
    }
});

// Global error handler
app.use(globalErrorHandler);

export default app;

