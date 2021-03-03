import { addItemToCart,removeItemFromCart } from './cart-item.util';
import Constants from './constants';

const INITIAL_STATE = {
    hidden:true,
    items:[]
}
const cartReducer =  (state = INITIAL_STATE,action )=>
{
    switch(action.type){
        case Constants.TOGGLE_CART_HIDDEN : return{
            ...state,
            hidden:!state.hidden
        }
        case Constants.ADD_ITEM : return {
            ...state,
            items:addItemToCart(state.items,action.payload)
        }
        case Constants.REMOVE_ITEM : return {
            ...state,
            items:removeItemFromCart(state.items,action.payload)
        }
        default: return state;
    }
}

export default cartReducer;