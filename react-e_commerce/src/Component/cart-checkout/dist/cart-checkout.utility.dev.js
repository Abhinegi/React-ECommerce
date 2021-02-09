"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartItemSelector = exports.cartItemTotalSelector = exports.cartItems = void 0;

var _reselect = require("reselect");

var cartItems = function cartItems(state) {
  return state.cart;
};

exports.cartItems = cartItems;
var cartItemTotalSelector = (0, _reselect.createSelector)([cartItems], function (cartItem) {
  console.log(cartItem);
  return cartItem.items.reduce(function (previous, current, value) {
    console.log(previous, current, value);
    return previous + current.quantity * current.price;
  }, 0);
});
exports.cartItemTotalSelector = cartItemTotalSelector;
var cartItemSelector = (0, _reselect.createSelector)([cartItems], function (cart) {
  return cart.items;
});
exports.cartItemSelector = cartItemSelector;