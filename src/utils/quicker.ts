import os, { loadavg } from 'os';
import config from '../config/config';
import { memoryUsage } from 'process';

export default {
    getSystemHealth: () => {
        return {
            cpuUsage: loadavg(),
            totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, // Convert bytes to MB
            freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB` // Convert bytes to GB
        };
    },
    getApplicationHealth: () => {
        return {
            environment: config.ENV,
            // eslint-disable-next-line no-undef
            uptime: `${process.uptime().toFixed(2)} Seconds`, // Application uptime in seconds`
            memoryUsage: {
                heapTotal: `${(memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`, // Total heap size
                heapUsed: `${(memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB` // Used heap size
                // external: `${(memoryUsage().external / 1024 / 1024).toFixed(2)} MB` // Memory used by C++ objects bound to JavaScript objects
            }
        };
    }
};

