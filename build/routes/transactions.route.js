"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _transactions = _interopRequireDefault(require("../controllers/transactions.controllers"));

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

var _trimInputs = _interopRequireDefault(require("../middlewares/validations/trimInputs"));

var _transactions2 = _interopRequireDefault(require("../middlewares/validations/transactions.validations"));

var router = _express["default"].Router();

router.post('/:accountNumber/debit', _authentication["default"].verifyToken, _trimInputs["default"], _transactions2["default"].checkTransactionsBody, _transactions["default"].debitAccount);
router.post('/:accountNumber/credit', _authentication["default"].verifyToken, _trimInputs["default"], _transactions2["default"].checkTransactionsBody, _transactions["default"].creditAccount);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=transactions.route.js.map