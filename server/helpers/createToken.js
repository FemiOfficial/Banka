import jwt from 'jsonwebtoken';

/**
 *
 * @class CreateToken
 * @description creates the token signature for each user
 *
 */


class CreateToken {
  static async token(user, secretKey) {
    const authToken = await jwt.sign(
      user, secretKey,
      { expiresIn: '5d' },
    );
    return authToken;
  }
}

export default CreateToken;
