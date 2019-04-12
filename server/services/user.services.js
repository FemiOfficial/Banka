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

  static async getUser(id) {
    const reqUser = Users.find(user => user.id === parseInt(id, 10));
    if (!reqUser) {
      return false;
    }
    return reqUser;
  }
}

export default UserService;
