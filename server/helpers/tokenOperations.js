/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import config from '../config/config';
import statusCodes from "./statusCodes";

/**
 *
 * @class TokenOperations
 * @description handles all token operation (sign, verify)
 *
 */


class TokenOperations {
  static async token(user, secretKey) {
    const authToken = await jwt.sign(
      user, secretKey,
      { expiresIn: '5d' },
    );
    return `Bearer ${authToken}`;
  }

  static async verify(token) {
    try {
      return jwt.decode(token, config.secretKey);
    } catch (e) {
      return null;
    }
  }
}

export default TokenOperations;
