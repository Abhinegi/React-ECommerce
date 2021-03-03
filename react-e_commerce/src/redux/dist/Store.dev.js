"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.persistor = exports.store = void 0;

var _redux = require("redux");

var _rootReducer = _interopRequireDefault(require("./root-reducer"));

var _reduxLogger = require("redux-logger");

var _reduxPersist = require("redux-persist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var logger = (0, _reduxLogger.createLogger)({});
var store = (0, _redux.createStore)(_rootReducer["default"], (0, _redux.applyMiddleware)(logger));
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;
var _default = {
  store: store,
  persistor: persistor
};
exports["default"] = _default;