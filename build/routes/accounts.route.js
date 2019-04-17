"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _account = _interopRequireDefault(require("../controllers/account.controllers"));

var _authentication = _interopRequireDefault(require("../middlewares/authentication"));

var _trimInputs = _interopRequireDefault(require("../middlewares/validations/trimInputs"));

var _account2 = _interopRequireDefault(require("../middlewares/validations/account.validations"));

/* eslint-disable import/named */
var router = _express["default"].Router();

router.post('/', _account2["default"].checkCreateBankAccountBody, _trimInputs["default"], _authentication["default"].verifyToken, _account["default"].createAccount);
router.patch('/:accountNumber', _account2["default"].checkPatchAccountBody, _trimInputs["default"], _authentication["default"].verifyToken, _account["default"].patchAccount);
router["delete"]('/:accountNumber', _authentication["default"].verifyToken, _account["default"].deleteAccount);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=accounts.route.js.map