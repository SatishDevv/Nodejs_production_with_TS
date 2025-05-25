import app from './app';
import config from './config/config';
import logger from './utils/logger';

 
const server = app.listen(config.PORT);

(() => {
    try {
        logger.info('APPLICATION_RUNNING_ON ', {
            meta: {
                PORT: config.PORT
            }
        });
    } catch (err) {
        logger.error('APPLICATION_ERROR:', { meta: err });
        server.close((err) => {
            if (err) {
                logger.error('Application_ERROR:', { meata: err });
            }
        });
        // eslint-disable-next-line no-undef
        process.exit(1); // Exit the process with a failure code
    }
})();

