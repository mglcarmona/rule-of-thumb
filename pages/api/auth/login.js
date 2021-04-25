import bcrypt from 'bcrypt';
import models from '../../../db/models';
import { createToken, sendResponse } from '../../../lib/utils';

export default async (req, res) => {
  const { username, password } = req.body;
  const invalidDataMessage = 'Incorrect username or password';

  try {
    const user = await models.User.findOne({ where: { username } });
    console.log('user', user.password);
    if (!user) {
      return sendResponse(res, 401, invalidDataMessage);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return sendResponse(res, 401, invalidDataMessage);
    }

    const accessToken = createToken({ username });

    res.status(200).json({ accessToken });
  } catch (error) {
    sendResponse(res, 500, error);
  }
};
