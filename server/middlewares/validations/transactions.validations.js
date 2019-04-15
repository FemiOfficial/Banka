import StatusCodes from '../../helpers/statusCodes';
/**
 *
 * @class TransactionsValidations
 * @description Handles all validations on the request body
 *
 */
class TransactionsValidations {
  /**
   *
    * @static
    * @memberof TransactionsValidations
    * @returns {JSON}
    *
    */
  static async checkTransactionsBody(req, res, next) {
    const data = req.body;
    const errors = [];

    if (!data.cashier) {
      return res.status(StatusCodes.badRequest).json({
        status: StatusCodes.badRequest,
        errors: 'cashier is required',
      });
    }

    if (!data.amount) {
      return res.status(StatusCodes.badRequest).json({
        status: StatusCodes.badRequest,
        errors: 'amount is required',
      });
    }

    const amount = parseFloat(data.amount, 10) ? parseFloat(data.amount, 10) : false;

    const cashier = parseInt(data.cashier, 10) ? parseInt(data.cashier, 10) : false;


    if (!amount) {
      errors.push('transaction amount, expecting a float value');
    }

    if (!cashier) {
      errors.push('invalid cashier id');
    }
    if (errors.length >= 1) {
      return res.status(StatusCodes.badRequest).json({
        status: StatusCodes.badRequest,
        errors,
      });
    }
    return next();
  }
}

export default TransactionsValidations;
