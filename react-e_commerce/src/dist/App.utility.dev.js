"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSelector = exports.userData = void 0;

var _reselect = require("reselect");

var userData = function userData(state) {
  return state.user;
};

exports.userData = userData;
var userSelector = (0, _reselect.createSelector)([userData], function (user) {
  return user.currentUser;
});
exports.userSelector = userSelector;