import { sign, verify } from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_KEY;

const expiresIn = '1h';

export const SALT_ROUNDS = 5;

export function sendResponse(res, status, message) {
  return res.status(status).json({ status, message });
}

export function createToken(payload) {
  return sign(payload, SECRET_KEY, { expiresIn });
}

export function verifyToken(token) {
  return verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}
