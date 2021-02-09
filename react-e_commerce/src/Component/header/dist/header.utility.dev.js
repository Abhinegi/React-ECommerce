"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiddenDropdownSelector = exports.cartDropdownHidden = void 0;

var _reselect = require("reselect");

var cartDropdownHidden = function cartDropdownHidden(state) {
  return state.cart;
};

exports.cartDropdownHidden = cartDropdownHidden;
var hiddenDropdownSelector = (0, _reselect.createSelector)([cartDropdownHidden], function (cart) {
  return cart.hidden;
});
exports.hiddenDropdownSelector = hiddenDropdownSelector;