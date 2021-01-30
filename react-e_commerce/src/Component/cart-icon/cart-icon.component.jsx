
import {ReactComponent as ShoppingImage} from '../../images/shopping-bag.svg';
import {connect } from 'react-redux';
import './cart-icon.style.scss';
import { cartHidden} from '../../redux/cart.action';
export const CartIcon = (props) =>{
    console.log(props)
     function  calcuateItemCount(){
        var sum=0;
        props.cartItems.forEach(item=>sum+=(+item.quantity))
        return sum;
    }
    return (
        <>
            <div className="cart-icon" onClick={()=>props.setCartToggle()}>
                <ShoppingImage className='shopping-icon'></ShoppingImage>
                <span className="item-count"> {calcuateItemCount()} </span>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch =>{
    return {    
        setCartToggle: ()=>dispatch(cartHidden())
    }
}

const mapStateToProps = state =>{
    return {
        cartItems  : state.cart.items
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);