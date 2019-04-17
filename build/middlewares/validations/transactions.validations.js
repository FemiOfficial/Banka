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

/**
 *
 * @class TransactionsValidations
 * @description Handles all validations on the request body
 *
 */
var TransactionsValidations =
/*#__PURE__*/
function () {
  function TransactionsValidations() {
    (0, _classCallCheck2["default"])(this, TransactionsValidations);
  }

  (0, _createClass2["default"])(TransactionsValidations, null, [{
    key: "checkTransactionsBody",

    /**
     *
      * @static
      * @memberof TransactionsValidations
      * @returns {JSON}
      *
      */
    value: function () {
      var _checkTransactionsBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res, next) {
        var data, errors, amount, cashier;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = req.body;
                errors = [];

                if (data.cashier) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: 'cashier is required'
                }));

              case 4:
                if (data.amount) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: 'amount is required'
                }));

              case 6:
                amount = parseFloat(data.amount, 10) ? parseFloat(data.amount, 10) : false;
                cashier = parseInt(data.cashier, 10) ? parseInt(data.cashier, 10) : false;

                if (!amount) {
                  errors.push('transaction amount, expecting a float value');
                }

                if (!cashier) {
                  errors.push('invalid cashier id');
                }

                if (!(errors.length >= 1)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].badRequest).json({
                  status: _statusCodes["default"].badRequest,
                  errors: errors
                }));

              case 12:
                return _context.abrupt("return", next());

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkTransactionsBody(_x, _x2, _x3) {
        return _checkTransactionsBody.apply(this, arguments);
      }

      return checkTransactionsBody;
    }()
  }]);
  return TransactionsValidations;
}();

var _default = TransactionsValidations;
exports["default"] = _default;
//# sourceMappingURL=transactions.validations.js.map