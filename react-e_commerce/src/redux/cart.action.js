import Constants from './constants';
export const cartHidden = ()=>({
    type:Constants.TOGGLE_CART_HIDDEN,
});

export const addItem =(item)=>({
    type:Constants.ADD_ITEM,
    payload:item
})

