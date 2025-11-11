import { Router } from 'express';
import authRouter from './authRouter';
import healthRouter from './healthRouter';

const rootRouter = Router();

rootRouter.use('/auth', authRouter);
rootRouter.use('/health', healthRouter);

export default rootRouter;
