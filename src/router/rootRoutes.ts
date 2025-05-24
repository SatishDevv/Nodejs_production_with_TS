import { Router } from 'express';
import apiRouter from './apiRouter';

const rootRouter = Router();

rootRouter.use('/test', apiRouter);

export default rootRouter;

