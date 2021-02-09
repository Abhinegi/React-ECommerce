import {createSelector} from 'reselect';


export const cartItems = (state)=>state.cart;

 export const cartItemTotalSelector = createSelector([cartItems],
    (cartItem)=>{ console.log(cartItem); return cartItem.items.reduce((previous,current,value)=>
         { console.log(previous, current, value); return previous+(current.quantity*current.price)},0)
     } )

export const cartItemSelector = createSelector([cartItems],(cart)=>cart.items);