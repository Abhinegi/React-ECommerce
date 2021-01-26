"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _userReducer = _interopRequireDefault(require("./user-reducer"));

var _cartReducer = _interopRequireDefault(require("./cart-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  user: _userReducer["default"],
  cart: _cartReducer["default"]
});

exports["default"] = _default;