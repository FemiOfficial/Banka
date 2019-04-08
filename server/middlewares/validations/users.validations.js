/* eslint-disable no-undef */

import StatusCodes from '../../helpers/statusCodes';
/**
 *
 * @class UsersValidations
 * @description Handles all validations on the request body
 *
 */

class UsersValidations {
  /**
   *
    * @static
    * @memberof UsersValidations
    * @returns {JSON}
    *
    */

  static async checkCreateAccountBody(req, res, next) {
    const data = req.body;
    const errors = [];
    if (!data.firstName) {
      errors.push('firstname is required');
    }
    if (!data.lastName) {
      errors.push('lastname is required');
    }
    if (!data.email) {
      errors.push('email is required');
    }
    if (!data.password) {
      errors.push('password is required');
    }
    if (data.password) {
      if (!(data.password.length >= 6 && data.password.length <= 15)) {
        errors.push('password must be at least 6 and 15 character');
      }
    }
    if (errors.length >= 1) {
      return res.status(StatusCodes.badRequest).json({
        status: StatusCodes.badRequest,
        errors,
      });
    }
    return next();
  }

  /**
   *
    * @static
    * @memberof UsersValidations
    * @returns {JSON}
    *
    */

  static async checkLoginBody(req, res, next) {
    const data = req.body;
    const errors = [];
    if (!data.email) {
      errors.push('email is required');
    }
    if (!data.password) {
      errors.push('password is required');
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

export default UsersValidations;
