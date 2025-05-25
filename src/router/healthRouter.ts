import { Router } from 'express';
import healthController from '../controller/healthController';

const healthRouter = Router();

healthRouter.get('/', healthController.health);

export default healthRouter;

