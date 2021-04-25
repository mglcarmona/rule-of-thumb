import { checkBearerAuth, runMiddleware } from '../../lib/middlewares';

export default async (req, res) => {
  await runMiddleware(req, res, checkBearerAuth);
  res.status(200).json({ name: 'John Doe' });
};
