"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _statusCodes = _interopRequireDefault(require("../helpers/statusCodes"));

var _tokenOperations = _interopRequireDefault(require("../helpers/tokenOperations"));

var Authentication = {
  verifyToken: function verifyToken(req, res, next) {
    var authToken = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.Authorization || req.headers.authorization;

    if (authToken) {
      var token = authToken.split(' ')[1];

      if (!token) {
        return res.status(_statusCodes["default"].forbidden).json({
          error: 'No token provided'
        });
      }

      var user = _tokenOperations["default"].verify(token);

      if (!user) {
        return res.status(_statusCodes["default"].unAuthorized).json({
          error: 'Invalid token provided'
        });
      }

      req.user = user;
      return next();
    }

    return res.status(_statusCodes["default"].unAuthorized).json({
      error: 'No token provided'
    });
  }
};
var _default = Authentication;
exports["default"] = _default;
//# sourceMappingURL=authentication.js.map