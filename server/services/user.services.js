import Users from '../utils/users.data';
import CreateToken from '../helpers/createToken';
import config from '../config/config';

/**
 *
 * @class UserService
 *
 */

class UserService {
  /**
   *
    * @static
    * @memberof UserService
    * @returns {Object} response
    *
    */

  static async createUser(user) {
    try {
      const userLength = Users.length;

      const lastId = Users[userLength - 1].id;

      // eslint-disable-next-line no-param-reassign
      user.id = lastId + 1;

      Users.push(user);

      const authToken = await this.generateSignUpToken(user);

      const response = {
        data: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
          token: authToken,
        },
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
    * @memberof UserService
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
          data: {
            id: loginUser.id,
            firstName: loginUser.firstName,
            lastName: loginUser.lastName,
            email: loginUser.email,
            token,
          },
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
    * @memberof UserService
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

    const token = await CreateToken.token(authUser, config.secretKey);
    return token;
  }

  /**
   *
    * @static
    * @memberof UserService
    * @returns {Object} authToken
    *
    */
  static async generateSignInToken(user) {
    const authUser = {
      email: user.email,
      password: user.password,
    };

    const authToken = await CreateToken.token(authUser, config.secretKey);
    return authToken;
  }
}

export default UserService;
