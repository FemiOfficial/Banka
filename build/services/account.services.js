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

var _user = _interopRequireDefault(require("./user.services"));

var _users = _interopRequireDefault(require("../utils/db/users.data"));

var _accounts = _interopRequireDefault(require("../utils/db/accounts.data"));

var _generateBAN = _interopRequireDefault(require("../utils/generateBAN"));

var _dateFormat = _interopRequireDefault(require("../utils/dateFormat"));

/**
 *
 * @class AccountService
 *
 */
var AccountService =
/*#__PURE__*/
function () {
  function AccountService() {
    (0, _classCallCheck2["default"])(this, AccountService);
  }

  (0, _createClass2["default"])(AccountService, null, [{
    key: "getAccount",

    /**
     *
      * @static
      * @memberof AccountService
      * @returns {Boolean} accountExist
      *
      */
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id) {
        var accountExist, err;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _accounts["default"].find(function (account) {
                  return account.owner === id;
                });

              case 3:
                accountExist = !!_context.sent;
                return _context.abrupt("return", accountExist);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                err = {
                  error: 'An error while trying get account'
                };
                throw err;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getAccount(_x) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
    /**
     *
      * @static
      * @memberof AccountService
      * @returns {Object} createdAccount
      *
      */

  }, {
    key: "createAccount",
    value: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(accountDetails) {
        var loggedInUser, accountExist, accountNumber, newAccount, response, err;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _user["default"].getUser(accountDetails.email);

              case 3:
                loggedInUser = _context2.sent;

                if (loggedInUser) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", false);

              case 6:
                _context2.next = 8;
                return this.getAccount(loggedInUser.id);

              case 8:
                accountExist = _context2.sent;

                if (!accountExist) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", false);

              case 11:
                _context2.next = 13;
                return (0, _generateBAN["default"])(8);

              case 13:
                accountNumber = _context2.sent;
                _context2.t0 = loggedInUser.id;
                _context2.next = 17;
                return (0, _dateFormat["default"])();

              case 17:
                _context2.t1 = _context2.sent;
                _context2.t2 = accountDetails.type;
                _context2.t3 = accountDetails.balance;
                _context2.t4 = accountNumber;
                newAccount = {
                  owner: _context2.t0,
                  createdOn: _context2.t1,
                  type: _context2.t2,
                  status: 'Active',
                  balance: _context2.t3,
                  accountNumber: _context2.t4
                };

                _accounts["default"].push(newAccount);

                response = {
                  accountNumber: accountNumber,
                  firstName: loggedInUser.firstName,
                  lastName: loggedInUser.lastName,
                  email: loggedInUser.email,
                  type: newAccount.type,
                  openingBalance: newAccount.balance
                };
                return _context2.abrupt("return", response);

              case 27:
                _context2.prev = 27;
                _context2.t5 = _context2["catch"](0);
                err = {
                  error: 'An error while trying create account user'
                };
                throw err;

              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 27]]);
      }));

      function createAccount(_x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
    /**
     *
      * @static
      * @memberof AccountService
      * @returns {Object} reqAccount
      *
      */

  }, {
    key: "patchAccount",
    value: function () {
      var _patchAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(account, id) {
        var reqAccount;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                reqAccount = _accounts["default"].find(function (acc) {
                  return parseInt(acc.accountNumber, 10) === parseInt(id, 10);
                });

                if (reqAccount) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", false);

              case 3:
                reqAccount.status = account.status;
                return _context3.abrupt("return", reqAccount);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function patchAccount(_x3, _x4) {
        return _patchAccount.apply(this, arguments);
      }

      return patchAccount;
    }()
    /**
     *
      * @static
      * @memberof AccountService
      * @returns {Object} Accounts
      *
      */

  }, {
    key: "deleteAccount",
    value: function () {
      var _deleteAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var reqAccount;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                reqAccount = _accounts["default"].find(function (acc) {
                  return parseInt(acc.accountNumber, 10) === parseInt(id, 10);
                });

                if (reqAccount) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", false);

              case 3:
                _accounts["default"].splice(reqAccount.id - 1, 1);

                return _context4.abrupt("return", _accounts["default"]);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteAccount(_x5) {
        return _deleteAccount.apply(this, arguments);
      }

      return deleteAccount;
    }()
  }]);
  return AccountService;
}();

var _default = AccountService;
exports["default"] = _default;
//# sourceMappingURL=account.services.js.map