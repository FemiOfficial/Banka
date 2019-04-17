"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _statusCodes = _interopRequireDefault(require("../../helpers/statusCodes"));

/* eslint-disable no-undef */

/**
 *
 * @class UsersValidations
 * @description Handles all validations on the request body
 *
 */
var UsersValidations =
/*#__PURE__*/
function () {
  function UsersValidations() {
    (0, _classCallCheck2["default"])(this, UsersValidations);
  }

  (0, _createClass2["default"])(UsersValidations, null, [{
    key: "checkCreateAccountBody",

    /**
     *
      * @static
      * @memberof UsersValidations
      * @returns {JSON}
      *
      */
    value: function () {
      var _checkCreateAccountBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var data, errors, firstName, lastName, email, password, reg, isValid;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = req.body;
                errors = [];
                firstName = data.firstName ? data.firstName.trim('') : false;
                lastName = data.lastName ? data.lastName.trim('') : false;
                email = data.email ? data.email.trim('') : false;
                password = data.password ? data.password.trim('') : false;

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
                  reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  isValid = reg.test(data.email);

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

                if (!(errors.length >= 1)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: errors
                }));

              case 14:
                return _context.abrupt("return", next());

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkCreateAccountBody(_x, _x2, _x3) {
        return _checkCreateAccountBody.apply(this, arguments);
      }

      return checkCreateAccountBody;
    }()
    /**
     *
      * @static
      * @memberof UsersValidations
      * @returns {JSON}
      *
      */

  }, {
    key: "checkLoginBody",
    value: function () {
      var _checkLoginBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var data, email, password, errors;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = req.body;
                email = data.email ? data.email.trim('') : false;
                password = data.password ? data.password.trim('') : false;
                errors = [];

                if (!email || email.length === 0) {
                  errors.push('email is required');
                }

                if (!password || password.length === 0) {
                  errors.push('password is required');
                }

                if (!(errors.length >= 1)) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: errors
                }));

              case 8:
                return _context2.abrupt("return", next());

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkLoginBody(_x4, _x5, _x6) {
        return _checkLoginBody.apply(this, arguments);
      }

      return checkLoginBody;
    }()
  }]);
  return UsersValidations;
}();

var _default = UsersValidations;
exports["default"] = _default;
//# sourceMappingURL=users.validations.js.map