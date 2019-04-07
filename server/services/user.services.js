import Users from '../utils/users.data';

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

      const authUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };


      const response = {
        data: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
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
        const response = {
          data: {
            id: loginUser.id,
            firstName: loginUser.firstName,
            lastName: loginUser.lastName,
            email: loginUser.email,
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
}

export default UserService;
