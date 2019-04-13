/* eslint-disable no-undef */
import StatusCodes from '../../helpers/statusCodes';
/**
 *
 * @class CreateAccountValdation
 * @description Handles all validations on the request body
 *
 */

class c {
  /**
   *
    * @static
    * @memberof CreateAccountValdation
    * @returns {JSON}
    *
    */

  static async checkCreateBankAccountBody(req, res, next) {
    const data = req.body;
    const errors = [];

    if (!data.typ) {
      return res.status(StatusCodes.badRequest).json({
        status: StatusCodes.badRequest,
        errors: 'account type is required',
      });
    }
    if (!data.balance) {
      return res.status(StatusCodes.badRequest).json({
        status: StatusCodes.badRequest,
        errors: 'opening ammount is required',
      });
    }

    const accountType = data.type.trim();
    const openingBalance = parseFloat(data.balance);
    const type = accountType === 'Savings' || accountType === 'Current' ? accountType : false;
    const balance = openingBalance || false;

    if (!type || accountType.length === 0) {
      errors.push(`account type should be ${'Savings'} or ${'Current'}`);
    }
    if (!balance) {
      errors.push('invalid opening balance');
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

export default CreateAccountValdation;
