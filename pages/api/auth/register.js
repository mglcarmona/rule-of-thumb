import bcrypt from 'bcrypt';
import models from '../../../db/models';
import { createToken, SALT_ROUNDS, sendResponse } from '../../../lib/utils';

export default async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = {
      username,
      password: hash,
      email,
    };

    await models.User.create(newUser);

    const accessToken = createToken({ username });
    res.status(200).json({ accessToken });
  } catch (error) {
    sendResponse(res, 500, error);
  }
};
