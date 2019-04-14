import AccountService from '../services/account.services';
import Authentication from '../middlewares/authentication';
import statusCodes from '../helpers/statusCodes';

/**
 *
 * @class AccountControllers
 *
 */

class AccountControllers {
  /**
   *
    * @static
    * @param {*} req
    * @param {*} res
    * @memberof AccountControllers
    * @returns {Object} CreatedAccount
    */
  static async createAccount(req, res) {
    try {
      const data = await AccountService.createAccount(req.body);
      if (!data) {
        return res.status(statusCodes.conflict).json({
          status: statusCodes.conflict,
          errors: 'please enter a valid email',
        });
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
}

export default AccountControllers;
