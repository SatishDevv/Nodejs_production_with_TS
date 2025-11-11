/* eslint-disable no-undef */
import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

export default {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || '',
    ALLOW_ORIGINS: process.env.ALLOW_ORIGINS
};
