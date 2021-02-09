import {createSelector} from 'reselect';

export const cartDropdownHidden = (state) => state.cart;

export const hiddenDropdownSelector = createSelector(
    [cartDropdownHidden],
    (cart)=> cart.hidden
);