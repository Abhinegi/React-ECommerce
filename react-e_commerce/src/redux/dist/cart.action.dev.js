"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartHidden = void 0;

var _constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cartHidden = function cartHidden() {
  return {
    type: _constants["default"].TOGGLE_CART_HIDDEN
  };
};

exports.cartHidden = cartHidden;