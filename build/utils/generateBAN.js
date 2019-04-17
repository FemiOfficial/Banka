"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _accounts = _interopRequireDefault(require("./db/accounts.data"));

/* eslint-disable no-plusplus */
var generateBAN = function generateBAN(length) {
  var text = '';
  var numbers = '0123456789';

  for (var i = 0; i < length; i++) {
    text += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  var banExists = _accounts["default"].find(function (account) {
    return account.accountNumber === parseInt(text, 10);
  });

  if (banExists) {
    generateBAN(length);
  }

  return text;
};

var _default = generateBAN;
exports["default"] = _default;
//# sourceMappingURL=generateBAN.js.map