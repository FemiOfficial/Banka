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

var _userAuth = _interopRequireDefault(require("../services/user.auth.services"));

var _statusCodes = _interopRequireDefault(require("../helpers/statusCodes"));

/**
 *
 * @class UserControllers
 *
 */
var UserControllers =
/*#__PURE__*/
function () {
  function UserControllers() {
    (0, _classCallCheck2["default"])(this, UserControllers);
  }

  (0, _createClass2["default"])(UserControllers, null, [{
    key: "createUser",

    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof UserControllers
      * @returns {Object} CreatedUser
      */
    value: function () {
      var _createUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _userAuth["default"].createUser(req.body);

              case 3:
                data = _context.sent;

                if (data) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", res.status(_statusCodes["default"].conflict).json({
                  status: _statusCodes["default"].conflict,
                  errors: 'email already registered'
                }));

              case 6:
                return _context.abrupt("return", res.status(_statusCodes["default"].created).json({
                  status: _statusCodes["default"].created,
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

      function createUser(_x, _x2) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
    /**
     *
      * @static
      * @param {*} req
      * @param {*} res
      * @memberof UserControllers
      * @returns {Object} loginUser
      */

  }, {
    key: "loginUser",
    value: function () {
      var _loginUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _userAuth["default"].login(req.body);

              case 3:
                data = _context2.sent;

                if (data) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", res.status(_statusCodes["default"].unAuthorized).json({
                  status: _statusCodes["default"].unAuthorized,
                  error: 'Invalid email or password'
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
                  error: 'Internal Server Error'
                }));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      function loginUser(_x3, _x4) {
        return _loginUser.apply(this, arguments);
      }

      return loginUser;
    }()
  }]);
  return UserControllers;
}();

var _default = UserControllers;
exports["default"] = _default;
//# sourceMappingURL=users.auth.controllers.js.map