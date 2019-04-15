import Users from '../utils/db/users.data';

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
    * @returns {Object} Users
    *
    */

  static async getAllUsers() {
    return Users;
  }

  /**
   *
    * @static
    * @memberof UserService
    * @returns {Object} reqUser: the user the corresponds to the id parameter
    *
    */

  static async getUser(email) {
    const reqUser = Users.find(user => user.email === email);
    if (!reqUser) {
      return false;
    }
    return reqUser;
  }
}

export default UserService;
