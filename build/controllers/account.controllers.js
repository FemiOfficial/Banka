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

var _account = _interopRequireDefault(require("../services/account.services"));

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

var _statusCodes = _interopRequireDefault(require("../helpers/statusCodes"));

/**
 *
 * @class AccountControllers
 *
 */
var AccountControllers =
/*#__PURE__*/
function () {
  function AccountControllers() {
    (0, _classCallCheck2["default"])(this, AccountControllers);
  }

  (0, _createClass2["default"])(AccountControllers, null, [{
    key: "createAccount",

    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof AccountControllers
      * @returns {Object} CreatedAccount
      */
    value: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _account["default"].createAccount(req.body);

              case 3:
                data = _context.sent;

                if (data) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].conflict).json({
                  status: _statusCodes["default"].conflict,
                  errors: 'please enter a valid email'
                }));

              case 6:
                return _context.abrupt("return", res.status(_statusCodes["default"].created).json({
                  status: _statusCodes["default"].created,
                  data: data
                }));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(_statusCodes["default"].serverError).json({
                  error: 'Internal server error'
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof AccountControllers
      * @returns {Object} newStatus
      */

  }, {
    key: "patchAccount",
    value: function () {
      var _patchAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _patchAccount2;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _account["default"].patchAccount(req.body, req.params.accountNumber);

              case 3:
                _patchAccount2 = _context2.sent;

                if (_patchAccount2) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].notFound).json({
                  status: _statusCodes["default"].notFound,
                  errors: 'account not found'
                }));

              case 6:
                return _context2.abrupt("return", res.status(_statusCodes["default"].success).json({
                  status: _statusCodes["default"].success,
                  data: {
                    status: _patchAccount2.status,
                    accountNumber: _patchAccount2.accountNumber
                  }
                }));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(_statusCodes["default"].serverError).json({
                  error: 'Internal server error'
                }));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function patchAccount(_x3, _x4) {
        return _patchAccount.apply(this, arguments);
      }

      return patchAccount;
    }()
    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof AccountControllers
      * @returns {Object} reponse
      */

  }, {
    key: "deleteAccount",
    value: function () {
      var _deleteAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var _deleteAccount2;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _account["default"].deleteAccount(req.params.accountNumber);

              case 3:
                _deleteAccount2 = _context3.sent;

                if (_deleteAccount2) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt("return", res.status(_statusCodes["default"].notFound).json({
                  status: _statusCodes["default"].notFound,
                  errors: 'account not found'
                }));

              case 6:
                return _context3.abrupt("return", res.status(_statusCodes["default"].success).json({
                  status: _statusCodes["default"].success,
                  data: {
                    message: 'account successfully deleted'
                  }
                }));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(_statusCodes["default"].serverError).json({
                  error: 'Internal server error'
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 9]]);
      }));

      function deleteAccount(_x5, _x6) {
        return _deleteAccount.apply(this, arguments);
      }

      return deleteAccount;
    }()
  }]);
  return AccountControllers;
}();

var _default = AccountControllers;
exports["default"] = _default;
//# sourceMappingURL=account.controllers.js.map