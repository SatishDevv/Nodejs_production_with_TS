import app from './app';
import config from './config/config';

// eslint-disable-next-line no-unused-vars
const server = app.listen(config.PORT);

(() => {
    // try {
    //     console.info('APPLICATION_RUNNING_ON ', {
    //         meta: {
    //             PORT: config.PORT
    //         }
    //     });
    // } catch (err) {
    //     console.error('APPLICATION_ERROR:', { meta: err });
    //     server.close((err) => {
    //         if (err) {
    //             console.error('Application_ERROR:', { meata: err });
    //         }
    //     });
    //     // eslint-disable-next-line no-undef
    //     process.exit(1); // Exit the process with a failure code
    // }
})();

