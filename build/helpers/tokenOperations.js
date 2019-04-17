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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config/config"));

var _statusCodes = _interopRequireDefault(require("./statusCodes"));

/* eslint-disable consistent-return */

/**
 *
 * @class TokenOperations
 * @description handles all token operation (sign, verify)
 *
 */
var TokenOperations =
/*#__PURE__*/
function () {
  function TokenOperations() {
    (0, _classCallCheck2["default"])(this, TokenOperations);
  }

  (0, _createClass2["default"])(TokenOperations, null, [{
    key: "token",
    value: function () {
      var _token = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(user, secretKey) {
        var authToken;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _jsonwebtoken["default"].sign(user, secretKey, {
                  expiresIn: '5d'
                });

              case 2:
                authToken = _context.sent;
                return _context.abrupt("return", "Bearer ".concat(authToken));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function token(_x, _x2) {
        return _token.apply(this, arguments);
      }

      return token;
    }()
  }, {
    key: "verify",
    value: function () {
      var _verify = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(token) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                return _context2.abrupt("return", _jsonwebtoken["default"].decode(token, _config["default"].secretKey));

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", null);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 4]]);
      }));

      function verify(_x3) {
        return _verify.apply(this, arguments);
      }

      return verify;
    }()
  }]);
  return TokenOperations;
}();

var _default = TokenOperations;
exports["default"] = _default;
//# sourceMappingURL=tokenOperations.js.map