
import {createSelector} from 'reselect';

export const cartItems = state=> state.cart

export const cartItemSelector = createSelector([cartItems],(cart)=>cart.items)