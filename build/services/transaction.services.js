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

var _dateFormat = _interopRequireDefault(require("../utils/dateFormat"));

var _accounts = _interopRequireDefault(require("../utils/db/accounts.data"));

var _transactions = _interopRequireDefault(require("../utils/db/transactions.data"));

/**
 *
 * @class TransactionServices
 *
 */
var TransactionServices =
/*#__PURE__*/
function () {
  function TransactionServices() {
    (0, _classCallCheck2["default"])(this, TransactionServices);
  }

  (0, _createClass2["default"])(TransactionServices, null, [{
    key: "makeDebitTransaction",

    /**
     *
      * @static
      * @memberof TransactionServices
      * @returns {Object} debitTransaction
      *
      */
    value: function () {
      var _makeDebitTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id, transaction) {
        var transactionsLength, lastId, account;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transactionsLength = _transactions["default"].length;
                lastId = _transactions["default"][transactionsLength - 1].id;
                transaction.id = parseInt(lastId + 1, 10);
                transaction.type = 'debit';
                transaction.accountNumber = parseInt(id, 10);
                _context.next = 7;
                return (0, _dateFormat["default"])();

              case 7:
                transaction.createdOn = _context.sent;
                account = _accounts["default"].find(function (acc) {
                  return acc.accountNumber === parseInt(id, 10);
                });

                if (account) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", false);

              case 11:
                transaction.oldBalance = parseFloat(account.balance, 10);
                account.balance -= transaction.amount;
                transaction.newBalance = parseFloat(account.balance, 10);

                _transactions["default"].push(transaction);

                return _context.abrupt("return", {
                  transactionId: transaction.id,
                  accountNumber: transaction.accountNumber,
                  amount: parseFloat(transaction.amount, 10),
                  cashier: parseInt(transaction.cashier, 10),
                  transactionType: 'debit',
                  accountBalance: transaction.newBalance
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function makeDebitTransaction(_x, _x2) {
        return _makeDebitTransaction.apply(this, arguments);
      }

      return makeDebitTransaction;
    }()
    /**
     *
      * @static
      * @memberof TransactionServices
      * @returns {Object} creditTransaction
      *
      */

  }, {
    key: "makeCreditTransaction",
    value: function () {
      var _makeCreditTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id, transaction) {
        var transactionsLength, lastId, account;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                transactionsLength = _transactions["default"].length;
                lastId = _transactions["default"][transactionsLength - 1].id;
                transaction.id = parseInt(lastId + 1, 10);
                transaction.type = 'credit';
                transaction.accountNumber = parseInt(id, 10);
                _context2.next = 7;
                return (0, _dateFormat["default"])();

              case 7:
                transaction.createdOn = _context2.sent;
                account = _accounts["default"].find(function (acc) {
                  return acc.accountNumber === parseInt(id, 10);
                });

                if (account) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", false);

              case 11:
                transaction.oldBalance = parseFloat(account.balance, 10);
                account.balance += transaction.amount;
                transaction.newBalance = parseFloat(account.balance, 10);

                _transactions["default"].push(transaction);

                return _context2.abrupt("return", {
                  transactionId: transaction.id,
                  accountNumber: transaction.accountNumber,
                  amount: parseFloat(transaction.amount, 10),
                  cashier: parseInt(transaction.cashier, 10),
                  transactionType: 'credit',
                  accountBalance: transaction.newBalance
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function makeCreditTransaction(_x3, _x4) {
        return _makeCreditTransaction.apply(this, arguments);
      }

      return makeCreditTransaction;
    }()
  }]);
  return TransactionServices;
}();

var _default = TransactionServices;
exports["default"] = _default;
//# sourceMappingURL=transaction.services.js.map