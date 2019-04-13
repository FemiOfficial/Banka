/* eslint-disable no-param-reassign */
import Users from '../utils/users.data';
import TokenOperations from '../helpers/tokenOperations';
import config from '../config/config';

/**
 *
 * @class AuthService
 *
 */

class AuthService {
  /**
   *
    * @static
    * @memberof AuthService
    * @returns {Object} response
    *
    */

  static async createUser(user) {
    try {
      const userLength = Users.length;

      const lastId = Users[userLength - 1].id;

      user.id = lastId + 1;

      user.isAdmin = false;

      user.type = 'Client';

      Users.push(user);

      const authToken = await this.generateSignUpToken(user);

      const response = {
        token: authToken,
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };

      return response;
    } catch (e) {
      const err = { error: 'An error error while trying create new user' };

      throw err;
    }
  }

  /**
   *
    * @static
    * @memberof AuthService
    * @returns {Object} loginUser
    *
    */
  static async login(login) {
    try {
      const loginUser = Users
        .find(user => user.email === login.email && user.password === login.password);

      if (loginUser) {
        const token = await this.generateSignInToken(loginUser);
        const response = {
          token,
          id: loginUser.id,
          firstName: loginUser.firstName,
          lastName: loginUser.lastName,
          email: loginUser.email,
        };
        return response;
      }

      return false;
    } catch (e) {
      const err = { error: 'An error while trying login user' };

      throw err;
    }
  }

  /**
   *
    * @static
    * @memberof AuthService
    * @returns {Object} authToken
    *
    */
  static async generateSignUpToken(user) {
    const authUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    const token = await TokenOperations.token(authUser, config.secretKey);
    return token;
  }

  /**
   *
    * @static
    * @memberof AuthService
    * @returns {Object} authToken
    *
    */
  static async generateSignInToken(user) {
    const authUser = {
      email: user.email,
      password: user.password,
    };

    const authToken = await TokenOperations.token(authUser, config.secretKey);
    return authToken;
  }
}

export default AuthService;
