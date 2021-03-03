import {createSelector} from 'reselect';


export const cartItems = (state)=>state.cart;

 export const cartItemTotalSelector = createSelector([cartItems],
    (cartItem)=>{ return cartItem.items.reduce((previous,current)=>
         {return previous+(current.quantity*current.price)},0)
     })

export const cartItemSelector = createSelector([cartItems],(cart)=>cart.items);