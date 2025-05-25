import cors from 'cors';
import config from '../config/config';
import responseMessage from '../constant/responseMessage';

export default () => {
    return cors({
        origin: (origin, callback) => {
            const allowedOrigins = config.ALLOW_ORIGINS;

            if (!origin || allowedOrigins?.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error(responseMessage.NOT_ALLOWED_BY_CORS));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // allowed only this method
        allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token'],
        credentials: true, //
        preflightContinue: false,
        maxAge: 600,
        optionsSuccessStatus: 204
    });
};

