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
  static async checkEmailAddress(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
  }

  static async checkCreateAccountBody(req, res, next) {
    const data = req.body;
    const errors = [];

    const firstName = data.firstName ? data.firstName.trim('') : false;
    const lastName = data.lastName ? data.lastName.trim('') : false;
    const email = data.email ? data.email.trim('') : false;
    const password = data.password ? data.password.trim('') : false;

    if (!firstName || firstName.length === 0) {
      errors.push('firstname is required');
    }
    if (!lastName || lastName.length === 0) {
      errors.push('lastname is required');
    }
    if (!email || email.length === 0) {
      errors.push('email is required');
    }

    if (email) {
      const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = reg.test(data.email);
      if (!isValid) {
        errors.push('Invalid email address');
      }
    }

    if (!password || password.length === 0) {
      errors.push('password is required');
    }
    if (password) {
      if (!(password.length >= 6 && password.length <= 15)) {
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
