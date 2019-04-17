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

var _transaction = _interopRequireDefault(require("../services/transaction.services"));

var _statusCodes = _interopRequireDefault(require("../helpers/statusCodes"));

/**
 *
 * @class TransactionControllers
 *
 */
var TransactionControllers =
/*#__PURE__*/
function () {
  function TransactionControllers() {
    (0, _classCallCheck2["default"])(this, TransactionControllers);
  }

  (0, _createClass2["default"])(TransactionControllers, null, [{
    key: "debitAccount",

    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof TransactionControllers
      * @returns {Object} debitedAccount
      */
    value: function () {
      var _debitAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _transaction["default"].makeDebitTransaction(req.params.accountNumber, req.body);

              case 3:
                data = _context.sent;

                if (data) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].notFound).json({
                  status: _statusCodes["default"].notFound,
                  errors: 'account not found'
                }));

              case 6:
                return _context.abrupt("return", res.status(_statusCodes["default"].success).json({
                  status: _statusCodes["default"].success,
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

      function debitAccount(_x, _x2) {
        return _debitAccount.apply(this, arguments);
      }

      return debitAccount;
    }()
    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof TransactionControllers
      * @returns {Object} creditedAccount
      */

  }, {
    key: "creditAccount",
    value: function () {
      var _creditAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _transaction["default"].makeCreditTransaction(req.params.accountNumber, req.body);

              case 3:
                data = _context2.sent;

                if (data) {
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
                  data: data
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

      function creditAccount(_x3, _x4) {
        return _creditAccount.apply(this, arguments);
      }

      return creditAccount;
    }()
  }]);
  return TransactionControllers;
}();

var _default = TransactionControllers;
exports["default"] = _default;
//# sourceMappingURL=transactions.controllers.js.map