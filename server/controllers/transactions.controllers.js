import TransactionServices from '../services/transaction.services';
import statusCodes from '../helpers/statusCodes';

/**
 *
 * @class TransactionControllers
 *
 */

class TransactionControllers {
  /**
   *
    * @static
    * @param {*} req
    * @param {*} res
    * @memberof TransactionControllers
    * @returns {Object} debitedAccount
    */
  static async debitAccount(req, res) {
    try {
      const data = await TransactionServices.makeDebitTransaction(req.params.accountNumber, req.body);
      if (!data) {
        return res.status(statusCodes.notFound).json({
          status: statusCodes.notFound,
          errors: 'account not found',
        });
      }

      return res.status(statusCodes.success).json(
        {
          status: statusCodes.success,
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
    * @memberof TransactionControllers
    * @returns {Object} creditedAccount
    */
  static async creditAccount(req, res) {
    try {
      const data = await TransactionServices.makeCreditTransaction(req.params.accountNumber, req.body);
      if (!data) {
        return res.status(statusCodes.notFound).json({
          status: statusCodes.notFound,
          errors: 'account not found',
        });
      }

      return res.status(statusCodes.success).json(
        {
          status: statusCodes.success,
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

export default TransactionControllers;
