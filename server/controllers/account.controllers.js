import AccountService from '../services/account.services';
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
      const data = await AccountService.createAccount(req.decodedToken.id, req.body);
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
