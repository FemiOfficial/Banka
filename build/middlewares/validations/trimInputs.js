"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/* eslint-disable guard-for-in */

/* eslint-disable no-restricted-syntax */
var trimInput = function trimInput(req, res, next) {
  for (var index in req.body) {
    req.body[index] = typeof req.body[index] === 'string' ? req.body[index].trim() : req.body[index];
  }

  return next();
};

var _default = trimInput;
exports["default"] = _default;
//# sourceMappingURL=trimInputs.js.map