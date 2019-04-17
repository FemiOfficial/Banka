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
 * @class AccountValdation
 * @description Handles all validations on the request body
 *
 */
var AccountValdation =
/*#__PURE__*/
function () {
  function AccountValdation() {
    (0, _classCallCheck2["default"])(this, AccountValdation);
  }

  (0, _createClass2["default"])(AccountValdation, null, [{
    key: "checkPatchAccountBody",

    /**
     *
      * @static
      * @memberof AccountValdation
      * @returns {JSON}
      *
      */
    value: function () {
      var _checkPatchAccountBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var data, errors, status;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = req.body;
                errors = [];

                if (data.status) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: 'status is required'
                }));

              case 4:
                status = data.status.trim() == 'active' || data.status.trim() === 'dormant' ? data.status.trim() : false;

                if (!status) {
                  errors.push("invalid status expecting ".concat('active', " or ", 'dormant'));
                }

                if (!(errors.length >= 1)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: errors
                }));

              case 8:
                return _context.abrupt("return", next());

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkPatchAccountBody(_x, _x2, _x3) {
        return _checkPatchAccountBody.apply(this, arguments);
      }

      return checkPatchAccountBody;
    }()
    /**
     *
      * @static
      * @memberof AccountValdation
      * @returns {JSON}
      *
      */

  }, {
    key: "checkCreateBankAccountBody",
    value: function () {
      var _checkCreateBankAccountBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res, next) {
        var data, errors, accountType, openingBalance, type, balance, email;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = req.body;
                errors = [];

                if (data.email) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: 'user email type is required'
                }));

              case 4:
                if (data.type) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: 'account type is required'
                }));

              case 6:
                if (data.balance) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: 'opening ammount is required'
                }));

              case 8:
                accountType = data.type.trim();
                openingBalance = parseFloat(data.balance);
                type = accountType === 'Savings' || accountType === 'Current' ? accountType : false;
                balance = openingBalance || false;
                email = data.email.trim() ? data.email.trim() : false;

                if (!email || email.length === 0) {
                  errors.push('email is required');
                }

                if (!type || accountType.length === 0) {
                  errors.push("account type should be ".concat('Savings', " or ", 'Current'));
                }

                if (!balance) {
                  errors.push('invalid opening balance, expecting a number');
                }

                if (!(errors.length >= 1)) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: errors
                }));

              case 18:
                return _context2.abrupt("return", next());

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkCreateBankAccountBody(_x4, _x5, _x6) {
        return _checkCreateBankAccountBody.apply(this, arguments);
      }

      return checkCreateBankAccountBody;
    }()
  }]);
  return AccountValdation;
}();

var _default = AccountValdation;
exports["default"] = _default;
//# sourceMappingURL=account.validations.js.map