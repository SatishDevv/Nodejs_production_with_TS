import { Router } from 'express';
import apiController from '../controller/apiController';

const apiRouter = Router();

apiRouter.get('/', apiController.test);

export default apiRouter;

