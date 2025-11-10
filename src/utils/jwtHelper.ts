import jwt from 'jsonwebtoken';

// eslint-disable-next-line no-undef
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_EXPIRE = '1h'; 

export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
