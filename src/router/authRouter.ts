import { Router } from 'express';
import authController from '../controller/authController';
import validateRequest from '../middleware/validateRequestMiddleware';
import { loginSchema } from '../validations/authValidation';
import { BODY } from '../constant/globalKey';

const apiRouter = Router();

apiRouter.post('/', validateRequest(loginSchema, BODY), authController.login);

export default apiRouter;
