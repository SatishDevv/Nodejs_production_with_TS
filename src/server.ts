import app from './app';
import config from './config/config';
import { seedInitialUsers } from './seeder/seedInitialUsers';
import dataBaseService from './services/dataBaseService';
import logger from './utils/logger';

const server = app.listen(config.PORT);

(async () => {
    try {
        const connection = await dataBaseService.connect();
        logger.info('DATABASE_CONNECTED', {
            meta: {
                host: connection.host,
                port: connection.port,
                name: connection.name
            }
        });

        seedInitialUsers()
            .then((res) => logger.info('SEED_COMPLETE', { meta: res }))
            .catch((err) => logger.error('SEED_FAILED', { meta: err.message }));

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
