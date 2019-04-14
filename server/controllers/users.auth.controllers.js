import AuthService from '../services/user.auth.services';
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
      const data = await AuthService.createUser(req.body);
      if (!data) {
        return res.status(statusCodes.conflict).json(
          {
            status: statusCodes.conflict,
            errors: 'email already registered',
          },
        );
      }
      return res.status(statusCodes.created).json(
        {
          status: statusCodes.created,
          data,
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
    try {
      const data = await AuthService.login(req.body);
      if (!data) {
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
          data,
        },
      );
    } catch (error) {
      return res.status(statusCodes.serverError).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserControllers;
