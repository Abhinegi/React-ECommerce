"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.rootReducer = void 0;

var _redux = require("redux");

var _userReducer = _interopRequireDefault(require("./user-reducer"));

var _cartReducer = _interopRequireDefault(require("./cart-reducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  whitelist: ['cart']
};
var rootReducer = (0, _redux.combineReducers)({
  user: _userReducer["default"],
  cart: _cartReducer["default"]
});
exports.rootReducer = rootReducer;

var _default = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer);

exports["default"] = _default;