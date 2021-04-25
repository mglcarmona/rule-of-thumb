import { sendResponse } from '../utils';

export function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export function checkBearerAuth(req, res, next) {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  const status = 401;

  if (authorization === undefined || bearer !== 'Bearer') {
    const message = 'Bad authorization header';
    sendResponse(res, status, message);
    return;
  }

  try {
    verifyToken(token);
    next();
  } catch (err) {
    const message = 'Error: access_token is not valid';
    sendResponse(res, status, message);
  }
}
