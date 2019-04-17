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

var _users = _interopRequireDefault(require("../utils/db/users.data"));

var _tokenOperations = _interopRequireDefault(require("../helpers/tokenOperations"));

var _config = _interopRequireDefault(require("../config/config"));

/* eslint-disable no-param-reassign */

/**
 *
 * @class AuthService
 *
 */
var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    (0, _classCallCheck2["default"])(this, AuthService);
  }

  (0, _createClass2["default"])(AuthService, null, [{
    key: "createUser",

    /**
     *
      * @static
      * @memberof AuthService
      * @returns {Object} response
      *
      */
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(user) {
        var checkEmail, userLength, lastId, authToken, response, err;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                checkEmail = _users["default"].find(function (data) {
                  return data.email === user.email;
                });

                if (!checkEmail) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", false);

              case 4:
                userLength = _users["default"].length;
                lastId = _users["default"][userLength - 1].id;
                user.id = lastId + 1;
                user.isAdmin = false;
                user.type = 'Client';

                _users["default"].push(user);

                _context.next = 12;
                return this.generateSignUpToken(user);

              case 12:
                authToken = _context.sent;
                response = {
                  token: authToken,
                  id: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  password: user.password
                };
                return _context.abrupt("return", response);

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                err = {
                  error: 'An error error while trying create new user'
                };
                throw err;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 17]]);
      }));

      function createUser(_x) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
    /**
     *
      * @static
      * @memberof AuthService
      * @returns {Object} loginUser
      *
      */

  }, {
    key: "login",
    value: function () {
      var _login2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(_login) {
        var loginUser, token, response, err;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                loginUser = _users["default"].find(function (user) {
                  return user.email === _login.email && user.password === _login.password;
                });

                if (!loginUser) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 5;
                return this.generateSignInToken(loginUser);

              case 5:
                token = _context2.sent;
                response = {
                  token: token,
                  id: loginUser.id,
                  firstName: loginUser.firstName,
                  lastName: loginUser.lastName,
                  email: loginUser.email
                };
                return _context2.abrupt("return", response);

              case 8:
                return _context2.abrupt("return", false);

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                err = {
                  error: 'An error while trying login user'
                };
                throw err;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 11]]);
      }));

      function login(_x2) {
        return _login2.apply(this, arguments);
      }

      return login;
    }()
    /**
     *
      * @static
      * @memberof AuthService
      * @returns {Object} authToken
      *
      */

  }, {
    key: "generateSignUpToken",
    value: function () {
      var _generateSignUpToken = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(user) {
        var authUser, token;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                authUser = {
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  password: user.password
                };
                _context3.next = 3;
                return _tokenOperations["default"].token(authUser, _config["default"].secretKey);

              case 3:
                token = _context3.sent;
                return _context3.abrupt("return", token);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function generateSignUpToken(_x3) {
        return _generateSignUpToken.apply(this, arguments);
      }

      return generateSignUpToken;
    }()
    /**
     *
      * @static
      * @memberof AuthService
      * @returns {Object} authToken
      *
      */

  }, {
    key: "generateSignInToken",
    value: function () {
      var _generateSignInToken = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(user) {
        var authUser, authToken;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                authUser = {
                  email: user.email,
                  password: user.password,
                  id: user.id,
                  type: user.type,
                  isAdmin: user.isAdmin
                };
                _context4.next = 3;
                return _tokenOperations["default"].token(authUser, _config["default"].secretKey);

              case 3:
                authToken = _context4.sent;
                return _context4.abrupt("return", authToken);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function generateSignInToken(_x4) {
        return _generateSignInToken.apply(this, arguments);
      }

      return generateSignInToken;
    }()
  }]);
  return AuthService;
}();

var _default = AuthService;
exports["default"] = _default;
//# sourceMappingURL=user.auth.services.js.map