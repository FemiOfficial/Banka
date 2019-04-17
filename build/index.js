"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index.route"));

var _userAuth = _interopRequireDefault(require("./routes/user.auth.routes"));

var _accounts = _interopRequireDefault(require("./routes/accounts.route"));

var _transactions = _interopRequireDefault(require("./routes/transactions.route"));

/* eslint-disable no-console */
require('dotenv').config();

var app = (0, _express["default"])(); // Body parser middleware

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json()); // Routes

app.use('/api/v1', _index["default"]);
app.use('/api/v1/auth', _userAuth["default"]);
app.use('/api/v1/accounts', _accounts["default"]);
app.use('/api/v1/transactions', _transactions["default"]);
var PORT = process.env.PORT;
app.listen(PORT, function () {
  return console.log("App is running from PORT ".concat(PORT));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map