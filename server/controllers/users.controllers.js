import UserService from '../services/user.services';
import statusCodes from '../helpers/statusCodes';

/**
 *
 * @class UserControllers
 *
 */

class UserControllers {
  /**
   *
    * @static
    * @param {*} req
    * @param {*} res
    * @memberof UserControllers
    * @returns {Object} CreatedUser
    */
  static async createUser(req, res) {
    try {
      const CreatedUser = await UserService.createUser(req.body);
      return res.status(statusCodes.created).json(
        {
          status: statusCodes.created,
          CreatedUser,
        },
      );
    } catch (error) {
      return res.status(statusCodes.serverError).json(
        {
          error: 'Internal server error',
        },
      );
    }
  }

  /**
   *
    * @static
    * @param {*} req
    * @param {*} res
    * @memberof UserControllers
    * @returns {Object} loginUser
    */
  static async loginUser(req, res) {
    const { user } = req.body;

    try {
      const loginUser = await UserService.loginUser(user);
      if (!loginUser) {
        return res.status(statusCodes.unAuthorized).json(
          {
            status: statusCodes.unAuthorized,
            error: 'Invalid email or password',
          },
        );
      }
      return res.status(statusCodes.success).json(
        {
          status: statusCodes.success,
          loginUser,
        },
      );
    } catch (error) {
      return res.status(statusCodes.serverError).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserControllers;
