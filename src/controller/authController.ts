import { NextFunction, Request, Response } from 'express';
import responseMessage from '../constant/responseMessage';
import httpResponse from '../utils/httpResponse';
import httpError from '../utils/httpError';
import authService from '../services/authService';
import { decryptData } from '../utils/encryptHelper';

export default {
  login: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Optional: decrypt incoming encrypted data (if client encrypts)
      const { data } = req.body;
      const decrypted = data ? decryptData(data) : req.body;

      const { email, password } = decrypted as { email: string; password: string };

      // Call service
      const encryptedUser = await authService.login(email, password);

      // Send encrypted response
      httpResponse(req, res, 200, responseMessage.SUCCESS, encryptedUser);
    } catch (err) {
      httpError(next, err, req, 500);
    }
  },
};