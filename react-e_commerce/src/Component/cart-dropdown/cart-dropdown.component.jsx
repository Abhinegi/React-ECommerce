import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';
import {cartItemSelector} from './cart-dropdown.utility';
import {withRouter} from 'react-router-dom';
import {Constants} from '../../redux/constants';

const CartDropDown = (props) =>(
    <div className='cart-dropdown'>
           <div className="cart-items">
            {
                props.cartItems.length?
                props.cartItems.map(item=><CartItem {...item} key={item.id}/>):
                <h4 className='mx-auto'>Cart is Empty </h4>
            }
            </div>
           <CustomButton  onClick={()=>{props.dispatch({type:Constants.TOGGLE_CART_HIDDEN}); props.history.push("/checkout");}}> CHECKOUT </CustomButton> 
    </div>
)

const mapStateToProps = (state)=>{
    
    return {
        cartItems : cartItemSelector(state)
    }
}
export default  withRouter(connect(mapStateToProps,null)(CartDropDown));