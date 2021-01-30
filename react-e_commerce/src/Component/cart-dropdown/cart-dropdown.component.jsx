import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import './cart-dropdown.style.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropDown = (props) =>(
    <div className='cart-dropdown'>
           <div className="cart-items">
            {
                props.cartItems.map(item=><CartItem {...item} key={item.id}/>)
            }
            </div>
           <CustomButton > CHECKOUT </CustomButton> 
    </div>
)

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        cartItems : state.cart.items
    }
}
export default  connect(mapStateToProps,null)(CartDropDown);