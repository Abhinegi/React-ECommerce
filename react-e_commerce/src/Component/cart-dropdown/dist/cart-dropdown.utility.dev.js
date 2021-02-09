"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartItemSelector = exports.cartItems = void 0;

var _reselect = require("reselect");

var cartItems = function cartItems(state) {
  return state.cart;
};

exports.cartItems = cartItems;
var cartItemSelector = (0, _reselect.createSelector)([cartItems], function (cart) {
  return cart.items;
});
exports.cartItemSelector = cartItemSelector;