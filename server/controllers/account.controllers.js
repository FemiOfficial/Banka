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

  /**
   *
    * @static
    * @param {*} req
    * @param {*} res
    * @memberof AccountControllers
    * @returns {Object} newStatus
    */
  static async patchAccount(req, res) {
    try {
      const patchAccount = await AccountService.patchAccount(req.body, req.params.accountNumber);
      if (!patchAccount) {
        return res.status(statusCodes.notFound).json({
          status: statusCodes.notFound,
          errors: 'account not found',
        });
      }
      return res.status(statusCodes.success).json(
        {
          status: statusCodes.success,
          data: {
            status: patchAccount.status,
            accountNumber: patchAccount.accountNumber,
          }
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
