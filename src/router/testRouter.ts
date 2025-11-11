import { Router } from 'express';
import apiController from '../controller/testController';

const apiRouter = Router();

apiRouter.get('/', apiController.test);

export default apiRouter;
