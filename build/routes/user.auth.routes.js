"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _usersAuth = _interopRequireDefault(require("../controllers/users.auth.controllers"));

var _users = _interopRequireDefault(require("../middlewares/validations/users.validations"));

var _trimInputs = _interopRequireDefault(require("../middlewares/validations/trimInputs"));

var router = _express["default"].Router();

router.post('/signup', _users["default"].checkCreateAccountBody, _trimInputs["default"], _usersAuth["default"].createUser);
router.post('/signin', _users["default"].checkLoginBody, _trimInputs["default"], _usersAuth["default"].loginUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=user.auth.routes.js.map