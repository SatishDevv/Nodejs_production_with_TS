import { Router } from 'express';
import apiRouter from './apiRouter';
import healthRouter from './healthRouter';

const rootRouter = Router();

rootRouter.use('/test', apiRouter);
rootRouter.use('/health', healthRouter);

export default rootRouter;

